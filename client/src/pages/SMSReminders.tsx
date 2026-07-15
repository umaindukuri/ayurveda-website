import { CompactHeader } from '@/components/CompactHeader';
import { SocialMediaLinks } from '@/components/SocialMediaLinks';
import { SMSReminderSystem } from '@/components/SMSReminderSystem';
import { Link } from 'wouter';

export default function SMSReminders() {
  return (
    <div className="min-h-screen bg-white">
      <CompactHeader />

      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-border">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-3">SMS Appointment Reminders</h1>
          <p className="text-lg text-foreground/60">
            Automated SMS notifications to reduce no-shows and improve patient attendance by 30-40%
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="container max-w-4xl">
          <SMSReminderSystem />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 bg-gray-50 border-y border-border">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">📊 Reduce No-Shows</h3>
              <p className="text-sm text-foreground/60">
                Automated reminders at 24h and 2h intervals reduce appointment no-shows by 30-40%, improving clinic efficiency.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">⏰ Timely Notifications</h3>
              <p className="text-sm text-foreground/60">
                Two-stage reminder system ensures patients don't forget their appointments and arrive on time.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">💬 Patient Engagement</h3>
              <p className="text-sm text-foreground/60">
                Direct SMS communication keeps patients engaged and informed about their upcoming consultations.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">📈 Revenue Impact</h3>
              <p className="text-sm text-foreground/60">
                Higher attendance rates directly increase consultation revenue and improve clinic scheduling efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-12 px-6">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Implementation Guide</h2>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-l-primary bg-primary/5 rounded">
              <h3 className="font-semibold text-foreground mb-2">Step 1: Choose SMS Provider</h3>
              <p className="text-sm text-foreground/60 mb-2">
                Select an SMS service provider:
              </p>
              <ul className="text-sm text-foreground/60 space-y-1 list-disc list-inside">
                <li><strong>Twilio</strong> - Most popular, reliable, $0.0075 per SMS</li>
                <li><strong>AWS SNS</strong> - Integrated with AWS, $0.00645 per SMS</li>
                <li><strong>Nexmo/Vonage</strong> - Good coverage, $0.068 per SMS</li>
              </ul>
            </div>

            <div className="p-4 border-l-4 border-l-green-600 bg-green-50 rounded">
              <h3 className="font-semibold text-foreground mb-2">Step 2: API Integration</h3>
              <p className="text-sm text-foreground/60">
                Connect your chosen SMS provider to the booking system. Add API credentials to environment variables and update the SMSReminderSystem component to send real SMS instead of simulated ones.
              </p>
            </div>

            <div className="p-4 border-l-4 border-l-orange-600 bg-orange-50 rounded">
              <h3 className="font-semibold text-foreground mb-2">Step 3: Schedule Reminders</h3>
              <p className="text-sm text-foreground/60">
                Set up automated scheduling to send reminders at 24 hours and 2 hours before each appointment. Use a job scheduler like node-cron or AWS Lambda for automation.
              </p>
            </div>

            <div className="p-4 border-l-4 border-l-blue-600 bg-blue-50 rounded">
              <h3 className="font-semibold text-foreground mb-2">Step 4: Monitor & Optimize</h3>
              <p className="text-sm text-foreground/60">
                Track SMS delivery rates, open rates, and no-show reduction. Adjust reminder timing based on patient feedback and attendance data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/manus-storage/dr_kalyan_logo_final_07bd8e78.png" alt="Logo" className="h-6 w-6 invert" />
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
                <li><Link href="/analytics" className="hover:text-white transition-colors">Analytics</Link></li>
                <li><Link href="/email-automation" className="hover:text-white transition-colors">Email Automation</Link></li>
                <li><Link href="/booking-success" className="hover:text-white transition-colors">Booking Confirmation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Contact</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><a href="mailto:contact@drkalyan.com" className="hover:text-white">contact@drkalyan.com</a></li>
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
