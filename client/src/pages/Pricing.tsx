import { CompactHeader } from "@/components/CompactHeader";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Check, Phone } from "lucide-react";
import { Link } from "wouter";

const consultations = [
  {
    name: "Initial Consultation",
    price: "₹800",
    duration: "60 min",
    description: "Comprehensive Prakriti assessment, dosha analysis, and personalized treatment plan.",
    includes: ["Pulse diagnosis (Nadi Pariksha)", "Dosha & Prakriti analysis", "Customised diet & lifestyle plan", "Herbal medicine prescription"],
  },
  {
    name: "Follow-up Consultation",
    price: "₹400",
    duration: "30 min",
    description: "Progress review, treatment adjustment, and continued guidance.",
    includes: ["Treatment progress review", "Prescription update", "Diet & lifestyle refinement"],
  },
  {
    name: "Online Consultation",
    price: "₹600",
    duration: "45 min",
    description: "Video consultation for patients unable to visit in person.",
    includes: ["Video call with Dr. Kalyan", "Digital prescription", "Follow-up support via WhatsApp"],
  },
];

const packages = [
  {
    name: "7-Day Intensive",
    price: "₹18,000",
    tag: "Starter",
    tagColor: "bg-green-100 text-green-800",
    description: "Introduction to Ayurveda — ideal for first-timers, stress relief, and wellness optimisation.",
    includes: [
      "2 Abhyanga (oil massage) sessions",
      "1 Shirodhara session",
      "Daily herbal steam therapy",
      "Personalised diet plan",
      "Herbal medicines for 7 days",
      "1 follow-up consultation",
    ],
  },
  {
    name: "14-Day Therapeutic",
    price: "₹34,000",
    tag: "Most Popular",
    tagColor: "bg-primary/10 text-primary",
    description: "Deep therapeutic treatment for chronic conditions and significant health transformation.",
    includes: [
      "Full Panchakarma preparation",
      "4 Abhyanga sessions",
      "2 Shirodhara sessions",
      "Virechana (therapeutic purgation)",
      "Basti (medicated enema) if required",
      "Marma point therapy",
      "Herbal medicines for 21 days",
      "2 follow-up consultations",
    ],
    highlighted: true,
  },
  {
    name: "21-Day Transformation",
    price: "₹52,000",
    tag: "Complete Renewal",
    tagColor: "bg-amber-100 text-amber-800",
    description: "Complete Panchakarma detoxification — deep healing, rejuvenation, and lifestyle reset.",
    includes: [
      "Full 5-procedure Panchakarma",
      "6 Abhyanga sessions",
      "3 Shirodhara sessions",
      "Nasya (nasal therapy)",
      "Raktamokshana (if indicated)",
      "Yoga & meditation guidance",
      "Herbal medicines for 30 days",
      "3 follow-up consultations",
      "Personalised Rasayana protocol",
    ],
  },
];

const specialtyPrograms = [
  { name: "Fertility & Reproductive Health", price: "From ₹22,000", duration: "3–6 months", note: "Includes hormonal balancing, Uttara Basti, and herbal protocols" },
  { name: "Weight Management", price: "From ₹15,000", duration: "1–3 months", note: "Udwarthanam, dietary therapy, and metabolic correction" },
  { name: "Stress & Anxiety Relief", price: "From ₹12,000", duration: "2–4 weeks", note: "Shirodhara, Nasya, and Brahmi-based herbal support" },
  { name: "Skin Conditions (Eczema/Psoriasis)", price: "From ₹18,000", duration: "6–8 weeks", note: "Virechana, Takradhara, and blood-purifying herbs" },
  { name: "Diabetes Management", price: "From ₹14,000", duration: "2–3 months", note: "Panchakarma + dietary correction + herbal insulin sensitisers" },
  { name: "Arthritis & Joint Pain", price: "From ₹16,000", duration: "3–4 weeks", note: "Janu Basti, Kati Basti, Pinda Sweda, and Vata-pacifying herbs" },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <CompactHeader />
      <SEO
        title="Treatment Pricing — Dr. Kalyan Ayurveda"
        description="Transparent pricing for Ayurvedic consultations, Panchakarma packages, and specialty treatment programs at Dr. Kalyan Ayurveda, Hyderabad."
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 border-b border-border">
        <div className="container max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Treatment Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent, all-inclusive pricing with no hidden charges. All packages include medicines, therapies, and follow-up consultations as listed.
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            Clinic hours: Mon–Sat · 8:00 AM – 1:00 PM &amp; 5:00 PM – 9:00 PM
          </p>
        </div>
      </section>

      {/* Consultations */}
      <section className="py-14">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Consultations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {consultations.map(c => (
              <div key={c.name} className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{c.name}</h3>
                    <p className="text-sm text-muted-foreground">{c.duration}</p>
                  </div>
                  <span className="text-2xl font-bold text-primary">{c.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{c.description}</p>
                <ul className="space-y-1.5">
                  {c.includes.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Panchakarma Packages */}
      <section className="py-14 bg-muted/30">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground mb-2">Panchakarma Packages</h2>
          <p className="text-muted-foreground mb-8">All-inclusive residential and outpatient programs. Prices include therapies, medicines, and consultations.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {packages.map(pkg => (
              <div
                key={pkg.name}
                className={`rounded-xl border p-6 ${pkg.highlighted ? "border-primary shadow-lg bg-white ring-1 ring-primary/20" : "border-border bg-white"}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-foreground text-lg">{pkg.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${pkg.tagColor}`}>{pkg.tag}</span>
                </div>
                <p className="text-3xl font-bold text-primary mb-1">{pkg.price}</p>
                <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                <ul className="space-y-1.5 mb-6">
                  {pkg.includes.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/book-appointment">
                  <Button className={`w-full ${pkg.highlighted ? "bg-primary hover:bg-primary/90 text-white" : ""}`} variant={pkg.highlighted ? "default" : "outline"}>
                    Book This Program
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Programs */}
      <section className="py-14">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground mb-2">Specialty Treatment Programs</h2>
          <p className="text-muted-foreground mb-8">Condition-specific programs tailored after initial consultation. Final pricing confirmed after assessment.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {specialtyPrograms.map(sp => (
              <div key={sp.name} className="bg-white rounded-xl border border-border p-5 flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground">{sp.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{sp.note}</p>
                  <p className="text-xs text-muted-foreground mt-1">Duration: {sp.duration}</p>
                </div>
                <span className="text-base font-bold text-primary shrink-0">{sp.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Not sure which program is right for you?</h2>
          <p className="text-muted-foreground mb-6">
            Book an initial consultation and Dr. Kalyan will design a personalised treatment plan based on your health goals and Prakriti.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book-appointment">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">Book a Consultation</Button>
            </Link>
            <a href="tel:+919281332544">
              <Button size="lg" variant="outline">
                <Phone className="w-4 h-4 mr-2" /> +91 92813 32544
              </Button>
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-4">* Prices are indicative and may vary based on individual treatment requirements. GST applicable where applicable.</p>
        </div>
      </section>
    </div>
  );
}
