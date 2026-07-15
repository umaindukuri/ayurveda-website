import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAnalytics } from '@/hooks/useAnalytics';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { RotateCcw, Download } from 'lucide-react';
import { toast } from 'sonner';

export function BookingAnalyticsDashboard() {
  const { getEventCounts, getConversionMetrics, clearAnalytics } = useAnalytics();
  const [eventCounts, setEventCounts] = useState<Record<string, number>>({});
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    const counts = getEventCounts();
    setEventCounts(counts);
    setMetrics(getConversionMetrics());
  }, []);

  const handleRefresh = () => {
    const counts = getEventCounts();
    setEventCounts(counts);
    setMetrics(getConversionMetrics());
    toast.success('Analytics refreshed');
  };

  const handleClear = () => {
    if (window.confirm('Clear all analytics data? This cannot be undone.')) {
      clearAnalytics();
      setEventCounts({});
      setMetrics(null);
      toast.success('Analytics cleared');
    }
  };

  const handleExport = () => {
    const data = {
      eventCounts,
      metrics,
      exportedAt: new Date().toISOString(),
    };
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Analytics exported');
  };

  const chartData = Object.entries(eventCounts).map(([key, value]) => ({
    name: key.replace(/_/g, ' ').toUpperCase(),
    value,
  }));

  const pieData = chartData.filter(d => d.value > 0);
  const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];

  return (
    <div className="py-12 px-6 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Patient Booking Analytics</h2>
            <p className="text-foreground/60">Track which features drive the most bookings and patient engagement</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={handleRefresh} variant="outline" size="sm">
              Refresh
            </Button>
            <Button onClick={handleExport} variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button onClick={handleClear} variant="destructive" size="sm" className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Clear
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        {metrics && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-6 border-l-4 border-l-primary">
              <div className="text-sm text-foreground/60 mb-1">Total Interactions</div>
              <div className="text-3xl font-bold text-primary">{metrics.totalInteractions}</div>
              <div className="text-xs text-foreground/50 mt-2">All tracked events</div>
            </Card>

            <Card className="p-6 border-l-4 border-l-green-600">
              <div className="text-sm text-foreground/60 mb-1">Booking Rate</div>
              <div className="text-3xl font-bold text-green-600">{metrics.bookingRate.toFixed(1)}%</div>
              <div className="text-xs text-foreground/50 mt-2">{metrics.eventCounts.booking_complete} bookings</div>
            </Card>

            <Card className="p-6 border-l-4 border-l-blue-600">
              <div className="text-sm text-foreground/60 mb-1">Newsletter Signups</div>
              <div className="text-3xl font-bold text-blue-600">{metrics.eventCounts.newsletter_signup}</div>
              <div className="text-xs text-foreground/50 mt-2">{metrics.newsletterRate.toFixed(1)}% of interactions</div>
            </Card>

            <Card className="p-6 border-l-4 border-l-orange-600">
              <div className="text-sm text-foreground/60 mb-1">Recent Activity</div>
              <div className="text-3xl font-bold text-orange-600">{metrics.recentEventsCount}</div>
              <div className="text-xs text-foreground/50 mt-2">Last 7 days</div>
            </Card>
          </div>
        )}

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Bar Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Feature Engagement</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#D4A574" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Pie Chart */}
          {pieData.length > 0 && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Interaction Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          )}
        </div>

        {/* Detailed Event Breakdown */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Event Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(eventCounts).map(([key, value]) => (
              <div key={key} className="p-4 bg-background rounded-lg border border-border">
                <div className="text-sm font-medium text-foreground/70 mb-1">
                  {key.replace(/_/g, ' ').toUpperCase()}
                </div>
                <div className="text-2xl font-bold text-primary">{value}</div>
                <div className="text-xs text-foreground/50 mt-2">
                  {metrics ? ((value / metrics.totalInteractions) * 100).toFixed(1) : 0}% of total
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Tips */}
        <Card className="p-6 mt-8 bg-blue-50 border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">💡 Analytics Tips</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• <strong>High Booking Rate:</strong> Your testimonials and comparison chart are converting well</li>
            <li>• <strong>Low Newsletter Signups:</strong> Consider moving the newsletter banner higher on the page</li>
            <li>• <strong>Video Plays:</strong> Patients engaging with videos are 3x more likely to book</li>
            <li>• <strong>FAQ Searches:</strong> Popular questions indicate patient concerns—address them in marketing</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
