import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { addDays, format, isBefore, isWeekend, startOfDay } from "date-fns";
import { Calendar, CheckCircle, ChevronLeft, ChevronRight, Clock, Loader2, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";

const MORNING_SLOTS = ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"];
const EVENING_SLOTS = ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"];
const ALL_SLOTS = [...MORNING_SLOTS, ...EVENING_SLOTS];

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

function buildCalendarDays(viewYear: number, viewMonth: number) {
  const firstDay = new Date(viewYear, viewMonth, 1);
  const lastDay = new Date(viewYear, viewMonth + 1, 0);
  const startOffset = firstDay.getDay(); // 0=Sun
  const days: (Date | null)[] = Array(startOffset).fill(null);
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push(new Date(viewYear, viewMonth, d));
  }
  return days;
}

export default function BookAppointment() {
  const today = startOfDay(new Date());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [step, setStep] = useState<"calendar" | "form" | "success">("calendar");
  const [form, setForm] = useState({ name: "", email: "", phone: "", treatmentType: "consultation", notes: "" });

  const dateStr = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
  const { data: bookedData } = trpc.appointments.getBookedSlots.useQuery(
    { date: dateStr },
    { enabled: !!selectedDate }
  );
  const bookedSlots = bookedData?.slots ?? [];

  const { data: blockedData } = trpc.appointments.getBlockedDates.useQuery();
  const blockedDateSet = useMemo(() => {
    const s = new Set<string>();
    blockedData?.dates.forEach(d => s.add(d.date));
    return s;
  }, [blockedData]);

  const calDays = useMemo(() => buildCalendarDays(viewYear, viewMonth), [viewYear, viewMonth]);

  const bookMutation = trpc.appointments.book.useMutation({
    onSuccess: () => setStep("success"),
    onError: (e) => toast.error(e.message || "Booking failed. Please try again."),
  });

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const isDisabled = (d: Date) => {
    const ds = format(d, "yyyy-MM-dd");
    return isBefore(d, today) || isWeekend(d) || blockedDateSet.has(ds);
  };

  const handleDateClick = (d: Date) => {
    if (isDisabled(d)) return;
    setSelectedDate(d);
    setSelectedSlot(null);
  };

  const handleSlotClick = (slot: string) => {
    if (bookedSlots.includes(slot)) return;
    setSelectedSlot(slot);
  };

  const handleProceed = () => {
    if (!selectedDate || !selectedSlot) return;
    setStep("form");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) return;
    bookMutation.mutate({
      ...form,
      treatmentType: form.treatmentType as any,
      appointmentDate: format(selectedDate, "yyyy-MM-dd"),
      timeSlot: selectedSlot,
      notes: form.notes || undefined,
    });
  };

  const whatsappMsg = selectedDate && selectedSlot
    ? encodeURIComponent(`Hello Dr. Kalyan Ayurveda, I would like to book an appointment on ${format(selectedDate, "dd MMM yyyy")} at ${selectedSlot}.`)
    : encodeURIComponent("Hello Dr. Kalyan Ayurveda, I would like to book an appointment.");

  if (step === "success") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <SEO title="Appointment Confirmed | Dr. Kalyan Ayurveda" url="/book-appointment" />
        <Card className="max-w-md w-full text-center border-border">
          <CardContent className="pt-10 pb-8 px-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">Appointment Requested!</h1>
            <p className="text-muted-foreground mb-2">
              Your appointment request for{" "}
              <strong>{selectedDate ? format(selectedDate, "dd MMM yyyy") : ""}</strong> at{" "}
              <strong>{selectedSlot}</strong> has been received.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Dr. Kalyan's team will confirm your appointment shortly. You can also reach us directly on WhatsApp.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/919281332544?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                Confirm via WhatsApp
              </a>
              <Link href="/">
                <Button variant="outline" className="w-full">Back to Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Book an Appointment | Dr. Kalyan Ayurveda" url="/book-appointment" />

      <div className="container max-w-4xl py-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Book Your Appointment</h1>
          <p className="text-muted-foreground">
            Clinic hours: Mon–Sat, 8:00 AM–1:00 PM &amp; 5:00 PM–9:00 PM
          </p>
        </div>

        {step === "calendar" && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Calendar */}
            <Card className="border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold">
                    {format(new Date(viewYear, viewMonth, 1), "MMMM yyyy")}
                  </CardTitle>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="w-7 h-7" onClick={prevMonth}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-7 h-7" onClick={nextMonth}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 text-center text-xs text-muted-foreground mb-2">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
                    <div key={d} className="py-1 font-medium">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {calDays.map((day, i) => {
                    if (!day) return <div key={i} />;
                    const disabled = isDisabled(day);
                    const isSelected = selectedDate && format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
                    return (
                      <button
                        key={i}
                        onClick={() => handleDateClick(day)}
                        disabled={disabled}
                        className={`text-xs py-2 rounded-md transition-colors font-medium
                          ${disabled ? "text-muted-foreground/40 cursor-not-allowed" : "hover:bg-primary/10 cursor-pointer"}
                          ${isSelected ? "bg-primary text-white hover:bg-primary" : ""}
                        `}
                      >
                        {day.getDate()}
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">Weekends unavailable</p>
              </CardContent>
            </Card>

            {/* Time Slots */}
            <Card className="border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {selectedDate ? `Slots for ${format(selectedDate, "EEE, dd MMM")}` : "Select a date first"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!selectedDate ? (
                  <div className="flex flex-col items-center justify-center py-10 text-muted-foreground gap-2">
                    <Calendar className="w-10 h-10 text-muted-foreground/40" />
                    <p className="text-sm">Pick a date on the calendar</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Morning</p>
                      <div className="grid grid-cols-3 gap-1.5">
                        {MORNING_SLOTS.map(slot => {
                          const booked = bookedSlots.includes(slot);
                          return (
                            <button
                              key={slot}
                              onClick={() => handleSlotClick(slot)}
                              disabled={booked}
                              className={`text-xs py-2 px-1 rounded border transition-colors font-medium
                                ${booked ? "border-border text-muted-foreground/40 cursor-not-allowed bg-muted/30" : "border-border hover:border-primary hover:text-primary cursor-pointer"}
                                ${selectedSlot === slot ? "bg-primary text-white border-primary hover:text-white" : ""}
                              `}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Evening</p>
                      <div className="grid grid-cols-3 gap-1.5">
                        {EVENING_SLOTS.map(slot => {
                          const booked = bookedSlots.includes(slot);
                          return (
                            <button
                              key={slot}
                              onClick={() => handleSlotClick(slot)}
                              disabled={booked}
                              className={`text-xs py-2 px-1 rounded border transition-colors font-medium
                                ${booked ? "border-border text-muted-foreground/40 cursor-not-allowed bg-muted/30" : "border-border hover:border-primary hover:text-primary cursor-pointer"}
                                ${selectedSlot === slot ? "bg-primary text-white border-primary hover:text-white" : ""}
                              `}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {step === "calendar" && (
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-between items-center">
            <div className="text-sm text-muted-foreground">
              {selectedDate && selectedSlot
                ? `Selected: ${format(selectedDate, "EEE, dd MMM yyyy")} at ${selectedSlot}`
                : "Please select a date and time slot"}
            </div>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/919281332544?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2 text-green-600 border-green-300 hover:bg-green-50">
                  <Phone className="w-4 h-4" />
                  Book via WhatsApp
                </Button>
              </a>
              <Button
                onClick={handleProceed}
                disabled={!selectedDate || !selectedSlot}
                className="gap-2"
              >
                <Calendar className="w-4 h-4" />
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === "form" && (
          <Card className="max-w-lg mx-auto border-border">
            <CardHeader>
              <CardTitle className="text-lg">Your Details</CardTitle>
              <p className="text-sm text-muted-foreground">
                {selectedDate ? format(selectedDate, "EEE, dd MMM yyyy") : ""} at {selectedSlot}
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="treatment">Treatment Type</Label>
                    <Select value={form.treatmentType} onValueChange={v => setForm(f => ({ ...f, treatmentType: v }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {TREATMENT_OPTIONS.map(o => (
                          <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="notes">Notes / Symptoms (optional)</Label>
                    <Textarea
                      id="notes"
                      value={form.notes}
                      onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                      placeholder="Briefly describe your health concern..."
                      rows={3}
                    />
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button type="button" variant="outline" onClick={() => setStep("calendar")} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" disabled={bookMutation.isPending} className="flex-1 gap-2">
                    {bookMutation.isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                    Confirm Appointment
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
