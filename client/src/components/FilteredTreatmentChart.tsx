import { useState, useMemo } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Program {
  name: string;
  duration: string;
  cost: string;
  bestFor: string;
  features: string[];
  successRate: string;
  ideal: boolean;
  conditions: string[];
}

export function FilteredTreatmentChart() {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const conditions = [
    'Arthritis & Joint Pain',
    'Type 2 Diabetes',
    'Hypertension',
    'Chronic Fatigue',
    'IBS & Digestive Issues',
    'Asthma & Respiratory',
    'Eczema & Skin Conditions',
    'Anxiety & Depression',
    'Infertility & Hormonal Issues',
    'Insomnia & Sleep Disorders'
  ];

  const programs: Program[] = [
    {
      name: '7-Day Intensive',
      duration: '7 days',
      cost: '₹35,000 - ₹50,000',
      bestFor: 'First-time experience, wellness optimization, stress relief',
      features: [
        'Initial consultation',
        'Daily Panchakarma procedures',
        'Herbal treatments',
        'Dietary guidance',
        'Yoga & meditation',
        'Post-program support'
      ],
      successRate: '60-70%',
      ideal: false,
      conditions: ['Stress Relief', 'Wellness Optimization', 'Chronic Fatigue']
    },
    {
      name: '14-Day Therapeutic',
      duration: '14 days',
      cost: '₹50,000 - ₹75,000',
      bestFor: 'Chronic disease treatment, significant health transformation',
      features: [
        'Comprehensive consultation',
        'Daily Panchakarma procedures',
        'Advanced herbal protocols',
        'Personalized diet plan',
        'Yoga, meditation & pranayama',
        'Lifestyle coaching',
        'Follow-up consultations'
      ],
      successRate: '70-80%',
      ideal: true,
      conditions: [
        'Arthritis & Joint Pain',
        'Type 2 Diabetes',
        'Hypertension',
        'IBS & Digestive Issues',
        'Asthma & Respiratory',
        'Eczema & Skin Conditions',
        'Anxiety & Depression',
        'Insomnia & Sleep Disorders'
      ]
    },
    {
      name: '21-Day Transformation',
      duration: '21 days',
      cost: '₹75,000 - ₹100,000',
      bestFor: 'Deep healing, rejuvenation, complete lifestyle reset',
      features: [
        'Deep-dive consultation',
        'Complete Panchakarma cycle',
        'Intensive herbal treatments',
        'Custom Rasayana therapy',
        'Advanced yoga & pranayama',
        'Comprehensive lifestyle reset',
        'Extended follow-up support',
        'Preventive care planning'
      ],
      successRate: '75-85%',
      ideal: false,
      conditions: [
        'Arthritis & Joint Pain',
        'Type 2 Diabetes',
        'Chronic Fatigue',
        'Infertility & Hormonal Issues',
        'Anxiety & Depression'
      ]
    }
  ];

  const toggleCondition = (condition: string) => {
    setSelectedConditions(prev =>
      prev.includes(condition)
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  const filteredPrograms = useMemo(() => {
    if (selectedConditions.length === 0) return programs;
    
    return programs.filter(program =>
      selectedConditions.some(selected =>
        program.conditions.some(cond =>
          cond.toLowerCase().includes(selected.toLowerCase()) ||
          selected.toLowerCase().includes(cond.toLowerCase())
        )
      )
    );
  }, [selectedConditions]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Find Your Ideal Program</h2>
          <p className="text-lg text-muted-foreground">
            Filter by your health condition to see which treatment program is best suited for you
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors w-full md:w-auto"
          >
            <span className="font-semibold">Filter by Condition</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          {showFilters && (
            <div className="mt-4 p-6 bg-white border border-border rounded-lg">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {conditions.map(condition => (
                  <label key={condition} className="flex items-center gap-3 cursor-pointer hover:bg-muted p-2 rounded transition-colors">
                    <input
                      type="checkbox"
                      checked={selectedConditions.includes(condition)}
                      onChange={() => toggleCondition(condition)}
                      className="w-5 h-5 rounded border-border cursor-pointer"
                    />
                    <span className="text-sm font-medium text-foreground">{condition}</span>
                  </label>
                ))}
              </div>

              {selectedConditions.length > 0 && (
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {selectedConditions.length} condition{selectedConditions.length !== 1 ? 's' : ''} selected
                  </p>
                  <button
                    onClick={() => setSelectedConditions([])}
                    className="text-sm text-primary hover:underline"
                  >
                    Clear All
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {filteredPrograms.map((program, idx) => (
              <Card 
                key={idx} 
                className={`border-border transition-all duration-300 hover:shadow-lg flex flex-col ${
                  program.ideal ? 'ring-2 ring-primary md:scale-105' : ''
                }`}
              >
                {program.ideal && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-semibold rounded-t-lg">
                    Most Popular
                  </div>
                )}
                <CardContent className="flex-1 flex flex-col gap-6 pt-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{program.name}</h3>
                    <p className="text-base text-muted-foreground">{program.duration}</p>
                  </div>

                  {/* Cost */}
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Investment</p>
                    <p className="text-xl font-bold text-primary">{program.cost}</p>
                  </div>

                  {/* Best For */}
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Best For</p>
                    <p className="text-sm text-foreground leading-relaxed">{program.bestFor}</p>
                  </div>

                  {/* Success Rate */}
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Success Rate</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: program.successRate.split('-')[1].replace('%', '') + '%' }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-primary">{program.successRate}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">Includes</p>
                    <ul className="space-y-2">
                      {program.features.map((feature, fidx) => (
                        <li key={fidx} className="flex gap-2 items-start">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full mt-auto ${
                      program.ideal 
                        ? 'bg-primary hover:bg-primary/90 text-white' 
                        : 'border-primary text-primary hover:bg-primary/5'
                    }`}
                    variant={program.ideal ? 'default' : 'outline'}
                  >
                    Choose This Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No programs match your selected conditions. Please adjust your filters or contact us for a personalized recommendation.
            </p>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which program is right for you? Our specialists can provide personalized recommendations based on your specific condition and health goals.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Get Personalized Recommendation
          </Button>
        </div>
      </div>
    </section>
  );
}
