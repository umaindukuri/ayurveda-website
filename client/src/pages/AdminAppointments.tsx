import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { format } from "date-fns";
import { toast } from "sonner";
import { Link } from "wouter";
import { ArrowLeft, Calendar, CalendarX, CheckCircle, Phone, Trash2, XCircle } from "lucide-react";

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
  completed: "bg-blue-100 text-blue-800",
};

const TREATMENT_LABELS: Record<string, string> = {
  consultation: "General Consultation",
  panchakarma: "Panchakarma",
  fertility: "Fertility Treatment",
  chronic_disease: "Chronic Disease",
  digestive: "Digestive Health",
  respiratory: "Respiratory",
  skin: "Skin Conditions",
  mental_health: "Mental Health",
  rejuvenation: "Rejuvenation",
  other: "Other",
};

export default function AdminAppointments() {
  const { user } = useAuth();
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "confirmed" | "cancelled" | "completed">("all");
  const [blockDate, setBlockDate] = useState("");
  const [blockReason, setBlockReason] = useState("");
  const [activeTab, setActiveTab] = useState<"appointments" | "blocked">("appointments");

  const utils = trpc.useUtils();

  const { data: appointments, isLoading } = trpc.admin.listAppointments.useQuery(
    { status: statusFilter, limit: 100 },
    { enabled: user?.role === "admin" }
  );

  const { data: blockedDates, isLoading: loadingBlocked } = trpc.admin.listBlockedDates.useQuery(
    undefined,
    { enabled: user?.role === "admin" }
  );

  const updateStatus = trpc.admin.updateAppointmentStatus.useMutation({
    onSuccess: () => {
      utils.admin.listAppointments.invalidate();
      toast.success("Status updated");
    },
    onError: (e) => toast.error(e.message),
  });

  const addBlocked = trpc.admin.addBlockedDate.useMutation({
    onSuccess: () => {
      utils.admin.listBlockedDates.invalidate();
      setBlockDate("");
      setBlockReason("");
      toast.success("Date blocked successfully");
    },
    onError: (e) => toast.error(e.message.includes("Duplicate") ? "That date is already blocked" : e.message),
  });

  const removeBlocked = trpc.admin.removeBlockedDate.useMutation({
    onSuccess: () => {
      utils.admin.listBlockedDates.invalidate();
      toast.success("Date unblocked");
    },
    onError: (e) => toast.error(e.message),
  });

  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Access denied. Admin only.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-border px-6 py-4 flex items-center gap-4">
        <Link href="/">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to site
          </button>
        </Link>
        <h1 className="text-xl font-bold text-foreground">Appointment Management</h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-border">
          <button
            onClick={() => setActiveTab("appointments")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === "appointments" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Appointments
          </button>
          <button
            onClick={() => setActiveTab("blocked")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === "blocked" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            <CalendarX className="w-4 h-4 inline mr-2" />
            Block-off Dates
            {(blockedDates?.length ?? 0) > 0 && (
              <span className="ml-2 bg-red-100 text-red-700 text-xs font-bold px-1.5 py-0.5 rounded-full">
                {blockedDates!.length}
              </span>
            )}
          </button>
        </div>

        {activeTab === "appointments" && (
          <>
            {/* Status filter */}
            <div className="flex gap-2 flex-wrap mb-6">
              {(["all", "pending", "confirmed", "cancelled", "completed"] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors capitalize ${statusFilter === s ? "bg-primary text-white" : "bg-white border border-border text-muted-foreground hover:bg-gray-50"}`}
                >
                  {s}
                </button>
              ))}
            </div>

            {isLoading ? (
              <div className="text-center py-12 text-muted-foreground">Loading appointments…</div>
            ) : !appointments?.length ? (
              <div className="text-center py-12 text-muted-foreground">No appointments found.</div>
            ) : (
              <div className="space-y-3">
                {appointments.map(appt => {
                  const dateStr = appt.appointmentDate instanceof Date
                    ? format(appt.appointmentDate, "EEE, MMM d yyyy")
                    : String(appt.appointmentDate);
                  return (
                    <div
                      key={appt.id}
                      className={`bg-white rounded-lg border p-4 ${appt.status === "pending" ? "border-l-4 border-l-yellow-400" : "border-border"}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="font-semibold text-foreground">{appt.name}</span>
                            <Badge className={`text-xs ${STATUS_COLORS[appt.status]}`}>{appt.status}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{appt.email} · {appt.phone}</p>
                          <p className="text-sm text-foreground mt-1">
                            <Calendar className="w-3.5 h-3.5 inline mr-1 text-primary" />
                            {dateStr} at {appt.timeSlot} — {TREATMENT_LABELS[appt.treatmentType] ?? appt.treatmentType}
                          </p>
                          {appt.notes && <p className="text-xs text-muted-foreground mt-1 italic">"{appt.notes}"</p>}
                        </div>

                        <div className="flex flex-wrap gap-2 shrink-0">
                          <a
                            href={`https://wa.me/${appt.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Hello ${appt.name}, your appointment on ${dateStr} at ${appt.timeSlot} has been confirmed at Dr. Kalyan Ayurveda. Please arrive 10 minutes early. Call +91 92813 32544 for any queries.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button size="sm" variant="outline" className="text-green-600 border-green-300 hover:bg-green-50 text-xs">
                              <Phone className="w-3.5 h-3.5 mr-1" /> WhatsApp
                            </Button>
                          </a>
                          {appt.status === "pending" && (
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700 text-white text-xs"
                              onClick={() => updateStatus.mutate({ id: appt.id, status: "confirmed" })}
                              disabled={updateStatus.isPending}
                            >
                              <CheckCircle className="w-3.5 h-3.5 mr-1" /> Confirm
                            </Button>
                          )}
                          {appt.status === "confirmed" && (
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700 text-white text-xs"
                              onClick={() => updateStatus.mutate({ id: appt.id, status: "completed" })}
                              disabled={updateStatus.isPending}
                            >
                              <CheckCircle className="w-3.5 h-3.5 mr-1" /> Mark Done
                            </Button>
                          )}
                          {(appt.status === "pending" || appt.status === "confirmed") && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 border-red-300 hover:bg-red-50 text-xs"
                              onClick={() => updateStatus.mutate({ id: appt.id, status: "cancelled" })}
                              disabled={updateStatus.isPending}
                            >
                              <XCircle className="w-3.5 h-3.5 mr-1" /> Cancel
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {activeTab === "blocked" && (
          <div className="space-y-6">
            {/* Add new blocked date */}
            <div className="bg-white rounded-lg border border-border p-5">
              <h2 className="font-semibold text-foreground mb-4">Block a Date</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Label htmlFor="blockDate" className="text-sm mb-1 block">Date</Label>
                  <Input
                    id="blockDate"
                    type="date"
                    value={blockDate}
                    onChange={e => setBlockDate(e.target.value)}
                    min={new Date().toISOString().slice(0, 10)}
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="blockReason" className="text-sm mb-1 block">Reason (optional)</Label>
                  <Input
                    id="blockReason"
                    placeholder="e.g. Public holiday, Dr. on leave"
                    value={blockReason}
                    onChange={e => setBlockReason(e.target.value)}
                  />
                </div>
                <div className="flex items-end">
                  <Button
                    onClick={() => {
                      if (!blockDate) return toast.error("Please select a date");
                      addBlocked.mutate({ date: blockDate, reason: blockReason || undefined });
                    }}
                    disabled={addBlocked.isPending}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Block Date
                  </Button>
                </div>
              </div>
            </div>

            {/* List of blocked dates */}
            {loadingBlocked ? (
              <div className="text-center py-8 text-muted-foreground">Loading…</div>
            ) : !blockedDates?.length ? (
              <div className="text-center py-8 text-muted-foreground">No dates are currently blocked.</div>
            ) : (
              <div className="space-y-2">
                {blockedDates.map(bd => {
                  const dateStr = bd.blockedDate instanceof Date
                    ? format(bd.blockedDate, "EEE, MMM d yyyy")
                    : String(bd.blockedDate);
                  return (
                    <div key={bd.id} className="bg-white rounded-lg border border-border p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground flex items-center gap-2">
                          <CalendarX className="w-4 h-4 text-red-500" />
                          {dateStr}
                        </p>
                        {bd.reason && <p className="text-sm text-muted-foreground mt-0.5">{bd.reason}</p>}
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 border-red-300 hover:bg-red-50"
                        onClick={() => removeBlocked.mutate({ id: bd.id })}
                        disabled={removeBlocked.isPending}
                      >
                        <Trash2 className="w-3.5 h-3.5 mr-1" /> Unblock
                      </Button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
