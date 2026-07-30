import { SEO } from "@/components/SEO";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Leaf, Wind, Flame, Droplets, Brain, Zap, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { BookingModal } from "@/components/BookingModal";
import { CompactHeader } from "@/components/CompactHeader";
import { FAQSection } from "@/components/FAQSection";
import { SearchableFAQ } from "@/components/SearchableFAQ";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { FilteredTreatmentChart } from "@/components/FilteredTreatmentChart";
import { TestimonialVideoSection } from "@/components/TestimonialVideoSection";
import { FilteredBeforeAfterGallery } from "@/components/FilteredBeforeAfterGallery";
import { TreatmentDurationCalculator } from "@/components/TreatmentDurationCalculator";
import { TestimonialReviewSection } from "@/components/TestimonialReviewSection";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { EnhancedAvailabilityCalendar } from "@/components/EnhancedAvailabilityCalendar";
import { SuccessStoriesBlog } from "@/components/SuccessStoriesBlog";
import { ReferralRewardsProgram } from "@/components/ReferralRewardsProgram";
import { FilterablePatientRatings } from "@/components/FilterablePatientRatings";
import { EnhancedDashboardWithTooltips } from "@/components/EnhancedDashboardWithTooltips";
import { TestimonialVideoCarousel } from "@/components/TestimonialVideoCarousel";


export default function Home() {
  // The useAuth hook provides authentication state.
  // To implement login/logout, call logout(), or start login from an event
  // handler: onClick={() => startLogin()} (imported from "@/const"). Never call
  // startLogin() during render (no href={startLogin()}) — it mints a one-time
  // nonce cookie and must run only at the moment of navigation.
  let { user, loading, error, isAuthenticated, logout } = useAuth();

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
    <SEO title="Ayurvedic Panchakarma & Fertility Treatment" description="Restore your health naturally with authentic Ayurvedic Panchakarma and personalized wellness treatments in Hyderabad. 5,000 years of healing wisdom." keywords="Ayurveda Hyderabad, Panchakarma, fertility treatment, holistic healing, Dr Kalyan" url="/" />
      {/* Compact Header with Newsletter */}
      <CompactHeader />

      {/* Hero Section - Premium */}
      <section className="relative h-[calc(100vh-120px)] flex items-center justify-start overflow-hidden">
      <img
        src="/manus-storage/new_hero_homepage_76443ba6.jpg"
        alt="Restore Your Fertility Naturally"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/10"></div>
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
      <section className="py-10 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Why Choose Authentic Ayurveda?</h2>
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
      <section className="py-10 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-2">Comprehensive Treatment Offerings</h2>
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
      <section className="py-10 bg-white">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">The Heart of Ayurvedic Healing: Panchakarma</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Panchakarma is a comprehensive system of five coordinated detoxification procedures that gently yet profoundly cleanse the physiology from metabolic residue (ama). This ancient protocol is the foundation of authentic Ayurvedic treatment.
              </p>
              <ul className="space-y-2 mb-6">
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
              <Link href="/panchakarma-programs">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Explore Panchakarma Programs
                </Button>
              </Link>
            </div>
            <div>
        <img
          src="/images/panchakarma_treatment_vibrant_d075a65b.png"
          alt="Panchakarma Treatment"
          className="w-full h-full object-cover"
          loading="lazy"
        />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-10 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-8 text-center">Conditions We Successfully Treat</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-playfair font-bold text-foreground mb-4">Chronic Diseases</h3>
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

      {/* Before/After Transformation Gallery with Filters */}
      <FilteredBeforeAfterGallery />

      {/* Treatment Duration Calculator */}
      <TreatmentDurationCalculator />

      {/* Testimonial Review Section */}
      <TestimonialReviewSection />

      {/* Availability Calendar */}
      <EnhancedAvailabilityCalendar />

      {/* Success Stories Blog */}
      <SuccessStoriesBlog />

      {/* Referral Rewards Program */}
      <ReferralRewardsProgram />

      {/* Patient Testimonials with Stock Images */}
      <section className="py-10 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-8 text-center">Patient Success Stories</h2>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Patient Ratings Widget */}
      <section className="py-10 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-8 text-center">Patient Testimonials & Ratings</h2>
          <FilterablePatientRatings />
        </div>
      </section>

      {/* Treatment Outcome Dashboard */}
      <section className="py-10 bg-muted/30">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-8 text-center">Treatment Outcomes & Success Rates</h2>
          <EnhancedDashboardWithTooltips />
        </div>
      </section>

      {/* Testimonial Video Carousel */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white border-t border-border">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-foreground mb-3">Patient Transformation Videos</h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
            Watch real patients share their remarkable healing journeys and transformations through authentic Ayurvedic treatment
          </p>
          <TestimonialVideoCarousel />
        </div>
      </section>

      {/* Therapy Showcase Section */}
      <section className="py-16 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Our Signature Therapies</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Experience authentic Ayurvedic treatments performed by experienced practitioners in our therapy rooms
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img 
                src="/images/slide_1_abhyanga_massage_generated.webp" 
                alt="Abhyanga - Traditional Oil Massage"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <p className="text-sm font-semibold text-primary mb-1">Traditional Oil Massage</p>
                <h3 className="text-2xl font-bold text-foreground mb-3">Abhyanga</h3>
                <p className="text-muted-foreground">Deep therapeutic full-body oil massage using medicated oils tailored to your dosha. Improves circulation, nourishes tissues, and calms the nervous system.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img 
                src="/images/slide_2_shirodhara_therapy_generated.webp" 
                alt="Shirodhara - Therapeutic Oil Pouring"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <p className="text-sm font-semibold text-primary mb-1">Therapeutic Oil Pouring</p>
                <h3 className="text-2xl font-bold text-foreground mb-3">Shirodhara</h3>
                <p className="text-muted-foreground">Warm medicated oil flows continuously onto the forehead, deeply calming the mind and nervous system. Excellent for anxiety, insomnia, and mental clarity.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img 
                src="/images/slide_3_marma_point_therapy_generated.webp" 
                alt="Marma Point Therapy - Energy Point Healing"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <p className="text-sm font-semibold text-primary mb-1">Energy Point Healing</p>
                <h3 className="text-2xl font-bold text-foreground mb-3">Marma Point Therapy</h3>
                <p className="text-muted-foreground">Precise stimulation of vital energy points (marmas) to balance the body's energy channels and promote holistic healing.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img 
                src="/images/slide_4_panchakarma_prep_generated.jpg" 
                alt="Panchakarma Treatment Preparation"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 bg-white">
                <p className="text-sm font-semibold text-primary mb-1">Pre-Treatment Consultation</p>
                <h3 className="text-2xl font-bold text-foreground mb-3">Panchakarma Preparation</h3>
                <p className="text-muted-foreground">Comprehensive assessment and preparation ensuring optimal results from your Panchakarma treatment. Includes dietary guidance and lifestyle recommendations.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/panchakarma-programs">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Explore All Panchakarma Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Links */}
      <section className="py-10 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mt-8">
            <Link href="/testimonials">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                View All Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Treatment Comparison Chart with Filters */}
      <FilteredTreatmentChart />

      {/* Program Options */}
      <section className="py-10 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-8 text-center">Customized Treatment Programs</h2>

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
      <div className="py-10 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <SearchableFAQ />
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
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
      <footer className="bg-foreground text-white py-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/images/dr_kalyan_logo_final_07bd8e78.png" alt="Logo" className="h-6 w-6 invert" />
                <span className="font-bold text-sm">Ayurveda Wellness</span>
              </div>
              <p className="text-white/70 text-xs leading-relaxed">
                Authentic Ayurvedic healing for chronic diseases, wellness optimization, and natural transformation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition-colors">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Treatment Areas</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><Link href="/treatments" className="hover:text-white transition-colors">Panchakarma</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Chronic Diseases</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Mental Health</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Fertility</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Contact</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><a href="mailto:contact@drkalyanayurveda.com" className="hover:text-white">contact@drkalyanayurveda.com</a></li>
                <li><a href="tel:+919281332544" className="hover:text-white">+91 92813 32544</a></li>
                <li className="text-xs leading-snug">Flat No.102, Plot No.309, Near Volkswagen Service Centre, Prashanth Hills Colony, Raidurg Navkhalsa</li>
                <li>8:00 AM - 1:00 PM | 5:00 PM - 9:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-6 pt-4 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/70 text-xs text-center md:text-left">&copy; 2026 Dr. Kalyan Ayurveda. All rights reserved.</p>
            <SocialMediaLinks variant="footer" size="sm" />
          </div>
        </div>
      </footer>
    </div>
  );
}
