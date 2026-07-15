import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Heart, Droplets, Wind, Flame, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
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
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Testimonials</Link>
            <Button className="bg-primary hover:bg-primary/90 text-white">Book Consultation</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="/manus-storage/hero_meditation_c1072b81.png" 
          alt="Serene meditation sanctuary" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
        <div className="relative z-10 container max-w-2xl text-white">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight">
              Restore Your Fertility Naturally
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Discover the transformative power of authentic Ayurvedic Panchakarma and personalized fertility treatments rooted in 5,000 years of healing wisdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
                Begin Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ayurveda Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Why Ayurveda for Fertility?
            </h2>
            <p className="text-lg text-muted-foreground">
              Ayurveda approaches fertility holistically, addressing the root causes of reproductive imbalance through personalized detoxification, nourishment, and rejuvenation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Droplets className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle>Detoxification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Panchakarma removes deep-seated toxins from reproductive tissues, creating a pure foundation for conception.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-secondary mx-auto mb-2" />
                <CardTitle>Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We restore balance to your doshas (Vata, Pitta, Kapha), harmonizing hormones and reproductive health.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle>Rejuvenation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized herbs and therapies nourish and strengthen reproductive tissues for optimal fertility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-20 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Our Signature Treatments
            </h2>
            <p className="text-lg text-muted-foreground">
              Personalized Panchakarma protocols designed specifically for reproductive health and fertility enhancement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Uttara Basti */}
            <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">Uttara Basti</h3>
                  <p className="text-muted-foreground mb-4">
                    Specialized uterine therapy that directly nourishes reproductive tissues and balances gynecological health. Success rate: 70-80%.
                  </p>
                  <Link href="/services" className="text-primary font-medium hover:underline">Learn more →</Link>
                </div>
              </div>
            </div>

            {/* Nasya */}
            <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Wind className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">Nasya</h3>
                  <p className="text-muted-foreground mb-4">
                    Nasal therapy that balances hormones and supports the nervous system, crucial for reproductive wellness.
                  </p>
                  <Link href="/services" className="text-primary font-medium hover:underline">Learn more →</Link>
                </div>
              </div>
            </div>

            {/* Abhyanga */}
            <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Flame className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">Abhyanga</h3>
                  <p className="text-muted-foreground mb-4">
                    Full-body oil massage with medicated oils that nourishes tissues, improves circulation, and promotes deep relaxation.
                  </p>
                  <Link href="/services" className="text-primary font-medium hover:underline">Learn more →</Link>
                </div>
              </div>
            </div>

            {/* Shirodhara */}
            <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">Shirodhara</h3>
                  <p className="text-muted-foreground mb-4">
                    Continuous oil flow over the forehead that calms the nervous system and harmonizes hormonal balance.
                  </p>
                  <Link href="/services" className="text-primary font-medium hover:underline">Learn more →</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Explore All Treatments
            </Button>
          </div>
        </div>
      </section>

      {/* Panchakarma Process */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              The Panchakarma Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Five stages of purification designed to detoxify and rejuvenate your body for optimal fertility.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-border overflow-hidden">
            <img 
              src="/manus-storage/panchakarma_process_3fb0c03d.png" 
              alt="Panchakarma 5-stage process" 
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-5 gap-4 mt-8">
            {['Oleation', 'Fomentation', 'Main Detox', 'Rejuvenation', 'Restoration'].map((stage, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 font-bold">
                  {idx + 1}
                </div>
                <p className="font-medium text-foreground">{stage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/manus-storage/ayurveda_treatment_604e7957.png" 
                alt="Ayurvedic treatment" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
                Meet Your Doctor
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 20 years of dedicated practice in Ayurvedic medicine and reproductive health, our doctor brings deep expertise in Panchakarma protocols and fertility enhancement. Certified in traditional Ayurvedic medicine with specialized training in gynecological and male reproductive health.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Certified Ayurvedic Practitioner</h4>
                    <p className="text-sm text-muted-foreground">BAMS degree with 20+ years clinical experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Fertility Specialist</h4>
                    <p className="text-sm text-muted-foreground">Specialized training in reproductive health and Panchakarma</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Holistic Approach</h4>
                    <p className="text-sm text-muted-foreground">Personalized treatment plans addressing root causes</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Learn More About Our Doctor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Patient Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Real transformations from patients who have restored their fertility through our Ayurvedic protocols.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                location: "California",
                story: "After 3 years of trying, I completed a 21-day Panchakarma program. Within 6 months, I conceived naturally. The personalized approach and holistic care made all the difference.",
                rating: 5
              },
              {
                name: "Priya & Raj",
                location: "New York",
                story: "Both of us underwent pre-conception purification. The combination of Uttara Basti, Nasya, and lifestyle guidance helped us achieve natural conception after IVF failures.",
                rating: 5
              },
              {
                name: "Emma T.",
                location: "London",
                story: "Diagnosed with PCOS and hormonal imbalance, I was skeptical about Ayurveda. The 14-day program restored my cycle regularity and I'm now pregnant with my first child.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.location}</CardDescription>
                    </div>
                    <div className="flex gap-1">
                      {Array(testimonial.rating).fill(0).map((_, i) => (
                        <span key={i} className="text-primary">★</span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
            Ready to Begin Your Fertility Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a personalized consultation with our Ayurvedic fertility specialist. We'll assess your unique constitution and create a customized treatment plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
              Book Your Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Schedule a Free Call
            </Button>
          </div>
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
