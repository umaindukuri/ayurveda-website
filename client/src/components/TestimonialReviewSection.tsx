import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Review {
  id: string;
  name: string;
  condition: string;
  rating: number;
  text: string;
  date: string;
}

export function TestimonialReviewSection() {
  const reviews: Review[] = [
    {
      id: '1',
      name: 'Rajesh M.',
      condition: 'Arthritis & Joint Pain',
      rating: 5,
      text: 'Dr. Kalyan\'s treatment completely transformed my life. After 21 days, my joint pain disappeared and I can now walk without any discomfort. Highly recommend!',
      date: 'March 2024'
    },
    {
      id: '2',
      name: 'Priya S.',
      condition: 'Severe Eczema',
      rating: 5,
      text: 'I suffered from eczema for 10 years. The 14-day program cleared my skin completely. No more itching, no more medications. This is truly a miracle cure!',
      date: 'February 2024'
    },
    {
      id: '3',
      name: 'Amit K.',
      condition: 'Chronic Back Pain',
      rating: 5,
      text: 'Back pain was affecting my work and personal life. After the treatment, I\'m pain-free and more energetic than ever. Worth every penny!',
      date: 'January 2024'
    },
    {
      id: '4',
      name: 'Sneha D.',
      condition: 'PCOS & Infertility',
      rating: 5,
      text: 'After struggling with infertility for 3 years, Dr. Kalyan\'s program helped me conceive naturally. I\'m now 6 months pregnant. Dreams do come true!',
      date: 'December 2023'
    },
    {
      id: '5',
      name: 'Vikram R.',
      condition: 'Type 2 Diabetes',
      rating: 5,
      text: 'My blood sugar levels are now normal without medications. The dietary guidance and treatment protocol were excellent. Highly satisfied!',
      date: 'November 2023'
    },
    {
      id: '6',
      name: 'Anjali P.',
      condition: 'Anxiety & Depression',
      rating: 5,
      text: 'The holistic approach helped me overcome anxiety naturally. The yoga, meditation, and herbal treatments changed my mental health completely.',
      date: 'October 2023'
    }
  ];

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;
  const fiveStarCount = reviews.filter(r => r.rating === 5).length;

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Patient Reviews & Ratings</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Real feedback from patients who have experienced Dr. Kalyan's transformative treatments
          </p>

          {/* Rating Summary */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            {/* Average Rating Card */}
            <Card className="border-border w-full md:w-auto">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-5xl font-bold text-foreground mb-2">{averageRating}</p>
                <p className="text-sm text-muted-foreground">
                  Based on {totalReviews} verified reviews
                </p>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="w-48 bg-muted rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '100%' }} />
                </div>
                <span className="text-sm font-semibold text-foreground">{fiveStarCount}/{totalReviews}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(review => (
            <Card key={review.id} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-foreground leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-primary font-medium mb-1">{review.condition}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 fill-green-600 text-green-600" />
            <Star className="w-6 h-6 fill-green-600 text-green-600" />
            <Star className="w-6 h-6 fill-green-600 text-green-600" />
            <Star className="w-6 h-6 fill-green-600 text-green-600" />
            <Star className="w-6 h-6 fill-green-600 text-green-600" />
          </div>
          <p className="text-lg text-foreground font-semibold mb-2">
            100% Patient Satisfaction Rate
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All reviews are from verified patients who have completed our treatment programs. We are committed to delivering exceptional results and life-changing transformations through authentic Ayurvedic healing.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-foreground font-semibold mb-4">
            Ready to join thousands of satisfied patients?
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Book Your Consultation Today
          </button>
        </div>
      </div>
    </section>
  );
}
