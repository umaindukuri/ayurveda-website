import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import { notifyOwner } from "./_core/notification";
import { getDb } from "./db";
import { contactInquiries, appointments, blockedDates } from "../drizzle/schema";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().max(320),
  phone: z.string().max(30).optional(),
  subject: z.string().max(255).optional(),
  message: z.string().min(1).max(5000),
  inquiryType: z.enum(["general", "booking", "treatment", "other"]).default("general"),
});

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
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
        const [countResult] = await db
          .select({ count: contactInquiries.id })
          .from(contactInquiries)
          .where(conditions.length ? conditions[0] : undefined);
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
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "DB unavailable" });
        const result = await db.insert(appointments).values({
          name: input.name,
          email: input.email,
          phone: input.phone,
          treatmentType: input.treatmentType,
          appointmentDate: new Date(input.appointmentDate + "T00:00:00") as any,
          timeSlot: input.timeSlot,
          notes: input.notes ?? null,
          status: "pending",
        });
        const id = Number((result as any)[0]?.insertId);
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
            input.notes ? `Notes: ${input.notes}` : null,
          ].filter(Boolean).join("\n"),
        }).catch(() => {});
        return { success: true, id };
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
