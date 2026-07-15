import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Leaf, Wind, Flame, Droplets, Brain, Zap, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { BookingModal } from "@/components/BookingModal";
import { FAQSection } from "@/components/FAQSection";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { TreatmentComparisonChart } from "@/components/TreatmentComparisonChart";
import { TestimonialVideoSection } from "@/components/TestimonialVideoSection";

export default function Home() {
  const treatments = [
    {
      icon: Droplets,
      title: "Panchakarma Detoxification",
      description: "Deep cleansing and rejuvenation through authentic 5-procedure detoxification",
      link: "/treatments/panchakarma"
    },
    {
      icon: Heart,
      title: "Chronic Disease Management",
      description: "Natural healing for arthritis, diabetes, hypertension, and long-term conditions",
      link: "/treatments/chronic-diseases"
    },
    {
      icon: Leaf,
      title: "Digestive & Metabolic Health",
      description: "Restore digestive fire, heal IBS, improve metabolism and nutrient absorption",
      link: "/treatments/digestive-health"
    },
    {
      icon: Wind,
      title: "Respiratory Wellness",
      description: "Treat asthma, bronchitis, allergies, and breathing disorders naturally",
      link: "/treatments/respiratory"
    },
    {
      icon: Flame,
      title: "Skin Conditions",
      description: "Heal eczema, psoriasis, acne, and achieve radiant skin from within",
      link: "/treatments/skin-health"
    },
    {
      icon: Brain,
      title: "Mental Health & Stress",
      description: "Manage anxiety, depression, insomnia, and restore emotional balance",
      link: "/treatments/mental-health"
    },
    {
      icon: Zap,
      title: "Fertility & Reproductive Health",
      description: "Enhance fertility, balance hormones, and support reproductive wellness",
      link: "/treatments/fertility"
    },
    {
      icon: Award,
      title: "Rejuvenation & Anti-Aging",
      description: "Rasayana therapy for longevity, vitality, and age-reversal",
      link: "/treatments/rejuvenation"
    }
  ];

  const testimonials = [
    {
      name: "James M.",
      condition: "Rheumatoid Arthritis",
      quote: "After 10 years of joint pain and limited mobility, the 21-day Panchakarma program transformed my life. I'm now pain-free and active again.",
      rating: 5
    },
    {
      name: "Maria S.",
      condition: "Type 2 Diabetes",
      quote: "My blood sugar levels normalized after just one program. The dietary guidance and herbal treatments gave me my health back.",
      rating: 5
    },
    {
      name: "David K.",
      condition: "Chronic Anxiety",
      quote: "Shirodhara and meditation practices calmed my nervous system in ways medication never could. I feel genuinely peaceful.",
      rating: 5
    },
    {
      name: "Lisa T.",
      condition: "Severe Eczema",
      quote: "My skin cleared completely within 2 months. The holistic approach addressed the root cause, not just symptoms.",
      rating: 5
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
            <Link href="/" className="text-sm font-medium text-primary font-semibold hover:text-primary/80 transition-colors">Home</Link>
            <Link href="/treatments" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Testimonials</Link>
          </div>
          <BookingModal triggerText="Book Consultation" />
        </div>
      </nav>

      {/* Hero Section - Premium */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden">
        <img 
          src="/manus-storage/hero_meditation_premium_0f0d5eb0.png" 
          alt="Restore Your Fertility Naturally" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
        <div className="relative z-10 container max-w-2xl text-left text-white pl-12">
          <h1 className="text-7xl font-bold mb-6 leading-tight">Restore Your Health Naturally</h1>
          <p className="text-xl mb-8 font-light leading-relaxed max-w-xl">
            Discover the transformative power of authentic Ayurvedic Panchakarma and personalized wellness treatments rooted in 5,000 years of healing wisdom.
          </p>
          <div className="flex gap-4">
            <BookingModal triggerText="Begin Your Journey" variant="default" />
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-base px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Why Ayurveda */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Why Choose Authentic Ayurveda?</h2>
            <p className="text-xl text-muted-foreground">
              While modern medicine treats symptoms, Ayurveda heals the root cause—restoring balance to prevent disease and optimize wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Leaf className="w-12 h-12 text-primary mb-2" />
                <CardTitle>Root Cause Healing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We identify and address the underlying imbalances causing disease, not just suppress symptoms. This leads to lasting, transformative healing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-secondary mb-2" />
                <CardTitle>Holistic Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We treat the whole person—body, mind, and spirit. Panchakarma, nutrition, lifestyle, yoga, and meditation work together for complete healing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mb-2" />
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Thousands of patients have recovered from conditions modern medicine couldn't resolve. Success rates of 70-80% for specific treatments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-20 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-foreground mb-4">Comprehensive Treatment Offerings</h2>
            <p className="text-xl text-muted-foreground">
              From chronic disease management to preventive wellness, we offer authentic Ayurvedic solutions for every health concern.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, idx) => {
              const Icon = treatment.icon;
              return (
                <Link key={idx} href={treatment.link}>
                  <Card className="border-border hover:shadow-lg transition-all cursor-pointer h-full group">
                    <CardHeader>
                      <Icon className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-lg">{treatment.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{treatment.description}</p>
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Panchakarma Highlight with Stock Image */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">The Heart of Ayurvedic Healing: Panchakarma</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Panchakarma is a comprehensive system of five coordinated detoxification procedures that gently yet profoundly cleanse the physiology from metabolic residue (ama). This ancient protocol is the foundation of authentic Ayurvedic treatment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <Leaf className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Removes toxins</strong> accumulated from diet, environment, and stress</span>
                </li>
                <li className="flex gap-3">
                  <Heart className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Restores balance</strong> to the three doshas (Vata, Pitta, Kapha)</span>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Rejuvenates tissues</strong> and strengthens immunity</span>
                </li>
                <li className="flex gap-3">
                  <Brain className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong>Heals the mind</strong> and nervous system</span>
                </li>
              </ul>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Explore Panchakarma Programs
              </Button>
            </div>
            <div>
            <img 
              src="/manus-storage/panchakarma_treatment_vibrant_d075a65b.png" 
              alt="Panchakarma Treatment" 
              className="rounded-lg shadow-lg w-full"
            />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-16 text-center">Conditions We Successfully Treat</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">Chronic Diseases</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Arthritis &amp; Joint Pain</li>
                <li>✓ Type 2 Diabetes</li>
                <li>✓ Hypertension</li>
                <li>✓ Heart Disease Prevention</li>
                <li>✓ Autoimmune Disorders</li>
                <li>✓ Chronic Fatigue</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">Digestive &amp; Metabolic</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ IBS &amp; Inflammatory Bowel Disease</li>
                <li>✓ Acid Reflux &amp; GERD</li>
                <li>✓ Constipation &amp; Bloating</li>
                <li>✓ Weight Management</li>
                <li>✓ Malabsorption Issues</li>
                <li>✓ Liver &amp; Gallbladder Health</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">Respiratory &amp; Allergies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Asthma &amp; Bronchitis</li>
                <li>✓ Allergic Rhinitis</li>
                <li>✓ Chronic Cough</li>
                <li>✓ Sinusitis</li>
                <li>✓ Sleep Apnea</li>
                <li>✓ Seasonal Allergies</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">Skin &amp; Mental Health</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Eczema &amp; Psoriasis</li>
                <li>✓ Acne &amp; Rosacea</li>
                <li>✓ Anxiety &amp; Panic Disorder</li>
                <li>✓ Depression &amp; Mood Disorders</li>
                <li>✓ Insomnia &amp; Sleep Issues</li>
                <li>✓ Stress &amp; Burnout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial Videos */}
      <TestimonialVideoSection />

      {/* Patient Testimonials with Stock Images */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-16 text-center">Patient Success Stories</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.condition}</CardDescription>
                    </div>
                    <div className="flex gap-0.5">
                      {Array(testimonial.rating).fill(0).map((_, i) => (
                        <span key={i} className="text-primary text-lg">★</span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                View All Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Treatment Comparison Chart */}
      <TreatmentComparisonChart />

      {/* Program Options */}
      <section className="py-20 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-16 text-center">Customized Treatment Programs</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">7-Day Intensive</CardTitle>
                <CardDescription>Introduction to Ayurveda</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Perfect for:</p>
                  <p className="text-sm text-muted-foreground">First-time experience, wellness optimization, stress relief</p>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">14-Day Therapeutic</CardTitle>
                <CardDescription>Most popular program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Perfect for:</p>
                  <p className="text-sm text-muted-foreground">Chronic disease treatment, significant health transformation</p>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Recommended</Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">21-Day Transformation</CardTitle>
                <CardDescription>Complete renewal</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Perfect for:</p>
                  <p className="text-sm text-muted-foreground">Deep healing, rejuvenation, complete lifestyle reset</p>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">Begin Your Healing Journey</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a personalized consultation to discuss your health concerns and create your customized treatment plan.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
              Book Your Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/manus-storage/dr_kalyan_logo_final_07bd8e78.png" alt="Logo" className="h-8 w-8 invert" />
                <span className="font-bold">Dr. Kalyan Ayurveda</span>
              </div>
              <p className="text-white/70">
                Authentic Ayurvedic healing for chronic diseases, wellness optimization, and natural transformation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition-colors">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Treatment Areas</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/treatments" className="hover:text-white transition-colors">Panchakarma</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Chronic Diseases</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Mental Health</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Fertility</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li>📧 <a href="mailto:contact@drkalyan.com" className="hover:text-white">contact@drkalyan.com</a></li>
                <li>📞 <a href="tel:+919281332544" className="hover:text-white">+91 92813 32544</a></li>
                <li>📞 <a href="tel:+917032221979" className="hover:text-white">+91 70322 21979</a></li>
                <li>📍 Flat No.102, Plot No.309, Near Volkswagen Service Centre, Prashanth Hills Colony, Raidurg Navkhalsa</li>
                <li>🕐 8:00 AM - 1:00 PM | 5:00 PM - 9:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-white/70 text-center md:text-left">&copy; 2026 Dr. Kalyan Ayurveda Specialities & Panchakarma Center. All rights reserved.</p>
              <div>
                <p className="text-white/70 text-sm mb-3 text-center md:text-right">Follow Us</p>
                <SocialMediaLinks variant="footer" size="md" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
