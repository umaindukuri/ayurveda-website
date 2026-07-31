import { SEO } from "@/components/SEO";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Leaf, Wind, Flame, Droplets, Brain, Zap, Award, ArrowRight, Star, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import { BookingModal } from "@/components/BookingModal";
import { CompactHeader } from "@/components/CompactHeader";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { getHeroUrl } from "@/lib/mediaUrl";

export default function Home() {
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const treatments = [
    { icon: Droplets, title: "Panchakarma Detox", description: "Deep cleansing through authentic 5-procedure detoxification", link: "/treatments/panchakarma" },
    { icon: Heart, title: "Chronic Diseases", description: "Natural healing for arthritis, diabetes, hypertension", link: "/treatments/chronic-diseases" },
    { icon: Leaf, title: "Digestive Health", description: "Restore digestive fire, heal IBS, improve metabolism", link: "/treatments/digestive-health" },
    { icon: Wind, title: "Respiratory Wellness", description: "Treat asthma, bronchitis, and allergies naturally", link: "/treatments/respiratory" },
    { icon: Flame, title: "Skin Conditions", description: "Heal eczema, psoriasis, acne from within", link: "/treatments/skin-health" },
    { icon: Brain, title: "Mental Health", description: "Manage anxiety, depression, insomnia naturally", link: "/treatments/mental-health" },
    { icon: Zap, title: "Fertility & Hormones", description: "Enhance fertility, balance hormones naturally", link: "/treatments/fertility" },
    { icon: Award, title: "Rejuvenation", description: "Rasayana therapy for longevity and vitality", link: "/treatments/rejuvenation" },
  ];

  const testimonials = [
    { name: "James M.", condition: "Rheumatoid Arthritis", quote: "After 10 years of joint pain, the 21-day Panchakarma program transformed my life. I'm now pain-free and active again.", rating: 5 },
    { name: "Maria S.", condition: "Type 2 Diabetes", quote: "My blood sugar levels normalized after just one program. The dietary guidance and herbal treatments gave me my health back.", rating: 5 },
    { name: "David K.", condition: "Chronic Anxiety", quote: "Shirodhara and meditation practices calmed my nervous system in ways medication never could. I feel genuinely peaceful.", rating: 5 },
  ];

  const stats = [
    { value: "3,000+", label: "Patients Healed" },
    { value: "25+", label: "Years Experience" },
    { value: "70-80%", label: "Success Rate" },
    { value: "5,000", label: "Years of Wisdom" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Dr. Kalyan Ayurveda Specialities & Panchakarma Center | Hyderabad"
        description="Restore your health naturally with authentic Ayurvedic Panchakarma and personalized wellness treatments in Hyderabad. 5,000 years of healing wisdom."
        keywords="Ayurveda Hyderabad, Panchakarma, fertility treatment, holistic healing, Dr Kalyan"
        url="/"
      />

      {/* Header */}
      <CompactHeader />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img
          src={getHeroUrl()}
          alt="Dr. Kalyan performing Nadi Pariksha pulse diagnosis with a patient"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent"></div>
        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 py-16">
          <div className="max-w-xs sm:max-w-sm md:max-w-lg">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
              Restore Your Health Naturally
            </h1>
            <p className="text-sm sm:text-base mb-6 font-light leading-relaxed text-white/90 drop-shadow-md">
              Discover the transformative power of authentic Ayurvedic Panchakarma and personalized wellness treatments rooted in 5,000 years of healing wisdom.
            </p>
            <div className="flex flex-wrap gap-3">
              <BookingModal triggerText="Begin Your Journey" variant="default" />
              <Link href="/treatments">
                <Button size="default" variant="outline" className="text-white border-white hover:bg-white/10 text-sm sm:text-base">
                  Explore Treatments
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-5">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/80 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ayurveda */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="container max-w-5xl px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">Why Choose Authentic Ayurveda?</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              While modern medicine treats symptoms, Ayurveda heals the root cause — restoring balance to prevent disease and optimize wellness.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Leaf className="w-9 h-9 text-primary mb-2" />
                <CardTitle className="text-base">Root Cause Healing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We identify and address the underlying imbalances causing disease — not just suppress symptoms — for lasting, transformative healing.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Heart className="w-9 h-9 text-secondary mb-2" />
                <CardTitle className="text-base">Holistic Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We treat the whole person — body, mind, and spirit. Panchakarma, nutrition, lifestyle, yoga, and meditation work together.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Award className="w-9 h-9 text-primary mb-2" />
                <CardTitle className="text-base">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Thousands of patients recovered from conditions modern medicine couldn't resolve. Success rates of 70–80% for specific treatments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-10 sm:py-12 bg-gray-50">
        <div className="container max-w-6xl px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-foreground mb-2">Our Treatment Specialities</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Authentic Ayurvedic solutions for every health concern.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {treatments.map((treatment, idx) => {
              const Icon = treatment.icon;
              return (
                <Link key={idx} href={treatment.link}>
                  <Card className="border-border hover:shadow-lg transition-all cursor-pointer h-full group">
                    <CardHeader className="pb-1 pt-4 px-3 sm:px-4">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-xs sm:text-sm leading-snug">{treatment.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-3 sm:px-4 pb-4">
                      <p className="text-xs text-muted-foreground mb-2 leading-relaxed hidden sm:block">{treatment.description}</p>
                      <div className="flex items-center gap-1 text-primary font-semibold text-xs mt-1">
                        Learn More <ArrowRight className="w-3 h-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-6">
            <Link href="/treatments">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Treatments
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Panchakarma Teaser */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="container max-w-5xl px-4">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-5 sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-foreground mb-3">
                  The Heart of Ayurvedic Healing: Panchakarma
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed">
                  A comprehensive 5-procedure detoxification that gently yet profoundly cleanses the body of metabolic residue. Available as 7-day, 14-day, and 21-day programs tailored to your condition.
                </p>
                <Link href="/panchakarma-programs">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Explore Panchakarma Programs
                  </Button>
                </Link>
              </div>
              <div className="flex flex-row md:flex-col gap-3 flex-wrap md:min-w-[160px]">
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><Leaf className="w-4 h-4 text-primary flex-shrink-0" /> Removes toxins</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><Heart className="w-4 h-4 text-secondary flex-shrink-0" /> Restores dosha balance</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><Zap className="w-4 h-4 text-primary flex-shrink-0" /> Rejuvenates tissues</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><Brain className="w-4 h-4 text-secondary flex-shrink-0" /> Heals the mind</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-10 sm:py-12 bg-gray-50">
        <div className="container max-w-5xl px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-foreground mb-2">Patient Success Stories</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Real healing journeys from our patients.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-border shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-primary">{t.condition}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/testimonials">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Read More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 bg-primary">
        <div className="container max-w-3xl text-center px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-white mb-4">Begin Your Healing Journey</h2>
          <p className="text-sm sm:text-base text-white/80 mb-6 max-w-xl mx-auto">
            Schedule a personalized consultation to discuss your health concerns and create your customized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookingModal triggerText="Book Your Consultation" variant="default" className="bg-white text-primary hover:bg-white/90" />
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-5 bg-foreground text-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-sm">
            <a href="tel:+919281332544" className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 92813 32544</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Clock className="w-4 h-4 text-primary" />
              <span>8 AM–1 PM · 5 PM–9 PM</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Raidurg, Hyderabad</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8 border-t border-white/10">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="col-span-2 md:col-span-1">
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
                <li><Link href="/treatments/panchakarma" className="hover:text-white transition-colors">Panchakarma</Link></li>
                <li><Link href="/treatments/chronic-diseases" className="hover:text-white transition-colors">Chronic Diseases</Link></li>
                <li><Link href="/treatments/mental-health" className="hover:text-white transition-colors">Mental Health</Link></li>
                <li><Link href="/treatments/fertility" className="hover:text-white transition-colors">Fertility</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Contact</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><a href="mailto:contact@drkalyanayurveda.com" className="hover:text-white">contact@drkalyanayurveda.com</a></li>
                <li><a href="tel:+919281332544" className="hover:text-white">+91 92813 32544</a></li>
                <li className="leading-snug">Prashanth Hills Colony, Raidurg, Hyderabad</li>
                <li>8:00 AM–1:00 PM | 5:00 PM–9:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/70 text-xs text-center sm:text-left">&copy; 2026 Dr. Kalyan Ayurveda. All rights reserved.</p>
            <SocialMediaLinks variant="footer" size="sm" />
          </div>
        </div>
      </footer>
    </div>
  );
}
