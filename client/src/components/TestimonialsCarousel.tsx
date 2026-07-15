import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  condition: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    condition: "Arthritis & Joint Pain",
    quote: "After 15 years of joint pain, Dr. Kalyan's Panchakarma treatment gave me my life back. I can now walk without pain and play with my grandchildren.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    condition: "Type 2 Diabetes",
    quote: "My blood sugar levels normalized within 3 weeks. The personalized diet and herbs made all the difference. Highly recommend!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    condition: "Chronic Anxiety",
    quote: "The combination of meditation, herbs, and lifestyle changes transformed my mental health. I feel calm and focused for the first time in years.",
    rating: 5,
  },
  {
    name: "Sneha Desai",
    condition: "Skin Conditions (Eczema)",
    quote: "My eczema completely cleared up after the 21-day program. The natural approach worked where conventional treatments failed.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    condition: "Digestive Issues",
    quote: "Years of IBS symptoms gone! Dr. Kalyan's approach to healing the gut is revolutionary. I have my energy back.",
    rating: 5,
  },
  {
    name: "Anjali Verma",
    condition: "Fertility & Hormonal Balance",
    quote: "After struggling with infertility for 5 years, Dr. Kalyan's program helped me conceive naturally. Blessed with a healthy baby now!",
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
    setAutoPlay(false);
  };

  return (
    <div className="w-full">
      <div className="relative bg-white rounded-lg border border-border p-8 min-h-[280px]">
        {/* Testimonial Content */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex gap-0.5 mb-4">
              {Array(testimonials[current].rating)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-primary text-lg">
                    ★
                  </span>
                ))}
            </div>
            <p className="text-muted-foreground italic mb-6 text-base leading-relaxed">
              "{testimonials[current].quote}"
            </p>
          </div>

          <div>
            <p className="font-semibold text-foreground">{testimonials[current].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[current].condition}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={prev}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={next}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === current
                ? "bg-primary w-6"
                : "bg-border hover:bg-primary/50 w-2"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <p className="text-xs text-muted-foreground text-center mt-3">
        {autoPlay ? "Auto-rotating • " : ""}
        {current + 1} of {testimonials.length}
      </p>
    </div>
  );
}
