import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  delay: string;
  status: 'pending' | 'sent' | 'opened';
  icon: React.ReactNode;
}

interface Workflow {
  name: string;
  trigger: string;
  steps: WorkflowStep[];
  color: string;
}

export function EmailAutomationWorkflow() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null);
  const [simulatedSteps, setSimulatedSteps] = useState<Record<string, WorkflowStep[]>>({});

  const workflows: Workflow[] = [
    {
      name: 'Newsletter Signup Sequence',
      trigger: 'User subscribes to newsletter',
      color: 'from-blue-500 to-cyan-500',
      steps: [
        {
          id: 'welcome',
          title: 'Welcome Email',
          description: 'Thank you for subscribing! Exclusive wellness tips inside.',
          delay: 'Immediate',
          status: 'sent',
          icon: <Mail className="w-5 h-5" />,
        },
        {
          id: 'tips',
          title: 'Ayurvedic Health Tips',
          description: '5 daily practices to balance your doshas and improve digestion.',
          delay: '2 days later',
          status: 'pending',
          icon: <Clock className="w-5 h-5" />,
        },
        {
          id: 'offer',
          title: 'Limited Time Offer',
          description: '20% off your first consultation - valid for 7 days only.',
          delay: '5 days later',
          status: 'pending',
          icon: <Clock className="w-5 h-5" />,
        },
        {
          id: 'testimonial',
          title: 'Patient Success Stories',
          description: 'See how others transformed their health with our programs.',
          delay: '10 days later',
          status: 'pending',
          icon: <Clock className="w-5 h-5" />,
        },
      ],
    },
    {
      name: 'Booking Confirmation Sequence',
      trigger: 'User completes a consultation booking',
      color: 'from-green-500 to-emerald-500',
      steps: [
        {
          id: 'confirmation',
          title: 'Booking Confirmation',
          description: 'Your consultation is confirmed for [Date] at [Time].',
          delay: 'Immediate',
          status: 'sent',
          icon: <CheckCircle className="w-5 h-5" />,
        },
        {
          id: 'prep',
          title: 'Pre-Consultation Preparation',
          description: 'What to expect: medical history form, dosha assessment, treatment plan.',
          delay: '1 day before',
          status: 'pending',
          icon: <Clock className="w-5 h-5" />,
        },
        {
          id: 'reminder',
          title: 'Appointment Reminder',
          description: 'Your consultation is tomorrow at [Time]. Reply to confirm.',
          delay: '24 hours before',
          status: 'pending',
          icon: <Clock className="w-5 h-5" />,
        },
        {
          id: 'followup',
          title: 'Post-Consultation Follow-up',
          description: 'How was your experience? Book your next session or ask questions.',
          delay: '2 days after',
          status: 'pending',
          icon: <Clock className="w-5 h-5" />,
        },
        {
          id: 'upsell',
          title: 'Program Recommendation',
          description: 'Based on your assessment, we recommend the 14-day program.',
          delay: '7 days after',
          status: 'pending',
          icon: <Clock className="w-5 h-5" />,
        },
      ],
    },
    {
      name: 'Abandoned Cart Recovery',
      trigger: 'User views booking but doesn\'t complete',
      color: 'from-orange-500 to-red-500',
      steps: [
        {
          id: 'abandoned1',
          title: 'Gentle Reminder',
          description: 'You started booking a consultation. Complete it now.',
          delay: '1 hour later',
          status: 'pending',
          icon: <Clock className="w-5 h-5" />,
        },
        {
          id: 'abandoned2',
          title: 'Help & Support',
          description: 'Having trouble booking? Chat with our team for assistance.',
          delay: '24 hours later',
          status: 'pending',
          icon: <Clock className="w-5 h-5" />,
        },
        {
          id: 'abandoned3',
          title: 'Special Incentive',
          description: '15% discount if you book within the next 48 hours.',
          delay: '48 hours later',
          status: 'pending',
          icon: <Clock className="w-5 h-5" />,
        },
      ],
    },
  ];

  const handleSimulateWorkflow = (workflowName: string) => {
    const workflow = workflows.find(w => w.name === workflowName);
    if (!workflow) return;

    setSelectedWorkflow(workflowName);
    const steps: WorkflowStep[] = workflow.steps.map((step, index) => ({
      ...step,
      status: index === 0 ? ('sent' as const) : ('pending' as const),
    }));
    setSimulatedSteps(prev => ({ ...prev, [workflowName]: steps }));

    toast.success(`Simulating ${workflowName}...`);

    // Simulate sending emails over time
    let delay = 0;
    steps.forEach((step, index) => {
      if (index > 0) {
        setTimeout(() => {
                          setSimulatedSteps(prev => {
                            const updated = { ...prev };
                            if (!updated[workflowName]) return prev;
                            updated[workflowName] = updated[workflowName].map((s, i) => {
                              if (i === index) {
                                return { ...s, status: 'sent' as const };
                              }
                              return s;
                            });
                            return updated;
                          });
          toast.info(`📧 ${step.title} sent!`);
        }, (index + 1) * 2000);
      }
    });
  };

  const selectedWorkflowData = workflows.find(w => w.name === selectedWorkflow);
  const currentSteps = selectedWorkflow ? (simulatedSteps[selectedWorkflow] || selectedWorkflowData?.steps || []) : null;

  return (
    <div className="py-12 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">Email Automation Workflows</h2>
          <p className="text-foreground/60">Automated follow-up sequences that nurture leads and increase patient retention</p>
        </div>

        {/* Workflow Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {workflows.map((workflow) => (
            <Card
              key={workflow.name}
              className={`p-6 cursor-pointer transition-all border-2 ${
                selectedWorkflow === workflow.name
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => handleSimulateWorkflow(workflow.name)}
            >
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 bg-gradient-to-r ${workflow.color}`}>
                {workflow.steps.length} Emails
              </div>
              <h3 className="font-semibold text-foreground mb-2">{workflow.name}</h3>
              <p className="text-sm text-foreground/60 mb-4">{workflow.trigger}</p>
              <Button
                size="sm"
                variant={selectedWorkflow === workflow.name ? 'default' : 'outline'}
                className="w-full"
              >
                {selectedWorkflow === workflow.name ? 'Simulating...' : 'Simulate'}
              </Button>
            </Card>
          ))}
        </div>

        {/* Workflow Timeline */}
        {selectedWorkflow && currentSteps && (
          <Card className="p-8 border-2 border-primary/20">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">{selectedWorkflow}</h3>
              <p className="text-foreground/60">{selectedWorkflowData?.trigger}</p>
            </div>

            <div className="space-y-4">
              {currentSteps.map((step, index) => (
                <div key={step.id} className="flex gap-4">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold transition-all ${
                        step.status === 'sent'
                          ? 'bg-green-500 scale-110'
                          : step.status === 'opened'
                          ? 'bg-blue-500'
                          : 'bg-gray-300'
                      }`}
                    >
                      {step.status === 'sent' ? <CheckCircle className="w-5 h-5" /> : index + 1}
                    </div>
                    {index < currentSteps.length - 1 && (
                      <div className="w-1 h-12 bg-gray-200 my-2" />
                    )}
                  </div>

                  {/* Step content */}
                  <div className="flex-1 pb-4">
                    <div className="bg-background p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground">{step.title}</h4>
                          <p className="text-sm text-foreground/60 mt-1">{step.description}</p>
                        </div>
                        <span className="text-xs font-medium text-foreground/50 whitespace-nowrap ml-4">
                          {step.delay}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <div
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            step.status === 'sent'
                              ? 'bg-green-100 text-green-700'
                              : step.status === 'opened'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {step.status === 'sent' ? '✓ Sent' : step.status === 'opened' ? '👁 Opened' : '⏳ Pending'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Workflow Stats */}
            <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {currentSteps.filter(s => s.status === 'sent').length}
                </div>
                <div className="text-xs text-foreground/60">Emails Sent</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {currentSteps.filter(s => s.status === 'opened').length}
                </div>
                <div className="text-xs text-foreground/60">Opened</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">
                  {currentSteps.filter(s => s.status === 'pending').length}
                </div>
                <div className="text-xs text-foreground/60">Pending</div>
              </div>
            </div>
          </Card>
        )}

        {/* Benefits Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white border-l-4 border-l-green-500">
            <h4 className="font-semibold text-foreground mb-2">📈 Increased Conversions</h4>
            <p className="text-sm text-foreground/60">
              Automated follow-ups increase booking rates by 35% through timely reminders and personalized offers.
            </p>
          </Card>

          <Card className="p-6 bg-white border-l-4 border-l-blue-500">
            <h4 className="font-semibold text-foreground mb-2">⏱️ Saves Time</h4>
            <p className="text-sm text-foreground/60">
              Stop manually sending follow-up emails. Workflows run automatically 24/7 based on patient actions.
            </p>
          </Card>

          <Card className="p-6 bg-white border-l-4 border-l-purple-500">
            <h4 className="font-semibold text-foreground mb-2">🎯 Better Engagement</h4>
            <p className="text-sm text-foreground/60">
              Deliver the right message at the right time. Patients receive relevant content based on their journey.
            </p>
          </Card>
        </div>

        {/* Implementation Guide */}
        <Card className="mt-8 p-6 bg-amber-50 border-amber-200">
          <h4 className="font-semibold text-amber-900 mb-3">🚀 How to Implement</h4>
          <ol className="text-sm text-amber-800 space-y-2 list-decimal list-inside">
            <li>Connect your email service (Mailchimp, ConvertKit, or Brevo)</li>
            <li>Create email templates for each workflow step</li>
            <li>Set up automation rules based on user actions (signup, booking, cart abandonment)</li>
            <li>Monitor performance metrics and optimize send times</li>
            <li>A/B test subject lines and content to improve open rates</li>
          </ol>
        </Card>
      </div>
    </div>
  );
}
