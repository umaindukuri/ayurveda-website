import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { ArrowLeft, CheckCircle, Clock, Users, Star, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919281332544";

interface TreatmentData {
  slug: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  seoDescription: string;
  duration: string;
  successRate: string;
  patientsHelped: string;
  heroImage: string;
  overview: string;
  benefits: string[];
  conditions: string[];
  procedures: { name: string; description: string }[];
  programOptions: { name: string; duration: string; price: string; ideal: string }[];
  faqs: { question: string; answer: string }[];
}

const TREATMENTS: Record<string, TreatmentData> = {
  panchakarma: {
    slug: "panchakarma",
    title: "Panchakarma Detoxification",
    subtitle: "The Heart of Authentic Ayurvedic Healing",
    heroDescription: "Deep cleansing and rejuvenation through the authentic 5-procedure Ayurvedic detoxification system.",
    seoDescription: "Authentic Panchakarma detoxification at Dr. Kalyan Ayurveda, Hyderabad. 5-procedure deep cleansing for chronic disease, stress, and rejuvenation. 7, 14 & 21-day programs.",
    duration: "7–21 Days",
    successRate: "85%",
    patientsHelped: "500+",
    heroImage: "/images/panchakarma_treatment_vibrant_d075a65b.webp",
    overview: "Panchakarma is the cornerstone of Ayurvedic medicine — a comprehensive system of five coordinated detoxification procedures that gently yet profoundly cleanse the body from accumulated metabolic residue (ama). Rooted in 5,000 years of Vedic wisdom, this ancient protocol removes toxins from deep tissues, restores balance to the three doshas (Vata, Pitta, Kapha), and rejuvenates every cell in the body. At Dr. Kalyan Ayurveda, each Panchakarma program is fully personalized based on your prakriti (constitution) and current health condition.",
    benefits: [
      "Eliminates deep-seated toxins from tissues and channels",
      "Restores doshic balance (Vata, Pitta, Kapha)",
      "Strengthens immunity and digestive fire (Agni)",
      "Reverses premature aging and rejuvenates tissues",
      "Calms the nervous system and reduces chronic stress",
      "Improves sleep quality and mental clarity",
      "Enhances nutrient absorption and metabolism",
      "Provides lasting relief from chronic conditions"
    ],
    conditions: [
      "Chronic fatigue and low energy",
      "Digestive disorders (IBS, constipation, acid reflux)",
      "Arthritis and joint pain",
      "Skin conditions (eczema, psoriasis)",
      "Anxiety, depression, insomnia",
      "Hormonal imbalances",
      "Autoimmune conditions",
      "General wellness and prevention"
    ],
    procedures: [
      { name: "Vamana (Therapeutic Emesis)", description: "Medicated emesis to eliminate excess Kapha from the upper respiratory and digestive tract. Highly effective for asthma, skin diseases, and obesity." },
      { name: "Virechana (Purgation Therapy)", description: "Controlled purgation using herbal formulations to cleanse Pitta from the liver, gallbladder, and small intestine. Excellent for skin disorders, liver conditions, and inflammatory diseases." },
      { name: "Basti (Medicated Enema)", description: "The most powerful Panchakarma procedure — herbal decoctions and medicated oils administered rectally to cleanse Vata from the colon. Highly effective for neurological conditions, arthritis, and chronic pain." },
      { name: "Nasya (Nasal Administration)", description: "Medicated oils and herbal preparations administered through the nasal passages to cleanse the head region. Treats sinusitis, migraines, hair loss, and neurological conditions." },
      { name: "Raktamokshana (Bloodletting)", description: "Selective removal of vitiated blood using leeches or surgical methods. Used for specific skin conditions, gout, and inflammatory disorders." }
    ],
    programOptions: [
      { name: "7-Day Introductory", duration: "7 days", price: "₹18,000–₹25,000", ideal: "First-time experience, stress relief, general wellness" },
      { name: "14-Day Therapeutic", duration: "14 days", price: "₹32,000–₹42,000", ideal: "Chronic conditions, significant health transformation" },
      { name: "21-Day Complete", duration: "21 days", price: "₹45,000–₹60,000", ideal: "Deep healing, rejuvenation, complete lifestyle reset" }
    ],
    faqs: [
      { question: "Is Panchakarma safe?", answer: "Yes, when performed by a qualified Ayurvedic physician. At Dr. Kalyan Ayurveda, all procedures are supervised by Dr. Kalyan himself, with daily health monitoring throughout the program." },
      { question: "What should I expect during the program?", answer: "You will follow a specific diet (kitchari and light foods), receive daily treatments, and rest adequately. Some mild discomfort during detox is normal and indicates the process is working." },
      { question: "Can I continue my regular medications?", answer: "Yes. We work alongside your existing medications. Dr. Kalyan will review your current prescriptions during the initial consultation and advise accordingly." },
      { question: "How long do the results last?", answer: "With proper diet and lifestyle changes post-treatment, results typically last 6–12 months. Annual Panchakarma is recommended for optimal health maintenance." }
    ]
  },
  "chronic-diseases": {
    slug: "chronic-diseases",
    title: "Chronic Disease Management",
    subtitle: "Natural Healing for Long-Term Conditions",
    heroDescription: "Ayurvedic treatment for arthritis, diabetes, hypertension, heart disease, and autoimmune disorders through root-cause healing.",
    seoDescription: "Ayurvedic chronic disease management at Dr. Kalyan Ayurveda, Hyderabad. Natural treatment for arthritis, diabetes, hypertension, and autoimmune conditions.",
    duration: "14–90 Days",
    successRate: "78%",
    patientsHelped: "800+",
    heroImage: "/images/hero_meditation_premium_0f0d5eb0.webp",
    overview: "Chronic diseases are the result of long-standing doshic imbalances, accumulated toxins (ama), and weakened digestive fire (Agni). Unlike modern medicine which primarily manages symptoms, Ayurveda identifies and addresses the root cause — restoring the body's innate healing intelligence. Dr. Kalyan's approach combines Panchakarma detoxification, personalized herbal formulations, dietary therapy, and lifestyle modifications to create lasting transformation in chronic conditions.",
    benefits: [
      "Addresses root cause rather than suppressing symptoms",
      "Reduces dependence on long-term medications",
      "Improves quality of life and daily functioning",
      "Prevents disease progression and complications",
      "Strengthens immunity and resilience",
      "Restores energy levels and vitality",
      "Improves sleep and mental well-being",
      "Safe integration with existing medical treatments"
    ],
    conditions: [
      "Rheumatoid Arthritis & Osteoarthritis",
      "Type 2 Diabetes & Pre-diabetes",
      "Hypertension & Cardiovascular Risk",
      "Thyroid Disorders (Hypo/Hyperthyroidism)",
      "Autoimmune Conditions (Lupus, MS)",
      "Chronic Kidney Disease (early stages)",
      "PCOD/PCOS",
      "Chronic Fatigue Syndrome"
    ],
    procedures: [
      { name: "Personalized Herbal Formulations", description: "Classical Ayurvedic formulations (kashayam, arishtam, churnam) tailored to your specific condition, constitution, and disease stage." },
      { name: "Panchakarma Detoxification", description: "Targeted detox procedures to remove the specific toxins driving your chronic condition, creating a clean foundation for healing." },
      { name: "Dietary Therapy (Ahara Chikitsa)", description: "A personalized therapeutic diet that supports healing, reduces inflammation, and nourishes depleted tissues specific to your condition." },
      { name: "Yoga & Pranayama", description: "Condition-specific yoga postures and breathing exercises to improve circulation, reduce inflammation, and support organ function." },
      { name: "Rasayana (Rejuvenation Therapy)", description: "Specialized herbal preparations that rebuild depleted tissues, strengthen immunity, and slow disease progression." }
    ],
    programOptions: [
      { name: "Initial Assessment & Protocol", duration: "14 days", price: "₹8,000–₹15,000", ideal: "Diagnosis, initial detox, and treatment protocol setup" },
      { name: "Intensive Healing Program", duration: "30 days", price: "₹20,000–₹35,000", ideal: "Active disease management and significant improvement" },
      { name: "Long-Term Wellness Plan", duration: "90 days", price: "₹45,000–₹70,000", ideal: "Complete reversal or sustained remission of chronic condition" }
    ],
    faqs: [
      { question: "Can Ayurveda cure chronic diseases?", answer: "Ayurveda can achieve significant improvement, remission, and in many cases complete reversal of chronic conditions, especially when addressed early. Results depend on disease duration, severity, and patient compliance." },
      { question: "Will I need to stop my current medications?", answer: "No. We work alongside your existing treatment. As your condition improves, medication reduction is done gradually under the supervision of both your physician and Dr. Kalyan." },
      { question: "How quickly will I see results?", answer: "Most patients notice improvement within 2–4 weeks. Significant changes in lab values and symptoms typically occur within 60–90 days of consistent treatment." }
    ]
  },
  "digestive-health": {
    slug: "digestive-health",
    title: "Digestive & Metabolic Health",
    subtitle: "Restore Your Digestive Fire",
    heroDescription: "Heal IBS, acid reflux, constipation, and metabolic disorders through Ayurvedic gut restoration and Agni rekindling.",
    seoDescription: "Ayurvedic digestive health treatment at Dr. Kalyan Ayurveda, Hyderabad. Natural cure for IBS, acid reflux, constipation, and metabolic disorders.",
    duration: "7–30 Days",
    successRate: "82%",
    patientsHelped: "600+",
    heroImage: "/images/hero_meditation_premium_0f0d5eb0.webp",
    overview: "In Ayurveda, all disease begins with impaired digestion. Agni — the digestive fire — is the cornerstone of health. When Agni is weakened, food is not properly digested, leading to the formation of ama (undigested metabolic waste) that clogs channels and creates disease. Dr. Kalyan's digestive health program focuses on rekindling Agni, removing accumulated ama, healing the gut lining, and restoring proper digestive function through a combination of herbal medicines, dietary therapy, and targeted Panchakarma procedures.",
    benefits: [
      "Eliminates bloating, gas, and abdominal discomfort",
      "Heals the gut lining and reduces intestinal inflammation",
      "Restores regular, healthy bowel movements",
      "Improves nutrient absorption and assimilation",
      "Balances gut microbiome naturally",
      "Reduces acid reflux and heartburn",
      "Supports healthy weight management",
      "Improves skin health (gut-skin axis)"
    ],
    conditions: [
      "Irritable Bowel Syndrome (IBS)",
      "Inflammatory Bowel Disease (Crohn's, Colitis)",
      "Acid Reflux & GERD",
      "Chronic Constipation",
      "Bloating & Flatulence",
      "Malabsorption & Nutritional Deficiencies",
      "Liver & Gallbladder Disorders",
      "Obesity & Metabolic Syndrome"
    ],
    procedures: [
      { name: "Virechana (Purgation)", description: "Deep cleansing of the digestive tract using medicated herbal purgatives to remove accumulated Pitta and ama from the liver and intestines." },
      { name: "Basti (Medicated Enema)", description: "Herbal decoction enemas to cleanse the colon, restore healthy gut flora, and heal the intestinal lining." },
      { name: "Deepana-Pachana (Digestive Kindling)", description: "Specific herbal formulations to rekindle digestive fire, improve enzyme secretion, and enhance metabolic function." },
      { name: "Therapeutic Diet (Pathya)", description: "A customized healing diet that soothes the gut, reduces inflammation, and gradually rebuilds digestive strength." },
      { name: "Abhyanga & Swedana", description: "Full-body oil massage followed by steam therapy to improve circulation, reduce stress (which directly impacts digestion), and open channels." }
    ],
    programOptions: [
      { name: "Gut Reset Program", duration: "7 days", price: "₹10,000–₹18,000", ideal: "Mild digestive issues, bloating, irregular bowel movements" },
      { name: "Deep Digestive Healing", duration: "14 days", price: "₹22,000–₹32,000", ideal: "IBS, acid reflux, moderate digestive disorders" },
      { name: "Complete Metabolic Restoration", duration: "30 days", price: "₹40,000–₹55,000", ideal: "Chronic IBD, severe malabsorption, metabolic syndrome" }
    ],
    faqs: [
      { question: "What diet changes are required?", answer: "You will follow a personalized therapeutic diet during treatment — typically warm, cooked, easily digestible foods. Dr. Kalyan provides detailed dietary guidelines tailored to your specific condition and constitution." },
      { question: "Can Ayurveda help with IBS?", answer: "Yes. IBS responds very well to Ayurvedic treatment. Most patients experience 60–80% reduction in symptoms within 2–4 weeks of starting treatment." },
      { question: "Is the treatment suitable for children?", answer: "Yes, with appropriate dosage adjustments. Pediatric digestive conditions including constipation, colic, and food intolerances respond well to gentle Ayurvedic treatment." }
    ]
  },
  respiratory: {
    slug: "respiratory",
    title: "Respiratory Wellness",
    subtitle: "Breathe Freely with Ayurvedic Healing",
    heroDescription: "Natural treatment for asthma, bronchitis, allergies, sinusitis, and chronic respiratory conditions through Ayurvedic lung restoration.",
    seoDescription: "Ayurvedic respiratory treatment at Dr. Kalyan Ayurveda, Hyderabad. Natural cure for asthma, bronchitis, sinusitis, and allergic rhinitis.",
    duration: "14–45 Days",
    successRate: "75%",
    patientsHelped: "350+",
    heroImage: "/images/hero_meditation_premium_0f0d5eb0.webp",
    overview: "Respiratory conditions in Ayurveda are primarily caused by imbalanced Kapha and Vata doshas, accumulated mucus (shleshma) in the respiratory channels, and weakened lung immunity (Pranavaha Srotas). Dr. Kalyan's respiratory wellness program combines powerful Kapha-reducing therapies, broncho-dilating herbal formulations, Nasya (nasal treatments), and specialized breathing practices to restore clear, healthy respiratory function.",
    benefits: [
      "Reduces frequency and severity of asthma attacks",
      "Clears mucus and opens respiratory channels",
      "Strengthens lung capacity and immunity",
      "Reduces allergic sensitivity over time",
      "Eliminates chronic sinusitis and post-nasal drip",
      "Improves sleep quality (reduces sleep apnea)",
      "Reduces dependence on inhalers and antihistamines",
      "Prevents recurrent respiratory infections"
    ],
    conditions: [
      "Bronchial Asthma",
      "Chronic Bronchitis & COPD (early stages)",
      "Allergic Rhinitis & Hay Fever",
      "Chronic Sinusitis",
      "Recurrent Upper Respiratory Infections",
      "Sleep Apnea",
      "Seasonal Allergies",
      "Post-COVID Respiratory Recovery"
    ],
    procedures: [
      { name: "Nasya (Nasal Therapy)", description: "Medicated oils and herbal preparations administered through the nasal passages to clear sinuses, reduce inflammation, and strengthen the nasal-respiratory tract." },
      { name: "Vamana (Therapeutic Emesis)", description: "Controlled medicated emesis to eliminate excess Kapha from the upper respiratory tract. Highly effective for asthma and chronic bronchitis." },
      { name: "Dhoomapana (Medicated Smoking)", description: "Inhalation of specific herbal smoke formulations to open bronchial passages, reduce mucus, and strengthen lung tissue." },
      { name: "Swedana (Steam Therapy)", description: "Herbal steam inhalation to open respiratory channels, reduce congestion, and deliver medicinal compounds directly to the lungs." },
      { name: "Pranayama & Yoga", description: "Specific breathing exercises (Bhramari, Anulom Vilom, Kapalabhati) to strengthen lung capacity and reduce bronchial hypersensitivity." }
    ],
    programOptions: [
      { name: "Respiratory Relief Program", duration: "14 days", price: "₹15,000–₹22,000", ideal: "Seasonal allergies, mild asthma, sinusitis" },
      { name: "Lung Restoration Program", duration: "21 days", price: "₹28,000–₹38,000", ideal: "Moderate asthma, chronic bronchitis, allergic rhinitis" },
      { name: "Complete Respiratory Healing", duration: "45 days", price: "₹55,000–₹75,000", ideal: "Severe asthma, COPD, post-COVID recovery" }
    ],
    faqs: [
      { question: "Can Ayurveda cure asthma completely?", answer: "Ayurveda can achieve significant reduction in asthma frequency and severity, and in many cases complete remission, especially in younger patients and those with allergic asthma. Long-term results depend on avoiding triggers and maintaining lifestyle changes." },
      { question: "Is it safe to continue my inhaler during treatment?", answer: "Yes, absolutely. We never advise stopping inhalers suddenly. As your condition improves, inhaler usage naturally decreases under medical supervision." }
    ]
  },
  "skin-health": {
    slug: "skin-health",
    title: "Skin Conditions",
    subtitle: "Radiant Skin from Within",
    heroDescription: "Heal eczema, psoriasis, acne, and chronic skin conditions through Ayurvedic blood purification and deep tissue healing.",
    seoDescription: "Ayurvedic skin treatment at Dr. Kalyan Ayurveda, Hyderabad. Natural cure for eczema, psoriasis, acne, and chronic skin conditions through blood purification.",
    duration: "21–60 Days",
    successRate: "80%",
    patientsHelped: "450+",
    heroImage: "/images/hero_meditation_premium_0f0d5eb0.webp",
    overview: "In Ayurveda, skin conditions are a reflection of internal imbalances — primarily vitiated blood (Rakta dhatu), impaired liver function, and accumulated toxins (ama). Topical treatments alone cannot provide lasting relief because they address only the surface manifestation. Dr. Kalyan's skin health program works from the inside out — purifying the blood, healing the liver, removing deep-seated toxins, and nourishing the skin from within using classical Ayurvedic blood-purifying herbs and targeted Panchakarma procedures.",
    benefits: [
      "Clears chronic skin conditions from the root",
      "Purifies blood and removes skin-damaging toxins",
      "Reduces inflammation and itching",
      "Heals and regenerates damaged skin tissue",
      "Improves skin texture, tone, and radiance",
      "Reduces scarring and hyperpigmentation",
      "Prevents recurrence of skin conditions",
      "Addresses gut-skin axis imbalances"
    ],
    conditions: [
      "Eczema (Atopic Dermatitis)",
      "Psoriasis",
      "Acne & Cystic Acne",
      "Rosacea",
      "Urticaria (Hives)",
      "Vitiligo",
      "Fungal Skin Infections",
      "Premature Aging & Dull Skin"
    ],
    procedures: [
      { name: "Virechana (Blood Purification)", description: "Deep herbal purgation to cleanse vitiated Pitta and toxins from the blood and liver — the primary driver of most skin conditions." },
      { name: "Raktamokshana (Bloodletting)", description: "Selective removal of vitiated blood using medicinal leeches for specific conditions like psoriasis, eczema, and inflammatory skin disorders." },
      { name: "Takradhara (Buttermilk Pouring)", description: "Continuous pouring of medicated buttermilk over the affected areas to cool Pitta, reduce inflammation, and heal the skin." },
      { name: "Lepana (Herbal Paste Application)", description: "Application of customized herbal pastes directly to affected skin areas to reduce inflammation, kill pathogens, and promote healing." },
      { name: "Internal Herbal Medicines", description: "Powerful blood-purifying formulations (Manjistha, Neem, Khadira, Sariva) to address the root cause from within." }
    ],
    programOptions: [
      { name: "Skin Purification Program", duration: "21 days", price: "₹20,000–₹30,000", ideal: "Mild to moderate acne, eczema, rosacea" },
      { name: "Deep Skin Healing", duration: "30 days", price: "₹35,000–₹48,000", ideal: "Moderate psoriasis, chronic eczema, urticaria" },
      { name: "Complete Skin Restoration", duration: "60 days", price: "₹65,000–₹90,000", ideal: "Severe psoriasis, vitiligo, chronic resistant skin conditions" }
    ],
    faqs: [
      { question: "Will my skin condition clear completely?", answer: "Most patients see 70–90% improvement. Complete clearance depends on the condition type, duration, and severity. Psoriasis and vitiligo require longer treatment but significant improvement is achievable." },
      { question: "Are the treatments suitable for sensitive skin?", answer: "Yes. All herbal preparations are carefully selected based on your skin type and sensitivity. We start with gentle formulations and adjust based on your response." }
    ]
  },
  "mental-health": {
    slug: "mental-health",
    title: "Mental Health & Stress",
    subtitle: "Restore Emotional Balance Naturally",
    heroDescription: "Ayurvedic treatment for anxiety, depression, insomnia, and stress-related conditions through nervous system restoration.",
    seoDescription: "Ayurvedic mental health treatment at Dr. Kalyan Ayurveda, Hyderabad. Natural treatment for anxiety, depression, insomnia, and stress through Shirodhara and nervous system healing.",
    duration: "7–30 Days",
    successRate: "83%",
    patientsHelped: "400+",
    heroImage: "/images/hero_meditation_premium_0f0d5eb0.webp",
    overview: "Mental health conditions in Ayurveda are understood as imbalances in Prana Vata (the life force governing the mind and nervous system), vitiated Sadhaka Pitta (the fire of intelligence and emotion), and depleted Tarpaka Kapha (the nourishing fluid of the brain). Dr. Kalyan's mental wellness program combines deeply calming therapies like Shirodhara, Abhyanga, and Nasya with adaptogenic herbal formulations, meditation guidance, and lifestyle restructuring to restore genuine inner peace and emotional resilience.",
    benefits: [
      "Reduces anxiety and panic attacks significantly",
      "Lifts depression and restores emotional balance",
      "Improves sleep quality and duration",
      "Enhances mental clarity and concentration",
      "Reduces cortisol and stress hormones",
      "Strengthens the nervous system",
      "Improves mood and emotional regulation",
      "Reduces dependence on psychiatric medications (gradually)"
    ],
    conditions: [
      "Generalized Anxiety Disorder",
      "Depression & Mood Disorders",
      "Insomnia & Sleep Disorders",
      "Panic Attacks",
      "Burnout & Chronic Stress",
      "ADHD & Concentration Issues",
      "Post-Traumatic Stress",
      "Obsessive-Compulsive Tendencies"
    ],
    procedures: [
      { name: "Shirodhara (Oil Pouring)", description: "Warm medicated oil flows continuously onto the forehead in a steady stream, deeply calming the nervous system. One of the most powerful treatments for anxiety, insomnia, and mental fatigue." },
      { name: "Abhyanga (Full Body Oil Massage)", description: "Deeply nourishing full-body massage with medicated oils to calm Vata, reduce cortisol, and restore the nervous system's natural equilibrium." },
      { name: "Nasya (Nasal Therapy)", description: "Medicated oils administered through the nasal passages to nourish the brain, calm the mind, and improve mental clarity." },
      { name: "Shiro Basti (Head Oil Pooling)", description: "Warm medicated oil retained on the head using a special cap — deeply nourishing for the brain and highly effective for severe anxiety and depression." },
      { name: "Medhya Rasayana (Brain Tonics)", description: "Classical Ayurvedic brain-nourishing formulations (Brahmi, Ashwagandha, Shankhpushpi) to strengthen the nervous system and restore mental vitality." }
    ],
    programOptions: [
      { name: "Stress Relief Retreat", duration: "7 days", price: "₹12,000–₹18,000", ideal: "Burnout, mild anxiety, sleep issues, stress relief" },
      { name: "Mental Wellness Program", duration: "14 days", price: "₹22,000–₹32,000", ideal: "Moderate anxiety, depression, insomnia" },
      { name: "Nervous System Restoration", duration: "30 days", price: "₹42,000–₹58,000", ideal: "Severe anxiety, chronic depression, PTSD" }
    ],
    faqs: [
      { question: "Can I continue my psychiatric medications?", answer: "Yes. We work alongside your existing medications. Reduction is done very gradually as your condition improves, always in coordination with your psychiatrist." },
      { question: "How quickly does Shirodhara work?", answer: "Most patients experience profound relaxation during the very first session. Cumulative benefits for anxiety and insomnia typically become noticeable after 3–5 sessions." }
    ]
  },
  fertility: {
    slug: "fertility",
    title: "Fertility & Reproductive Health",
    subtitle: "Enhance Fertility Naturally",
    heroDescription: "Ayurvedic treatment to enhance fertility, balance hormones, improve egg and sperm quality, and support natural conception.",
    seoDescription: "Ayurvedic fertility treatment at Dr. Kalyan Ayurveda, Hyderabad. Natural treatment for infertility, PCOS, hormonal imbalance, and reproductive health for men and women.",
    duration: "90–180 Days",
    successRate: "72%",
    patientsHelped: "300+",
    heroImage: "/images/hero_meditation_premium_0f0d5eb0.webp",
    overview: "Fertility challenges in Ayurveda are understood as imbalances in Shukra dhatu (reproductive tissue) and Artava (female reproductive essence), often caused by accumulated toxins, hormonal disruption, poor nutrition, and chronic stress. Dr. Kalyan's fertility program is a comprehensive 3–6 month protocol that purifies the reproductive channels, nourishes and strengthens reproductive tissues, balances hormones naturally, and optimizes the body's environment for conception. This program is suitable for both men and women and can be used alongside IVF/IUI to improve success rates.",
    benefits: [
      "Improves egg quality and ovarian reserve",
      "Enhances sperm count, motility, and morphology",
      "Regulates menstrual cycles and ovulation",
      "Balances reproductive hormones (FSH, LH, AMH)",
      "Reduces PCOS symptoms and cysts",
      "Clears blocked fallopian tubes (in some cases)",
      "Reduces uterine fibroids and endometriosis",
      "Improves IVF/IUI success rates when used alongside"
    ],
    conditions: [
      "Unexplained Infertility",
      "PCOS/PCOD",
      "Low Ovarian Reserve",
      "Hormonal Imbalances",
      "Endometriosis",
      "Uterine Fibroids",
      "Male Factor Infertility",
      "Recurrent Pregnancy Loss"
    ],
    procedures: [
      { name: "Uttara Basti (Uterine Basti)", description: "Medicated oils administered directly into the uterus to nourish the endometrium, clear blockages, and create an optimal environment for implantation." },
      { name: "Panchakarma Detoxification", description: "Full detox program to remove toxins from reproductive tissues and channels before the fertility-enhancing phase begins." },
      { name: "Vajeekarana Rasayana", description: "Classical Ayurvedic aphrodisiac and reproductive tonic formulations (Ashwagandha, Shatavari, Kapikacchu) to nourish and strengthen reproductive tissues." },
      { name: "Abhyanga & Swedana", description: "Regular oil massage and steam therapy to improve pelvic circulation, reduce stress hormones, and nourish reproductive organs." },
      { name: "Dietary & Lifestyle Protocol", description: "A fertility-specific diet rich in reproductive-nourishing foods, combined with yoga, stress management, and sleep optimization." }
    ],
    programOptions: [
      { name: "Fertility Foundation (3 months)", duration: "90 days", price: "₹35,000–₹50,000", ideal: "Initial detox, hormone balancing, and foundation building" },
      { name: "Complete Fertility Program (6 months)", duration: "180 days", price: "₹65,000–₹90,000", ideal: "Full fertility optimization for natural conception or IVF support" },
      { name: "Male Fertility Program", duration: "90 days", price: "₹25,000–₹38,000", ideal: "Low sperm count, poor motility, male factor infertility" }
    ],
    faqs: [
      { question: "How does Ayurveda improve fertility?", answer: "Ayurveda improves fertility by removing toxins from reproductive tissues, nourishing and strengthening the reproductive organs, balancing hormones, reducing stress, and optimizing overall health — creating the ideal internal environment for conception." },
      { question: "Can this be used alongside IVF?", answer: "Yes. Many couples use Ayurvedic treatment for 3 months before IVF to improve egg and sperm quality. Studies show this can significantly improve IVF success rates." },
      { question: "Is the treatment suitable for both partners?", answer: "Yes. We offer programs for both men and women, and a combined couples program that addresses both partners simultaneously for optimal results." }
    ]
  },
  rejuvenation: {
    slug: "rejuvenation",
    title: "Rejuvenation & Anti-Aging",
    subtitle: "Rasayana Therapy for Longevity",
    heroDescription: "Ayurvedic Rasayana therapy for cellular rejuvenation, vitality restoration, and natural age-reversal.",
    seoDescription: "Ayurvedic rejuvenation and anti-aging treatment at Dr. Kalyan Ayurveda, Hyderabad. Rasayana therapy for longevity, vitality, and natural age-reversal.",
    duration: "14–30 Days",
    successRate: "90%",
    patientsHelped: "250+",
    heroImage: "/images/hero_meditation_premium_0f0d5eb0.webp",
    overview: "Rasayana — the science of rejuvenation — is one of the eight branches of classical Ayurveda. It encompasses a comprehensive system of therapies, herbal formulations, and lifestyle practices designed to rebuild depleted tissues, reverse cellular aging, restore youthful vitality, and extend healthy lifespan. Unlike cosmetic anti-aging approaches, Rasayana works at the cellular level — nourishing the seven dhatus (body tissues) from the inside out, strengthening Ojas (vital essence), and restoring the body's innate regenerative capacity.",
    benefits: [
      "Reverses cellular aging and tissue degeneration",
      "Restores youthful energy and vitality",
      "Improves skin texture, elasticity, and radiance",
      "Strengthens memory, concentration, and mental sharpness",
      "Enhances immunity and disease resistance",
      "Improves sexual vitality and reproductive health",
      "Reduces grey hair and hair loss",
      "Promotes deep, restorative sleep"
    ],
    conditions: [
      "Premature Aging",
      "Chronic Fatigue & Low Vitality",
      "Memory Decline & Brain Fog",
      "Low Immunity & Frequent Illness",
      "Sexual Debility",
      "Post-illness Recovery",
      "General Wellness Optimization",
      "Longevity & Preventive Care"
    ],
    procedures: [
      { name: "Abhyanga (Medicated Oil Massage)", description: "Daily full-body massage with specially prepared Rasayana oils to nourish all seven dhatus, improve circulation, and deeply rejuvenate tissues." },
      { name: "Shirodhara & Shiro Abhyanga", description: "Head and scalp treatments with brain-nourishing oils to rejuvenate the nervous system, improve memory, and restore mental vitality." },
      { name: "Kaya Kalpa (Body Transformation)", description: "The classical Ayurvedic cellular rejuvenation protocol using specific Rasayana herbs, dietary practices, and lifestyle modifications for deep anti-aging effects." },
      { name: "Rasayana Herbal Formulations", description: "Powerful classical rejuvenating preparations (Chyawanprash, Amalaki Rasayana, Brahma Rasayana) tailored to your age, constitution, and specific goals." },
      { name: "Panchakarma Preparation", description: "Detoxification before Rasayana to ensure the rejuvenating herbs are absorbed into clean, receptive tissues for maximum effect." }
    ],
    programOptions: [
      { name: "Vitality Restoration", duration: "14 days", price: "₹22,000–₹32,000", ideal: "Energy restoration, stress recovery, general rejuvenation" },
      { name: "Anti-Aging Intensive", duration: "21 days", price: "₹38,000–₹52,000", ideal: "Comprehensive anti-aging, skin rejuvenation, vitality" },
      { name: "Kaya Kalpa (Complete Renewal)", duration: "30 days", price: "₹55,000–₹75,000", ideal: "Deep cellular rejuvenation, longevity optimization" }
    ],
    faqs: [
      { question: "What age is best for Rasayana therapy?", answer: "Rasayana is beneficial at any age, but is most transformative between ages 35–65. Younger patients (25–35) benefit greatly for prevention and optimization. There is no upper age limit." },
      { question: "How is this different from a spa treatment?", answer: "Rasayana is a medical protocol, not a spa experience. It involves specific herbal medicines, dietary restrictions, daily therapeutic procedures, and lifestyle guidelines — all designed to create genuine physiological rejuvenation at the cellular level." }
    ]
  }
};

export default function TreatmentDetail() {
  const [, params] = useRoute("/treatments/:slug");
  const slug = params?.slug || "";
  const treatment = TREATMENTS[slug];

  if (!treatment) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <h1 className="text-2xl font-bold text-foreground mb-4">Treatment Not Found</h1>
        <Link href="/treatments">
          <Button variant="outline">← Back to Treatments</Button>
        </Link>
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent(`Hello Dr. Kalyan, I'm interested in the ${treatment.title} program. Please share more details.`);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${treatment.title} | Dr. Kalyan Ayurveda`}
        description={treatment.seoDescription}
      />

      {/* Hero */}
      <section className="relative h-[420px] flex items-end overflow-hidden">
        <img
          src={treatment.heroImage}
          alt={treatment.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 container max-w-5xl pb-10 text-white">
          <Link href="/treatments" className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Treatments
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{treatment.title}</h1>
          <p className="text-lg text-white/90 max-w-2xl">{treatment.subtitle}</p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-primary text-white py-4">
        <div className="container max-w-5xl flex flex-wrap gap-6 justify-center md:justify-between text-center">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 opacity-80" />
            <div>
              <p className="text-xs opacity-80">Program Duration</p>
              <p className="font-bold text-sm">{treatment.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 opacity-80" />
            <div>
              <p className="text-xs opacity-80">Success Rate</p>
              <p className="font-bold text-sm">{treatment.successRate}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 opacity-80" />
            <div>
              <p className="text-xs opacity-80">Patients Helped</p>
              <p className="font-bold text-sm">{treatment.patientsHelped}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-white text-primary hover:bg-white/90 text-xs">
                <MessageCircle className="w-4 h-4 mr-1" /> WhatsApp
              </Button>
            </a>
            <a href="tel:+919281332544">
              <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10 text-xs">
                <Phone className="w-4 h-4 mr-1" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="container max-w-5xl py-12 space-y-14">

        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed text-base">{treatment.overview}</p>
        </section>

        {/* Benefits & Conditions */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Key Benefits</h2>
            <ul className="space-y-2">
              {treatment.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Conditions Treated</h2>
            <ul className="space-y-2">
              {treatment.conditions.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Procedures */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Treatment Procedures</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {treatment.procedures.map((p, i) => (
              <div key={i} className="border border-border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Program Options */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Program Options</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {treatment.programOptions.map((p, i) => (
              <div key={i} className={`border rounded-lg p-5 ${i === 1 ? 'border-primary shadow-md' : 'border-border'}`}>
                {i === 1 && <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">Most Popular</p>}
                <h3 className="font-bold text-foreground text-lg mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{p.duration}</p>
                <p className="text-primary font-semibold mb-3">{p.price}</p>
                <p className="text-xs text-muted-foreground mb-4"><strong>Ideal for:</strong> {p.ideal}</p>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Dr. Kalyan, I'm interested in the ${p.name} for ${treatment.title}. Please share more details.`)}`} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white text-sm">
                    Enquire Now
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {treatment.faqs.map((f, i) => (
              <div key={i} className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">{f.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to Begin Your Healing Journey?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Book a personalized consultation with Dr. Kalyan to discuss your health concerns and create a customized {treatment.title} treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book-appointment">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Book Consultation
              </Button>
            </Link>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
              </Button>
            </a>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8 mt-8">
        <div className="container max-w-5xl text-center">
          <p className="text-white/70 text-sm">© 2026 Dr. Kalyan Ayurveda. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-3">
            <Link href="/" className="text-white/70 hover:text-white text-sm transition-colors">Home</Link>
            <Link href="/treatments" className="text-white/70 hover:text-white text-sm transition-colors">Treatments</Link>
            <Link href="/contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link>
            <Link href="/book-appointment" className="text-white/70 hover:text-white text-sm transition-colors">Book Now</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
