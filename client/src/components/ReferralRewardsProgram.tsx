import { Gift, Users, Zap, TrendingUp, Share2, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface RewardTier {
  referrals: number;
  discount: string;
  benefits: string[];
  color: string;
}

export function ReferralRewardsProgram() {
  const rewardTiers: RewardTier[] = [
    {
      referrals: 1,
      discount: '₹2,000',
      benefits: ['Discount on next treatment', 'Free consultation upgrade'],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      referrals: 3,
      discount: '₹6,000',
      benefits: ['Discount on next treatment', 'Free Ayurvedic consultation', 'Priority booking'],
      color: 'bg-green-50 border-green-200'
    },
    {
      referrals: 5,
      discount: '₹12,000',
      benefits: ['50% discount on next treatment', 'Free wellness package', 'VIP priority booking', 'Exclusive wellness tips'],
      color: 'bg-amber-50 border-amber-200'
    },
    {
      referrals: 10,
      discount: '₹30,000',
      benefits: ['Free 7-day treatment program', 'Lifetime 20% discount', 'VIP concierge service', 'Exclusive wellness retreat invite'],
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const referralSteps = [
    {
      number: '1',
      title: 'Share Your Referral Link',
      description: 'Get your unique referral link and share it with friends and family via WhatsApp, email, or social media'
    },
    {
      number: '2',
      title: 'They Book a Consultation',
      description: 'Your friends use your link to book their first consultation with Dr. Kalyan'
    },
    {
      number: '3',
      title: 'They Complete Treatment',
      description: 'After they complete their first treatment program, both of you earn rewards'
    },
    {
      number: '4',
      title: 'Claim Your Rewards',
      description: 'Redeem your accumulated rewards on future treatments or wellness services'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Referral Rewards Program</h2>
          <p className="text-lg text-muted-foreground">
            Share Dr. Kalyan's Ayurvedic treatment with your loved ones and earn exclusive rewards
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="border-border text-center">
            <CardContent className="p-6">
              <Gift className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Earn Rewards</h3>
              <p className="text-sm text-muted-foreground">Get discounts and benefits for every successful referral</p>
            </CardContent>
          </Card>
          <Card className="border-border text-center">
            <CardContent className="p-6">
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Help Others</h3>
              <p className="text-sm text-muted-foreground">Share authentic Ayurvedic healing with your network</p>
            </CardContent>
          </Card>
          <Card className="border-border text-center">
            <CardContent className="p-6">
              <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Easy Sharing</h3>
              <p className="text-sm text-muted-foreground">Simple referral link - no complicated process</p>
            </CardContent>
          </Card>
          <Card className="border-border text-center">
            <CardContent className="p-6">
              <TrendingUp className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Unlimited Earning</h3>
              <p className="text-sm text-muted-foreground">No cap on referrals - earn as much as you want</p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {referralSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {idx < referralSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[40%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reward Tiers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Reward Tiers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewardTiers.map((tier, idx) => (
              <Card key={idx} className={`border-2 ${tier.color}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{tier.referrals} Referral{tier.referrals > 1 ? 's' : ''}</CardTitle>
                      <p className="text-xs text-muted-foreground mt-1">Unlock this tier</p>
                    </div>
                    {idx === rewardTiers.length - 1 && (
                      <span className="inline-block px-2 py-1 bg-primary text-white text-xs font-bold rounded">ELITE</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Total Reward Value</p>
                    <p className="text-2xl font-bold text-primary">{tier.discount}</p>
                  </div>
                  <div className="space-y-2">
                    {tier.benefits.map((benefit, bidx) => (
                      <div key={bidx} className="flex gap-2 items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Referral Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">5,000+</p>
              <p className="text-muted-foreground">Successful Referrals</p>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">₹50L+</p>
              <p className="text-muted-foreground">Rewards Distributed</p>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-muted-foreground">Referrer Satisfaction</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mb-16 bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Can I refer unlimited people?</h4>
              <p className="text-muted-foreground text-sm">Yes! There's no limit to the number of referrals you can make. The more you refer, the more rewards you earn.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">When do I receive my rewards?</h4>
              <p className="text-muted-foreground text-sm">Rewards are credited within 7 days after your referred friend completes their first treatment program.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Can rewards be combined?</h4>
              <p className="text-muted-foreground text-sm">Yes, you can combine multiple referral rewards on a single treatment or use them separately on different services.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Do referred friends get benefits too?</h4>
              <p className="text-muted-foreground text-sm">Absolutely! Your referred friends get a 15% discount on their first treatment, plus they can start earning referral rewards themselves.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Can I track my referrals?</h4>
              <p className="text-muted-foreground text-sm">Yes, you'll receive a personalized dashboard where you can track all your referrals, rewards earned, and redemption status.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Are there any restrictions?</h4>
              <p className="text-muted-foreground text-sm">Referrals must be new patients. Existing patients cannot be referred. Rewards cannot be transferred or sold.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Earning?</h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Share Dr. Kalyan's authentic Ayurvedic treatment with your network and earn generous rewards while helping others transform their health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Share2 className="w-4 h-4 mr-2" />
              Get Your Referral Link
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>

        {/* Terms */}
        <p className="text-xs text-muted-foreground text-center mt-8">
          *Rewards are subject to terms and conditions. Referrals must complete their first treatment within 90 days of booking. For complete details, please contact Dr. Kalyan's office.
        </p>
      </div>
    </section>
  );
}
