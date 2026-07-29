import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { startLogin } from "@/const";
import { format } from "date-fns";
import { Inbox, Loader2, Phone, Mail, MessageSquare, RefreshCw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type StatusFilter = "all" | "new" | "contacted" | "resolved";

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  resolved: "bg-green-100 text-green-800",
};

const TYPE_LABELS: Record<string, string> = {
  general: "General",
  booking: "Booking",
  treatment: "Treatment",
  other: "Other",
};

export default function AdminInquiries() {
  const { user, loading } = useAuth();
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const utils = trpc.useUtils();

  const { data, isLoading, refetch } = trpc.admin.listInquiries.useQuery(
    { status: statusFilter, limit: 50, offset: 0 },
    { enabled: !!user && user.role === "admin" }
  );

  const updateStatus = trpc.admin.updateStatus.useMutation({
    onSuccess: () => {
      utils.admin.listInquiries.invalidate();
      toast.success("Status updated");
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
        <Inbox className="w-16 h-16 text-muted-foreground" />
        <h1 className="text-2xl font-bold text-foreground">Admin Access Required</h1>
        <p className="text-muted-foreground">Please sign in with your admin account to view inquiries.</p>
        <Button onClick={() => startLogin()}>Sign In</Button>
      </div>
    );
  }

  if (user.role !== "admin") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
        <Inbox className="w-16 h-16 text-muted-foreground" />
        <h1 className="text-2xl font-bold text-foreground">Access Denied</h1>
        <p className="text-muted-foreground">This page is only accessible to clinic administrators.</p>
      </div>
    );
  }

  const inquiries = data?.rows ?? [];
  const newCount = inquiries.filter(i => i.status === "new").length;

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Admin — Patient Inquiries" url="/admin/inquiries" />

      {/* Header */}
      <div className="border-b border-border bg-white sticky top-0 z-10">
        <div className="container max-w-6xl py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Inbox className="w-6 h-6 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Patient Inquiries</h1>
              <p className="text-sm text-muted-foreground">
                {newCount > 0 ? `${newCount} new` : "All caught up"} · {inquiries.length} total
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as StatusFilter)}>
              <SelectTrigger className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" onClick={() => refetch()} title="Refresh">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-6xl py-8">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : inquiries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <Inbox className="w-16 h-16 text-muted-foreground/40" />
            <p className="text-lg font-medium text-muted-foreground">No inquiries found</p>
            <p className="text-sm text-muted-foreground">
              {statusFilter !== "all" ? `No ${statusFilter} inquiries at the moment.` : "No patient inquiries yet."}
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {inquiries.map((inquiry) => (
              <Card key={inquiry.id} className={`border-border transition-shadow hover:shadow-md ${inquiry.status === "new" ? "border-l-4 border-l-blue-500" : ""}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
                        {inquiry.name}
                        {inquiry.status === "new" && (
                          <span className="inline-block w-2 h-2 rounded-full bg-blue-500" title="New" />
                        )}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5" />
                          <a href={`mailto:${inquiry.email}`} className="hover:text-primary transition-colors">
                            {inquiry.email}
                          </a>
                        </span>
                        {inquiry.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="w-3.5 h-3.5" />
                            <a href={`tel:${inquiry.phone}`} className="hover:text-primary transition-colors">
                              {inquiry.phone}
                            </a>
                          </span>
                        )}
                        <span className="text-xs text-muted-foreground/70">
                          {format(new Date(inquiry.createdAt), "dd MMM yyyy, h:mm a")}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Badge variant="outline" className="text-xs">
                        {TYPE_LABELS[inquiry.inquiryType] ?? inquiry.inquiryType}
                      </Badge>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${STATUS_COLORS[inquiry.status]}`}>
                        {inquiry.status.charAt(0).toUpperCase() + inquiry.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {inquiry.subject && (
                    <p className="text-sm font-medium text-foreground mb-1">{inquiry.subject}</p>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {inquiry.message}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-border">
                    <a href={`mailto:${inquiry.email}?subject=Re: ${encodeURIComponent(inquiry.subject ?? "Your Inquiry")}`}>
                      <Button size="sm" variant="outline" className="gap-1.5">
                        <Mail className="w-3.5 h-3.5" />
                        Reply by Email
                      </Button>
                    </a>
                    {inquiry.phone && (
                      <a href={`https://wa.me/${inquiry.phone.replace(/\D/g, "")}?text=Hello%20${encodeURIComponent(inquiry.name)}%2C%20this%20is%20Dr.%20Kalyan%20Ayurveda.`} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5" />
                          WhatsApp
                        </Button>
                      </a>
                    )}
                    <div className="ml-auto flex gap-2">
                      {inquiry.status !== "contacted" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateStatus.mutate({ id: inquiry.id, status: "contacted" })}
                          disabled={updateStatus.isPending}
                          className="text-yellow-700 border-yellow-300 hover:bg-yellow-50"
                        >
                          Mark Contacted
                        </Button>
                      )}
                      {inquiry.status !== "resolved" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateStatus.mutate({ id: inquiry.id, status: "resolved" })}
                          disabled={updateStatus.isPending}
                          className="text-green-700 border-green-300 hover:bg-green-50"
                        >
                          Mark Resolved
                        </Button>
                      )}
                      {inquiry.status !== "new" && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => updateStatus.mutate({ id: inquiry.id, status: "new" })}
                          disabled={updateStatus.isPending}
                          className="text-muted-foreground"
                        >
                          Reopen
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
