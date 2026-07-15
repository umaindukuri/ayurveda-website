import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Droplets, Wind, Flame, Zap, Heart } from "lucide-react";
import { Link } from "wouter";
import { CompactHeader } from "@/components/CompactHeader";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <CompactHeader />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container max-w-4xl text-center">
          <h1 className="text-5xl font-playfair font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive Ayurvedic treatments and Panchakarma programs designed specifically for fertility enhancement and reproductive health.
          </p>
        </div>
      </section>

      {/* Panchakarma Overview */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">What is Panchakarma?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Panchakarma is Ayurveda prime detoxification and rejuvenation therapy—a comprehensive system of five purification procedures designed to remove deep-seated toxins (ama) from the body and restore balance to the doshas. For fertility, Panchakarma is transformative because it purifies reproductive tissues, removes environmental toxins, and creates an optimal environment for conception.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unlike single treatments, Panchakarma is a complete journey: preparation, main detoxification, and rejuvenation. Each stage is carefully monitored and adjusted based on your unique constitution (Prakriti) and current imbalances (Vikriti).
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Why Panchakarma for Fertility?</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Leaf className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>Removes Toxins:</strong> Eliminates fat-soluble and water-soluble toxins from reproductive tissues (50% reduction in fat-soluble toxins documented)</span>
              </li>
              <li className="flex gap-3">
                <Heart className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>Restores Balance:</strong> Harmonizes doshas to optimize hormonal function and reproductive health</span>
              </li>
              <li className="flex gap-3">
                <Droplets className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>Nourishes Tissues:</strong> Medicated oils and herbs deeply nourish Shukra Dhatu (reproductive tissue)</span>
              </li>
              <li className="flex gap-3">
                <Zap className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>Prepares for Conception:</strong> Creates ideal conditions for both pre-conception and pregnancy</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Signature Treatments */}
      <section className="py-20 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-16 text-center">Signature Treatments</h2>

          {/* Uttara Basti */}
          <div className="mb-16 bg-white rounded-lg border border-border p-8">
            <div className="flex gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Droplets className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-playfair font-bold text-foreground mb-2">Uttara Basti</h3>
                <p className="text-lg text-secondary font-semibold">Uterine Nourishment Therapy</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Uttara Basti is a specialized therapy that directly nourishes and rejuvenates the uterus and reproductive organs. Medicated oils are gently introduced into the uterine cavity, delivering healing herbs directly to the seat of fertility.
            </p>
            <div className="bg-secondary/5 border border-secondary/20 rounded p-4 mb-4">
              <p className="text-muted-foreground"><strong>Success Rate:</strong> 70-80% for gynecological and reproductive disorders</p>
            </div>
            <div className="space-y-2 mb-6">
              <p className="text-muted-foreground"><strong>Benefits:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Directly nourishes uterine tissues</li>
                <li>Balances hormonal function</li>
                <li>Improves egg quality and ovulation</li>
                <li>Supports pre-conception and pregnancy</li>
                <li>Addresses PCOS, fibroids, and endometriosis</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground italic">Typically performed over 7-14 days as part of a comprehensive Panchakarma program.</p>
          </div>

          {/* Nasya */}
          <div className="mb-16 bg-white rounded-lg border border-border p-8">
            <div className="flex gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Wind className="w-10 h-10 text-secondary" />
              </div>
              <div>
                <h3 className="text-3xl font-playfair font-bold text-foreground mb-2">Nasya</h3>
                <p className="text-lg text-primary font-semibold">Nasal Therapy for Hormonal Balance</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nasya is the administration of medicated oils through the nasal passages, directly reaching the brain and nervous system. This therapy is crucial for balancing hormones, reducing stress, and supporting reproductive health.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-muted-foreground"><strong>Benefits:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Balances Vata dosha and nervous system</li>
                <li>Harmonizes hormonal secretion</li>
                <li>Reduces stress and anxiety</li>
                <li>Improves mental clarity and focus</li>
                <li>Supports healthy menstrual cycles</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground italic">Often combined with other therapies for maximum fertility benefits.</p>
          </div>

          {/* Abhyanga */}
          <div className="mb-16 bg-white rounded-lg border border-border p-8">
            <div className="flex gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Flame className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-playfair font-bold text-foreground mb-2">Abhyanga</h3>
                <p className="text-lg text-secondary font-semibold">Full-Body Oil Massage</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Abhyanga is a deeply nourishing full-body massage using warm medicated oils. This foundational Panchakarma therapy prepares tissues for deeper detoxification while providing immediate relaxation and rejuvenation.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-muted-foreground"><strong>Benefits:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Nourishes all seven body tissues (Dhatus)</li>
                <li>Improves circulation and lymphatic flow</li>
                <li>Reduces inflammation and pain</li>
                <li>Calms Vata and promotes deep relaxation</li>
                <li>Enhances skin health and vitality</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground italic">Typically performed daily (60-90 minutes) during Panchakarma programs.</p>
          </div>

          {/* Shirodhara */}
          <div className="mb-16 bg-white rounded-lg border border-border p-8">
            <div className="flex gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-10 h-10 text-secondary" />
              </div>
              <div>
                <h3 className="text-3xl font-playfair font-bold text-foreground mb-2">Shirodhara</h3>
                <p className="text-lg text-primary font-semibold">Continuous Oil Flow Therapy</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shirodhara is a profound therapy where warm medicated oil is poured in a continuous stream over the forehead. This treatment deeply calms the nervous system and harmonizes the hypothalamic-pituitary axis—the master control center for reproductive hormones.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-muted-foreground"><strong>Benefits:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Deeply relaxes the nervous system</li>
                <li>Balances hormonal secretion</li>
                <li>Improves sleep quality</li>
                <li>Reduces stress and anxiety</li>
                <li>Enhances mental clarity and focus</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground italic">A deeply meditative experience that supports both physical and emotional well-being.</p>
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-16 text-center">Panchakarma Programs</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">7-Day Intensive</CardTitle>
                <CardDescription>Perfect for first-time experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Includes:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ Initial consultation &amp; assessment</li>
                    <li>✓ Daily Abhyanga massage</li>
                    <li>✓ Nasya therapy</li>
                    <li>✓ Herbal treatments</li>
                    <li>✓ Personalized diet &amp; lifestyle</li>
                  </ul>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">14-Day Fertility Program</CardTitle>
                <CardDescription>Most popular for fertility</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Includes:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ All 7-day benefits</li>
                    <li>✓ Uttara Basti (women)</li>
                    <li>✓ Yapana Basti (men)</li>
                    <li>✓ Extended detoxification</li>
                    <li>✓ Rejuvenation phase</li>
                  </ul>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Recommended</Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">21-Day Transformation</CardTitle>
                <CardDescription>Complete renewal &amp; healing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Includes:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ All 14-day benefits</li>
                    <li>✓ Extended rejuvenation</li>
                    <li>✓ Rasayana therapy</li>
                    <li>✓ Lifestyle coaching</li>
                    <li>✓ Follow-up support</li>
                  </ul>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">Ready to Begin?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every person is unique. Schedule a personalized consultation to determine which program is right for your fertility journey.
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
                <img src="/manus-storage/dr_kalyan_logo_final_07bd8e78.png" alt="Logo" className="h-8 w-8 invert" />
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
                <li>📞 <a href="tel:+919281332544" className="hover:text-white">+91 92813 32544</a></li>
                <li>📍 Flat No.102, Plot No.309, Near Volkswagen Service Centre, Prashanth Hills Colony, Raidurg Navkhalsa</li>
                <li>🕐 8:00 AM - 1:00 PM | 5:00 PM - 9:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
          </div>
        </div>
      </footer>
    </div>
  );
}
