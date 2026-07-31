import { CompactHeader } from "@/components/CompactHeader";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Calendar, Phone, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function MyAppointments() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0 flex items-center justify-center px-6">
      <SEO title="My Appointments — Dr. Kalyan Ayurveda" description="View and manage your Ayurvedic treatment appointments." />
      <div className="text-center max-w-sm">
        <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-foreground mb-2">Your Appointments</h1>
        <p className="text-muted-foreground mb-6">
          To check your appointment status, confirm a booking, or reschedule, contact us directly via WhatsApp or call.
        </p>
        <div className="flex flex-col gap-3">
          <a href="https://wa.me/919281332544?text=Hello%20Dr.%20Kalyan%2C%20I%20would%20like%20to%20check%20my%20appointment%20status." target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" /> Check via WhatsApp
            </Button>
          </a>
          <a href="tel:+919281332544">
            <Button variant="outline" className="w-full">
              <Phone className="w-4 h-4 mr-2" /> Call +91 92813 32544
            </Button>
          </a>
          <Link href="/book-appointment">
            <Button variant="outline" className="w-full">Book a New Appointment</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
