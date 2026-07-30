import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { CompactHeader } from '@/components/CompactHeader';
import { SocialMediaLinks } from '@/components/SocialMediaLinks';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Calendar, Clock, MapPin, Phone, Mail, Download, Home } from 'lucide-react';
import { toast } from 'sonner';

export default function BookingSuccess() {
  const [bookingDetails, setBookingDetails] = useState<any>(null);

  useEffect(() => {
    // Get booking details from localStorage or URL params
    const stored = localStorage.getItem('lastBooking');
    if (stored) {
      setBookingDetails(JSON.parse(stored));
    } else {
      // Demo booking details
      setBookingDetails({
        id: 'BK-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        time: '10:00 AM',
        duration: '60 minutes',
        type: 'Initial Consultation',
        patientName: 'Patient',
        email: 'patient@example.com',
        phone: '+91 XXXXXXXXXX',
      });
    }
  }, []);

  const handleAddToCalendar = () => {
    if (!bookingDetails) return;

    const event = {
      title: `Dr. Kalyan Ayurveda - ${bookingDetails.type}`,
      description: 'Your consultation with Dr. Kalyan Ayurveda',
      location: 'Flat No.102, Plot No.309, Prashanth Hills Colony, Raidurg Navkhalsa',
      startTime: new Date(bookingDetails.date).toISOString(),
    };

    // Create Google Calendar link
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    window.open(calendarUrl, '_blank');
    toast.success('Opening Google Calendar...');
  };

  const handleDownloadConfirmation = () => {
    if (!bookingDetails) return;

    const confirmationText = `
CONSULTATION BOOKING CONFIRMATION
==================================

Booking ID: ${bookingDetails.id}
Date: ${bookingDetails.date}
Time: ${bookingDetails.time}
Duration: ${bookingDetails.duration}
Type: ${bookingDetails.type}

PATIENT INFORMATION
Patient Name: ${bookingDetails.patientName}
Email: ${bookingDetails.email}
Phone: ${bookingDetails.phone}

CLINIC LOCATION
Dr. Kalyan Ayurveda
Flat No.102, Plot No.309
Prashanth Hills Colony
Raidurg Navkhalsa

CONSULTATION HOURS
Monday - Friday: 8:00 AM - 1:00 PM | 5:00 PM - 9:00 PM
Saturday: 8:00 AM - 1:00 PM
Sunday: Closed

WHAT TO EXPECT
1. Initial health assessment and dosha evaluation
2. Discussion of your health concerns and goals
3. Personalized treatment plan recommendation
4. Dietary and lifestyle guidance
5. Herbal medicine prescription if needed

IMPORTANT NOTES
- Please arrive 10 minutes early
- Bring any relevant medical reports
- Wear comfortable clothing
- Avoid heavy meals 2 hours before consultation
- Have a list of current medications ready

For any changes or cancellations, please contact:
Phone: +91 92813 32544
Email: contact@drkalyanayurveda.com

Thank you for choosing Dr. Kalyan Ayurveda!
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(confirmationText));
    element.setAttribute('download', `booking-confirmation-${bookingDetails.id}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Confirmation downloaded!');
  };

  if (!bookingDetails) {
    return (
      <div className="min-h-screen bg-white">
        <CompactHeader />
        <div className="py-20 text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <CompactHeader />

      {/* Success Section */}
      <div className="py-12 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <CheckCircle className="w-20 h-20 text-green-600 animate-bounce" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">Booking Confirmed!</h1>
          <p className="text-lg text-foreground/60">
            Your consultation has been successfully scheduled. We look forward to seeing you soon.
          </p>
        </div>

        {/* Booking Details Card */}
        <Card className="max-w-2xl mx-auto p-8 mb-8 border-2 border-green-200 bg-white">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <p className="text-xs text-foreground/60 mb-1">Booking ID</p>
                <p className="text-lg font-bold text-foreground">{bookingDetails.id}</p>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-foreground/60">Date</p>
                  <p className="font-semibold text-foreground">{bookingDetails.date}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-foreground/60">Time</p>
                  <p className="font-semibold text-foreground">{bookingDetails.time}</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <p className="text-xs text-foreground/60 mb-1">Consultation Type</p>
                <p className="text-lg font-bold text-foreground">{bookingDetails.type}</p>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-foreground/60">Location</p>
                  <p className="font-semibold text-foreground text-sm">
                    Flat No.102, Plot No.309<br />Prashanth Hills Colony
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-6" />

          {/* Contact Information */}
          <div className="space-y-3 mb-8">
            <h3 className="font-semibold text-foreground mb-4">Clinic Contact</h3>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="tel:+919281332544" className="text-primary hover:underline">
                +91 92813 32544
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="mailto:contact@drkalyanayurveda.com" className="text-primary hover:underline">
                contact@drkalyanayurveda.com
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 gap-3">
            <Button
              onClick={handleAddToCalendar}
              className="bg-primary hover:bg-primary/90 text-white gap-2"
            >
              <Calendar className="w-4 h-4" />
              Add to Calendar
            </Button>
            <Button
              onClick={handleDownloadConfirmation}
              variant="outline"
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Download Confirmation
            </Button>
          </div>
        </Card>

        {/* What to Expect */}
        <div className="max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4 bg-white border-l-4 border-l-primary">
              <h4 className="font-semibold text-foreground mb-2">Before Your Visit</h4>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>✓ Arrive 10 minutes early</li>
                <li>✓ Bring medical reports</li>
                <li>✓ Wear comfortable clothing</li>
                <li>✓ List current medications</li>
              </ul>
            </Card>

            <Card className="p-4 bg-white border-l-4 border-l-green-600">
              <h4 className="font-semibold text-foreground mb-2">During Consultation</h4>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>✓ Health assessment</li>
                <li>✓ Dosha evaluation</li>
                <li>✓ Treatment planning</li>
                <li>✓ Lifestyle guidance</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Next Steps */}
        <Card className="max-w-2xl mx-auto p-6 bg-blue-50 border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-4">📋 Next Steps</h3>
          <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
            <li>Add the consultation date to your calendar</li>
            <li>Review the preparation guidelines above</li>
            <li>Prepare a list of your health concerns</li>
            <li>Arrive 10 minutes before your scheduled time</li>
            <li>Bring any relevant medical documents</li>
          </ol>
        </Card>
      </div>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need Help?</h2>
          <p className="text-foreground/60 mb-6">
            If you have any questions or need to reschedule, please contact us directly.
          </p>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <a href="tel:+919281332544">
              <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                <Phone className="w-4 h-4" />
                Call Us
              </Button>
            </a>
            <a href="mailto:contact@drkalyanayurveda.com">
              <Button variant="outline" className="gap-2">
                <Mail className="w-4 h-4" />
                Email Us
              </Button>
            </a>
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
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
              <h4 className="font-semibold mb-3 text-sm">Treatment Areas</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><Link href="/treatments" className="hover:text-white transition-colors">Panchakarma</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Chronic Diseases</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Mental Health</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Fertility</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Contact</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><a href="mailto:contact@drkalyanayurveda.com" className="hover:text-white">contact@drkalyanayurveda.com</a></li>
                <li><a href="tel:+919281332544" className="hover:text-white">+91 92813 32544</a></li>
                <li className="text-xs leading-snug">Flat No.102, Plot No.309, Near Volkswagen Service Centre, Prashanth Hills Colony, Raidurg Navkhalsa</li>
                <li>8:00 AM - 1:00 PM | 5:00 PM - 9:00 PM</li>
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
