import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

export function FAQSection() {
  const faqs = [
    {
      question: "How long is a typical Panchakarma program?",
      answer: "A standard Panchakarma program typically lasts 21 days, though programs can be customized from 7 to 28 days depending on your condition and health goals. The duration allows sufficient time for deep detoxification and rejuvenation at the cellular level. We also offer shorter wellness programs for maintenance and prevention."
    },
    {
      question: "What conditions do you treat?",
      answer: "We treat a comprehensive range of conditions including chronic diseases (arthritis, diabetes, hypertension), digestive issues (IBS, GERD), respiratory conditions (asthma, allergies), skin disorders (eczema, psoriasis), mental health (anxiety, depression, insomnia), fertility issues, and offer rejuvenation programs for anti-aging and longevity. Each treatment is personalized based on your unique constitution (Prakriti) and current imbalance (Vikriti)."
    },
    {
      question: "What are the success rates for treatments?",
      answer: "Our success rates vary by condition: Panchakarma detoxification shows 70-80% effectiveness for chronic disease management, fertility treatments have shown 60-75% improvement in hormone balance and conception rates, and skin conditions typically show 75-85% improvement. These rates are based on patients who complete the full recommended program and follow lifestyle guidelines."
    },
    {
      question: "What is the cost of treatment?",
      answer: "Treatment costs vary based on the program duration and complexity. A 21-day Panchakarma program ranges from ₹50,000 to ₹100,000 depending on accommodation and specific procedures. Consultation fees are ₹500-1000. We offer customized packages and can discuss payment plans during your initial consultation. Contact us for detailed pricing for your specific condition."
    },
    {
      question: "What should I expect on my first visit?",
      answer: "Your first visit includes a comprehensive Ayurvedic consultation (60-90 minutes) where Dr. Kalyan will assess your constitution, current health status, and specific concerns. You'll receive a detailed diagnosis, personalized treatment plan, dietary recommendations, and lifestyle guidance. We'll discuss your health goals and create a customized program tailored to your needs."
    },
    {
      question: "Is Ayurveda safe? Are there side effects?",
      answer: "Ayurveda is a safe, natural healing system that has been practiced for over 5,000 years. When administered by qualified practitioners like Dr. Kalyan, Ayurvedic treatments have minimal side effects. Most patients experience positive changes like increased energy, better digestion, and improved sleep. During Panchakarma, some patients may experience temporary detoxification symptoms (mild fatigue, skin changes) which indicate the body is healing."
    },
    {
      question: "Can I combine Ayurveda with conventional medicine?",
      answer: "Yes, Ayurveda complements conventional medicine well. Many patients successfully combine both approaches. However, certain herbs and treatments may interact with medications, so it's important to inform Dr. Kalyan about all medications you're taking. We can coordinate with your other healthcare providers to ensure safe, integrated treatment."
    },
    {
      question: "How do I prepare for Panchakarma?",
      answer: "Preparation typically begins 1-2 weeks before your program with dietary adjustments, herbal supplements, and lifestyle modifications recommended by Dr. Kalyan. You should avoid heavy foods, alcohol, and excessive stress. During the program itself, you'll follow a specific daily routine (Dinacharya) including oil massages, herbal treatments, meditation, and dietary protocols designed to support deep healing."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our treatments and programs
          </p>
        </div>

        <Card className="border-border p-0 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border last:border-b-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors text-left">
                  <span className="text-base font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-muted/20 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <p className="text-sm text-muted-foreground">
            Contact us at <a href="tel:+919281332544" className="text-primary font-semibold hover:underline">+91 92813 32544</a> or <a href="https://wa.me/919281332544" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">WhatsApp</a>
          </p>
        </div>
      </div>
    </section>
  );
}
