import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'wouter';
import { toast } from 'sonner';
import { Star, CheckCircle } from 'lucide-react';
import { CompactHeader } from '@/components/CompactHeader';

export default function SubmitTestimonial() {
  const [formData, setFormData] = useState({
    name: '',
    condition: '',
    programType: '',
    duration: '',
    story: '',
    rating: 5,
    email: '',
    phone: '',
    agreeToPublish: false
  });

  const [submitted, setSubmitted] = useState(false);

  const conditions = [
    'Arthritis & Joint Pain',
    'Type 2 Diabetes',
    'Hypertension',
    'Chronic Fatigue',
    'IBS & Digestive Issues',
    'Asthma & Respiratory',
    'Eczema & Skin Conditions',
    'Anxiety & Depression',
    'Infertility & Hormonal Issues',
    'Insomnia & Sleep Disorders',
    'Other'
  ];

  const programTypes = [
    '7-Day Intensive',
    '14-Day Therapeutic',
    '21-Day Transformation',
    'Ongoing Treatment',
    'Consultation Only'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.condition || !formData.story || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!formData.agreeToPublish) {
      toast.error('Please agree to publish your testimonial');
      return;
    }

    // Simulate form submission
    console.log('Testimonial submitted:', formData);
    setSubmitted(true);
    toast.success('Thank you! Your testimonial has been submitted for review.');

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        condition: '',
        programType: '',
        duration: '',
        story: '',
        rating: 5,
        email: '',
        phone: '',
        agreeToPublish: false
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <CompactHeader />

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-white to-cream/30">
        <div className="container max-w-3xl">
          {!submitted ? (
            <>
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-foreground mb-4">Share Your Success Story</h1>
                <p className="text-lg text-muted-foreground">
                  Your testimonial helps other patients discover the healing power of authentic Ayurveda. We'd love to hear about your transformation!
                </p>
              </div>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Submit Your Testimonial</CardTitle>
                  <CardDescription>All fields marked with * are required</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    {/* Condition */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Condition Treated *
                      </label>
                      <select
                        name="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select a condition</option>
                        {conditions.map(cond => (
                          <option key={cond} value={cond}>{cond}</option>
                        ))}
                      </select>
                    </div>

                    {/* Program Type */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Program Type
                      </label>
                      <select
                        name="programType"
                        value={formData.programType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a program</option>
                        {programTypes.map(prog => (
                          <option key={prog} value={prog}>{prog}</option>
                        ))}
                      </select>
                    </div>

                    {/* Duration */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        How long have you been under treatment?
                      </label>
                      <Input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        placeholder="e.g., 6 months, 1 year"
                      />
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        Rate Your Experience *
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map(star => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRatingChange(star)}
                            className="transition-transform hover:scale-110"
                          >
                            <Star
                              className={`w-8 h-8 ${
                                star <= formData.rating
                                  ? 'fill-primary text-primary'
                                  : 'text-gray-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Story */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Success Story *
                      </label>
                      <Textarea
                        name="story"
                        value={formData.story}
                        onChange={handleInputChange}
                        placeholder="Share your transformation journey. Tell us about your condition before treatment, how the treatment helped you, and your results. (Minimum 50 words)"
                        rows={6}
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        {formData.story.length} characters
                      </p>
                    </div>

                    {/* Consent */}
                    <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                      <input
                        type="checkbox"
                        name="agreeToPublish"
                        checked={formData.agreeToPublish}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                      <label className="text-sm text-foreground">
                        I agree to have my testimonial published on Dr. Kalyan Ayurveda's website and social media. I understand that my name and story may be shared to help other patients. *
                      </label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                      size="lg"
                    >
                      Submit Testimonial
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Thank you for sharing your story! We'll review your testimonial and publish it within 3-5 business days.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </>
          ) : (
            <div className="text-center">
              <div className="mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Thank You!</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your testimonial has been successfully submitted. We'll review it and publish it on our website within 3-5 business days.
              </p>
              <Link href="/testimonials">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  View All Testimonials
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/dr_kalyan_logo_final_07bd8e78.png" alt="Logo" className="h-8 w-8 invert" />
                <span className="font-bold">Dr. Kalyan Ayurveda</span>
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
                <li>📞 <a href="tel:+917032221979" className="hover:text-white">+91 70322 21979</a></li>
                <li>📍 Flat No.102, Plot No.309, Near Volkswagen Service Centre, Prashanth Hills Colony, Raidurg Navkhalsa</li>
                <li>🕐 8:00 AM - 1:00 PM | 5:00 PM - 9:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2026 Dr. Kalyan Ayurveda Specialities & Panchakarma Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
