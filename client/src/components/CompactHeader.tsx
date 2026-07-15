import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { BookingModal } from '@/components/BookingModal';
import { X } from 'lucide-react';
import { toast } from 'sonner';

export function CompactHeader() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    setIsSubscribed(true);
    toast.success('Subscribed! Check your email for wellness tips.');
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <>
      {/* Top Newsletter Bar */}
      <div className="bg-primary text-white py-2 px-6">
        <div className="flex items-center justify-between max-w-full gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-xs md:text-sm flex-shrink-0">
            <span className="font-semibold">📧 Wellness Tips:</span>
            <span className="hidden sm:inline text-white/90">Subscribe for Ayurvedic health insights</span>
          </div>
          <form onSubmit={handleSubscribe} className="flex gap-2 flex-1 min-w-0 md:flex-none">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="px-3 py-1 rounded text-xs md:text-sm text-foreground flex-1 md:flex-none md:w-40 bg-white/20 border border-white/30 placeholder:text-white/60 focus:outline-none focus:border-white"
            />
            <Button
              type="submit"
              size="sm"
              className="bg-white text-primary hover:bg-white/90 text-xs md:text-sm px-3 py-1 h-auto flex-shrink-0"
            >
              {isSubscribed ? '✓' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-8 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="flex items-center justify-between h-16 px-6 max-w-full">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer flex-shrink-0">
              <img src="/manus-storage/dr_kalyan_logo_final_07bd8e78.png" alt="Dr. Kalyan Ayurveda" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-primary leading-tight">Dr. Kalyan</span>
                <span className="text-xs font-bold text-primary leading-tight">Ayurveda</span>
              </div>
            </div>
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            <Link href="/" className="text-xs font-medium text-primary font-semibold hover:text-primary/80 transition-colors">Home</Link>
            <Link href="/treatments" className="text-xs font-medium text-foreground hover:text-primary transition-colors">Treatments</Link>
            <Link href="/about" className="text-xs font-medium text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/testimonials" className="text-xs font-medium text-foreground hover:text-primary transition-colors">Success Stories</Link>
            <Link href="/video-testimonials" className="text-xs font-medium text-foreground hover:text-primary transition-colors">Videos</Link>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <BookingModal triggerText="Book Now" />
          </div>
        </div>
      </nav>
    </>
  );
}
