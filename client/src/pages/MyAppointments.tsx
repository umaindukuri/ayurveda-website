import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { format, isFuture, isPast } from "date-fns";
import { Calendar, Clock, Loader2, Phone, Plus } from "lucide-react";
import { Link } from "wouter";

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
  completed: "bg-blue-100 text-blue-800",
};

const TREATMENT_LABELS: Record<string, string> = {
  consultation: "General Consultation",
  panchakarma: "Panchakarma Detoxification",
  fertility: "Fertility & Reproductive Health",
  chronic_disease: "Chronic Disease Management",
  digestive: "Digestive & Metabolic Health",
  respiratory: "Respiratory Wellness",
  skin: "Skin Conditions",
  mental_health: "Mental Health & Stress",
  rejuvenation: "Rejuvenation & Anti-Aging",
  other: "Other",
};

export default function MyAppointments() {
  const { user, loading, isAuthenticated } = useAuth();
  const { data: appointments, isLoading } = trpc.appointments.myAppointments.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );

  const upcoming = appointments?.filter(a => {
    const d = a.appointmentDate instanceof Date ? a.appointmentDate : new Date(a.appointmentDate as any);
    return (isFuture(d) || format(d, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd")) && a.status !== "cancelled";
  }) ?? [];

  const past = appointments?.filter(a => {
    const d = a.appointmentDate instanceof Date ? a.appointmentDate : new Date(a.appointmentDate as any);
    return isPast(d) && format(d, "yyyy-MM-dd") !== format(new Date(), "yyyy-MM-dd") || a.status === "cancelled";
  }) ?? [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <SEO title="My Appointments — Dr. Kalyan Ayurveda" description="View and manage your Ayurvedic treatment appointments." />
        <div className="text-center max-w-sm px-6">
          <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">My Appointments</h1>
          <p className="text-muted-foreground mb-6">Sign in to view your appointment history and upcoming visits.</p>
          <Button className="bg-primary hover:bg-primary/90 text-white" onClick={() => startLogin()}>
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO title="My Appointments — Dr. Kalyan Ayurveda" description="View and manage your Ayurvedic treatment appointments." />

      <div className="bg-white border-b border-border px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">My Appointments</h1>
            <p className="text-sm text-muted-foreground">Welcome back, {user?.name ?? user?.email}</p>
          </div>
          <Link href="/book-appointment">
            <Button className="bg-primary hover:bg-primary/90 text-white" size="sm">
              <Plus className="w-4 h-4 mr-1" /> Book New
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8 space-y-8">
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : appointments?.length === 0 ? (
          <div className="text-center py-16">
            <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground mb-4">You have no appointments yet.</p>
            <Link href="/book-appointment">
              <Button className="bg-primary hover:bg-primary/90 text-white">Book Your First Appointment</Button>
            </Link>
          </div>
        ) : (
          <>
            {upcoming.length > 0 && (
              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">Upcoming</h2>
                <div className="space-y-3">
                  {upcoming.map(appt => <AppointmentCard key={appt.id} appt={appt} />)}
                </div>
              </div>
            )}

            {past.length > 0 && (
              <div>
                <h2 className="text-base font-semibold text-muted-foreground mb-3">Past &amp; Cancelled</h2>
                <div className="space-y-3 opacity-75">
                  {past.map(appt => <AppointmentCard key={appt.id} appt={appt} />)}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function AppointmentCard({ appt }: { appt: any }) {
  const d = appt.appointmentDate instanceof Date ? appt.appointmentDate : new Date(appt.appointmentDate);
  const dateStr = format(d, "EEE, MMM d yyyy");
  const waMsg = encodeURIComponent(`Hello, I have an appointment on ${dateStr} at ${appt.timeSlot}. I wanted to confirm my visit.`);

  return (
    <div className={`bg-white rounded-xl border p-4 ${appt.status === "pending" ? "border-l-4 border-l-yellow-400" : appt.status === "confirmed" ? "border-l-4 border-l-green-400" : "border-border"}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-semibold text-foreground">{TREATMENT_LABELS[appt.treatmentType] ?? appt.treatmentType}</span>
            <Badge className={`text-xs ${STATUS_COLORS[appt.status]}`}>{appt.status}</Badge>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
            <Calendar className="w-3.5 h-3.5" /> {dateStr}
            <span className="mx-1">·</span>
            <Clock className="w-3.5 h-3.5" /> {appt.timeSlot}
          </p>
          {appt.notes && <p className="text-xs text-muted-foreground mt-1.5 italic">"{appt.notes}"</p>}
          {appt.status === "pending" && (
            <p className="text-xs text-yellow-700 mt-1.5 font-medium">⏳ Awaiting confirmation from the clinic</p>
          )}
          {appt.status === "confirmed" && (
            <p className="text-xs text-green-700 mt-1.5 font-medium">✓ Confirmed — please arrive 10 minutes early</p>
          )}
        </div>
        {(appt.status === "pending" || appt.status === "confirmed") && (
          <a
            href={`https://wa.me/919281332544?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" variant="outline" className="text-green-600 border-green-300 hover:bg-green-50 text-xs shrink-0">
              <Phone className="w-3.5 h-3.5 mr-1" /> WhatsApp
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}
