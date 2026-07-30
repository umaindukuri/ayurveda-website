import { CompactHeader } from '@/components/CompactHeader';
import { SocialMediaLinks } from '@/components/SocialMediaLinks';
import { AppointmentReschedulePortal } from '@/components/AppointmentReschedulePortal';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export default function AppointmentManagement() {
  return (
    <div className="min-h-screen bg-white">
      <CompactHeader />

      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-border">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Appointment Management</h1>
          </div>
          <p className="text-lg text-foreground/60">
            Manage your consultations - reschedule, cancel, or view your appointment history with ease
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="container max-w-4xl">
          <AppointmentReschedulePortal />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 bg-gray-50 border-y border-border">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Self-Service Rescheduling?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">⏰ 24/7 Availability</h3>
              <p className="text-sm text-foreground/60">
                Reschedule or cancel your appointments anytime, day or night, without waiting for clinic hours.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">✓ Instant Confirmation</h3>
              <p className="text-sm text-foreground/60">
                Get immediate confirmation of your rescheduled appointment with email notification.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">📱 Mobile Friendly</h3>
              <p className="text-sm text-foreground/60">
                Manage appointments from your phone or computer - fully responsive design.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">📊 Full History</h3>
              <p className="text-sm text-foreground/60">
                View all your past, upcoming, and cancelled appointments in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group border border-border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-foreground flex items-center justify-between">
                Can I reschedule my appointment online?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm text-foreground/60 mt-3">
                Yes! You can reschedule your appointment anytime through this portal. Simply select a new date and time from the available slots.
              </p>
            </details>

            <details className="group border border-border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-foreground flex items-center justify-between">
                How much notice do I need to give for cancellation?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm text-foreground/60 mt-3">
                Cancellations made 24 hours or more before your appointment are free. Late cancellations (less than 24 hours) may incur a cancellation fee as per our policy.
              </p>
            </details>

            <details className="group border border-border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-foreground flex items-center justify-between">
                What if I need to reschedule multiple times?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm text-foreground/60 mt-3">
                You can reschedule as many times as needed through this portal. However, if you find yourself frequently rescheduling, we recommend contacting us to discuss a more suitable appointment time.
              </p>
            </details>

            <details className="group border border-border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-foreground flex items-center justify-between">
                Will I receive confirmation of my changes?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm text-foreground/60 mt-3">
                Yes, you will receive an email confirmation immediately after rescheduling or cancelling your appointment. You'll also receive SMS reminders for your new appointment time.
              </p>
            </details>

            <details className="group border border-border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-foreground flex items-center justify-between">
                What if I can't find a suitable time slot?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm text-foreground/60 mt-3">
                If you can't find a suitable time, please contact us directly at +91 92813 32544 or email contact@drkalyanayurveda.com. Our team will help you find the perfect appointment time.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Need Help?</h2>
          <p className="text-foreground/60 mb-6">
            If you have any questions or need assistance, our team is here to help.
          </p>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <a href="tel:+919281332544">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Call Us: +91 92813 32544
              </Button>
            </a>
            <a href="mailto:contact@drkalyanayurveda.com">
              <Button variant="outline">
                Email: contact@drkalyanayurveda.com
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
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
              <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition-colors">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Features</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><Link href="/booking-success" className="hover:text-white transition-colors">Booking Confirmation</Link></li>
                <li><Link href="/sms-reminders" className="hover:text-white transition-colors">SMS Reminders</Link></li>
                <li><Link href="/analytics" className="hover:text-white transition-colors">Analytics</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Contact</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><a href="mailto:contact@drkalyanayurveda.com" className="hover:text-white">contact@drkalyanayurveda.com</a></li>
                <li><a href="tel:+919281332544" className="hover:text-white">+91 92813 32544</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-6 pt-4 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/70 text-xs text-center md:text-left">&copy; 2026 Dr. Kalyan Ayurveda. All rights reserved.</p>
            <SocialMediaLinks variant="footer" size="sm" />
          </div>
        </div>
      </footer>
    </div>
  );
}
