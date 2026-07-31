import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, Wind, Zap, Brain, Clock, Users, Award } from "lucide-react";
import { Link } from "wouter";
import { CompactHeader } from "@/components/CompactHeader";

export default function PanchakarmaPrograms() {
  const programs = [
    {
      duration: "7 Days",
      title: "Introductory Panchakarma",
      description: "Perfect for first-time patients to experience authentic Ayurvedic detoxification",
      benefits: [
        "Initial detoxification and cleansing",
        "Dosha assessment and balancing",
        "Introduction to Ayurvedic lifestyle",
        "Stress relief and relaxation",
        "Improved digestion"
      ],
      price: "$1,200",
      ideal: "Beginners, busy professionals"
    },
    {
      duration: "14 Days",
      title: "Standard Panchakarma",
      description: "Comprehensive treatment for significant health improvements and chronic condition management",
      benefits: [
        "Deep detoxification and ama removal",
        "Complete dosha balancing",
        "Tissue rejuvenation",
        "Improved immunity",
        "Better sleep and energy",
        "Chronic disease management"
      ],
      price: "$2,400",
      ideal: "Most patients, chronic conditions"
    },
    {
      duration: "21 Days",
      title: "Advanced Panchakarma",
      description: "Intensive transformation program for deep healing and complete rejuvenation",
      benefits: [
        "Complete physiological cleansing",
        "Advanced tissue healing",
        "Nervous system restoration",
        "Anti-aging rejuvenation",
        "Spiritual wellness",
        "Complete health transformation"
      ],
      price: "$3,600",
      ideal: "Serious health seekers, major transformations"
    }
  ];

  const therapies = [
    {
      id: 1,
      name: "Abhyanga",
      subtitle: "Traditional Oil Massage",
      description: "Deep therapeutic full-body oil massage using medicated oils tailored to your dosha. Improves circulation, nourishes tissues, and calms the nervous system.",
      image: "/images/slide_1_abhyanga_massage_generated.webp"
    },
    {
      id: 2,
      name: "Shirodhara",
      subtitle: "Therapeutic Oil Pouring",
      description: "Warm medicated oil flows continuously onto the forehead, deeply calming the mind and nervous system. Excellent for anxiety, insomnia, and mental clarity.",
      image: "/images/slide_2_shirodhara_therapy_generated.webp"
    },
    {
      id: 3,
      name: "Marma Point Therapy",
      subtitle: "Energy Point Healing",
      description: "Precise stimulation of vital energy points (marmas) to balance the body's energy channels and promote holistic healing.",
      image: "/images/slide_3_marma_point_therapy_generated.webp"
    },
    {
      id: 4,
      name: "Panchakarma Preparation",
      subtitle: "Pre-Treatment Consultation",
      description: "Comprehensive assessment and preparation ensuring optimal results from your Panchakarma treatment. Includes dietary guidance and lifestyle recommendations.",
      image: "/images/slide_4_panchakarma_prep_generated.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
    <SEO title="Panchakarma Programs Hyderabad | 7, 14 & 21-Day Detox | Dr. Kalyan" description="Authentic Panchakarma detoxification programs at Dr. Kalyan Ayurveda, Hyderabad. Choose from 7-day, 14-day, or 21-day programs for deep healing, rejuvenation, and chronic disease reversal. Raidurg, Hyderabad." keywords="Panchakarma Hyderabad, Panchakarma program, Ayurvedic detox, Panchakarma center" url="/panchakarma-programs" />
      <CompactHeader />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container max-w-5xl">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4">Panchakarma Programs</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the transformative power of authentic Ayurvedic detoxification. Choose the program that matches your healing goals.
            </p>
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">Our Treatment Programs</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <Card key={idx} className="border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <div className="flex items-center justify-between mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">{program.duration}</span>
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary font-bold mt-0.5">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-2">Ideal for:</p>
                      <p className="font-semibold text-foreground mb-4">{program.ideal}</p>
                      <p className="text-3xl font-bold text-primary mb-4">{program.price}</p>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy Showcase */}
      <section className="py-16 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-6xl">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-4 text-center">Core Therapies Included</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Each program includes our signature Ayurvedic therapies performed by experienced practitioners in our authentic therapy rooms
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {therapies.map((therapy) => (
              <Card key={therapy.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={therapy.image} 
                    alt={therapy.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-primary mb-1">{therapy.subtitle}</p>
                    <h3 className="text-2xl font-bold text-foreground">{therapy.name}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{therapy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">What to Expect During Your Program</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Heart className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Initial Consultation</h3>
                  <p className="text-muted-foreground">Comprehensive health assessment, dosha determination, and personalized treatment plan creation</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                    <Leaf className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Daily Therapies</h3>
                  <p className="text-muted-foreground">Customized Abhyanga, Shirodhara, Marma therapy, and other treatments based on your condition</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Wind className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Dietary Guidance</h3>
                  <p className="text-muted-foreground">Personalized meal plans and nutritional recommendations to support your healing</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                    <Brain className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Meditation & Yoga</h3>
                  <p className="text-muted-foreground">Daily guided meditation and gentle yoga practices to balance mind and body</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Lifestyle Coaching</h3>
                  <p className="text-muted-foreground">Expert guidance on daily routines, sleep, stress management, and long-term wellness</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Follow-up Support</h3>
                  <p className="text-muted-foreground">Post-program guidance and ongoing support to maintain your healing results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container max-w-3xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-4">Ready to Transform Your Health?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a consultation with Dr. Kalyan to discuss which program is right for your unique health needs.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Book Your Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
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
              <h4 className="font-semibold mb-3 text-sm">Programs</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><a href="#" className="hover:text-white">7-Day Program</a></li>
                <li><a href="#" className="hover:text-white">14-Day Program</a></li>
                <li><a href="#" className="hover:text-white">21-Day Program</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Dr. Kalyan</Link></li>
                <li><Link href="/video-testimonials">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Contact</h4>
              <p className="text-white/70 text-xs">
                Email: info@ayurveda.com<br/>
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-xs">
            <p>&copy; 2026 Dr. Kalyan Ayurveda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
