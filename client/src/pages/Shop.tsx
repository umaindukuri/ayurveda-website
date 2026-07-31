import { CompactHeader } from "@/components/CompactHeader";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Phone, Search, ShoppingBag } from "lucide-react";
import { Link } from "wouter";

const CATEGORIES = ["All", "Immunity", "Digestive", "Fertility", "Skin", "Stress & Sleep", "Joints", "Detox"];

const PRODUCTS = [
  {
    id: 1,
    name: "Ashwagandha Root Powder",
    category: "Stress & Sleep",
    price: 310,
    unit: "100g",
    description: "Premium KSM-66 Ashwagandha for stress relief, energy, and hormonal balance. Adaptogen of choice for modern lifestyle stress.",
    benefits: ["Reduces cortisol", "Improves sleep quality", "Boosts energy & stamina"],
    dosage: "½ tsp with warm milk at bedtime",
    inStock: true,
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Triphala Churna",
    category: "Digestive",
    price: 230,
    unit: "200g",
    description: "Classical three-fruit formula (Amalaki, Bibhitaki, Haritaki) for gentle daily detoxification and digestive health.",
    benefits: ["Gentle daily detox", "Improves digestion", "Rich in antioxidants"],
    dosage: "1 tsp with warm water at bedtime",
    inStock: true,
    tag: null,
  },
  {
    id: 3,
    name: "Shatavari Kalpa",
    category: "Fertility",
    price: 520,
    unit: "200g",
    description: "Rejuvenating tonic for female reproductive health, hormonal balance, and fertility support. Prepared in traditional Kalpa form.",
    benefits: ["Hormonal balance", "Fertility support", "Lactation enhancement"],
    dosage: "1 tsp with warm milk twice daily",
    inStock: true,
    tag: "Recommended",
  },
  {
    id: 4,
    name: "Brahmi Ghrita",
    category: "Stress & Sleep",
    price: 650,
    unit: "150ml",
    description: "Medicated ghee infused with Brahmi, Shankhpushpi, and Vacha for cognitive function, memory, and nervous system support.",
    benefits: ["Improves memory & focus", "Calms nervous system", "Reduces anxiety"],
    dosage: "1 tsp on empty stomach with warm water",
    inStock: true,
    tag: null,
  },
  {
    id: 5,
    name: "Neem & Turmeric Capsules",
    category: "Skin",
    price: 340,
    unit: "60 capsules",
    description: "Purifying blood-cleansing formula for clear, radiant skin. Effective for eczema, psoriasis, and acne-prone skin.",
    benefits: ["Blood purification", "Clears skin conditions", "Anti-inflammatory"],
    dosage: "2 capsules twice daily after meals",
    inStock: true,
    tag: null,
  },
  {
    id: 6,
    name: "Chyawanprash Special",
    category: "Immunity",
    price: 380,
    unit: "500g",
    description: "Traditional Rasayana formula with 40+ herbs led by Amalaki. Builds immunity, vitality, and respiratory health.",
    benefits: ["Boosts immunity", "Respiratory health", "Anti-aging Rasayana"],
    dosage: "1–2 tsp with warm milk in the morning",
    inStock: true,
    tag: "Seasonal",
  },
  {
    id: 7,
    name: "Mahanarayan Tail",
    category: "Joints",
    price: 335,
    unit: "100ml",
    description: "Classical medicated oil for joint pain, arthritis, muscle stiffness, and Vata disorders. For external application.",
    benefits: ["Relieves joint pain", "Reduces stiffness", "Nourishes muscles"],
    dosage: "Warm and apply to affected area twice daily",
    inStock: true,
    tag: null,
  },
  {
    id: 8,
    name: "Panchakarma Detox Kit",
    category: "Detox",
    price: 1850,
    unit: "Kit (7-day)",
    description: "Complete home detox kit: Triphala, Castor oil, Trikatu, and Dashamoola tea. Guided protocol included.",
    benefits: ["7-day home detox", "Clears Ama (toxins)", "Boosts metabolism"],
    dosage: "Follow included protocol guide",
    inStock: true,
    tag: "Kit",
  },
  {
    id: 9,
    name: "Shilajit Resin",
    category: "Immunity",
    price: 890,
    unit: "20g",
    description: "Pure Himalayan Shilajit resin — the 'destroyer of weakness'. Potent adaptogen for energy, fertility, and mineral replenishment.",
    benefits: ["Increases energy & stamina", "Male fertility support", "Rich in Fulvic acid"],
    dosage: "Pea-sized amount dissolved in warm milk daily",
    inStock: false,
    tag: "Premium",
  },
  {
    id: 10,
    name: "Kumkumadi Tailam",
    category: "Skin",
    price: 720,
    unit: "30ml",
    description: "Luxurious saffron-based facial oil for brightening, anti-aging, and skin rejuvenation. The Ayurvedic gold standard for skin.",
    benefits: ["Brightens complexion", "Reduces dark spots", "Anti-aging"],
    dosage: "2–3 drops on clean face at night",
    inStock: true,
    tag: "Luxury",
  },
  {
    id: 11,
    name: "Dashamoola Kwath",
    category: "Joints",
    price: 250,
    unit: "200g",
    description: "Ten-root decoction powder for Vata pacification, joint pain, back pain, and post-Panchakarma recovery.",
    benefits: ["Vata pacification", "Back & joint pain", "Post-Panchakarma care"],
    dosage: "Boil 1 tsp in 2 cups water, reduce to 1 cup, drink warm",
    inStock: true,
    tag: null,
  },
  {
    id: 12,
    name: "Fertility Booster Pack",
    category: "Fertility",
    price: 1480,
    unit: "Pack (1 month)",
    description: "Curated combination of Shatavari, Ashwagandha, and Kapikachhu for couples trying to conceive. Includes diet guide.",
    benefits: ["Supports ovulation", "Improves sperm quality", "Hormonal balance"],
    dosage: "Follow included protocol",
    inStock: true,
    tag: "Recommended",
  },
];

const WHATSAPP_NUMBER = "919281332544";

function buildOrderMessage(product: typeof PRODUCTS[0]) {
  return encodeURIComponent(
    `Hello Dr. Kalyan Ayurveda,\n\nI would like to order:\n• ${product.name} (${product.unit}) — ₹${product.price}\n\nPlease confirm availability and delivery details.\n\nThank you.`
  );
}

export default function Shop() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = PRODUCTS.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <CompactHeader />
      <SEO
        title="Herbal Products Shop — Dr. Kalyan Ayurveda"
        description="Authentic Ayurvedic herbs, formulations, and wellness products recommended by Dr. Kalyan. Order via WhatsApp for home delivery."
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-12 border-b border-border">
        <div className="container max-w-5xl text-center">
          <ShoppingBag className="w-10 h-10 text-primary mx-auto mb-3" />
          <h1 className="text-3xl font-bold text-foreground mb-2">Herbal Products</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Authentic Ayurvedic formulations personally recommended by Dr. Kalyan. Order via WhatsApp for same-day dispatch in Hyderabad.
          </p>
          <div className="flex items-center gap-2 justify-center mt-4 text-sm text-muted-foreground">
            <Phone className="w-4 h-4 text-primary" />
            <span>WhatsApp orders: <a href="tel:+919281332544" className="text-primary font-medium hover:underline">+91 92813 32544</a></span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-0 z-10 bg-white border-b border-border shadow-sm">
        <div className="container max-w-5xl py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search products…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 h-9 text-sm"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${activeCategory === cat ? "bg-primary text-white" : "bg-gray-100 text-muted-foreground hover:bg-gray-200"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container max-w-5xl py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">No products found for "{search}".</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(product => (
              <div key={product.id} className={`bg-white rounded-xl border border-border flex flex-col ${!product.inStock ? "opacity-60" : ""}`}>
                <div className="p-5 flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground leading-snug">{product.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{product.unit} · {product.category}</p>
                    </div>
                    {product.tag && (
                      <Badge className="text-xs bg-primary/10 text-primary shrink-0">{product.tag}</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{product.description}</p>
                  <ul className="space-y-1 mb-3">
                    {product.benefits.map(b => (
                      <li key={b} className="text-xs text-foreground flex items-start gap-1.5">
                        <span className="text-green-500 mt-0.5">✓</span> {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground italic">Dosage: {product.dosage}</p>
                </div>
                <div className="px-5 pb-5 pt-3 border-t border-border flex items-center justify-between gap-3">
                  <span className="text-xl font-bold text-primary">₹{product.price}</span>
                  {product.inStock ? (
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildOrderMessage(product)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-xs">
                        <Phone className="w-3.5 h-3.5 mr-1.5" /> Order on WhatsApp
                      </Button>
                    </a>
                  ) : (
                    <span className="text-xs text-muted-foreground font-medium">Out of stock</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="py-10 bg-muted/30 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-xl font-bold text-foreground mb-2">Need a personalised recommendation?</h2>
          <p className="text-muted-foreground mb-5 text-sm">Book a consultation and Dr. Kalyan will prescribe the right formulations for your specific constitution and health goals.</p>
          <Link href="/book-appointment">
            <Button className="bg-primary hover:bg-primary/90 text-white">Book a Consultation</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-10">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/dr_kalyan_logo_final_07bd8e78.png" alt="Logo" className="h-8 w-8 invert" />
                <span className="font-playfair font-bold">Ayurveda Wellness</span>
              </div>
              <p className="text-white/70 text-sm">Authentic Ayurvedic healing for chronic diseases, wellness optimization, and natural transformation.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition-colors">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Treatment Areas</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/treatments" className="hover:text-white transition-colors">Panchakarma</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Chronic Diseases</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Mental Health</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Fertility</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>📞 <a href="tel:+919281332544" className="hover:text-white">+91 92813 32544</a></li>
                <li>📍 Prashanth Hills Colony, Raidurg, Hyderabad</li>
                <li>🕐 8:00 AM–1:00 PM · 5:00 PM–9:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-white/60 text-sm">
            © 2026 Dr. Kalyan Ayurveda. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
