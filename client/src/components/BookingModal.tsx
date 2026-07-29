import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface BookingModalProps {
  triggerText?: string;
  variant?: 'default' | 'outline';
}

export function BookingModal({ triggerText = 'Book Consultation', variant = 'default' }: BookingModalProps) {
  return (
    <Link href="/book-appointment">
      <Button variant={variant} className="gap-2">
        <Calendar className="w-4 h-4" />
        {triggerText}
      </Button>
    </Link>
  );
}
