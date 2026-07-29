import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import { notifyOwner } from "./_core/notification";
import { getDb } from "./db";
import { contactInquiries } from "../drizzle/schema";
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
