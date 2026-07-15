import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Flame, Droplets } from "lucide-react";

export default function AyurvediaBasics() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-20 px-4">
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
            <Link href="/ayurveda-basics" className="text-sm font-medium text-primary font-semibold">Ayurveda Basics</Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Testimonials</Link>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white text-sm px-6 flex-shrink-0">Book Consultation</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Ayurveda Basics</h1>
          <p className="text-xl text-muted-foreground">
            Understanding the ancient science of life and health
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container max-w-4xl space-y-12">
          
          {/* The Three Doshas */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">The Three Doshas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Vata */}
              <Card>
                <CardHeader>
                  <Wind className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Vata (Air & Space)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Governs:</h4>
                    <p className="text-sm text-muted-foreground">Movement, circulation, nervous system, and creativity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">When Balanced:</h4>
                    <p className="text-sm text-muted-foreground">Creative, energetic, flexible, and adaptable</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">When Imbalanced:</h4>
                    <p className="text-sm text-muted-foreground">Anxiety, insomnia, dry skin, joint pain, restlessness</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Balance With:</h4>
                    <p className="text-sm text-muted-foreground">Warm foods, oil massage, routine, grounding practices</p>
                  </div>
                </CardContent>
              </Card>

              {/* Pitta */}
              <Card>
                <CardHeader>
                  <Flame className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Pitta (Fire & Water)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Governs:</h4>
                    <p className="text-sm text-muted-foreground">Metabolism, digestion, transformation, and intelligence</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">When Balanced:</h4>
                    <p className="text-sm text-muted-foreground">Intelligent, focused, courageous, and confident</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">When Imbalanced:</h4>
                    <p className="text-sm text-muted-foreground">Inflammation, heartburn, anger, skin issues, perfectionism</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Balance With:</h4>
                    <p className="text-sm text-muted-foreground">Cool foods, meditation, moderation, cooling practices</p>
                  </div>
                </CardContent>
              </Card>

              {/* Kapha */}
              <Card>
                <CardHeader>
                  <Droplets className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Kapha (Earth & Water)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Governs:</h4>
                    <p className="text-sm text-muted-foreground">Structure, stability, immunity, and lubrication</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">When Balanced:</h4>
                    <p className="text-sm text-muted-foreground">Calm, strong, compassionate, and stable</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">When Imbalanced:</h4>
                    <p className="text-sm text-muted-foreground">Weight gain, sluggishness, congestion, depression</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Balance With:</h4>
                    <p className="text-sm text-muted-foreground">Stimulating foods, exercise, variety, warming practices</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* The Five Elements */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">The Five Elements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ether (Space)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Represents vastness, potential, and consciousness. Governs sound, communication, and expansion. Associated with Vata dosha.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Air (Wind)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Represents movement, circulation, and flexibility. Governs all motion in the body. Associated with Vata dosha.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Fire</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Represents transformation, metabolism, and digestion. Governs all chemical processes. Associated with Pitta dosha.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Water</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Represents lubrication, flow, and emotions. Governs all fluids in the body. Associated with Pitta and Kapha doshas.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Earth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Represents structure, stability, and grounding. Governs bones, tissues, and form. Associated with Kapha dosha.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Concepts */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Key Ayurvedic Concepts</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Agni (Digestive Fire)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Agni is the metabolic fire that transforms food into energy and nutrients. Strong Agni means good digestion, strong immunity, and vitality. Weak Agni leads to toxin accumulation and disease. Agni is balanced through proper diet, spices, meal timing, and lifestyle practices.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ama (Metabolic Toxins)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Ama represents undigested food residue that accumulates in the body when Agni is weak. This toxic buildup is the root cause of most chronic diseases. Ama is eliminated through Panchakarma detoxification and prevented through healthy digestion and lifestyle choices.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ojas (Vital Essence)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Ojas is the finest product of digestion and represents immunity, vitality, and longevity. It is depleted by stress, poor diet, excessive work, and negative emotions. Ojas is restored through Rasayana (rejuvenation) therapy, healthy lifestyle, and positive practices.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Principles */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Core Principles</h2>
            <div className="bg-primary/5 rounded-lg p-8 space-y-4">
              <div>
                <h3 className="font-bold text-foreground mb-2">1. Like Increases Like</h3>
                <p className="text-muted-foreground">Similar qualities increase each other. Cold increases Vata, heat increases Pitta, heaviness increases Kapha.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">2. Opposites Balance</h3>
                <p className="text-muted-foreground">Opposite qualities balance each other. Warmth balances cold, lightness balances heaviness, dryness balances dampness.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">3. Individual Constitution</h3>
                <p className="text-muted-foreground">Each person has a unique dosha constitution determined at birth. Health comes from living in harmony with your constitution.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">4. Prevention is Cure</h3>
                <p className="text-muted-foreground">Maintaining balance through diet, lifestyle, and routine prevents disease. Treatment addresses root causes, not just symptoms.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-lg text-muted-foreground mb-6">
              Discover your unique dosha constitution and receive personalized wellness recommendations
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Schedule Your Dosha Assessment
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
              <h4 className="font-bold mb-4">Learn More</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ayurveda-cures">Ayurveda Cures</Link></li>
                <li><Link href="/ayurveda-basics">Ayurveda Basics</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
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
