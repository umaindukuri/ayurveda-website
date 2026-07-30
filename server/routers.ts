import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import { notifyOwner } from "./_core/notification";
import { getDb } from "./db";
import { contactInquiries, appointments, blockedDates, referrals } from "../drizzle/schema";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().max(320),
  phone: z.string().max(30).optional(),
  subject: z.string().max(255).optional(),
  message: z.string().min(1).max(5000),
  inquiryType: z.enum(["general", "booking", "treatment", "other"]).default("general"),
});

// Generate a short unique referral code
function generateReferralCode(name: string): string {
  const prefix = name.replace(/[^a-zA-Z]/g, "").toUpperCase().slice(0, 6) || "KALYAN";
  const suffix = Math.random().toString(36).toUpperCase().slice(2, 6);
  return `${prefix}-${suffix}`;
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  admin: router({
    listInquiries: protectedProcedure
      .input(z.object({
        status: z.enum(["new", "contacted", "resolved", "all"]).default("all"),
        limit: z.number().min(1).max(100).default(50),
        offset: z.number().min(0).default(0),
      }))
      .query(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "DB unavailable" });
        const { desc, eq: drizzleEq } = await import("drizzle-orm");
        const conditions = input.status !== "all"
          ? [drizzleEq(contactInquiries.status, input.status as "new" | "contacted" | "resolved")]
          : [];
        const rows = await db
          .select()
          .from(contactInquiries)
          .where(conditions.length ? conditions[0] : undefined)
          .orderBy(desc(contactInquiries.createdAt))
          .limit(input.limit)
          .offset(input.offset);
        return { rows, total: rows.length };
      }),

    listAppointments: protectedProcedure
      .input(z.object({
        status: z.enum(["pending", "confirmed", "cancelled", "completed", "all"]).default("all"),
        limit: z.number().min(1).max(100).default(50),
      }))
      .query(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "DB unavailable" });
        const { desc, eq: drizzleEq } = await import("drizzle-orm");
        const rows = await db
          .select()
          .from(appointments)
          .where(input.status !== "all" ? drizzleEq(appointments.status, input.status as any) : undefined)
          .orderBy(desc(appointments.createdAt))
          .limit(input.limit);
        return rows;
      }),

    updateAppointmentStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["pending", "confirmed", "cancelled", "completed"]),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "DB unavailable" });
        const { eq: drizzleEq } = await import("drizzle-orm");
        await db.update(appointments).set({ status: input.status }).where(drizzleEq(appointments.id, input.id));
        return { success: true };
      }),

    addBlockedDate: protectedProcedure
      .input(z.object({
        date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        reason: z.string().max(255).optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "DB unavailable" });
        await db.insert(blockedDates).values({
          blockedDate: new Date(input.date + "T00:00:00") as any,
          reason: input.reason ?? null,
        });
        return { success: true };
      }),

    removeBlockedDate: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "DB unavailable" });
        const { eq: drizzleEq } = await import("drizzle-orm");
        await db.delete(blockedDates).where(drizzleEq(blockedDates.id, input.id));
        return { success: true };
      }),

    listBlockedDates: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
      const db = await getDb();
      if (!db) return [];
      const { asc } = await import("drizzle-orm");
      return db.select().from(blockedDates).orderBy(asc(blockedDates.blockedDate));
    }),

    newInquiryCount: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") return { count: 0 };
      const db = await getDb();
      if (!db) return { count: 0 };
      const { eq: drizzleEq, count } = await import("drizzle-orm");
      const [result] = await db
        .select({ count: count() })
        .from(contactInquiries)
        .where(drizzleEq(contactInquiries.status, "new"));
      return { count: Number(result?.count ?? 0) };
    }),

    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["new", "contacted", "resolved"]),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "DB unavailable" });
        const { eq: drizzleEq } = await import("drizzle-orm");
        await db
          .update(contactInquiries)
          .set({ status: input.status })
          .where(drizzleEq(contactInquiries.id, input.id));
        return { success: true };
      }),
  }),

  appointments: router({
    book: publicProcedure
      .input(z.object({
        name: z.string().min(1).max(255),
        email: z.string().email().max(320),
        phone: z.string().min(6).max(30),
        treatmentType: z.enum(["consultation","panchakarma","fertility","chronic_disease","digestive","respiratory","skin","mental_health","rejuvenation","other"]).default("consultation"),
        appointmentDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        timeSlot: z.string().min(1).max(20),
        notes: z.string().max(1000).optional(),
        referralCode: z.string().max(20).optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "DB unavailable" });
        const { eq: drizzleEq } = await import("drizzle-orm");

        // Validate referral code if provided
        let discountApplied = false;
        let referralRow: typeof referrals.$inferSelect | undefined;
        if (input.referralCode) {
          const [found] = await db.select().from(referrals).where(drizzleEq(referrals.referralCode, input.referralCode)).limit(1);
          if (found && !found.referredAppointmentId) {
            referralRow = found;
            discountApplied = true;
          }
        }

        const result = await db.insert(appointments).values({
          name: input.name,
          email: input.email,
          phone: input.phone,
          treatmentType: input.treatmentType,
          appointmentDate: new Date(input.appointmentDate + "T00:00:00") as any,
          timeSlot: input.timeSlot,
          notes: input.notes ?? null,
          status: "pending",
          userId: ctx.user?.id ?? null,
          referralCode: input.referralCode ?? null,
          discountApplied,
        });
        const id = Number((result as any)[0]?.insertId);

        // Mark referral as used
        if (referralRow && id) {
          await db.update(referrals).set({ referredAppointmentId: id }).where(drizzleEq(referrals.id, referralRow.id));
        }

        const treatmentLabels: Record<string, string> = {
          consultation: "General Consultation",
          panchakarma: "Panchakarma",
          fertility: "Fertility Treatment",
          chronic_disease: "Chronic Disease Management",
          digestive: "Digestive Health",
          respiratory: "Respiratory Wellness",
          skin: "Skin Conditions",
          mental_health: "Mental Health & Stress",
          rejuvenation: "Rejuvenation & Anti-Aging",
          other: "Other",
        };
        await notifyOwner({
          title: `New Appointment Request: ${input.name}`,
          content: [
            `Patient: ${input.name}`,
            `Email: ${input.email}`,
            `Phone: ${input.phone}`,
            `Treatment: ${treatmentLabels[input.treatmentType] ?? input.treatmentType}`,
            `Date: ${input.appointmentDate}`,
            `Time: ${input.timeSlot}`,
            discountApplied ? `Referral Code: ${input.referralCode} (10% discount applied)` : null,
            input.notes ? `Notes: ${input.notes}` : null,
          ].filter(Boolean).join("\n"),
        }).catch(() => {});
        return { success: true, id, discountApplied };
      }),

    getBlockedDates: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return { dates: [] };
      const { gte } = await import("drizzle-orm");
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const rows = await db
        .select()
        .from(blockedDates)
        .where(gte(blockedDates.blockedDate, today as any));
      return { dates: rows.map(r => ({ id: r.id, date: r.blockedDate instanceof Date ? r.blockedDate.toISOString().slice(0, 10) : String(r.blockedDate), reason: r.reason })) };
    }),

    myAppointments: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) return [];
      const { desc, or, eq: drizzleEq } = await import("drizzle-orm");
      return db
        .select()
        .from(appointments)
        .where(
          ctx.user.id
            ? or(drizzleEq(appointments.userId, ctx.user.id), drizzleEq(appointments.email, ctx.user.email ?? ""))
            : drizzleEq(appointments.email, ctx.user.email ?? "")
        )
        .orderBy(desc(appointments.appointmentDate));
    }),

    getBookedSlots: publicProcedure
      .input(z.object({ date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/) }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return { slots: [] };
        const { and, ne, sql } = await import("drizzle-orm");
        const rows = await db
          .select({ timeSlot: appointments.timeSlot })
          .from(appointments)
          .where(and(
            sql`DATE(${appointments.appointmentDate}) = ${input.date}`,
            ne(appointments.status, "cancelled"),
          ));
        return { slots: rows.map(r => r.timeSlot) };
      }),
  }),

  referrals: router({
    // Get or create the current user's referral code
    getMyCode: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "DB unavailable" });
      const { eq: drizzleEq } = await import("drizzle-orm");
      const [existing] = await db.select().from(referrals).where(drizzleEq(referrals.referrerId, ctx.user.id)).limit(1);
      if (existing) return { code: existing.referralCode, referrals: await db.select().from(referrals).where(drizzleEq(referrals.referrerId, ctx.user.id)) };
      // Create a new referral code for this user
      const code = generateReferralCode(ctx.user.name ?? ctx.user.email ?? "PATIENT");
      await db.insert(referrals).values({ referrerId: ctx.user.id, referralCode: code });
      return { code, referrals: [] };
    }),

    // Validate a referral code (public — used on booking form)
    validate: publicProcedure
      .input(z.object({ code: z.string().max(20) }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return { valid: false };
        const { eq: drizzleEq } = await import("drizzle-orm");
        const [found] = await db.select().from(referrals).where(drizzleEq(referrals.referralCode, input.code)).limit(1);
        // Valid if exists and not yet used
        return { valid: !!found && !found.referredAppointmentId };
      }),

    // Get referral stats for the current user
    myStats: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) return { code: null, totalReferrals: 0, pendingRewards: 0 };
      const { eq: drizzleEq, count } = await import("drizzle-orm");
      const myReferrals = await db.select().from(referrals).where(drizzleEq(referrals.referrerId, ctx.user.id));
      const code = myReferrals[0]?.referralCode ?? null;
      const totalReferrals = myReferrals.filter(r => !!r.referredAppointmentId).length;
      const pendingRewards = myReferrals.filter(r => !!r.referredAppointmentId && !r.rewardClaimed).length;
      return { code, totalReferrals, pendingRewards };
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(contactSchema)
      .mutation(async ({ input }) => {
        const db = await getDb();
        let savedId: number | undefined;

        if (db) {
          const result = await db.insert(contactInquiries).values({
            name: input.name,
            email: input.email,
            phone: input.phone ?? null,
            subject: input.subject ?? null,
            message: input.message,
            inquiryType: input.inquiryType,
            status: "new",
          });
          savedId = Number((result as any)[0]?.insertId);
        }

        const notifContent = [
          `Name: ${input.name}`,
          `Email: ${input.email}`,
          input.phone ? `Phone: ${input.phone}` : null,
          input.subject ? `Subject: ${input.subject}` : null,
          `Type: ${input.inquiryType}`,
          `Message: ${input.message.slice(0, 400)}${input.message.length > 400 ? "..." : ""}`,
        ]
          .filter(Boolean)
          .join("\n");

        await notifyOwner({
          title: `New ${input.inquiryType === "booking" ? "Booking Request" : "Contact Inquiry"} from ${input.name}`,
          content: notifContent,
        }).catch(() => {});

        return { success: true, id: savedId };
      }),
  }),
});

export type AppRouter = typeof appRouter;
