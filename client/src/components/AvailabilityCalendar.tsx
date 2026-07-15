import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TimeSlot {
  time: string;
  available: boolean;
}

export function AvailabilityCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 6, 15)); // July 15, 2026
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Generate calendar days
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

  // Time slots for consultation hours (8 AM - 1 PM, 5 PM - 9 PM)
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
  const availableSlots = timeSlots.filter(slot => slot.available).length;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Check Dr. Kalyan's Availability</h2>
          <p className="text-lg text-muted-foreground">
            View open consultation slots and book your appointment instantly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar */}
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{monthName}</CardTitle>
                <div className="flex gap-2">
                  <Button
                    onClick={handlePrevMonth}
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/5"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={handleNextMonth}
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/5"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Day headers */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-xs font-semibold text-muted-foreground">
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
                    className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                      !date
                        ? 'bg-transparent'
                        : isSelected(date)
                        ? 'bg-primary text-white'
                        : isToday(date)
                        ? 'bg-primary/10 text-primary border-2 border-primary'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    {date?.getDate()}
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded" />
                  <span className="text-foreground">Selected date</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary/10 border-2 border-primary rounded" />
                  <span className="text-foreground">Today</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Time Slots */}
          <div>
            {selectedDate ? (
              <Card className="border-border h-full">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Available Slots for {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    {availableSlots} of {timeSlots.length} slots available
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                    {timeSlots.map((slot, idx) => (
                      <button
                        key={idx}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg text-sm font-medium transition-all ${
                          slot.available
                            ? 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100'
                            : 'bg-muted text-muted-foreground opacity-50 cursor-not-allowed'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>

                  {/* Booking Info */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                    <div className="flex gap-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <p className="text-sm font-semibold text-blue-900">Consultation Duration: 45 minutes</p>
                    </div>
                    <p className="text-xs text-blue-800">
                      Click on any available time slot to book your consultation with Dr. Kalyan
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                    Book Selected Slot
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-border h-full flex items-center justify-center">
                <CardContent className="text-center py-12">
                  <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Select a date from the calendar to view available time slots
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Consultation Hours Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-semibold text-amber-900 mb-3">Morning Consultations</h3>
            <p className="text-sm text-amber-800">
              <strong>Monday - Friday:</strong> 8:00 AM - 1:00 PM<br/>
              <strong>Saturday:</strong> 8:00 AM - 12:00 PM<br/>
              <strong>Sunday:</strong> Closed
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Evening Consultations</h3>
            <p className="text-sm text-blue-800">
              <strong>Monday - Friday:</strong> 5:00 PM - 9:00 PM<br/>
              <strong>Saturday & Sunday:</strong> Closed<br/>
              <strong>Note:</strong> Book at least 24 hours in advance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
