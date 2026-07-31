import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Leaf, Wind, Flame, Droplets, Brain, Zap, Award } from "lucide-react";
import { Link } from "wouter";
import { CompactHeader } from "@/components/CompactHeader";

export default function Treatments() {
  const treatmentCategories = [
    {
      id: "panchakarma",
      icon: Droplets,
      title: "Panchakarma Detoxification",
      subtitle: "The Heart of Ayurvedic Healing",
      description: "A comprehensive system of five coordinated detoxification procedures that gently yet profoundly cleanse the physiology from metabolic residue (ama).",
      benefits: [
        "Removes accumulated toxins from diet, environment, and stress",
        "Restores balance to the three doshas (Vata, Pitta, Kapha)",
        "Rejuvenates all seven body tissues (Dhatus)",
        "Strengthens immunity and digestive fire",
        "Heals the mind and nervous system",
        "Foundation for treating all chronic diseases"
      ],
      procedures: ["Abhyanga (Oil Massage)", "Nasya (Nasal Therapy)", "Basti (Enema Therapy)", "Vamana (Therapeutic Vomiting)", "Virechana (Therapeutic Purgation)"],
      successRate: "70-80%",
      image: "/images/blog_panchakarma_guide_c9ed2d56.webp"
    },
    {
      id: "chronic-diseases",
      icon: Heart,
      title: "Chronic Disease Management",
      subtitle: "Healing What Modern Medicine Cannot",
      description: "Ayurveda excels at treating chronic diseases by addressing root causes rather than suppressing symptoms.",
      conditions: [
        "Arthritis &amp; Joint Pain",
        "Type 2 Diabetes",
        "Hypertension &amp; Heart Disease",
        "Autoimmune Disorders",
        "Chronic Fatigue",
        "Fibromyalgia",
        "Multiple Sclerosis",
        "Parkinson's Disease"
      ],
      approach: "We identify the dosha imbalance causing your condition, then use Panchakarma, herbal medicines, dietary changes, and lifestyle modifications to restore balance and heal the root cause.",
      benefits: [
        "Address root causes, not just symptoms",
        "Reduce medication dependence",
        "Improve quality of life significantly",
        "Prevent disease progression",
        "Enhance overall vitality"
      ],
      image: "/images/treatment_chronic_disease_62ef6750.webp"
    },
    {
      id: "digestive-health",
      icon: Leaf,
      title: "Digestive &amp; Metabolic Health",
      subtitle: "Restore Your Digestive Fire (Agni)",
      description: "Poor digestion is the root of most diseases. We restore your digestive fire and heal the gut.",
      conditions: [
        "IBS &amp; Inflammatory Bowel Disease",
        "Acid Reflux &amp; GERD",
        "Constipation &amp; Bloating",
        "Malabsorption &amp; Nutrient Deficiency",
        "Weight Management Issues",
        "Liver &amp; Gallbladder Problems",
        "Candida Overgrowth",
        "Food Sensitivities"
      ],
      approach: "We assess your digestive capacity (Agni), identify food incompatibilities, and use Panchakarma, herbal digestives, and dietary protocols to restore optimal digestion.",
      benefits: [
        "Eliminate bloating &amp; gas",
        "Normalize bowel function",
        "Improve nutrient absorption",
        "Achieve healthy weight",
        "Increase energy levels",
        "Heal the gut lining"
      ],
      image: "/images/treatment_digestive_health_866aa1e8.webp"
    },
    {
      id: "respiratory",
      icon: Wind,
      title: "Respiratory Wellness",
      subtitle: "Breathe Freely Again",
      description: "Treat respiratory conditions by clearing excess Kapha and strengthening lung tissue.",
      conditions: [
        "Asthma &amp; Bronchitis",
        "Allergic Rhinitis",
        "Chronic Cough",
        "Sinusitis &amp; Nasal Congestion",
        "Sleep Apnea",
        "Seasonal Allergies",
        "Emphysema",
        "Chronic Obstructive Pulmonary Disease (COPD)"
      ],
      approach: "We use Nasya (nasal therapy), Vamana (therapeutic vomiting for Kapha), herbal expectorants, and breathing exercises to clear congestion and strengthen respiratory function.",
      benefits: [
        "Clear chronic congestion",
        "Reduce asthma attacks",
        "Improve breathing capacity",
        "Strengthen lungs &amp; sinuses",
        "Reduce allergy symptoms",
        "Improve sleep quality"
      ],
      image: "/images/treatment_respiratory_18e9bd3b.webp"
    },
    {
      id: "skin-health",
      icon: Flame,
      title: "Skin Conditions",
      subtitle: "Heal Skin From Within",
      description: "Skin diseases reflect internal imbalances. We heal the root cause to achieve radiant, healthy skin.",
      conditions: [
        "Eczema &amp; Dermatitis",
        "Psoriasis",
        "Acne &amp; Rosacea",
        "Urticaria (Hives)",
        "Vitiligo",
        "Fungal Infections",
        "Premature Aging",
        "Hair Loss &amp; Alopecia"
      ],
      approach: "We identify the dosha imbalance (usually Pitta excess), use Panchakarma to eliminate toxins, apply medicated oils and herbal treatments, and modify diet to cool inflammation.",
      benefits: [
        "Clear skin conditions from root",
        "Reduce itching &amp; inflammation",
        "Achieve radiant complexion",
        "Strengthen hair &amp; nails",
        "Prevent recurrence",
        "Improve skin texture &amp; tone"
      ],
      image: "/images/treatment_skin_health_e6507ce9.webp"
    },
    {
      id: "mental-health",
      icon: Brain,
      title: "Mental Health &amp; Stress",
      subtitle: "Restore Emotional Balance &amp; Peace",
      description: "Ayurveda deeply understands and treats anxiety, depression, and stress-related disorders.",
      conditions: [
        "Anxiety &amp; Panic Disorder",
        "Depression &amp; Mood Disorders",
        "Insomnia &amp; Sleep Disorders",
        "ADHD &amp; Concentration Issues",
        "Burnout &amp; Chronic Stress",
        "OCD &amp; Obsessive Thoughts",
        "PTSD &amp; Trauma",
        "Emotional Imbalance"
      ],
      approach: "We use Shirodhara (oil flow therapy), Nasya, meditation, yoga, herbal nervines (Ashwagandha, Brahmi), and lifestyle modifications to calm the nervous system and restore emotional balance.",
      benefits: [
        "Calm anxiety naturally",
        "Lift depression &amp; mood",
        "Improve sleep quality",
        "Enhance mental clarity",
        "Reduce stress & burnout",
        "Restore emotional peace"
      ],
      image: "/images/treatment_mental_health_d3e27509.webp"
    },
    {
      id: "fertility",
      icon: Zap,
      title: "Fertility &amp; Reproductive Health",
      subtitle: "Restore Your Fertility Naturally",
      description: "Enhance fertility, balance hormones, and support reproductive wellness for both men and women.",
      conditions: [
        "Female Infertility &amp; Unexplained Infertility",
        "PCOS &amp; Hormonal Imbalance",
        "Irregular Menstrual Cycles",
        "Endometriosis &amp; Fibroids",
        "Low Sperm Count &amp; Motility",
        "Sexual Dysfunction",
        "Recurrent Miscarriage",
        "Menopause &amp; Hormonal Transition"
      ],
      approach: "We use specialized therapies like Uttara Basti (uterine nourishment) for women and Yapana Basti for men, combined with Panchakarma, herbal tonics, and lifestyle modifications.",
      benefits: [
        "Enhance egg &amp; sperm quality",
        "Balance hormones naturally",
        "Regulate menstrual cycles",
        "Support IVF success rates",
        "Improve sexual vitality",
        "Achieve natural conception"
      ]
    },
    {
      id: "rejuvenation",
      icon: Award,
      title: "Rejuvenation &amp; Anti-Aging",
      subtitle: "Rasayana Therapy for Longevity",
      description: "Slow aging, enhance vitality, and achieve longevity through Rasayana (rejuvenation) therapy.",
      conditions: [
        "Premature Aging",
        "Loss of Vitality &amp; Energy",
        "Cognitive Decline &amp; Memory Loss",
        "Weakened Immunity",
        "Chronic Degenerative Diseases",
        "General Wellness &amp; Prevention",
        "Athletic Performance Enhancement",
        "Longevity &amp; Lifespan Extension"
      ],
      approach: "We use Rasayana herbs (Ashwagandha, Shatavari, Brahmi, Triphala), Panchakarma preparation, specialized oils, and lifestyle practices to rejuvenate all tissues and enhance longevity.",
      benefits: [
        "Slow aging process",
        "Enhance mental clarity",
        "Strengthen immunity",
        "Increase energy &amp; vitality",
        "Improve skin &amp; hair",
        "Extend healthy lifespan"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
    <SEO title="Ayurvedic Treatments Hyderabad | Dr. Kalyan Panchakarma Center" description="Explore comprehensive Ayurvedic treatments at Dr. Kalyan Ayurveda, Hyderabad: Panchakarma detox, chronic disease management, fertility, skin health, and mental wellness. Prashanth Hills Colony, Raidurg." keywords="Ayurvedic treatments Hyderabad, Panchakarma treatment, Ayurveda chronic disease, fertility Ayurveda" url="/treatments" />
      <CompactHeader />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4">Comprehensive Treatment Offerings</h1>
          <p className="text-xl text-muted-foreground">
            From chronic disease management to preventive wellness, we offer authentic Ayurvedic solutions for every health concern.
          </p>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container max-w-6xl">
          {treatmentCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="mb-20 last:mb-0">
                <div className="flex gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-playfair font-bold text-foreground mb-2">{category.title}</h2>
                    <p className="text-lg text-secondary font-semibold mb-3">{category.subtitle}</p>
                    <p className="text-lg text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-lg">Conditions We Treat</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.conditions ? category.conditions.map((condition, i) => (
                          <li key={i} className="flex gap-2 text-muted-foreground">
                            <span className="text-primary">✓</span>
                            <span>{condition}</span>
                          </li>
                        )) : (
                          category.procedures.map((proc, i) => (
                            <li key={i} className="flex gap-2 text-muted-foreground">
                              <span className="text-primary">✓</span>
                              <span>{proc}</span>
                            </li>
                          ))
                        )}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-lg">Key Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.benefits.map((benefit, i) => (
                          <li key={i} className="flex gap-2 text-muted-foreground">
                            <span className="text-secondary">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Our Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">{category.approach}</p>
                  {category.successRate && (
                    <p className="text-muted-foreground mt-4"><strong>Success Rate:</strong> {category.successRate}</p>
                  )}
                </div>

                {idx < treatmentCategories.length - 1 && <hr className="my-12" />}
              </div>
            );
          })}
        </div>
      </section>

      {/* Program Options */}
      <section className="py-10 sm:py-16 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-5xl">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-playfair font-bold text-foreground mb-8 text-center">Customized Treatment Programs</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">7-Day Intensive</CardTitle>
                <CardDescription>Introduction &amp; Wellness</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Includes:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
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
                <CardTitle className="text-2xl">14-Day Therapeutic</CardTitle>
                <CardDescription>Most popular for healing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Includes:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ All 7-day benefits</li>
                    <li>✓ Extended Panchakarma</li>
                    <li>✓ Specialized therapies</li>
                    <li>✓ Condition-specific treatments</li>
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
                  <ul className="text-sm text-muted-foreground space-y-1">
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

      {/* CTA Section */}
      <section className="py-10 sm:py-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-playfair font-bold text-foreground mb-6">Ready to Begin Your Healing?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a personalized consultation to discuss your health concerns and create your customized treatment plan.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
            Book Your Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
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
                <li>📧 <a href="mailto:contact@drkalyanayurveda.com" className="hover:text-white">contact@drkalyanayurveda.com</a></li>
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
