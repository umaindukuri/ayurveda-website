import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";
import { CompactHeader } from "@/components/CompactHeader";
import { trpc } from "@/lib/trpc";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general" as "general" | "booking" | "treatment" | "other",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContact = trpc.contact.submit.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsSubmitting(true);
    try {
      // Save to DB and send email notification to contact@drkalyanayurveda.com
      await submitContact.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        subject: formData.subject || undefined,
        message: formData.message,
        inquiryType: formData.inquiryType,
      });
      toast.success("Message sent! We'll get back to you shortly.");
    } catch {
      // Non-blocking: still proceed to WhatsApp even if server save fails
      toast.error("Could not save your message to our server — please use WhatsApp below.");
    } finally {
      setIsSubmitting(false);
    }
    // Also open WhatsApp as a secondary channel
    const msg = [
      `Hello Dr. Kalyan,`,
      ``,
      `Name: ${formData.name}`,
      formData.phone ? `Phone: ${formData.phone}` : null,
      `Email: ${formData.email}`,
      formData.subject ? `Subject: ${formData.subject}` : null,
      `Type: ${formData.inquiryType}`,
      ``,
      formData.message,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/919281332544?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "", inquiryType: "general" });
  };

  return (
    <div className="min-h-screen bg-background">
    <SEO title="Contact Dr. Kalyan Ayurveda | Clinic in Raidurg, Hyderabad" description="Contact Dr. Kalyan Ayurveda Specialities & Panchakarma Center. Book a consultation or visit us at Prashanth Hills Colony, Raidurg, Hyderabad. Call or WhatsApp for appointments." keywords="contact Dr Kalyan Ayurveda, book Ayurveda consultation Hyderabad, Ayurveda clinic contact" url="/contact" />
      <CompactHeader />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have questions about our treatments? We're here to help. Reach out and let's discuss your wellness journey.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 92813 32544</p>
                    <p className="text-muted-foreground">+91 70322 21979</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Clinic</h3>
                    <p className="text-muted-foreground">Dr. Kalyan Ayurveda Specialities</p>
                    <p className="text-muted-foreground">& Panchakarma Center</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">Flat No.102, Plot No.309</p>
                    <p className="text-muted-foreground">Near Volkswagen Service Centre</p>
                    <p className="text-muted-foreground">Prashanth Hills Colony</p>
                    <p className="text-muted-foreground">Raidurg Navkhalsa</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Consultation Hours</h3>
                    <p className="text-muted-foreground">8:00 AM - 1:00 PM</p>
                    <p className="text-muted-foreground">5:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-12 rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe
                  title="Dr. Kalyan Ayurveda Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9!2d78.3742!3d17.4235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc3dc3dc3d%3A0x0!2sPrashanth+Hills+Colony%2C+Raidurg+Navkhalsa%2C+Hyderabad%2C+Telangana+500081!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://maps.google.com/?q=Prashanth+Hills+Colony,+Raidurg+Navkhalsa,+Hyderabad,+Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                      <CheckCircle2 className="w-16 h-16 text-green-500" />
                      <h3 className="text-xl font-semibold text-foreground">Message Received!</h3>
                      <p className="text-muted-foreground max-w-xs">
                        Thank you for reaching out. Dr. Kalyan's team will contact you within 24 hours.
                      </p>
                      <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-2">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(val) =>
                            setFormData(prev => ({ ...prev, inquiryType: val as typeof formData.inquiryType }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="booking">Book Appointment</SelectItem>
                            <SelectItem value="treatment">Treatment Question</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="e.g. Panchakarma inquiry"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your health concerns and how we can help..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</>
                        ) : (
                          "Send Message & Open WhatsApp"
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-white/50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-16 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>How do I schedule a consultation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can book a consultation by clicking the "Book Consultation" button on our website, calling us at +91 92813 32544, or filling out the contact form above. We'll respond within 24 hours to confirm your appointment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>What should I expect during my first visit?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your first visit includes a comprehensive assessment of your health history, current symptoms, and lifestyle. We'll determine your dosha constitution and create a personalized treatment plan tailored to your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>How long are the treatment programs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer flexible programs: 7-day intensive for introduction and wellness, 14-day therapeutic for chronic disease treatment, and 21-day transformation for deep healing and rejuvenation. Custom programs can also be arranged.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Can Ayurveda complement my current medications?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Ayurveda works beautifully alongside conventional medicine. We coordinate with your primary care physician to ensure all treatments are compatible and supportive of your overall health goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">Ready to Begin Your Healing?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't wait another day. Schedule your personalized consultation and take the first step toward lasting wellness.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-base"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setTimeout(() => setSubmitted(false), 300);
            }}
          >
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
                <li><a href="mailto:contact@drkalyanayurveda.com" className="hover:text-white">contact@drkalyanayurveda.com</a></li>
                <li><a href="tel:+919281332544" className="hover:text-white">+91 92813 32544</a></li>
                <li className="text-sm leading-snug">Flat No.102, Plot No.309, Near Volkswagen Service Centre, Prashanth Hills Colony, Raidurg Navkhalsa</li>
                <li>8:00 AM - 1:00 PM | 5:00 PM - 9:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/70">© 2026 Dr. Kalyan Ayurveda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
