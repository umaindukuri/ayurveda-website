import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { startLogin } from "@/const";
import { format } from "date-fns";
import { CalendarCheck, Loader2, Phone, Mail, RefreshCw, CheckCircle, XCircle, Clock, CalendarX } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type StatusFilter = "all" | "pending" | "confirmed" | "cancelled" | "completed";

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const TREATMENT_LABELS: Record<string, string> = {
  consultation: "General Consultation",
  panchakarma: "Panchakarma",
  fertility: "Fertility",
  chronic_disease: "Chronic Disease",
  digestive: "Digestive Health",
  respiratory: "Respiratory",
  skin: "Skin Conditions",
  mental_health: "Mental Health",
  rejuvenation: "Rejuvenation",
  other: "Other",
};

export default function AdminAppointments() {
  const { user, loading } = useAuth();
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const utils = trpc.useUtils();

  const { data, isLoading, refetch } = trpc.admin.listAppointments.useQuery(
    { status: statusFilter, limit: 100 },
    { enabled: !!user && user.role === "admin" }
  );

  const updateStatus = trpc.admin.updateAppointmentStatus.useMutation({
    onSuccess: () => {
      utils.admin.listAppointments.invalidate();
      toast.success("Appointment status updated");
    },
    onError: () => toast.error("Failed to update status"),
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
        <CalendarCheck className="w-16 h-16 text-muted-foreground" />
        <h1 className="text-2xl font-bold text-foreground">Admin Access Required</h1>
        <p className="text-muted-foreground">Please sign in with your admin account to manage appointments.</p>
        <Button onClick={() => startLogin()}>Sign In</Button>
      </div>
    );
  }

  if (user.role !== "admin") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
        <CalendarCheck className="w-16 h-16 text-muted-foreground" />
        <h1 className="text-2xl font-bold text-foreground">Access Denied</h1>
        <p className="text-muted-foreground">This page is only accessible to clinic administrators.</p>
      </div>
    );
  }

  const appointments = data ?? [];
  const pendingCount = appointments.filter(a => a.status === "pending").length;

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Appointments | Dr. Kalyan Ayurveda Admin" url="/admin/appointments" />

      <div className="container max-w-5xl py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <CalendarCheck className="w-6 h-6 text-primary" />
              Appointment Requests
            </h1>
            {pendingCount > 0 && (
              <p className="text-sm text-muted-foreground mt-1">
                <span className="font-semibold text-yellow-600">{pendingCount} pending</span> appointment{pendingCount !== 1 ? "s" : ""} awaiting confirmation
              </p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Select value={statusFilter} onValueChange={v => setStatusFilter(v as StatusFilter)}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" onClick={() => refetch()} title="Refresh">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {(["pending", "confirmed", "completed", "cancelled"] as const).map(s => {
            const count = (data ?? []).filter(a => a.status === s).length;
            const icons = { pending: Clock, confirmed: CheckCircle, completed: CalendarCheck, cancelled: CalendarX };
            const Icon = icons[s];
            return (
              <Card key={s} className="border-border">
                <CardContent className="p-4 flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${s === "pending" ? "text-yellow-500" : s === "confirmed" ? "text-blue-500" : s === "completed" ? "text-green-500" : "text-red-400"}`} />
                  <div>
                    <p className="text-xl font-bold text-foreground">{count}</p>
                    <p className="text-xs text-muted-foreground capitalize">{s}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Appointment List */}
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : appointments.length === 0 ? (
          <Card className="border-border">
            <CardContent className="py-16 text-center">
              <CalendarCheck className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
              <p className="text-muted-foreground">No appointments found</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {appointments.map(appt => {
              const isPending = appt.status === "pending";
              return (
                <Card
                  key={appt.id}
                  className={`border-border transition-shadow hover:shadow-md ${isPending ? "border-l-4 border-l-yellow-400" : ""}`}
                >
                  <CardContent className="p-5">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      {/* Patient Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-semibold text-foreground">{appt.name}</h3>
                          <Badge className={`text-xs ${STATUS_COLORS[appt.status] ?? "bg-gray-100 text-gray-800"}`}>
                            {appt.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {TREATMENT_LABELS[appt.treatmentType] ?? appt.treatmentType}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3.5 h-3.5" />
                            <a href={`mailto:${appt.email}`} className="hover:text-primary transition-colors">{appt.email}</a>
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-3.5 h-3.5" />
                            <a href={`tel:${appt.phone}`} className="hover:text-primary transition-colors">{appt.phone}</a>
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                          <span className="font-medium text-foreground">
                            📅 {appt.appointmentDate ? format(new Date(appt.appointmentDate), "EEE, dd MMM yyyy") : "—"}
                          </span>
                          <span className="font-medium text-foreground">🕐 {appt.timeSlot}</span>
                        </div>

                        {appt.notes && (
                          <p className="text-sm text-muted-foreground mt-2 italic">"{appt.notes}"</p>
                        )}

                        <p className="text-xs text-muted-foreground mt-2">
                          Requested {appt.createdAt ? format(new Date(appt.createdAt), "dd MMM yyyy, h:mm a") : "—"}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2 flex-shrink-0 min-w-[160px]">
                        {appt.status === "pending" && (
                          <>
                            <Button
                              size="sm"
                              className="gap-1.5 bg-blue-600 hover:bg-blue-700 text-white"
                              onClick={() => updateStatus.mutate({ id: appt.id, status: "confirmed" })}
                              disabled={updateStatus.isPending}
                            >
                              <CheckCircle className="w-3.5 h-3.5" />
                              Confirm
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="gap-1.5 text-red-600 border-red-200 hover:bg-red-50"
                              onClick={() => updateStatus.mutate({ id: appt.id, status: "cancelled" })}
                              disabled={updateStatus.isPending}
                            >
                              <XCircle className="w-3.5 h-3.5" />
                              Cancel
                            </Button>
                          </>
                        )}
                        {appt.status === "confirmed" && (
                          <Button
                            size="sm"
                            className="gap-1.5 bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => updateStatus.mutate({ id: appt.id, status: "completed" })}
                            disabled={updateStatus.isPending}
                          >
                            <CalendarCheck className="w-3.5 h-3.5" />
                            Mark Done
                          </Button>
                        )}
                        <a
                          href={`https://wa.me/${appt.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Hello ${appt.name}, your appointment at Dr. Kalyan Ayurveda on ${appt.appointmentDate ? format(new Date(appt.appointmentDate), "dd MMM yyyy") : ""} at ${appt.timeSlot} has been ${appt.status === "confirmed" ? "confirmed" : "received"}. Please let us know if you need to reschedule.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="w-full gap-1.5 text-green-600 border-green-200 hover:bg-green-50">
                            <Phone className="w-3.5 h-3.5" />
                            WhatsApp
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
