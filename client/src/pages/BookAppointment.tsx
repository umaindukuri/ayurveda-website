import { CompactHeader } from "@/components/CompactHeader";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Calendar, Clock, Phone, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { format, addDays, startOfToday, isSunday } from "date-fns";
import { Link } from "wouter";

const TREATMENT_OPTIONS = [
  { value: "consultation", label: "General Consultation" },
  { value: "panchakarma", label: "Panchakarma Detoxification" },
  { value: "fertility", label: "Fertility & Reproductive Health" },
  { value: "chronic_disease", label: "Chronic Disease Management" },
  { value: "digestive", label: "Digestive & Metabolic Health" },
  { value: "respiratory", label: "Respiratory Wellness" },
  { value: "skin", label: "Skin Conditions" },
  { value: "mental_health", label: "Mental Health & Stress" },
  { value: "rejuvenation", label: "Rejuvenation & Anti-Aging" },
  { value: "other", label: "Other" },
];

const MORNING_SLOTS = ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"];
const EVENING_SLOTS = ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"];

function buildCalendar(baseDate: Date): Date[] {
  const days: Date[] = [];
  for (let i = 0; i < 30; i++) {
    const d = addDays(baseDate, i);
    if (!isSunday(d)) days.push(d);
  }
  return days;
}

export default function BookAppointment() {
  const today = startOfToday();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [calendarWeekStart, setCalendarWeekStart] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "", treatment: "consultation", notes: "" });

  const availableDays = buildCalendar(today);
  const weekDays = availableDays.slice(calendarWeekStart, calendarWeekStart + 7);

  const handleWhatsApp = () => {
    const treatmentLabel = TREATMENT_OPTIONS.find(t => t.value === form.treatment)?.label ?? form.treatment;
    const dateStr = selectedDate ? format(selectedDate, "EEEE, MMMM d yyyy") : "";
    const msg = [
      `Hello Dr. Kalyan, I'd like to book an appointment.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Treatment: ${treatmentLabel}`,
      `Preferred Date: ${dateStr}`,
      `Preferred Time: ${selectedSlot}`,
      form.notes ? `Notes: ${form.notes}` : null,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/919281332544?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <SEO
        title="Book an Appointment — Dr. Kalyan Ayurveda"
        description="Book your Ayurvedic consultation or Panchakarma treatment with Dr. Kalyan. Available Mon–Sat, morning and evening slots."
      />

      {/* Header */}
      <div className="bg-white border-b border-border px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <Link href="/">
            <button className="text-muted-foreground hover:text-foreground">
              <ChevronLeft className="w-5 h-5" />
            </button>
          </Link>
          <div>
            <h1 className="text-lg font-bold text-foreground">Book an Appointment</h1>
            <p className="text-xs text-muted-foreground">Dr. Kalyan Ayurveda · Mon–Sat · 8 AM–1 PM & 5–9 PM</p>
          </div>
        </div>
      </div>

      {/* Steps indicator */}
      <div className="bg-white border-b border-border px-6 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-2 text-sm">
          {[["1", "Choose Date & Time"], ["2", "Your Details"], ["3", "Confirm"]].map(([n, label], i) => (
            <div key={n} className="flex items-center gap-2">
              {i > 0 && <div className="w-8 h-px bg-border" />}
              <div className={`flex items-center gap-1.5 ${step >= Number(n) ? "text-primary font-medium" : "text-muted-foreground"}`}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${step >= Number(n) ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>{n}</div>
                <span className="hidden sm:inline">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">

        {/* Step 1: Date & Time */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" /> Select a Date
              </h2>
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => setCalendarWeekStart(Math.max(0, calendarWeekStart - 7))}
                  disabled={calendarWeekStart === 0}
                  className="p-1 rounded hover:bg-muted disabled:opacity-30"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm text-muted-foreground">
                  {format(weekDays[0], "MMM d")} – {format(weekDays[weekDays.length - 1], "MMM d, yyyy")}
                </span>
                <button
                  onClick={() => setCalendarWeekStart(Math.min(availableDays.length - 7, calendarWeekStart + 7))}
                  disabled={calendarWeekStart + 7 >= availableDays.length}
                  className="p-1 rounded hover:bg-muted disabled:opacity-30"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1.5">
                {weekDays.map(d => {
                  const isSelected = selectedDate && format(d, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
                  return (
                    <button
                      key={d.toISOString()}
                      onClick={() => { setSelectedDate(d); setSelectedSlot(null); }}
                      className={`rounded-lg py-2.5 text-center text-sm transition-colors ${isSelected ? "bg-primary text-white font-semibold" : "bg-white border border-border hover:border-primary hover:text-primary"}`}
                    >
                      <div className="text-xs opacity-70">{format(d, "EEE")}</div>
                      <div className="font-medium">{format(d, "d")}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {selectedDate && (
              <div>
                <h2 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" /> Select a Time
                </h2>
                <div className="mb-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Morning (8 AM – 1 PM)</p>
                  <div className="flex flex-wrap gap-2">
                    {MORNING_SLOTS.map(slot => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${selectedSlot === slot ? "bg-primary text-white border-primary font-medium" : "bg-white border-border hover:border-primary hover:text-primary"}`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Evening (5 PM – 9 PM)</p>
                  <div className="flex flex-wrap gap-2">
                    {EVENING_SLOTS.map(slot => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${selectedSlot === slot ? "bg-primary text-white border-primary font-medium" : "bg-white border-border hover:border-primary hover:text-primary"}`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white"
              disabled={!selectedDate || !selectedSlot}
              onClick={() => setStep(2)}
            >
              Continue
            </Button>
          </div>
        )}

        {/* Step 2: Patient Details */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-border p-4 text-sm text-muted-foreground mb-2">
              <span className="font-medium text-foreground">{selectedDate ? format(selectedDate, "EEEE, MMMM d yyyy") : ""}</span>
              <span className="mx-2">·</span>
              <span>{selectedSlot}</span>
              <button onClick={() => setStep(1)} className="ml-3 text-primary text-xs underline">Change</button>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Your full name"
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Phone Number *</label>
              <input
                type="tel"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                placeholder="+91 98765 43210"
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email (optional)</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="your@email.com"
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Treatment Type</label>
              <select
                value={form.treatment}
                onChange={e => setForm(f => ({ ...f, treatment: e.target.value }))}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
              >
                {TREATMENT_OPTIONS.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Additional Notes (optional)</label>
              <textarea
                value={form.notes}
                onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                placeholder="Briefly describe your health concern or any specific requirements..."
                rows={3}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">Back</Button>
              <Button
                className="flex-1 bg-primary hover:bg-primary/90 text-white"
                disabled={!form.name.trim() || !form.phone.trim()}
                onClick={() => setStep(3)}
              >
                Review Booking
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Confirm via WhatsApp */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-border p-5 space-y-3">
              <h2 className="font-semibold text-foreground">Booking Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Date</span><span className="font-medium">{selectedDate ? format(selectedDate, "EEEE, MMMM d yyyy") : ""}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Time</span><span className="font-medium">{selectedSlot}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Name</span><span className="font-medium">{form.name}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Phone</span><span className="font-medium">{form.phone}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Treatment</span><span className="font-medium">{TREATMENT_OPTIONS.find(t => t.value === form.treatment)?.label}</span></div>
                {form.notes && <div className="flex justify-between"><span className="text-muted-foreground">Notes</span><span className="font-medium text-right max-w-[60%]">{form.notes}</span></div>}
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800">
              <p className="font-medium mb-1">How it works</p>
              <p>Clicking "Confirm via WhatsApp" will open WhatsApp with your booking details pre-filled. Send the message to Dr. Kalyan and you'll receive a confirmation within a few hours.</p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">Back</Button>
              <Button
                className="flex-1 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                onClick={handleWhatsApp}
              >
                <Phone className="w-4 h-4" />
                Confirm via WhatsApp
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              Prefer to call?{" "}
              <a href="tel:+919281332544" className="text-primary underline">+91 92813 32544</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
