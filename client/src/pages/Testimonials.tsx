import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { CompactHeader } from "@/components/CompactHeader";

export default function Testimonials() {
  const testimonials = [
    {
      name: "James M.",
      location: "California, USA",
      condition: "Rheumatoid Arthritis (10 years)",
      story: "After 10 years of joint pain and limited mobility, I was losing hope. The 21-day Panchakarma program transformed my life. I'm now pain-free, active again, and off most medications. The holistic approach addressed the root cause, not just symptoms.",
      rating: 5,
      highlight: "Pain-free after 10 years of suffering",
      image: "/images/treatment_chronic_disease_62ef6750.png"
    },
    {
      name: "Maria S.",
      location: "New York, USA",
      condition: "Type 2 Diabetes",
      story: "My blood sugar levels were completely out of control despite medication. After one 14-day program, my glucose normalized. The dietary guidance and herbal treatments gave me my health back. I'm now off insulin and managing naturally.",
      rating: 5,
      highlight: "Blood sugar normalized, off insulin",
      image: "/images/treatment_digestive_health_866aa1e8.png"
    },
    {
      name: "David K.",
      location: "London, UK",
      condition: "Chronic Anxiety & Insomnia",
      story: "Years of anxiety and sleepless nights were destroying my life. Shirodhara and meditation practices calmed my nervous system in ways medication never could. I now sleep deeply and feel genuinely peaceful for the first time in years.",
      rating: 5,
      highlight: "Anxiety resolved, sleeping peacefully",
      image: "/images/treatment_mental_health_d3e27509.png"
    },
    {
      name: "Lisa T.",
      location: "Toronto, Canada",
      condition: "Severe Eczema",
      story: "My skin was covered in painful eczema that no dermatologist could help. My skin cleared completely within 2 months of treatment. The holistic approach addressed the root cause—internal inflammation—not just symptoms.",
      rating: 5,
      highlight: "Severe eczema completely cleared",
      image: "/images/treatment_skin_health_e6507ce9.png"
    },
    {
      name: "Sneha P.",
      location: "Mumbai, India",
      condition: "Hormonal & Fertility",
      story: "Against all odds, after 3 years of infertility and multiple failed treatments, I discovered Dr. Kalyan's Ayurvedic approach. The personalized Panchakarma program combined with Uttara Basti treatments balanced my hormones naturally. I conceived naturally within 4 months and now have a beautiful healthy baby. This journey taught me that sometimes the ancient wisdom works better than modern medicine.",
      rating: 5,
      highlight: "Natural conception after 3 years of infertility",
      image: "/images/sneha-fertility-thumb-final_25d16e8c.png"
    },
    {
      name: "Robert & Susan",
      location: "Sydney, Australia",
      condition: "Unexplained Infertility (5 years)",
      story: "After 5 years of trying to conceive with no medical explanation, we were devastated. We completed a 14-day program together and conceived naturally within 3 months. We now have a beautiful 2-year-old daughter. The Ayurvedic approach gave us hope.",
      rating: 5,
      highlight: "Natural conception after 5 years",
      image: "/images/blog_panchakarma_guide_c9ed2d56.png"
    },
    {
      name: "Emma T.",
      location: "Berlin, Germany",
      condition: "IBS & Digestive Issues",
      story: "I suffered from severe IBS, bloating, and food sensitivities for years. After the Panchakarma program, my digestion completely normalized. I can now eat foods I couldn't tolerate before. My energy and quality of life have transformed.",
      rating: 5,
      highlight: "IBS resolved, digestion normalized",
      image: "/images/treatment_digestive_health_866aa1e8.png"
    },
    {
      name: "Michael K.",
      location: "Mumbai, India",
      condition: "Asthma & Respiratory Issues",
      story: "I had severe asthma since childhood and was on multiple inhalers. After one program, my breathing capacity improved dramatically. I now rarely use inhalers and can exercise without limitation. The Nasya therapy was transformative.",
      rating: 5,
      highlight: "Asthma dramatically improved",
      image: "/images/treatment_respiratory_18e9bd3b.png"
    },
    {
      name: "Priya D.",
      location: "Singapore",
      condition: "Depression & Burnout",
      story: "I was in a deep depression from years of work stress. The combination of Panchakarma, yoga, meditation, and herbal support lifted my mood naturally. I'm now energized, clear-headed, and genuinely happy for the first time in years.",
      rating: 5,
      highlight: "Depression resolved, burnout healed",
      image: "/images/treatment_mental_health_d3e27509.png"
    },
    {
      name: "Thomas W.",
      location: "Amsterdam, Netherlands",
      condition: "Hypertension & Heart Disease Prevention",
      story: "My blood pressure was dangerously high despite medications. After the program, it normalized. My cholesterol improved, and my cardiologist was amazed. I feel healthier than I have in decades.",
      rating: 5,
      highlight: "Hypertension normalized naturally",
      image: "/images/treatment_chronic_disease_62ef6750.png"
    },
    {
      name: "Sophia L.",
      location: "Barcelona, Spain",
      condition: "Hormonal Imbalance & Menopause",
      story: "Menopause was devastating—hot flashes, mood swings, sleep issues. The Panchakarma program and Rasayana therapy balanced my hormones naturally. I'm now thriving through menopause without hormone replacement therapy.",
      rating: 5,
      highlight: "Menopause symptoms resolved naturally",
      image: "/images/blog_ayurveda_basics_75397dab.png"
    },
    {
      name: "Christopher M.",
      location: "Boston, USA",
      condition: "Chronic Fatigue & Low Energy",
      story: "I was exhausted all the time despite sleeping. After the program, my energy returned completely. The Rasayana therapy rejuvenated me at a cellular level. I'm now more energetic and vital than I've been in years.",
      rating: 5,
      highlight: "Energy and vitality fully restored",
      image: "/images/blog_panchakarma_guide_c9ed2d56.png"
    },
    {
      name: "Ananya D.",
      location: "Delhi, India",
      condition: "PCOS & Fertility",
      story: "PCOS made me believe I couldn't conceive. After the 21-day program with specialized Uttara Basti treatments, my cycles became regular. I conceived naturally within 6 months and now have a healthy 1-year-old son.",
      rating: 5,
      highlight: "PCOS resolved, natural conception",
      image: "/images/blog_dosha_balance_d9df3e57.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
    <SEO title="Patient Success Stories" description="Read inspiring patient success stories from Dr. Kalyan Ayurveda. Real healing journeys from arthritis, diabetes, fertility, skin conditions, and more." keywords="Ayurveda testimonials, patient success stories, Panchakarma results, Ayurveda healing stories" url="/testimonials" />
      <CompactHeader />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Patient Success Stories</h1>
          <p className="text-xl text-muted-foreground">
            Real transformations from patients who have recovered from conditions modern medicine couldn't resolve.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-playfair font-bold text-primary mb-2">5000+</p>
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
              <p className="text-4xl font-playfair font-bold text-secondary mb-2">All Conditions</p>
              <p className="text-muted-foreground">Comprehensive Healing</p>
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
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Comprehensive Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We treat all conditions—not just one specialty. Whether you have arthritis, diabetes, anxiety, or fertility issues, we address your complete health picture with personalized protocols.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Root Cause Treatment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rather than treating symptoms, we identify and address the underlying imbalances causing disease. This leads to lasting results and improved overall health.
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
                We understand the emotional journey of chronic illness. Our approach includes emotional counseling, stress reduction, and spiritual guidance alongside physical treatments.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Evidence-Based Protocols</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our treatments are grounded in 5,000 years of Ayurvedic wisdom and supported by modern research. Success rates of 70-80% for specific therapies like Panchakarma.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Complementary Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether seeking natural healing or supporting conventional treatments, our protocols enhance your overall wellness journey. We work alongside modern medicine, not against it.
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
            Join thousands of patients who have recovered from chronic diseases and achieved lasting wellness. Schedule your personalized consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
              Book Your Consultation
            </Button>
            <Link href="/submit-testimonial">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 text-base w-full sm:w-auto">
                Share Your Story
              </Button>
            </Link>
          </div>
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
