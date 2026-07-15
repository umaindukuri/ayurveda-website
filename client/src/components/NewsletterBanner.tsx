import { useState } from 'react';
import { X, Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success('Thank you! Check your email for wellness tips.');
      
      // Reset after 4 seconds
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 4000);
    }, 800);
  };

  if (isClosed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-gradient-to-r from-primary to-primary/90 text-white shadow-2xl">
      <div className="container max-w-6xl py-4 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Content */}
          <div className="flex-1 flex items-center gap-3">
            <Mail className="w-6 h-6 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-sm md:text-base">Get Weekly Wellness Tips</h3>
              <p className="text-xs md:text-sm text-white/90">
                Subscribe to our newsletter for Ayurvedic health insights, treatment updates, and exclusive offers
              </p>
            </div>
          </div>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex-1 md:flex-none flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                disabled={isLoading}
              />
              <Button
                type="submit"
                className="bg-white text-primary hover:bg-white/90 font-semibold flex-shrink-0"
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          ) : (
            <div className="flex items-center gap-2 text-white font-semibold">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Subscribed!</span>
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={() => setIsClosed(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
            aria-label="Close newsletter banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
