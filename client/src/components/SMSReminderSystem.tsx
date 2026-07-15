import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { toast } from 'sonner';

interface ReminderSchedule {
  id: string;
  appointmentId: string;
  patientName: string;
  patientPhone: string;
  appointmentDate: string;
  appointmentTime: string;
  reminder24h: {
    scheduled: boolean;
    sent: boolean;
    sentAt?: string;
  };
  reminder2h: {
    scheduled: boolean;
    sent: boolean;
    sentAt?: string;
  };
}

export function SMSReminderSystem() {
  const [reminders, setReminders] = useState<ReminderSchedule[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  // Load reminders from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('smsReminders');
    if (stored) {
      setReminders(JSON.parse(stored));
    } else {
      // Demo reminders
      const demoReminders: ReminderSchedule[] = [
        {
          id: 'REM-001',
          appointmentId: 'APT-001',
          patientName: 'Priya Sharma',
          patientPhone: '+91 98765 43210',
          appointmentDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString(),
          appointmentTime: '10:00 AM',
          reminder24h: { scheduled: true, sent: true, sentAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString() },
          reminder2h: { scheduled: true, sent: false },
        },
        {
          id: 'REM-002',
          appointmentId: 'APT-002',
          patientName: 'Rajesh Kumar',
          patientPhone: '+91 97654 32109',
          appointmentDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          appointmentTime: '2:00 PM',
          reminder24h: { scheduled: true, sent: false },
          reminder2h: { scheduled: true, sent: false },
        },
        {
          id: 'REM-003',
          appointmentId: 'APT-003',
          patientName: 'Anjali Patel',
          patientPhone: '+91 96543 21098',
          appointmentDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          appointmentTime: '11:30 AM',
          reminder24h: { scheduled: true, sent: false },
          reminder2h: { scheduled: true, sent: false },
        },
      ];
      setReminders(demoReminders);
      localStorage.setItem('smsReminders', JSON.stringify(demoReminders));
    }
  }, []);

  const handleSendReminder = (reminderId: string, reminderType: '24h' | '2h') => {
    setReminders(prev =>
      prev.map(r => {
        if (r.id === reminderId) {
          const key = reminderType === '24h' ? 'reminder24h' : 'reminder2h';
          return {
            ...r,
            [key]: {
              ...r[key],
              sent: true,
              sentAt: new Date().toISOString(),
            },
          };
        }
        return r;
      })
    );

    const reminder = reminders.find(r => r.id === reminderId);
    if (reminder) {
      const message = reminderType === '24h'
        ? `Hi ${reminder.patientName}, your consultation with Dr. Kalyan Ayurveda is scheduled for tomorrow at ${reminder.appointmentTime}. Please arrive 10 minutes early. Call +91 92813 32544 for any changes.`
        : `Hi ${reminder.patientName}, reminder: your consultation with Dr. Kalyan Ayurveda is in 2 hours at ${reminder.appointmentTime}. See you soon!`;

      toast.success(`SMS sent to ${reminder.patientPhone}`);
    }
  };

  const handleSimulateReminders = () => {
    setIsSimulating(true);
    toast.loading('Simulating SMS reminders...');

    setTimeout(() => {
      setReminders(prev =>
        prev.map(r => ({
          ...r,
          reminder24h: { ...r.reminder24h, sent: true, sentAt: new Date().toISOString() },
          reminder2h: { ...r.reminder2h, sent: true, sentAt: new Date().toISOString() },
        }))
      );
      setIsSimulating(false);
      toast.success('All reminders simulated successfully!');
    }, 2000);
  };

  const sentCount = reminders.reduce((acc, r) => {
    return acc + (r.reminder24h.sent ? 1 : 0) + (r.reminder2h.sent ? 1 : 0);
  }, 0);

  const totalReminders = reminders.length * 2;

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-blue-600 font-semibold">Total Reminders</p>
              <p className="text-3xl font-bold text-blue-900">{totalReminders}</p>
            </div>
            <MessageSquare className="w-8 h-8 text-blue-500 opacity-50" />
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-green-600 font-semibold">Sent</p>
              <p className="text-3xl font-bold text-green-900">{sentCount}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500 opacity-50" />
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-orange-600 font-semibold">Pending</p>
              <p className="text-3xl font-bold text-orange-900">{totalReminders - sentCount}</p>
            </div>
            <Clock className="w-8 h-8 text-orange-500 opacity-50" />
          </div>
        </Card>
      </div>

      {/* Simulation Button */}
      <Button
        onClick={handleSimulateReminders}
        disabled={isSimulating}
        className="w-full bg-primary hover:bg-primary/90 text-white gap-2"
      >
        <Send className="w-4 h-4" />
        {isSimulating ? 'Simulating...' : 'Simulate All Reminders'}
      </Button>

      {/* Reminders List */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground text-lg">Scheduled Reminders</h3>
        {reminders.map(reminder => (
          <Card key={reminder.id} className="p-4 border-l-4 border-l-primary">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Patient Info */}
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">{reminder.patientName}</p>
                <div className="space-y-1 text-xs text-foreground/60">
                  <p>📱 {reminder.patientPhone}</p>
                  <p>📅 {reminder.appointmentDate}</p>
                  <p>🕐 {reminder.appointmentTime}</p>
                </div>
              </div>

              {/* Reminders Status */}
              <div className="space-y-2">
                {/* 24h Reminder */}
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium">24h Reminder</span>
                  </div>
                  {reminder.reminder24h.sent ? (
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600">Sent</span>
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSendReminder(reminder.id, '24h')}
                      className="text-xs h-7"
                    >
                      Send
                    </Button>
                  )}
                </div>

                {/* 2h Reminder */}
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-medium">2h Reminder</span>
                  </div>
                  {reminder.reminder2h.sent ? (
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600">Sent</span>
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSendReminder(reminder.id, '2h')}
                      className="text-xs h-7"
                    >
                      Send
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Info Box */}
      <Card className="p-4 bg-blue-50 border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-2">📋 SMS Reminder Configuration</h4>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li>24-hour reminder sent 1 day before appointment</li>
          <li>2-hour reminder sent 2 hours before appointment</li>
          <li>Automated scheduling reduces no-shows by 30-40%</li>
          <li>To enable real SMS: Connect Twilio or AWS SNS API</li>
          <li>Current mode: Demo (simulated SMS)</li>
        </ul>
      </Card>
    </div>
  );
}
