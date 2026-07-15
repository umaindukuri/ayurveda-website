import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function TreatmentComparisonChart() {
  const programs = [
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
      ideal: false
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
      ideal: true
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
      ideal: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Treatment Programs Comparison</h2>
          <p className="text-lg text-muted-foreground">
            Choose the program that best fits your health goals and timeline
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
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
              <CardHeader>
                <CardTitle className="text-2xl">{program.name}</CardTitle>
                <CardDescription className="text-base">{program.duration}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-6">
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

        {/* Comparison Table for detailed specs */}
        <div className="mt-16 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted border-b-2 border-border">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Feature</th>
                <th className="px-4 py-3 text-center font-semibold text-foreground">7-Day</th>
                <th className="px-4 py-3 text-center font-semibold text-foreground">14-Day</th>
                <th className="px-4 py-3 text-center font-semibold text-foreground">21-Day</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Daily Panchakarma Procedures', values: ['✓', '✓', '✓'] },
                { label: 'Herbal Treatments', values: ['✓', '✓', '✓'] },
                { label: 'Personalized Diet Plan', values: ['✓', '✓', '✓'] },
                { label: 'Yoga & Meditation', values: ['✓', '✓', '✓'] },
                { label: 'Lifestyle Coaching', values: ['Limited', '✓', '✓'] },
                { label: 'Rasayana (Rejuvenation)', values: ['—', 'Optional', '✓'] },
                { label: 'Follow-up Support', values: ['1 month', '3 months', '6 months'] },
                { label: 'Preventive Care Planning', values: ['—', 'Basic', 'Comprehensive'] }
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">{row.label}</td>
                  {row.values.map((value, vidx) => (
                    <td key={vidx} className="px-4 py-3 text-center text-muted-foreground">
                      {value === '✓' ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which program is right for you?
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
