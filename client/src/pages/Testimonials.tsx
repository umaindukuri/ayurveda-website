import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { Link } from "wouter";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "California, USA",
      condition: "Unexplained Infertility (3 years)",
      story: "After 3 years of trying to conceive with no medical explanation, I was losing hope. I completed a 21-day Panchakarma program and within 6 months, I conceived naturally. The personalized approach, daily treatments, and lifestyle guidance made all the difference. I'm now 8 months pregnant and feeling healthier than ever.",
      rating: 5,
      highlight: "Conceived naturally after 3 years"
    },
    {
      name: "Priya &amp; Raj",
      location: "New York, USA",
      condition: "Multiple IVF Failures",
      story: "We had failed two IVF cycles and were emotionally exhausted. We decided to try Panchakarma alongside our third IVF attempt. The combination of Uttara Basti, Nasya, and personalized nutrition transformed our health. Our third IVF succeeded, and we now have a beautiful 2-year-old daughter. The Ayurvedic approach gave us hope when we needed it most.",
      rating: 5,
      highlight: "Successful IVF after Panchakarma support"
    },
    {
      name: "Emma T.",
      location: "London, UK",
      condition: "PCOS &amp; Hormonal Imbalance",
      story: "Diagnosed with PCOS and irregular cycles, I was skeptical about Ayurveda. But the 14-day program restored my cycle regularity within 2 months. My hormones balanced, my energy returned, and I conceived naturally 6 months later. The doctor's expertise in PCOS management was incredible—she understood my condition deeply.",
      rating: 5,
      highlight: "PCOS resolved, natural conception"
    },
    {
      name: "Michael K.",
      location: "Texas, USA",
      condition: "Low Sperm Count &amp; Motility",
      story: "My sperm count was 5 million/ml with poor motility. After a 14-day Panchakarma program focused on male fertility (Yapana Basti, Nasya, and Rasayana), my count increased to 35 million/ml with improved motility. My wife conceived naturally 3 months after my treatment. The doctor's knowledge of male fertility was exceptional.",
      rating: 5,
      highlight: "Sperm count increased 7x, natural conception"
    },
    {
      name: "Lisa &amp; James",
      location: "Australia",
      condition: "Secondary Infertility &amp; Stress",
      story: "After having our first child easily, we struggled for 4 years to conceive again. The stress was affecting our relationship. The Panchakarma program not only addressed our physical imbalances but also healed our emotional stress through yoga, meditation, and counseling. We conceived naturally and welcomed our second child. The holistic approach was transformative.",
      rating: 5,
      highlight: "Healed stress, natural conception after 4 years"
    },
    {
      name: "Ananya D.",
      location: "India",
      condition: "Endometriosis &amp; Severe Pain",
      story: "I suffered from severe endometriosis pain and was told I might not conceive. The 21-day Panchakarma program with specialized Uttara Basti treatments reduced my pain significantly. My cycles became regular, and I conceived naturally within 8 months. I'm now 6 months pregnant and pain-free. The doctor's compassion and expertise gave me my life back.",
      rating: 5,
      highlight: "Endometriosis pain resolved, natural conception"
    },
    {
      name: "Robert &amp; Susan",
      location: "Canada",
      condition: "Age-Related Infertility (42 &amp; 44)",
      story: "At 42 and 44, we thought our fertility window had closed. We tried one Panchakarma program together and were amazed at the results. Within 4 months, Susan conceived naturally. The doctor's expertise in age-related fertility was remarkable—she optimized our health despite our age. We're now expecting our first child.",
      rating: 5,
      highlight: "Natural conception at 42 &amp; 44"
    },
    {
      name: "Deepa M.",
      location: "Singapore",
      condition: "Recurrent Miscarriages (3 losses)",
      story: "After three miscarriages, I was devastated. The doctor identified underlying Vata imbalance and weak digestive fire affecting my ability to sustain pregnancy. A 21-day Panchakarma program with post-conception support protocols helped me carry my pregnancy to term successfully. I now have a healthy 1-year-old son. The preventive approach was life-changing.",
      rating: 5,
      highlight: "Successful pregnancy after 3 miscarriages"
    }
  ];

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
            <Link href="/testimonials" className="text-sm font-medium text-primary font-semibold">Testimonials</Link>
            <Button className="bg-primary hover:bg-primary/90 text-white">Book Consultation</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container max-w-4xl text-center">
          <h1 className="text-5xl font-playfair font-bold text-foreground mb-4">Patient Success Stories</h1>
          <p className="text-xl text-muted-foreground">
            Real transformations from patients who have restored their fertility and achieved their dreams of parenthood.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-playfair font-bold text-primary mb-2">2000+</p>
              <p className="text-muted-foreground">Patients Treated</p>
            </div>
            <div>
              <p className="text-4xl font-playfair font-bold text-secondary mb-2">70-80%</p>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div>
              <p className="text-4xl font-playfair font-bold text-primary mb-2">20+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-playfair font-bold text-secondary mb-2">500+</p>
              <p className="text-muted-foreground">Babies Born</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.location}</CardDescription>
                    </div>
                    <div className="flex gap-0.5">
                      {Array(testimonial.rating).fill(0).map((_, i) => (
                        <span key={i} className="text-primary text-lg">★</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded px-3 py-1 inline-block">
                    <p className="text-xs font-semibold text-primary">{testimonial.condition}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic">"{testimonial.story}"</p>
                  <div className="bg-secondary/5 border-l-4 border-secondary rounded px-3 py-2">
                    <p className="text-sm font-semibold text-foreground">
                      ✓ {testimonial.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-16 text-center">Why Our Patients Succeed</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Personalized Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every patient receives a customized treatment plan based on their unique constitution (Prakriti), current imbalances (Vikriti), and specific fertility challenges. We don't follow one-size-fits-all protocols.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Root Cause Treatment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rather than treating symptoms, we identify and address the underlying imbalances causing infertility. This leads to lasting results and improved overall health.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Holistic Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                We combine Panchakarma therapies with personalized nutrition, yoga, meditation, stress management, and lifestyle coaching for complete mind-body-spirit healing.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Compassionate Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand the emotional journey of infertility. Our approach includes emotional counseling, stress reduction, and spiritual guidance alongside physical treatments.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Evidence-Based Protocols</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our treatments are grounded in 5,000 years of Ayurvedic wisdom and supported by modern research. Success rates of 70-80% for specific therapies like Uttara Basti.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Complementary Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether seeking natural conception or supporting IVF/ART, our protocols enhance your fertility journey. We work alongside modern medicine, not against it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">Your Success Story Starts Here</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of patients who have restored their fertility and achieved their dreams of parenthood. Schedule your personalized consultation today.
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
