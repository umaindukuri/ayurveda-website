import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Understanding the Three Doshas: Vata, Pitta, and Kapha",
      excerpt: "Learn about the fundamental principles of Ayurveda and how the three doshas influence your health, personality, and wellness needs. Discover your unique constitution and how to balance it.",
      author: "Dr. Kalyan Chakravarthy",
      date: "July 10, 2026",
      category: "Ayurveda Basics",
      image: "/manus-storage/blog_dosha_balance_d9df3e57.png"
    },
    {
      id: 2,
      title: "Panchakarma: The Ancient Detox That Transforms Your Health",
      excerpt: "Discover how the five detoxification procedures of Panchakarma work together to eliminate toxins and restore balance to your body. Experience 70-80% success rates in chronic disease treatment.",
      author: "Dr. Kalyan Chakravarthy",
      date: "July 8, 2026",
      category: "Panchakarma",
      image: "/manus-storage/blog_panchakarma_guide_c9ed2d56.png"
    },
    {
      id: 3,
      title: "Natural Remedies for Chronic Arthritis: An Ayurvedic Approach",
      excerpt: "Explore how Ayurvedic treatments address the root cause of arthritis, providing lasting relief without harmful side effects. Learn about Basti, herbal oils, and dietary modifications.",
      author: "Dr. Kalyan Chakravarthy",
      date: "July 5, 2026",
      category: "Chronic Diseases",
      image: "/manus-storage/treatment_chronic_disease_62ef6750.png"
    },
    {
      id: 4,
      title: "Healing Anxiety and Depression: Ayurvedic Mental Health Solutions",
      excerpt: "Learn how Ayurveda treats mental health conditions by balancing the nervous system and calming the mind naturally. Shirodhara, meditation, and herbal treatments work synergistically.",
      author: "Dr. Kalyan Chakravarthy",
      date: "July 1, 2026",
      category: "Mental Health",
      image: "/manus-storage/treatment_mental_health_d3e27509.png"
    },
    {
      id: 5,
      title: "Digestive Health: Restore Your Agni (Digestive Fire)",
      excerpt: "Discover why digestive health is the foundation of all wellness and how to restore your digestive fire for optimal health. Ayurvedic nutrition and herbal remedies for IBS and digestive disorders.",
      author: "Dr. Kalyan Chakravarthy",
      date: "June 28, 2026",
      category: "Digestive Health",
      image: "/manus-storage/treatment_digestive_health_866aa1e8.png"
    },
    {
      id: 6,
      title: "Seasonal Wellness: How to Adapt Your Routine to Each Season",
      excerpt: "Learn how to adjust your diet, lifestyle, and treatments according to the seasons for optimal health year-round. Seasonal Panchakarma protocols and dosha-balancing practices.",
      author: "Dr. Kalyan Chakravarthy",
      date: "June 25, 2026",
      category: "Lifestyle",
      image: "/manus-storage/blog_ayurveda_basics_75397dab.png"
    },
    {
      id: 7,
      title: "Fertility and Ayurveda: Natural Ways to Enhance Conception",
      excerpt: "Explore Ayurvedic protocols for enhancing fertility in both men and women, addressing hormonal balance and reproductive health. Uttara Basti and pre-conception purification programs.",
      author: "Dr. Kalyan Chakravarthy",
      date: "June 22, 2026",
      category: "Fertility",
      image: "/manus-storage/treatment_skin_health_e6507ce9.png"
    },
    {
      id: 8,
      title: "Rasayana Therapy: The Secret to Longevity and Vitality",
      excerpt: "Discover the rejuvenation therapies of Rasayana that slow aging, enhance vitality, and extend your healthy lifespan. Anti-aging treatments and longevity protocols from ancient Ayurveda.",
      author: "Dr. Kalyan Chakravarthy",
      date: "June 19, 2026",
      category: "Anti-Aging",
      image: "/manus-storage/treatment_respiratory_18e9bd3b.png"
    }
  ];

  const categories = ["All", "Ayurveda Basics", "Panchakarma", "Chronic Diseases", "Mental Health", "Digestive Health", "Fertility", "Lifestyle"];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/manus-storage/dr_kalyan_logo_final_07bd8e78.png" alt="Ayurveda Wellness Clinic" className="h-10 w-10" />
            <span className="font-playfair text-xl font-bold text-primary">Ayurveda Wellness</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/treatments" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Treatments</Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Success Stories</Link>
            <Link href="/blog" className="text-sm font-medium text-primary font-semibold">Blog</Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</Link>
            <Button className="bg-primary hover:bg-primary/90 text-white">Book Consultation</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container max-w-4xl text-center">
          <h1 className="text-5xl font-playfair font-bold text-foreground mb-4">Ayurveda Wellness Blog</h1>
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

          <Card className="border-border overflow-hidden hover:shadow-lg transition-shadow">
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
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-12">Recent Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <Card key={article.id} className="border-border overflow-hidden hover:shadow-lg transition-all group">
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
                <img src="/manus-storage/dr_kalyan_logo_final_07bd8e78.png" alt="Logo" className="h-8 w-8 invert" />
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
