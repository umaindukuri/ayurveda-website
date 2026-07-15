import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface BookingModalProps {
  triggerText?: string;
  variant?: 'default' | 'outline';
}

export function BookingModal({ triggerText = 'Book Consultation', variant = 'default' }: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const calendlyUrl = 'https://calendly.com/dr-kalyan-ayurveda';

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className="gap-2">
          <Calendar className="w-4 h-4" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Schedule Your Consultation</DialogTitle>
        </DialogHeader>
        <div className="w-full h-96">
          <iframe
            src={calendlyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule consultation with Dr. Kalyan"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Or visit <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Calendly</a> to schedule directly.
        </p>
      </DialogContent>
    </Dialog>
  );
}
