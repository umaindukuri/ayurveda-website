import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Phone, Mail, X, CheckCircle, AlertCircle, Edit2, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  currentDate: string;
  currentTime: string;
  consultationType: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
}

export function AppointmentReschedulePortal() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [rescheduleReason, setRescheduleReason] = useState('');
  const [showRescheduleForm, setShowRescheduleForm] = useState(false);
  const [showCancelForm, setShowCancelForm] = useState(false);
  const [cancelReason, setCancelReason] = useState('');

  // Load appointments from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('userAppointments');
    if (stored) {
      setAppointments(JSON.parse(stored));
    } else {
      // Demo appointments
      const demoAppointments: Appointment[] = [
        {
          id: 'APT-001',
          patientName: 'Priya Sharma',
          patientEmail: 'priya@example.com',
          patientPhone: '+91 98765 43210',
          currentDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          currentTime: '10:00 AM',
          consultationType: 'Initial Consultation',
          status: 'confirmed',
        },
        {
          id: 'APT-002',
          patientName: 'Rajesh Kumar',
          patientEmail: 'rajesh@example.com',
          patientPhone: '+91 97654 32109',
          currentDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          currentTime: '2:00 PM',
          consultationType: 'Follow-up Consultation',
          status: 'confirmed',
        },
        {
          id: 'APT-003',
          patientName: 'Anjali Patel',
          patientEmail: 'anjali@example.com',
          patientPhone: '+91 96543 21098',
          currentDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          currentTime: '11:30 AM',
          consultationType: 'Initial Consultation',
          status: 'completed',
        },
      ];
      setAppointments(demoAppointments);
      localStorage.setItem('userAppointments', JSON.stringify(demoAppointments));
    }
  }, []);

  const handleReschedule = () => {
    if (!selectedAppointment || !newDate || !newTime) {
      toast.error('Please fill in all fields');
      return;
    }

    const updatedAppointments = appointments.map(apt => {
      if (apt.id === selectedAppointment.id) {
        return {
          ...apt,
          currentDate: newDate,
          currentTime: newTime,
        };
      }
      return apt;
    });

    setAppointments(updatedAppointments);
    localStorage.setItem('userAppointments', JSON.stringify(updatedAppointments));
    toast.success(`Appointment rescheduled to ${newDate} at ${newTime}`);
    setShowRescheduleForm(false);
    setSelectedAppointment(null);
    setNewDate('');
    setNewTime('');
    setRescheduleReason('');
  };

  const handleCancel = () => {
    if (!selectedAppointment) return;

    const updatedAppointments = appointments.map(apt => {
      if (apt.id === selectedAppointment.id) {
        return {
          ...apt,
          status: 'cancelled' as const,
        };
      }
      return apt;
    });

    setAppointments(updatedAppointments);
    localStorage.setItem('userAppointments', JSON.stringify(updatedAppointments));
    toast.success('Appointment cancelled successfully');
    setShowCancelForm(false);
    setSelectedAppointment(null);
    setCancelReason('');
  };

  const confirmedAppointments = appointments.filter(apt => apt.status === 'confirmed');
  const completedAppointments = appointments.filter(apt => apt.status === 'completed');
  const cancelledAppointments = appointments.filter(apt => apt.status === 'cancelled');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-50 border-green-200';
      case 'completed':
        return 'bg-blue-50 border-blue-200';
      case 'cancelled':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-blue-600" />;
      case 'cancelled':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <p className="text-xs text-green-600 font-semibold mb-1">Upcoming</p>
          <p className="text-3xl font-bold text-green-900">{confirmedAppointments.length}</p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <p className="text-xs text-blue-600 font-semibold mb-1">Completed</p>
          <p className="text-3xl font-bold text-blue-900">{completedAppointments.length}</p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
          <p className="text-xs text-red-600 font-semibold mb-1">Cancelled</p>
          <p className="text-3xl font-bold text-red-900">{cancelledAppointments.length}</p>
        </Card>
      </div>

      {/* Upcoming Appointments */}
      {confirmedAppointments.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground text-lg">📅 Upcoming Appointments</h3>
          {confirmedAppointments.map(apt => (
            <Card key={apt.id} className={`p-4 border-l-4 border-l-green-600 ${getStatusColor(apt.status)}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getStatusIcon(apt.status)}
                    <h4 className="font-semibold text-foreground">{apt.patientName}</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Calendar className="w-4 h-4" />
                      {apt.currentDate}
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Clock className="w-4 h-4" />
                      {apt.currentTime}
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Phone className="w-4 h-4" />
                      {apt.patientPhone}
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Mail className="w-4 h-4" />
                      {apt.patientEmail}
                    </div>
                  </div>
                  <p className="text-xs text-foreground/60 mt-2">Type: {apt.consultationType}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSelectedAppointment(apt);
                      setShowRescheduleForm(true);
                    }}
                    className="gap-1"
                  >
                    <Edit2 className="w-4 h-4" />
                    Reschedule
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSelectedAppointment(apt);
                      setShowCancelForm(true);
                    }}
                    className="gap-1 text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Completed Appointments */}
      {completedAppointments.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground text-lg">✓ Completed Appointments</h3>
          {completedAppointments.map(apt => (
            <Card key={apt.id} className={`p-4 border-l-4 border-l-blue-600 ${getStatusColor(apt.status)}`}>
              <div className="flex items-center gap-2 mb-2">
                {getStatusIcon(apt.status)}
                <h4 className="font-semibold text-foreground">{apt.patientName}</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {apt.currentDate}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {apt.currentTime}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Reschedule Modal */}
      {showRescheduleForm && selectedAppointment && (
        <Card className="p-6 border-2 border-primary bg-primary/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground">Reschedule Appointment</h3>
            <button
              onClick={() => {
                setShowRescheduleForm(false);
                setSelectedAppointment(null);
              }}
              className="text-foreground/60 hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">New Date</label>
              <input
                type="date"
                value={newDate}
                onChange={e => setNewDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">New Time</label>
              <select
                value={newTime}
                onChange={e => setNewTime(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select time</option>
                <option value="8:00 AM">8:00 AM</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="7:00 PM">7:00 PM</option>
                <option value="8:00 PM">8:00 PM</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Reason for Rescheduling</label>
              <textarea
                value={rescheduleReason}
                onChange={e => setRescheduleReason(e.target.value)}
                placeholder="Tell us why you need to reschedule..."
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                rows={3}
              />
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleReschedule}
                className="flex-1 bg-primary hover:bg-primary/90 text-white"
              >
                Confirm Reschedule
              </Button>
              <Button
                onClick={() => {
                  setShowRescheduleForm(false);
                  setSelectedAppointment(null);
                }}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Cancel Modal */}
      {showCancelForm && selectedAppointment && (
        <Card className="p-6 border-2 border-red-500 bg-red-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-red-900">Cancel Appointment</h3>
            <button
              onClick={() => {
                setShowCancelForm(false);
                setSelectedAppointment(null);
              }}
              className="text-red-600 hover:text-red-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-red-800">
              Are you sure you want to cancel this appointment? This action cannot be undone.
            </p>

            <div>
              <label className="block text-sm font-medium text-red-900 mb-1">Reason for Cancellation</label>
              <textarea
                value={cancelReason}
                onChange={e => setCancelReason(e.target.value)}
                placeholder="Tell us why you need to cancel..."
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                rows={3}
              />
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleCancel}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
              >
                Yes, Cancel Appointment
              </Button>
              <Button
                onClick={() => {
                  setShowCancelForm(false);
                  setSelectedAppointment(null);
                }}
                variant="outline"
                className="flex-1"
              >
                Keep Appointment
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Info Box */}
      <Card className="p-4 bg-blue-50 border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-2">📋 Rescheduling Policy</h4>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li>Reschedule appointments up to 24 hours before your scheduled time</li>
          <li>Cancellations made 24+ hours in advance are free</li>
          <li>Late cancellations (less than 24 hours) may incur a fee</li>
          <li>You will receive a confirmation email for any changes</li>
          <li>For urgent changes, call +91 92813 32544</li>
        </ul>
      </Card>
    </div>
  );
}
