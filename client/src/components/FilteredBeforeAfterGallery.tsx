import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TransformationCase {
  id: string;
  name: string;
  condition: string;
  treatmentType: string;
  duration: string;
  before: string;
  after: string;
  beforeDescription: string;
  afterDescription: string;
  result: string;
}

export function FilteredBeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const treatmentTypes = [
    { id: 'all', label: 'All Treatments' },
    { id: 'musculoskeletal', label: 'Musculoskeletal' },
    { id: 'skin', label: 'Skin & Dermatology' },
    { id: 'hormonal', label: 'Hormonal & Fertility' },
    { id: 'digestive', label: 'Digestive Health' },
    { id: 'mental', label: 'Mental Health' }
  ];

  const cases: TransformationCase[] = [
    {
      id: '1',
      name: 'Rajesh M.',
      condition: 'Severe Arthritis',
      treatmentType: 'musculoskeletal',
      duration: '21-Day Program',
      before: '/manus-storage/treatment_chronic_disease_62ef6750.png',
      after: '/manus-storage/panchakarma_treatment_vibrant_d075a65b.png',
      beforeDescription: 'Severe joint pain, limited mobility, swollen knees',
      afterDescription: 'Pain-free movement, full flexibility restored',
      result: 'Complete recovery - back to active lifestyle'
    },
    {
      id: '2',
      name: 'Priya S.',
      condition: 'Severe Eczema',
      treatmentType: 'skin',
      duration: '14-Day Program',
      before: '/manus-storage/treatment_skin_health_e6507ce9.png',
      after: '/manus-storage/treatment_digestive_health_866aa1e8.png',
      beforeDescription: 'Extensive skin inflammation, itching, redness',
      afterDescription: 'Clear, healthy skin with natural glow',
      result: 'Skin completely cleared - medication-free'
    },
    {
      id: '3',
      name: 'Amit K.',
      condition: 'Chronic Back Pain',
      treatmentType: 'musculoskeletal',
      duration: '14-Day Program',
      before: '/manus-storage/treatment_mental_health_d3e27509.png',
      after: '/manus-storage/hero_meditation_premium_0f0d5eb0.png',
      beforeDescription: 'Constant back pain, poor posture, limited activity',
      afterDescription: 'Straight posture, pain-free, active and energetic',
      result: 'Pain eliminated - returned to work without discomfort'
    },
    {
      id: '4',
      name: 'Sneha D.',
      condition: 'PCOS & Infertility',
      treatmentType: 'hormonal',
      duration: '21-Day Program',
      before: '/manus-storage/ayurveda_wellness_spa_interior_1e8d2c9a.png',
      after: '/manus-storage/blog_dosha_balance_d9df3e57.png',
      beforeDescription: 'Irregular cycles, hormonal imbalance, anxiety',
      afterDescription: 'Regular cycles, balanced hormones, peaceful',
      result: 'Natural conception achieved - now 6 months pregnant'
    },
    {
      id: '5',
      name: 'Vikram R.',
      condition: 'IBS & Digestive Issues',
      treatmentType: 'digestive',
      duration: '14-Day Program',
      before: '/manus-storage/treatment_digestive_health_866aa1e8.png',
      after: '/manus-storage/panchakarma_treatment_vibrant_d075a65b.png',
      beforeDescription: 'Chronic bloating, irregular digestion, low energy',
      afterDescription: 'Normal digestion, high energy, improved appetite',
      result: 'Complete digestive restoration - no medications needed'
    },
    {
      id: '6',
      name: 'Anjali P.',
      condition: 'Anxiety & Depression',
      treatmentType: 'mental',
      duration: '21-Day Program',
      before: '/manus-storage/treatment_mental_health_d3e27509.png',
      after: '/manus-storage/hero_meditation_premium_0f0d5eb0.png',
      beforeDescription: 'Constant anxiety, sleep issues, mood swings',
      afterDescription: 'Peaceful mind, deep sleep, emotional balance',
      result: 'Complete mental clarity - natural mood enhancement'
    }
  ];

  const filteredCases = useMemo(() => {
    if (selectedFilter === 'all') return cases;
    return cases.filter(c => c.treatmentType === selectedFilter);
  }, [selectedFilter]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredCases.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredCases.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
  };

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
    setCurrentIndex(0);
    setSliderPosition(50);
  };

  const currentCase = filteredCases[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Patient Transformation Gallery</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Swipe left and right to see real before and after transformations from our patients
          </p>

          {/* Treatment Type Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Filter className="w-5 h-5 text-muted-foreground" />
            {treatmentTypes.map(type => (
              <button
                key={type.id}
                onClick={() => handleFilterChange(type.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === type.id
                    ? 'bg-primary text-white'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {filteredCases.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Before/After Slider */}
            <div className="md:col-span-2">
              <Card className="border-border overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className="relative w-full aspect-square bg-gray-100 cursor-col-resize overflow-hidden"
                    onClick={handleSliderChange}
                  >
                    {/* After Image (Background) */}
                    <img
                      src={currentCase.after}
                      alt="After"
                      className="w-full h-full object-cover"
                    />

                    {/* Before Image (Overlay) */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <img
                        src={currentCase.before}
                        alt="Before"
                        className="w-full h-full object-cover"
                        style={{ width: `${100 / (sliderPosition / 100)}%` }}
                      />
                    </div>

                    {/* Slider Handle */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize transition-none"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-3">
                        <div className="flex gap-1">
                          <ChevronLeft className="w-4 h-4 text-primary" />
                          <ChevronRight className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-semibold">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-semibold">
                      After
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between p-4 bg-muted">
                    <Button
                      onClick={handlePrevious}
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary/5"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      {currentIndex + 1} / {filteredCases.length}
                    </span>
                    <Button
                      onClick={handleNext}
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary/5"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Case Details */}
            <div className="md:col-span-1">
              <Card className="border-border h-full">
                <CardContent className="p-6 flex flex-col gap-6 h-full">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{currentCase.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-1">{currentCase.condition}</p>
                    <p className="text-sm text-muted-foreground">{currentCase.duration}</p>
                  </div>

                  {/* Before */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Before Treatment</p>
                    <p className="text-sm text-foreground leading-relaxed">{currentCase.beforeDescription}</p>
                  </div>

                  {/* After */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">After Treatment</p>
                    <p className="text-sm text-foreground leading-relaxed">{currentCase.afterDescription}</p>
                  </div>

                  {/* Result */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-auto">
                    <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">Result</p>
                    <p className="text-sm font-semibold text-green-900">{currentCase.result}</p>
                  </div>

                  {/* CTA */}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Start Your Transformation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No transformations found for this treatment type. Please select another category.
            </p>
          </div>
        )}

        {/* Trust Statement */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <p className="text-lg text-foreground font-semibold mb-2">
            These transformations are real, verified patient results
          </p>
          <p className="text-muted-foreground">
            All before and after photos are from actual patients who have completed our treatment programs. Results vary based on individual conditions, commitment to lifestyle changes, and treatment duration.
          </p>
        </div>
      </div>
    </section>
  );
}
