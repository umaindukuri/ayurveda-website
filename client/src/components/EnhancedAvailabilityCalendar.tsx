import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Check, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface BookingData {
  date: Date | null;
  time: string | null;
  name: string;
  email: string;
  phone: string;
  program: string;
}

export function EnhancedAvailabilityCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 6, 15));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    date: null,
    time: null,
    name: '',
    email: '',
    phone: '',
    program: '14-Day Therapeutic'
  });

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
  }

  const timeSlots: TimeSlot[] = [
    { time: '08:00 AM', available: true },
    { time: '08:30 AM', available: true },
    { time: '09:00 AM', available: false },
    { time: '09:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: false },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: false },
    { time: '05:00 PM', available: true },
    { time: '05:30 PM', available: true },
    { time: '06:00 PM', available: false },
    { time: '06:30 PM', available: true },
    { time: '07:00 PM', available: true },
    { time: '07:30 PM', available: true },
    { time: '08:00 PM', available: false },
    { time: '08:30 PM', available: true }
  ];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
    setBookingData({ ...bookingData, date: selectedDate, time });
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.name || !bookingData.email || !bookingData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }
    setShowBookingForm(false);
    setShowPayment(true);
  };

  const handlePaymentSubmit = () => {
    setShowPayment(false);
    setShowConfirmation(true);
    toast.success('Booking confirmed! Check your email for details.');
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date: Date) => {
    return selectedDate &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear();
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <section className="py-12 bg-white">
      <div className="container max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-foreground mb-3">Book Your Consultation</h2>
          <p className="text-lg text-muted-foreground">
            Select your preferred date and time to schedule a personalized consultation with Dr. Kalyan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="md:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{monthName}</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handlePrevMonth}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleNextMonth}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Weekday headers */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center font-semibold text-sm text-muted-foreground">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-2">
                  {days.map((date, idx) => (
                    <button
                      key={idx}
                      onClick={() => date && handleSelectDate(date)}
                      disabled={!date}
                      className={`p-2 rounded text-sm font-medium transition-colors ${
                        !date
                          ? 'text-muted-foreground/30 cursor-default'
                          : isSelected(date)
                          ? 'bg-primary text-white'
                          : isToday(date)
                          ? 'bg-primary/20 text-primary border border-primary'
                          : 'bg-muted hover:bg-muted/80 text-foreground'
                      }`}
                    >
                      {date?.getDate()}
                    </button>
                  ))}
                </div>

                {/* Time slots */}
                {selectedDate && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-4">
                      Available Times for {selectedDate.toLocaleDateString()}
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <Button
                          key={slot.time}
                          onClick={() => slot.available && handleSelectTime(slot.time)}
                          disabled={!slot.available}
                          variant={selectedTime === slot.time ? 'default' : 'outline'}
                          className={`text-sm ${
                            !slot.available
                              ? 'opacity-50 cursor-not-allowed'
                              : selectedTime === slot.time
                              ? 'bg-primary text-white'
                              : ''
                          }`}
                        >
                          {slot.time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div>
            <Card className="border-primary bg-primary/5 sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedDate && selectedTime ? (
                  <>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Selected Date & Time</div>
                      <div className="text-lg font-semibold text-foreground">
                        {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Clock className="w-4 h-4" />
                        {selectedTime}
                      </div>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="text-sm text-muted-foreground mb-2">Program</div>
                      <select
                        value={bookingData.program}
                        onChange={(e) => setBookingData({ ...bookingData, program: e.target.value })}
                        className="w-full px-3 py-2 border border-border rounded-md text-sm bg-white"
                      >
                        <option>7-Day Intensive</option>
                        <option>14-Day Therapeutic</option>
                        <option>21-Day Transformation</option>
                      </select>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="text-sm text-muted-foreground mb-1">Consultation Fee</div>
                      <div className="text-2xl font-bold text-primary">₹500</div>
                      <p className="text-xs text-muted-foreground mt-1">Refundable upon booking treatment</p>
                    </div>
                    <Button
                      onClick={() => setShowBookingForm(true)}
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      Continue to Booking
                    </Button>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <AlertCircle className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Select a date and time to proceed with booking
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Booking Form Dialog */}
      <Dialog open={showBookingForm} onOpenChange={setShowBookingForm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Complete Your Booking</DialogTitle>
            <DialogDescription>
              Enter your details to confirm your consultation appointment
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={bookingData.name}
                onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={bookingData.email}
                onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={bookingData.phone}
                onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>
            <div className="bg-muted p-3 rounded-md text-sm">
              <p className="font-semibold text-foreground mb-1">Booking Details</p>
              <p className="text-muted-foreground">
                {bookingData.date?.toLocaleDateString()} at {bookingData.time}
              </p>
              <p className="text-muted-foreground">{bookingData.program}</p>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
              Proceed to Payment
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Payment Dialog */}
      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Payment Checkout</DialogTitle>
            <DialogDescription>
              Complete your payment to confirm the booking
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Consultation Fee</span>
                <span className="font-semibold">₹500</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between">
                <span className="font-semibold">Total Amount</span>
                <span className="text-xl font-bold text-primary">₹500</span>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Payment Method</Label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted">
                  <input type="radio" name="payment" defaultChecked className="w-4 h-4" />
                  <span className="text-sm font-medium">Credit/Debit Card</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted">
                  <input type="radio" name="payment" className="w-4 h-4" />
                  <span className="text-sm font-medium">UPI (Google Pay, PhonePe)</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted">
                  <input type="radio" name="payment" className="w-4 h-4" />
                  <span className="text-sm font-medium">Net Banking</span>
                </label>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-3 rounded-lg flex gap-2">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-sm text-green-700">
                Your payment is secure and encrypted
              </p>
            </div>

            <Button
              onClick={handlePaymentSubmit}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Complete Payment
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="max-w-md text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <DialogHeader>
            <DialogTitle className="text-2xl">Booking Confirmed!</DialogTitle>
            <DialogDescription>
              Your consultation appointment has been successfully booked
            </DialogDescription>
          </DialogHeader>
          <div className="bg-muted p-4 rounded-lg space-y-2 text-left">
            <div>
              <p className="text-xs text-muted-foreground">Date & Time</p>
              <p className="font-semibold text-foreground">
                {bookingData.date?.toLocaleDateString()} at {bookingData.time}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Confirmation Email</p>
              <p className="font-semibold text-foreground">{bookingData.email}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Program</p>
              <p className="font-semibold text-foreground">{bookingData.program}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            A confirmation email with appointment details has been sent to {bookingData.email}
          </p>
          <Button
            onClick={() => setShowConfirmation(false)}
            className="w-full bg-primary hover:bg-primary/90 text-white"
          >
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
