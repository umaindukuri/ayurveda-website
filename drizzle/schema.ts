import { boolean, int, mysqlEnum, mysqlTable, text, timestamp, varchar, bigint, date } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const mediaFiles = mysqlTable("media_files", {
  id: int("id").autoincrement().primaryKey(),
  filename: varchar("filename", { length: 255 }).notNull(),
  originalName: varchar("originalName", { length: 255 }).notNull(),
  mimeType: varchar("mimeType", { length: 100 }).notNull(),
  fileSize: bigint("fileSize", { mode: "number" }).notNull(),
  storageKey: varchar("storageKey", { length: 500 }).notNull(),
  storageUrl: varchar("storageUrl", { length: 500 }).notNull(),
  category: mysqlEnum("category", ["image", "video", "document", "other"]).default("other").notNull(),
  folder: varchar("folder", { length: 100 }).default("general").notNull(),
  altText: text("altText"),
  uploadedBy: int("uploadedBy"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
export type MediaFile = typeof mediaFiles.$inferSelect;
export type InsertMediaFile = typeof mediaFiles.$inferInsert;

export const contactInquiries = mysqlTable("contact_inquiries", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 30 }),
  subject: varchar("subject", { length: 255 }),
  message: text("message").notNull(),
  inquiryType: mysqlEnum("inquiryType", ["general", "booking", "treatment", "other"]).default("general").notNull(),
  status: mysqlEnum("status", ["new", "contacted", "resolved"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type InsertContactInquiry = typeof contactInquiries.$inferInsert;

export const appointments = mysqlTable("appointments", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 30 }).notNull(),
  treatmentType: mysqlEnum("treatmentType", [
    "consultation",
    "panchakarma",
    "fertility",
    "chronic_disease",
    "digestive",
    "respiratory",
    "skin",
    "mental_health",
    "rejuvenation",
    "other",
  ]).default("consultation").notNull(),
  appointmentDate: date("appointmentDate").notNull(),
  timeSlot: varchar("timeSlot", { length: 20 }).notNull(),
  notes: text("notes"),
  status: mysqlEnum("status", ["pending", "confirmed", "cancelled", "completed"]).default("pending").notNull(),
  userId: int("userId"),
  referralCode: varchar("referralCode", { length: 20 }),
  discountApplied: boolean("discountApplied").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export type Appointment = typeof appointments.$inferSelect;
export type InsertAppointment = typeof appointments.$inferInsert;

export const blockedDates = mysqlTable("blocked_dates", {
  id: int("id").autoincrement().primaryKey(),
  blockedDate: date("blockedDate").notNull().unique(),
  reason: varchar("reason", { length: 255 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export type BlockedDate = typeof blockedDates.$inferSelect;
export type InsertBlockedDate = typeof blockedDates.$inferInsert;

// Each user gets one referral code; tracks how many successful referrals they have
export const referrals = mysqlTable("referrals", {
  id: int("id").autoincrement().primaryKey(),
  referrerId: int("referrerId").notNull(),
  referralCode: varchar("referralCode", { length: 20 }).notNull().unique(),
  referredAppointmentId: int("referredAppointmentId"),
  rewardClaimed: boolean("rewardClaimed").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export type Referral = typeof referrals.$inferSelect;
export type InsertReferral = typeof referrals.$inferInsert;
