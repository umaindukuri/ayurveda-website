import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { CompactHeader } from "@/components/CompactHeader";

export default function Blog() {
  const articles = [
    {
      id: 1,
      slug: "panchakarma-detox-transforms-health",
      title: "Panchakarma: The Ancient Detox That Transforms Your Health",
      excerpt: "Discover how the five detoxification procedures of Panchakarma work together to eliminate toxins and restore balance to your body. Experience 70-80% success rates in chronic disease treatment.",
      author: "Dr. Kalyan Chakravarthy",
      date: "July 8, 2026",
      category: "Panchakarma",
      image: "/images/hero_panchakarma.jpg"
    },
    {
      id: 2,
      slug: "ayurveda-chronic-disease-management",
      title: "Natural Remedies for Chronic Diseases: An Ayurvedic Approach",
      excerpt: "Explore how Ayurvedic treatments address the root cause of arthritis, diabetes, and hypertension, providing lasting relief without harmful side effects.",
      author: "Dr. Kalyan Chakravarthy",
      date: "July 5, 2026",
      category: "Chronic Diseases",
      image: "/images/hero_chronic-diseases.jpg"
    },
    {
      id: 3,
      slug: "restore-digestive-fire-ayurveda",
      title: "Digestive Health: Restore Your Agni (Digestive Fire)",
      excerpt: "Discover why digestive health is the foundation of all wellness and how to restore your digestive fire for optimal health. Ayurvedic nutrition and herbal remedies for IBS and digestive disorders.",
      author: "Dr. Kalyan Chakravarthy",
      date: "June 28, 2026",
      category: "Digestive Health",
      image: "/images/hero_digestive-health.jpg"
    },
    {
      id: 4,
      slug: "ayurveda-respiratory-wellness",
      title: "Breathing Free: Ayurvedic Solutions for Respiratory Health",
      excerpt: "Learn how Ayurvedic treatments naturally heal asthma, bronchitis, allergies, and chronic respiratory conditions through Nasya, herbal formulations, and pranayama.",
      author: "Dr. Kalyan Chakravarthy",
      date: "June 20, 2026",
      category: "Respiratory",
      image: "/images/hero_respiratory.jpg"
    },
    {
      id: 5,
      slug: "ayurveda-skin-healing",
      title: "Clear Skin from Within: Ayurvedic Treatment for Eczema, Psoriasis & Acne",
      excerpt: "Heal chronic skin conditions permanently through Ayurvedic blood purification and deep tissue healing. Why topical treatments fail and how to address the root cause.",
      author: "Dr. Kalyan Chakravarthy",
      date: "June 15, 2026",
      category: "Skin Health",
      image: "/images/hero_skin-health.jpg"
    },
    {
      id: 6,
      slug: "ayurveda-mental-health-anxiety-depression",
      title: "Healing Anxiety and Depression: Ayurvedic Mental Health Solutions",
      excerpt: "Learn how Ayurveda treats mental health conditions by balancing the nervous system and calming the mind naturally. Shirodhara, meditation, and herbal treatments work synergistically.",
      author: "Dr. Kalyan Chakravarthy",
      date: "July 1, 2026",
      category: "Mental Health",
      image: "/images/hero_mental-health.jpg"
    },
    {
      id: 7,
      slug: "ayurveda-fertility-natural-conception",
      title: "Restoring Fertility Naturally: The Ayurvedic Path to Parenthood",
      excerpt: "Discover how Ayurvedic treatment enhances fertility, balances hormones, and supports natural conception for both men and women.",
      author: "Dr. Kalyan Chakravarthy",
      date: "July 15, 2026",
      category: "Fertility",
      image: "/images/hero_fertility.jpg"
    },
    {
      id: 8,
      slug: "ayurveda-rejuvenation-anti-aging",
      title: "Rasayana: The Ayurvedic Science of Rejuvenation and Longevity",
      excerpt: "Explore Rasayana therapy — Ayurveda's ancient system for cellular rejuvenation, vitality restoration, and natural anti-aging.",
      author: "Dr. Kalyan Chakravarthy",
      date: "June 10, 2026",
      category: "Rejuvenation",
      image: "/images/hero_rejuvenation.jpg"
    }
  ];

  const categories = ["All", "Panchakarma", "Chronic Diseases", "Digestive Health", "Respiratory", "Skin Health", "Mental Health", "Fertility", "Rejuvenation"];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Ayurveda Blog & Health Articles" description="Learn about Ayurvedic health, wellness tips, dosha balancing, Panchakarma benefits, and natural healing from Dr. Kalyan Ayurveda." keywords="Ayurveda blog, Ayurvedic health tips, dosha balance, Panchakarma benefits" url="/blog" />
      <CompactHeader />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Ayurveda Wellness Blog</h1>
          <p className="text-xl text-muted-foreground">
            Discover ancient wisdom and modern insights about Ayurvedic healing, wellness, and natural health optimization.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-primary hover:bg-primary/90 text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-12">Featured Article</h2>

          <Link href={`/blog/${articles[0].slug}`}>
            <Card className="border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="grid md:grid-cols-2 gap-0">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {articles[0].category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">{articles[0].title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{articles[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {articles[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {articles[0].date}
                    </div>
                  </div>
                  <Button className="w-fit bg-primary hover:bg-primary/90 text-white">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-12">Recent Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <Card className="border-border overflow-hidden hover:shadow-lg transition-all group cursor-pointer h-full">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get weekly insights about Ayurvedic wellness, healing tips, and special offers delivered to your inbox.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white">Subscribe</Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">Ready to Transform Your Health?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Learn more about our comprehensive treatment programs and schedule your personalized consultation today.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
              Book Your Consultation
            </Button>
          </Link>
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
                <li><Link href="/treatments/panchakarma" className="hover:text-white transition-colors">Panchakarma</Link></li>
                <li><Link href="/treatments/chronic-diseases" className="hover:text-white transition-colors">Chronic Diseases</Link></li>
                <li><Link href="/treatments/mental-health" className="hover:text-white transition-colors">Mental Health</Link></li>
                <li><Link href="/treatments/fertility" className="hover:text-white transition-colors">Fertility</Link></li>
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
            &copy; 2026 Dr. Kalyan Ayurveda. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
