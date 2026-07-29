import type { Request, Response } from "express";
import { sdk } from "./_core/sdk";
import { getDb } from "./db";
import { appointments } from "../drizzle/schema";
import { notifyOwner } from "./_core/notification";

// Runs daily (via Heartbeat cron). Finds all confirmed appointments scheduled
// for tomorrow and notifies the owner with a summary so they can send reminders.
export async function appointmentReminderHandler(req: Request, res: Response) {
  try {
    const user = await sdk.authenticateRequest(req);
    if (!user.isCron) return res.status(403).json({ error: "cron-only" });

    const db = await getDb();
    if (!db) return res.json({ ok: true, skipped: "no-db" });

    const { and, eq, sql } = await import("drizzle-orm");

    // Tomorrow in UTC
    const tomorrow = new Date();
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    const tomorrowStr = tomorrow.toISOString().slice(0, 10); // "YYYY-MM-DD"

    const upcoming = await db
      .select()
      .from(appointments)
      .where(
        and(
          sql`DATE(${appointments.appointmentDate}) = ${tomorrowStr}`,
          eq(appointments.status, "confirmed")
        )
      );

    if (!upcoming.length) return res.json({ ok: true, count: 0 });

    const lines = upcoming.map(a =>
      `• ${a.name} — ${a.timeSlot} (${a.treatmentType}) — ${a.phone}`
    );

    await notifyOwner({
      title: `Reminder: ${upcoming.length} appointment${upcoming.length > 1 ? "s" : ""} tomorrow (${tomorrowStr})`,
      content: lines.join("\n"),
    }).catch(() => {});

    res.json({ ok: true, count: upcoming.length });
  } catch (err: any) {
    res.status(500).json({ error: err?.message, timestamp: new Date().toISOString() });
  }
}
