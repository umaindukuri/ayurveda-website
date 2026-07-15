import { useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Clock, Target } from "lucide-react";

interface TreatmentOutcome {
  condition: string;
  successRate: number;
  avgDuration: number;
  patientsHealed: number;
  avgAge: number;
}

const treatmentData: TreatmentOutcome[] = [
  { condition: "Arthritis", successRate: 78, avgDuration: 21, patientsHealed: 156, avgAge: 52 },
  { condition: "Diabetes", successRate: 72, avgDuration: 21, patientsHealed: 98, avgAge: 48 },
  { condition: "PCOS/Fertility", successRate: 70, avgDuration: 28, patientsHealed: 87, avgAge: 31 },
  { condition: "Eczema/Psoriasis", successRate: 68, avgDuration: 14, patientsHealed: 64, avgAge: 35 },
  { condition: "IBS/Digestive", successRate: 75, avgDuration: 21, patientsHealed: 102, avgAge: 42 },
  { condition: "Anxiety/Depression", successRate: 73, avgDuration: 21, patientsHealed: 91, avgAge: 38 },
];

const durationData = [
  { days: "7-Day", patients: 45, successRate: 62 },
  { days: "14-Day", patients: 128, successRate: 75 },
  { days: "21-Day", patients: 187, successRate: 82 },
  { days: "28-Day", patients: 92, successRate: 88 },
];

const ageGroupData = [
  { group: "20-30", count: 87, success: 71 },
  { group: "30-40", count: 156, success: 76 },
  { group: "40-50", count: 198, success: 74 },
  { group: "50-60", count: 142, success: 72 },
  { group: "60+", count: 98, success: 68 },
];

const conditionDistribution = [
  { name: "Arthritis", value: 156, color: "#f97316" },
  { name: "Diabetes", value: 98, color: "#3b82f6" },
  { name: "PCOS/Fertility", value: 87, color: "#ec4899" },
  { name: "Skin Conditions", value: 64, color: "#8b5cf6" },
  { name: "Digestive", value: 102, color: "#10b981" },
  { name: "Mental Health", value: 91, color: "#f59e0b" },
];

export function TreatmentOutcomeDashboard() {
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const [viewType, setViewType] = useState<"success" | "duration" | "age">("success");

  const selectedData = selectedCondition
    ? treatmentData.find(d => d.condition === selectedCondition)
    : null;

  const totalPatients = treatmentData.reduce((sum, d) => sum + d.patientsHealed, 0);
  const avgSuccessRate = (treatmentData.reduce((sum, d) => sum + d.successRate, 0) / treatmentData.length).toFixed(1);

  return (
    <div className="w-full space-y-6">
      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4" /> Total Patients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{totalPatients}+</div>
            <p className="text-xs text-muted-foreground mt-1">Successfully treated</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Avg Success Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{avgSuccessRate}%</div>
            <p className="text-xs text-muted-foreground mt-1">Across all conditions</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4" /> Avg Duration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">21 days</div>
            <p className="text-xs text-muted-foreground mt-1">Most popular program</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Target className="w-4 h-4" /> Conditions Treated
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">6+</div>
            <p className="text-xs text-muted-foreground mt-1">Different health areas</p>
          </CardContent>
        </Card>
      </div>

      {/* View Toggle */}
      <div className="flex gap-2 flex-wrap">
        <Button
          variant={viewType === "success" ? "default" : "outline"}
          size="sm"
          onClick={() => setViewType("success")}
          className="text-xs"
        >
          Success by Condition
        </Button>
        <Button
          variant={viewType === "duration" ? "default" : "outline"}
          size="sm"
          onClick={() => setViewType("duration")}
          className="text-xs"
        >
          Duration Analysis
        </Button>
        <Button
          variant={viewType === "age" ? "default" : "outline"}
          size="sm"
          onClick={() => setViewType("age")}
          className="text-xs"
        >
          Age Group Results
        </Button>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Main Chart */}
        <Card className="border-border md:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              {viewType === "success" && "Success Rates by Condition"}
              {viewType === "duration" && "Results by Program Duration"}
              {viewType === "age" && "Success Rates by Age Group"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {viewType === "success" && (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={treatmentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="condition" angle={-45} textAnchor="end" height={80} tick={{ fontSize: 12 }} />
                  <YAxis domain={[0, 100]} label={{ value: "Success Rate (%)", angle: -90, position: "insideLeft" }} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="successRate" fill="#f97316" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
            {viewType === "duration" && (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={durationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="days" />
                  <YAxis yAxisId="left" label={{ value: "Patients", angle: -90, position: "insideLeft" }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: "Success Rate (%)", angle: 90, position: "insideRight" }} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="patients" fill="#3b82f6" name="Patients" radius={[8, 8, 0, 0]} />
                  <Bar yAxisId="right" dataKey="successRate" fill="#10b981" name="Success Rate %" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
            {viewType === "age" && (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ageGroupData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="group" />
                  <YAxis yAxisId="left" label={{ value: "Patients", angle: -90, position: "insideLeft" }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: "Success Rate (%)", angle: 90, position: "insideRight" }} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="count" fill="#8b5cf6" name="Patients" radius={[8, 8, 0, 0]} />
                  <Bar yAxisId="right" dataKey="success" fill="#f59e0b" name="Success Rate %" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Condition Distribution Pie Chart */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Patient Distribution by Condition</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={conditionDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {conditionDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Condition Details */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Condition Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {treatmentData.map((data) => (
              <button
                key={data.condition}
                onClick={() => setSelectedCondition(selectedCondition === data.condition ? null : data.condition)}
                className={`w-full text-left p-3 rounded-lg border transition-colors ${
                  selectedCondition === data.condition
                    ? "border-primary bg-primary/5"
                    : "border-border hover:bg-muted"
                }`}
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <p className="font-medium text-sm">{data.condition}</p>
                    <p className="text-xs text-muted-foreground">
                      {data.patientsHealed} patients treated
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm text-primary">{data.successRate}%</p>
                    <p className="text-xs text-muted-foreground">{data.avgDuration} days</p>
                  </div>
                </div>
              </button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Selected Condition Details */}
      {selectedData && (
        <Card className="border-primary bg-primary/5">
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Detailed Results: {selectedData.condition}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Success Rate</p>
                <p className="text-2xl font-bold text-primary">{selectedData.successRate}%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Avg Duration</p>
                <p className="text-2xl font-bold text-primary">{selectedData.avgDuration} days</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Patients Treated</p>
                <p className="text-2xl font-bold text-primary">{selectedData.patientsHealed}+</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Avg Patient Age</p>
                <p className="text-2xl font-bold text-primary">{selectedData.avgAge} yrs</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6 text-center space-y-3">
        <h3 className="font-semibold">Ready to Start Your Transformation?</h3>
        <p className="text-sm text-muted-foreground">
          Join hundreds of patients who have achieved remarkable health outcomes
        </p>
        <Button className="bg-primary hover:bg-primary/90">
          Book Your Personalized Consultation
        </Button>
      </div>
    </div>
  );
}
