import { Star, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Rating {
  id: string;
  name: string;
  condition: string;
  rating: number;
  date: string;
  text: string;
}

const ratings: Rating[] = [
  {
    id: "1",
    name: "Priya Sharma",
    condition: "Fertility",
    rating: 5,
    date: "2 days ago",
    text: "Dr. Kalyan's treatment changed my life! After 3 years of trying, I'm finally pregnant. The 21-day program was transformative."
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    condition: "Arthritis",
    rating: 5,
    date: "1 week ago",
    text: "Incredible results! My knee pain is 90% gone after the Panchakarma treatment. Highly recommend!"
  },
  {
    id: "3",
    name: "Anjali Patel",
    condition: "PCOS",
    rating: 5,
    date: "2 weeks ago",
    text: "Best decision ever. My hormones are balanced, weight is down, and I feel amazing. Thank you Dr. Kalyan!"
  },
  {
    id: "4",
    name: "Vikram Singh",
    condition: "Diabetes",
    rating: 5,
    date: "3 weeks ago",
    text: "My blood sugar levels have normalized. The personalized treatment plan works perfectly for me."
  },
  {
    id: "5",
    name: "Neha Gupta",
    condition: "Skin Conditions",
    rating: 5,
    date: "1 month ago",
    text: "My eczema cleared up completely! The natural approach is so much better than steroids."
  },
  {
    id: "6",
    name: "Arjun Reddy",
    condition: "Anxiety",
    rating: 5,
    date: "1 month ago",
    text: "Finally found peace. The treatments helped me manage anxiety naturally without medications."
  }
];

export function PatientRatingsWidget() {
  const averageRating = (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1);
  const totalReviews = ratings.length;

  // Rating distribution
  const ratingCounts = {
    5: ratings.filter(r => r.rating === 5).length,
    4: ratings.filter(r => r.rating === 4).length,
    3: ratings.filter(r => r.rating === 3).length,
    2: ratings.filter(r => r.rating === 2).length,
    1: ratings.filter(r => r.rating === 1).length,
  };

  return (
    <div className="w-full space-y-6">
      {/* Header Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Average Rating */}
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="text-4xl font-bold text-primary">{averageRating}</div>
              <div className="flex gap-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(Number(averageRating)) ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Based on {totalReviews} verified reviews</p>
          </CardContent>
        </Card>

        {/* Total Reviews */}
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              <div>
                <div className="text-4xl font-bold">{totalReviews}</div>
                <p className="text-xs text-muted-foreground mt-1">Patient testimonials</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Rate */}
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-4xl font-bold text-green-600">100%</div>
                <p className="text-xs text-muted-foreground mt-1">5-star satisfaction</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rating Distribution */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-sm font-medium">Rating Distribution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center gap-3">
              <div className="flex gap-0.5 w-12">
                {Array(stars).fill(0).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${(ratingCounts[stars as keyof typeof ratingCounts] / totalReviews) * 100}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground w-8 text-right">
                {ratingCounts[stars as keyof typeof ratingCounts]}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Reviews */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold">Recent Reviews</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {ratings.slice(0, 4).map((review) => (
            <Card key={review.id} className="border-border hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <p className="font-medium text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.condition}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {review.date}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-0.5">
                    {Array(review.rating).fill(0).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center space-y-3">
        <h3 className="font-semibold">Join 127+ Satisfied Patients</h3>
        <p className="text-sm text-muted-foreground">
          Experience the transformative power of authentic Ayurvedic treatment
        </p>
        <Button className="bg-primary hover:bg-primary/90">
          Book Your Consultation Today
        </Button>
      </div>

      {/* Trust Badges */}
      <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-border">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">127+</p>
          <p className="text-xs text-muted-foreground">Verified Reviews</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">5.0★</p>
          <p className="text-xs text-muted-foreground">Average Rating</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">100%</p>
          <p className="text-xs text-muted-foreground">Recommend</p>
        </div>
      </div>
    </div>
  );
}
