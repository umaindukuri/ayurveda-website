import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Heart, Droplets, Award, BookOpen, Users } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/manus-storage/ayurveda_logo_30556739.png" alt="Ayurveda Fertility Clinic" className="h-10 w-10" />
            <span className="font-playfair text-xl font-bold text-primary">Ayurveda Fertility</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="/about" className="text-sm font-medium text-primary font-semibold">About</Link>
            <Link href="/testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Testimonials</Link>
            <Button className="bg-primary hover:bg-primary/90 text-white">Book Consultation</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container max-w-4xl text-center">
          <h1 className="text-5xl font-playfair font-bold text-foreground mb-4">About Our Doctor</h1>
          <p className="text-xl text-muted-foreground">
            Meet the compassionate healer dedicated to restoring your fertility through authentic Ayurvedic wisdom.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/manus-storage/ayurveda_treatment_604e7957.png" 
                alt="Dr. Ayurveda Fertility Specialist" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-playfair font-bold text-foreground mb-2">Dr. Ayurveda Fertility Specialist</h2>
              <p className="text-lg text-secondary font-semibold mb-6">Certified Ayurvedic Practitioner &amp; Fertility Expert</p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over 20 years of dedicated practice in Ayurvedic medicine and reproductive health, Dr. Ayurveda brings deep expertise in Panchakarma protocols, fertility enhancement, and holistic wellness. Certified in traditional Ayurvedic medicine (BAMS degree) with specialized training in gynecological and male reproductive health.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Dr. Ayurveda's approach is rooted in the belief that true healing comes from understanding each person's unique constitution and addressing the root causes of imbalance. Rather than treating symptoms, the practice focuses on restoring harmony to the body, mind, and spirit—creating the optimal conditions for fertility and lifelong wellness.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">BAMS Degree</h4>
                    <p className="text-sm text-muted-foreground">Bachelor of Ayurvedic Medicine and Surgery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Specialized Training</h4>
                    <p className="text-sm text-muted-foreground">Panchakarma, Gynecology, and Reproductive Health</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">20+ Years Experience</h4>
                    <p className="text-sm text-muted-foreground">Thousands of patients successfully treated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground">
              A holistic approach to fertility grounded in ancient wisdom and modern compassion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle>Root Cause Healing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We don't treat symptoms; we identify and address the underlying imbalances causing infertility. This approach leads to lasting, transformative results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-secondary mx-auto mb-2" />
                <CardTitle>Personalization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every person is unique. We create individualized treatment plans based on your specific constitution, imbalances, and fertility goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Droplets className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle>Holistic Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fertility is not just physical. We integrate nutrition, lifestyle, stress management, yoga, and meditation for complete mind-body-spirit healing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-16 text-center">Areas of Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Women's Fertility</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>PCOS and hormonal imbalance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Irregular or absent menstrual cycles</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Endometriosis and fibroids</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Egg quality and ovulation support</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Pre-conception and pregnancy support</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Recurrent miscarriage prevention</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Men's Fertility</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Low sperm count and motility</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Sperm morphology improvement</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Sexual dysfunction and vitality</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Hormonal balance (testosterone)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Pre-conception detoxification</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Stress and lifestyle optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Complementary Care</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Support alongside IVF/ART treatments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Enhanced success rates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Reduced side effects</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Improved egg and sperm quality</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Emotional and stress support</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Post-treatment recovery</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">General Wellness</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Stress and anxiety management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Sleep and digestion optimization</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Weight management and metabolism</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Immune system strengthening</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Chronic disease management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Preventive health and longevity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-16 text-center">Why Choose Our Clinic?</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                Thousands of patients have successfully restored their fertility and achieved natural conception through our personalized Panchakarma programs. Success rates of 70-80% for specific treatments like Uttara Basti.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Authentic Ayurveda</h3>
              <p className="text-muted-foreground">
                We practice traditional Ayurveda grounded in 5,000 years of wisdom, combined with modern understanding of reproductive physiology. No shortcuts, no compromises—only authentic, time-tested protocols.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Personalized Care</h3>
              <p className="text-muted-foreground">
                Every treatment plan is uniquely designed for your constitution and needs. We don't follow one-size-fits-all protocols; we listen, assess, and create a path tailored to your fertility journey.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Compassionate Support</h3>
              <p className="text-muted-foreground">
                We understand the emotional journey of infertility. Our approach integrates stress management, emotional support, and spiritual guidance alongside physical treatments for complete healing.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Complementary Integration</h3>
              <p className="text-muted-foreground">
                Whether you're seeking natural conception or supporting IVF/ART treatments, our protocols enhance your overall fertility journey. We work alongside modern medicine, not against it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">Ready to Begin Your Healing?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a personalized consultation with Dr. Ayurveda to discuss your fertility goals and create your customized treatment plan.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
            Book Your Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/manus-storage/ayurveda_logo_30556739.png" alt="Logo" className="h-8 w-8 invert" />
                <span className="font-playfair font-bold">Ayurveda Fertility</span>
              </div>
              <p className="text-white/70">
                Restoring fertility naturally through authentic Ayurvedic healing and personalized Panchakarma treatments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/services" className="hover:text-white transition-colors">Panchakarma</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Fertility Programs</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Consultations</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Workshops</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li>📧 info@ayurvedafertility.com</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>📍 123 Wellness Lane, Healing City</li>
                <li>🕐 Mon-Fri: 9am-6pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2026 Ayurveda Fertility Clinic. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
