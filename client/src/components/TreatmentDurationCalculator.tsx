import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, Clock, TrendingUp } from 'lucide-react';

export function TreatmentDurationCalculator() {
  const [condition, setCondition] = useState('');
  const [severity, setSeverity] = useState('moderate');
  const [age, setAge] = useState('35');
  const [previousTreatment, setPreviousTreatment] = useState('no');

  const conditions = [
    { id: 'arthritis', label: 'Arthritis & Joint Pain' },
    { id: 'diabetes', label: 'Type 2 Diabetes' },
    { id: 'hypertension', label: 'Hypertension' },
    { id: 'fatigue', label: 'Chronic Fatigue' },
    { id: 'ibs', label: 'IBS & Digestive Issues' },
    { id: 'asthma', label: 'Asthma & Respiratory' },
    { id: 'eczema', label: 'Eczema & Skin Conditions' },
    { id: 'anxiety', label: 'Anxiety & Depression' },
    { id: 'infertility', label: 'Infertility & Hormonal Issues' },
    { id: 'insomnia', label: 'Insomnia & Sleep Disorders' }
  ];

  const calculateDuration = useMemo(() => {
    if (!condition) return null;

    let baseDuration = 14; // Default 14 days

    // Adjust based on severity
    if (severity === 'mild') {
      baseDuration = 7;
    } else if (severity === 'severe') {
      baseDuration = 21;
    }

    // Adjust based on age
    const ageNum = parseInt(age);
    if (ageNum > 60) {
      baseDuration += 7;
    } else if (ageNum > 50) {
      baseDuration += 3;
    }

    // Adjust based on previous treatment
    if (previousTreatment === 'yes') {
      baseDuration = Math.max(7, baseDuration - 7);
    }

    // Condition-specific adjustments
    const conditionMultipliers: { [key: string]: number } = {
      arthritis: 1.2,
      diabetes: 1.1,
      hypertension: 1.0,
      fatigue: 1.0,
      ibs: 1.1,
      asthma: 1.0,
      eczema: 1.2,
      anxiety: 1.0,
      infertility: 1.3,
      insomnia: 0.9
    };

    const multiplier = conditionMultipliers[condition] || 1.0;
    baseDuration = Math.round(baseDuration * multiplier);

    return {
      duration: baseDuration,
      program: baseDuration <= 7 ? '7-Day Intensive' : baseDuration <= 14 ? '14-Day Therapeutic' : '21-Day Transformation',
      cost: baseDuration <= 7 ? '₹35,000 - ₹50,000' : baseDuration <= 14 ? '₹50,000 - ₹75,000' : '₹75,000 - ₹100,000',
      successRate: baseDuration <= 7 ? '60-70%' : baseDuration <= 14 ? '70-80%' : '75-85%'
    };
  }, [condition, severity, age, previousTreatment]);

  const handleReset = () => {
    setCondition('');
    setSeverity('moderate');
    setAge('35');
    setPreviousTreatment('no');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Treatment Duration Calculator</h2>
          <p className="text-lg text-muted-foreground">
            Estimate how long your personalized treatment program should be based on your condition and health profile
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Your Health Profile</CardTitle>
              <CardDescription>Answer a few questions to get your personalized estimate</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Condition */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  What is your primary condition? *
                </label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a condition</option>
                  {conditions.map(cond => (
                    <option key={cond.id} value={cond.id}>{cond.label}</option>
                  ))}
                </select>
              </div>

              {/* Severity */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  How severe is your condition?
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'mild', label: 'Mild - Recently diagnosed, manageable symptoms' },
                    { value: 'moderate', label: 'Moderate - Ongoing issues, affecting daily life' },
                    { value: 'severe', label: 'Severe - Significant impact, limited mobility/function' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer hover:bg-muted p-2 rounded transition-colors">
                      <input
                        type="radio"
                        name="severity"
                        value={option.value}
                        checked={severity === option.value}
                        onChange={(e) => setSeverity(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Your age
                </label>
                <input
                  type="number"
                  min="18"
                  max="100"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Previous Treatment */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Have you received Ayurvedic treatment before?
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'no', label: 'No, this is my first time' },
                    { value: 'yes', label: 'Yes, I\'ve had previous treatment' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer hover:bg-muted p-2 rounded transition-colors">
                      <input
                        type="radio"
                        name="previous"
                        value={option.value}
                        checked={previousTreatment === option.value}
                        onChange={(e) => setPreviousTreatment(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <Button
                onClick={handleReset}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/5"
              >
                Reset Calculator
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="flex flex-col gap-6">
            {!condition ? (
              <Card className="border-border bg-muted/50 flex items-center justify-center h-full">
                <CardContent className="text-center py-12">
                  <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Select your condition above to see your personalized treatment duration estimate
                  </p>
                </CardContent>
              </Card>
            ) : calculateDuration ? (
              <>
                {/* Duration Result */}
                <Card className="border-primary bg-primary/5">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <p className="text-sm font-semibold text-muted-foreground">Recommended Duration</p>
                      </div>
                      <p className="text-5xl font-bold text-primary mb-2">{calculateDuration.duration}</p>
                      <p className="text-lg font-semibold text-foreground">{calculateDuration.program}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Program Details */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Program Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        Investment
                      </p>
                      <p className="text-lg font-bold text-foreground">{calculateDuration.cost}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        Success Rate
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full"
                            style={{ width: calculateDuration.successRate.split('-')[1].replace('%', '') + '%' }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-primary">{calculateDuration.successRate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base">
                  Book Consultation for {calculateDuration.program}
                </Button>

                {/* Disclaimer */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-xs text-amber-800">
                    <strong>Note:</strong> This is an estimate based on common patterns. Your actual treatment duration may vary. Schedule a consultation with Dr. Kalyan for a personalized assessment.
                  </p>
                </div>
              </>
            ) : null}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex gap-4">
            <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Why Duration Matters</h3>
              <p className="text-sm text-blue-800">
                The duration of your treatment program is crucial for achieving lasting results. Shorter programs (7 days) are ideal for wellness optimization and first-time experiences. Longer programs (14-21 days) are recommended for chronic conditions that require deeper healing and complete detoxification cycles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
