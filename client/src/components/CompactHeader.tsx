import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { BookingModal } from '@/components/BookingModal';
import { MobileMenuDrawer } from '@/components/MobileMenuDrawer';
import { ChevronDown, Inbox } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/_core/hooks/useAuth';
import { trpc } from '@/lib/trpc';

export function CompactHeader() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  const { data: countData } = trpc.admin.newInquiryCount.useQuery(undefined, {
    enabled: isAdmin,
    refetchInterval: 60_000,
  });
  const newCount = countData?.count ?? 0;

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
              <img src="/images/dr_kalyan_logo_final_07bd8e78.png" alt="Dr. Kalyan Ayurveda" className="h-10 w-10" />
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
            
            {/* Learn Dropdown */}
            <div className="relative group">
              <button className="text-xs font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Learn
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/ayurveda-cures" className="block px-4 py-2 text-xs text-foreground hover:bg-primary/10 hover:text-primary transition-colors first:rounded-t-lg">
                  Ayurveda Cures
                </Link>
                <Link href="/ayurveda-basics" className="block px-4 py-2 text-xs text-foreground hover:bg-primary/10 hover:text-primary transition-colors last:rounded-b-lg">
                  Ayurveda Basics
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu & CTA Button */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {isAdmin && (
              <Link href="/admin/inquiries">
                <button className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-primary/10 transition-colors" title="Patient Inquiries">
                  <Inbox className="w-5 h-5 text-primary" />
                  {newCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold leading-none">
                      {newCount > 9 ? '9+' : newCount}
                    </span>
                  )}
                </button>
              </Link>
            )}
            <MobileMenuDrawer />
            <BookingModal triggerText="Book Now" />
          </div>
        </div>
      </nav>
    </>
  );
}
