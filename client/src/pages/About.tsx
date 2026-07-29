import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Heart, Droplets, Award, BookOpen, Users } from "lucide-react";
import { Link } from "wouter";
import { CompactHeader } from "@/components/CompactHeader";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
    <SEO title="About Dr. Kalyan" description="Meet Dr. Kalyan, a leading Ayurvedic physician in Hyderabad with expertise in Panchakarma, chronic disease management, and holistic wellness." keywords="Dr Kalyan Ayurveda, Ayurvedic doctor Hyderabad, Panchakarma specialist" url="/about" />
      <CompactHeader />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">About Our Clinic</h1>
          <p className="text-xl text-muted-foreground">
            Authentic Ayurvedic healing for chronic diseases, wellness optimization, and natural transformation.
          </p>
        </div>
      </section>

      {/* Clinic Overview */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/images/pasted_file_qJnmC3_image_3ff4f246.png" 
                alt="Dr. I. Kalyan Chakravarthy, M.D. (Ayurveda)" 
                className="rounded-lg shadow-lg border-4 border-primary/20"
              />
              <p className="text-center text-sm text-muted-foreground mt-4 font-semibold">Dr. I. Kalyan Chakravarthy, M.D. (Ayurveda)</p>
              <p className="text-center text-xs text-muted-foreground">Founder & Chief Ayurvedic Physician</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Dr. Kalyan's Ayurveda Specialities & Panchakarma Center</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Under the expert guidance of <strong>Dr. I. Kalyan Chakravarthy, M.D. (Ayurveda)</strong>, our clinic is dedicated to providing authentic, evidence-based Ayurvedic treatment for chronic diseases, fertility enhancement, and complete wellness optimization. With specialized expertise in Panchakarma detoxification, we offer comprehensive treatment programs for every health condition.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our clinic treats the whole spectrum of health concerns—from arthritis and diabetes to anxiety, skin conditions, and fertility. We combine traditional Ayurvedic wisdom with personalized care to address root causes, not just symptoms, leading to lasting healing and transformation.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Dr. I. Kalyan Chakravarthy, M.D. (Ayurveda)</h4>
                    <p className="text-sm text-muted-foreground">Certified Ayurvedic physician with specialized expertise in Panchakarma and fertility treatments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">5,000+ Patients</h4>
                    <p className="text-sm text-muted-foreground">Successfully treated for diverse conditions with 70-80% success rates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">20+ Years Experience</h4>
                    <p className="text-sm text-muted-foreground">Deep expertise in Panchakarma, chronic disease management, and holistic wellness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground">
              A holistic approach to healing grounded in ancient wisdom and modern compassion.
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
                  We don't treat symptoms; we identify and address the underlying imbalances causing disease. This approach leads to lasting, transformative results.
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
                  Every person is unique. We create individualized treatment plans based on your specific constitution, imbalances, and health goals.
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
                  We integrate Panchakarma, nutrition, lifestyle, stress management, yoga, and meditation for complete mind-body-spirit healing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Spectrum */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-16 text-center">Our Treatment Spectrum</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Chronic Disease Management</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Arthritis &amp; Joint Pain</li>
                <li>✓ Type 2 Diabetes &amp; Metabolic Disorders</li>
                <li>✓ Hypertension &amp; Heart Disease</li>
                <li>✓ Autoimmune Disorders</li>
                <li>✓ Chronic Fatigue &amp; Fibromyalgia</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Digestive &amp; Respiratory</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ IBS &amp; Inflammatory Bowel Disease</li>
                <li>✓ Acid Reflux &amp; GERD</li>
                <li>✓ Asthma &amp; Bronchitis</li>
                <li>✓ Allergies &amp; Sinusitis</li>
                <li>✓ Weight Management &amp; Metabolism</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Mental Health &amp; Skin</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Anxiety &amp; Depression</li>
                <li>✓ Insomnia &amp; Sleep Disorders</li>
                <li>✓ Stress &amp; Burnout</li>
                <li>✓ Eczema &amp; Psoriasis</li>
                <li>✓ Acne &amp; Skin Conditions</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Fertility &amp; Wellness</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Fertility &amp; Reproductive Health</li>
                <li>✓ Hormonal Balance &amp; Menopause</li>
                <li>✓ Rejuvenation &amp; Anti-Aging</li>
                <li>✓ Preventive Health &amp; Longevity</li>
                <li>✓ General Wellness Optimization</li>
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
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Proven Results Across All Conditions</h3>
              <p className="text-muted-foreground">
                Thousands of patients have successfully recovered from conditions modern medicine couldn't resolve. Success rates of 70-80% for specific treatments like Panchakarma.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Authentic Ayurveda</h3>
              <p className="text-muted-foreground">
                We practice traditional Ayurveda grounded in 5,000 years of wisdom, combined with modern understanding of disease. No shortcuts, no compromises—only authentic, time-tested protocols.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Comprehensive Approach</h3>
              <p className="text-muted-foreground">
                Unlike specialists who focus on one condition, we treat the whole person. Whether you have arthritis, diabetes, anxiety, or fertility issues, we address your complete health picture.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Personalized Care</h3>
              <p className="text-muted-foreground">
                Every treatment plan is uniquely designed for your constitution and needs. We don't follow one-size-fits-all protocols; we listen, assess, and create a path tailored to your healing journey.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Complementary Integration</h3>
              <p className="text-muted-foreground">
                Whether you're seeking natural healing or supporting conventional treatments, our protocols enhance your overall wellness journey. We work alongside modern medicine, not against it.
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
            Schedule a personalized consultation with our experienced practitioners to discuss your health concerns and create your customized treatment plan.
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
                <img src="/images/dr_kalyan_logo_final_07bd8e78.png" alt="Logo" className="h-8 w-8 invert" />
                <span className="font-playfair font-bold">Ayurveda Wellness</span>
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
