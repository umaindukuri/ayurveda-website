import { useState } from "react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info } from "lucide-react";

interface TooltipData {
  condition: string;
  successRate: number;
  avgDuration: number;
  patientCount: number;
  improvementRate: number;
}

const conditionData: TooltipData[] = [
  { condition: "Arthritis", successRate: 94, avgDuration: 21, patientCount: 156, improvementRate: 92 },
  { condition: "Diabetes", successRate: 88, avgDuration: 28, patientCount: 142, improvementRate: 85 },
  { condition: "PCOS", successRate: 91, avgDuration: 21, patientCount: 98, improvementRate: 89 },
  { condition: "Eczema", successRate: 89, avgDuration: 14, patientCount: 87, improvementRate: 87 },
  { condition: "Mental Health", successRate: 92, avgDuration: 14, patientCount: 124, improvementRate: 90 },
  { condition: "Digestive", successRate: 90, avgDuration: 7, patientCount: 165, improvementRate: 88 },
];

const durationData = [
  { duration: "7-Day", patients: 165, successRate: 85 },
  { duration: "14-Day", patients: 211, successRate: 89 },
  { duration: "21-Day", patients: 254, successRate: 92 },
  { duration: "28-Day", patients: 142, successRate: 94 },
];

const ageGroupData = [
  { ageGroup: "20-30", successRate: 88, patients: 145 },
  { ageGroup: "30-40", successRate: 90, patients: 267 },
  { ageGroup: "40-50", successRate: 91, patients: 198 },
  { ageGroup: "50-60", successRate: 89, patients: 112 },
  { ageGroup: "60+", successRate: 87, patients: 50 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
        <p className="font-semibold text-sm">{data.condition || data.duration || data.ageGroup}</p>
        {data.successRate && (
          <p className="text-xs text-green-600">Success Rate: {data.successRate}%</p>
        )}
        {data.avgDuration && (
          <p className="text-xs text-blue-600">Avg Duration: {data.avgDuration} days</p>
        )}
        {data.patientCount && (
          <p className="text-xs text-purple-600">Patients: {data.patientCount}</p>
        )}
        {data.improvementRate && (
          <p className="text-xs text-orange-600">Improvement: {data.improvementRate}%</p>
        )}
        {data.patients && (
          <p className="text-xs text-purple-600">Patients: {data.patients}</p>
        )}
      </div>
    );
  }
  return null;
};

export function EnhancedDashboardWithTooltips() {
  const [hoveredCondition, setHoveredCondition] = useState<string | null>(null);

  const metrics = [
    { label: "Total Patients", value: "772", icon: "👥", color: "bg-blue-50" },
    { label: "Avg Success Rate", value: "90.2%", icon: "✓", color: "bg-green-50" },
    { label: "Conditions Treated", value: "6", icon: "🏥", color: "bg-purple-50" },
    { label: "Avg Duration", value: "17 days", icon: "📅", color: "bg-orange-50" },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <Card key={idx} className={`border-border ${metric.color}`}>
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <div className="text-3xl">{metric.icon}</div>
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <Tabs defaultValue="conditions" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="conditions">By Condition</TabsTrigger>
          <TabsTrigger value="duration">By Duration</TabsTrigger>
          <TabsTrigger value="age">By Age Group</TabsTrigger>
        </TabsList>

        {/* By Condition */}
        <TabsContent value="conditions" className="space-y-4">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CardTitle className="text-sm">Success Rates by Condition</CardTitle>
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Hover over bars to see detailed metrics</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={conditionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="condition" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="successRate" fill="#f97316" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Condition Details Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {conditionData.map((data) => (
              <Card
                key={data.condition}
                className="border-border cursor-pointer hover:shadow-md transition-all"
                onMouseEnter={() => setHoveredCondition(data.condition)}
                onMouseLeave={() => setHoveredCondition(null)}
              >
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm">{data.condition}</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Success Rate</p>
                        <p className="text-lg font-bold text-green-600">{data.successRate}%</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Avg Duration</p>
                        <p className="text-lg font-bold text-blue-600">{data.avgDuration} days</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Patients</p>
                        <p className="text-lg font-bold text-purple-600">{data.patientCount}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Improvement</p>
                        <p className="text-lg font-bold text-orange-600">{data.improvementRate}%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* By Duration */}
        <TabsContent value="duration" className="space-y-4">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CardTitle className="text-sm">Success Rates by Program Duration</CardTitle>
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Hover over bars to see patient count and success metrics</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={durationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="duration" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="successRate" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Duration Details */}
          <div className="grid md:grid-cols-2 gap-4">
            {durationData.map((data) => (
              <Card key={data.duration} className="border-border">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm">{data.duration} Program</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Success Rate</span>
                        <span className="font-bold text-blue-600">{data.successRate}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600" style={{ width: `${data.successRate}%` }} />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{data.patients} patients treated</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* By Age Group */}
        <TabsContent value="age" className="space-y-4">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CardTitle className="text-sm">Success Rates by Age Group</CardTitle>
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Hover over bars to see detailed patient metrics</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ageGroupData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="ageGroup" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="successRate" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Age Group Details */}
          <div className="grid md:grid-cols-5 gap-3">
            {ageGroupData.map((data) => (
              <Card key={data.ageGroup} className="border-border">
                <CardContent className="pt-4">
                  <div className="text-center space-y-2">
                    <p className="font-semibold text-sm">{data.ageGroup} years</p>
                    <p className="text-2xl font-bold text-purple-600">{data.successRate}%</p>
                    <p className="text-xs text-muted-foreground">{data.patients} patients</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Info Box */}
      <Card className="border-border bg-blue-50/50">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-sm">Hover Tooltips Available</p>
              <p className="text-xs text-muted-foreground">
                Hover over any chart bar or card to see detailed success metrics, patient counts, and improvement rates for each condition, duration, or age group.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
