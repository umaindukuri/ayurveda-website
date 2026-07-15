import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AyurvedaCures() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("chronic");

  const cureCategories = [
    {
      id: "chronic",
      title: "Chronic Disease Management",
      description: "Natural healing for long-term conditions",
      conditions: [
        "Arthritis and Joint Disorders",
        "Diabetes (Type 1 & 2)",
        "Hypertension and Heart Disease",
        "Autoimmune Conditions",
        "Chronic Fatigue Syndrome"
      ]
    },
    {
      id: "digestive",
      title: "Digestive & Metabolic Health",
      description: "Restore digestive fire and metabolism",
      conditions: [
        "Irritable Bowel Syndrome (IBS)",
        "Acid Reflux and GERD",
        "Constipation and Digestive Disorders",
        "Weight Management and Obesity",
        "Metabolic Syndrome"
      ]
    },
    {
      id: "respiratory",
      title: "Respiratory Conditions",
      description: "Treat breathing and lung disorders",
      conditions: [
        "Asthma and Bronchitis",
        "Allergies and Hay Fever",
        "Chronic Cough",
        "Sleep Apnea",
        "Sinusitis"
      ]
    },
    {
      id: "skin",
      title: "Skin Conditions",
      description: "Heal skin from within",
      conditions: [
        "Eczema and Dermatitis",
        "Psoriasis",
        "Acne and Rosacea",
        "Urticaria (Hives)",
        "Fungal Infections"
      ]
    },
    {
      id: "mental",
      title: "Mental Health & Emotional Wellness",
      description: "Balance mind and emotions naturally",
      conditions: [
        "Anxiety Disorders",
        "Depression",
        "Insomnia and Sleep Disorders",
        "Stress-Related Conditions",
        "ADHD and Focus Issues"
      ]
    },
    {
      id: "womens",
      title: "Women's Health",
      description: "Support fertility and hormonal balance",
      conditions: [
        "Fertility Enhancement",
        "Hormonal Imbalances",
        "Menstrual Disorders",
        "Menopause Symptoms",
        "Polycystic Ovary Syndrome (PCOS)"
      ]
    },
    {
      id: "mens",
      title: "Men's Health",
      description: "Enhance vitality and reproductive health",
      conditions: [
        "Fertility and Vitality",
        "Prostate Health",
        "Sexual Dysfunction",
        "Testosterone Balance",
        "Energy and Stamina"
      ]
    },
    {
      id: "rejuvenation",
      title: "Rejuvenation & Anti-Aging",
      description: "Restore youth and longevity",
      conditions: [
        "Age-Related Decline",
        "Longevity Enhancement",
        "Cognitive Decline Prevention",
        "Energy and Vitality Restoration",
        "Cellular Regeneration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="flex items-center justify-between h-20 px-6 max-w-full">
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src="/manus-storage/dr_kalyan_logo_final_07bd8e78.png" alt="Dr. Kalyan Ayurveda" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary leading-tight">Dr. Kalyan</span>
              <span className="text-sm font-bold text-primary leading-tight">Ayurveda</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/treatments" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="/ayurveda-cures" className="text-sm font-medium text-primary font-semibold">Ayurveda Cures</Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Testimonials</Link>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white text-sm px-6 flex-shrink-0">Book Consultation</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Ayurveda Cures</h1>
          <p className="text-xl text-muted-foreground">
            Authentic Ayurvedic solutions for comprehensive health restoration across all conditions
          </p>
        </div>
      </section>

      {/* Cure Categories */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="space-y-4">
            {cureCategories.map((category) => (
              <div key={category.id} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full px-6 py-4 bg-white hover:bg-primary/5 transition-colors flex items-center justify-between"
                >
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform ${
                      expandedCategory === category.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedCategory === category.id && (
                  <div className="px-6 py-4 bg-primary/2 border-t border-border">
                    <ul className="space-y-2">
                      {category.conditions.map((condition, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span className="text-foreground">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Each condition requires personalized assessment and customized treatment protocols
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Schedule Your Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Dr. Kalyan Ayurveda</h3>
              <p className="text-sm opacity-80">Authentic Ayurvedic healing for chronic diseases, wellness optimization, and natural transformation.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/treatments">Treatments</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/testimonials">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Treatment Areas</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/treatments">Panchakarma</Link></li>
                <li><Link href="/treatments">Chronic Diseases</Link></li>
                <li><Link href="/treatments">Mental Health</Link></li>
                <li><Link href="/treatments">Fertility</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p>📧 info@drkalyanayu.com</p>
                <p>📱 +91 92813 32544</p>
                <p>📱 +91 70322 21979</p>
                <p>🕐 8:00 AM - 1:00 PM | 5:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>© 2026 Dr. Kalyan Ayurveda Specialities & Panchakarma Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
