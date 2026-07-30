import { ArrowRight, Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  condition: string;
}

export function SuccessStoriesBlog() {
  const [sharedPostId, setSharedPostId] = useState<string | null>(null);

  const sharePost = (postId: string, title: string) => {
    setSharedPostId(postId);
    setTimeout(() => setSharedPostId(null), 2000);
  };
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'From Wheelchair to Walking: Rajesh\'s Journey with Severe Arthritis',
      excerpt: 'After 10 years of joint pain and limited mobility, Rajesh discovered Dr. Kalyan\'s Ayurvedic treatment and regained his independence.',
      content: `Rajesh M., 58, spent a decade struggling with severe arthritis that confined him to a wheelchair. Traditional treatments provided only temporary relief, and he was losing hope of ever returning to an active lifestyle.

After undergoing Dr. Kalyan's 21-day intensive Panchakarma program, Rajesh experienced remarkable transformation. The combination of specialized herbal treatments, therapeutic massages, and dietary modifications helped reduce inflammation and restore joint flexibility.

"I can now walk without pain, climb stairs, and play with my grandchildren," Rajesh shares. "Dr. Kalyan didn't just treat my arthritis; he gave me my life back."

His success story demonstrates the power of authentic Ayurvedic healing when combined with personalized care and patient commitment.`,
      author: 'Dr. Kalyan',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: '/images/treatment_chronic_disease_62ef6750.webp',
      category: 'Musculoskeletal',
      condition: 'Severe Arthritis'
    },
    {
      id: '2',
      title: 'Skin Transformation: How Priya Overcame 10 Years of Eczema',
      excerpt: 'Priya\'s severe eczema disappeared completely after the 14-day therapeutic program, allowing her to live medication-free.',
      content: `Priya S., 34, had suffered from severe eczema for over a decade. Constant itching, inflammation, and social embarrassment made her life miserable. Multiple dermatologists and medications provided only temporary relief.

When she came to Dr. Kalyan, her skin was inflamed and covered with painful lesions. The treatment focused on balancing her Pitta dosha through specialized herbal protocols, detoxification, and dietary changes.

After just 14 days, her skin began to clear. Within three months of following the post-treatment guidelines, her eczema completely disappeared.

"I haven't had a single flare-up in 8 months," Priya says. "I'm finally comfortable in my own skin again, and I'm medication-free."

This case exemplifies how Ayurveda addresses the root cause rather than just treating symptoms.`,
      author: 'Dr. Kalyan',
      date: 'February 28, 2024',
      readTime: '6 min read',
      image: '/images/treatment_skin_health_e6507ce9.webp',
      category: 'Skin & Dermatology',
      condition: 'Severe Eczema'
    },
    {
      id: '3',
      title: 'Against All Odds: Sneha\'s Natural Conception After 3 Years of Infertility',
      excerpt: 'After years of unsuccessful fertility treatments, Sneha conceived naturally following Dr. Kalyan\'s hormonal balancing program.',
      content: `Sneha D., 31, had been struggling with PCOS and infertility for three years. Multiple IVF cycles failed, and she was losing hope of becoming a mother.

Her hormonal imbalances, irregular cycles, and anxiety were creating a vicious cycle. Dr. Kalyan's comprehensive 21-day program focused on restoring hormonal balance through Rasayana therapy, specialized herbal treatments, and lifestyle modifications.

The treatment addressed not just her physical symptoms but also her emotional well-being through meditation and yoga.

"I conceived naturally just four months after completing the program," Sneha shares with tears of joy. "I'm now 8 months pregnant with a healthy baby. Dr. Kalyan didn't just treat my PCOS; he helped me fulfill my dream of motherhood."

Her story gives hope to thousands of women struggling with infertility and hormonal issues.`,
      author: 'Dr. Kalyan',
      date: 'January 20, 2024',
      readTime: '7 min read',
      image: '/images/ayurveda_wellness_spa_interior_1e8d2c9a.webp',
      category: 'Hormonal & Fertility',
      condition: 'PCOS & Infertility'
    },
    {
      id: '4',
      title: 'Mental Clarity: Anjali\'s Recovery from Anxiety and Depression',
      excerpt: 'Through holistic Ayurvedic treatment combining herbal therapy, meditation, and lifestyle changes, Anjali regained her mental peace.',
      content: `Anjali P., 42, had been battling anxiety and depression for five years. Antidepressants helped but left her feeling emotionally numb and dependent on medication.

She came to Dr. Kalyan seeking a natural alternative. The treatment combined Vata-balancing therapies, herbal formulations, daily meditation practice, and dietary adjustments tailored to her constitution.

Within the first week, she noticed improved sleep and reduced anxiety. By the end of the 21-day program, her mental clarity had returned.

"I feel like myself again," Anjali says. "The anxiety is gone, and I'm managing stress naturally without medications. The meditation and yoga practices have become part of my daily routine."

Her transformation shows how Ayurveda can address mental health holistically by balancing the mind-body connection.`,
      author: 'Dr. Kalyan',
      date: 'December 10, 2023',
      readTime: '5 min read',
      image: '/images/treatment_mental_health_d3e27509.webp',
      category: 'Mental Health',
      condition: 'Anxiety & Depression'
    },
    {
      id: '5',
      title: 'Blood Sugar Control: Vikram\'s Diabetes Reversal Without Medications',
      excerpt: 'Vikram\'s Type 2 diabetes is now managed naturally without medications after completing Dr. Kalyan\'s comprehensive program.',
      content: `Vikram R., 55, was diagnosed with Type 2 diabetes and prescribed multiple medications. Despite taking medications, his blood sugar remained unstable, and he was gaining weight.

Dr. Kalyan's 14-day program focused on pancreatic rejuvenation through specialized Panchakarma procedures, targeted herbal treatments, and a personalized Ayurvedic diet plan.

The treatment also included lifestyle coaching on stress management and exercise routines suitable for his constitution.

"My blood sugar levels are now normal, and I've stopped all medications," Vikram shares. "I've lost 12 kg, have more energy, and feel healthier than I have in years."

His case demonstrates how Ayurveda can reverse metabolic disorders when combined with patient commitment.`,
      author: 'Dr. Kalyan',
      date: 'November 5, 2023',
      readTime: '6 min read',
      image: '/images/panchakarma_treatment_vibrant_d075a65b.webp',
      category: 'Digestive Health',
      condition: 'Type 2 Diabetes'
    },
    {
      id: '6',
      title: 'Back to Work: Amit\'s Chronic Back Pain Resolution',
      excerpt: 'After years of back pain affecting his career, Amit returned to full productivity following Dr. Kalyan\'s treatment.',
      content: `Amit K., 48, had suffered from chronic back pain for seven years. Multiple physiotherapy sessions and pain medications provided only temporary relief, and his work performance suffered.

Dr. Kalyan identified the root cause as a Vata imbalance combined with poor posture and stress. The 14-day program included specialized back pain therapies, herbal treatments, and postural correction exercises.

The treatment also addressed his stress levels through meditation and breathing exercises.

"I'm pain-free and back to my full work capacity," Amit says. "The posture exercises and stress management techniques have become part of my daily routine, and I haven't had a single relapse."

His recovery shows how addressing the underlying imbalance is more effective than just treating symptoms.`,
      author: 'Dr. Kalyan',
      date: 'October 18, 2023',
      readTime: '5 min read',
      image: '/images/hero_meditation_premium_0f0d5eb0.png',
      category: 'Musculoskeletal',
      condition: 'Chronic Back Pain'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories Blog</h2>
          <p className="text-lg text-muted-foreground">
            Read detailed case studies from patients who transformed their health through Dr. Kalyan's Ayurvedic treatment
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <Card className="border-border mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex gap-2 mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
                    Featured
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">{blogPosts[0].title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <div className="space-y-4">
                  <Button className="w-fit bg-primary hover:bg-primary/90 text-white">
                    Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <div className="flex gap-2">
                    <button
                      onClick={() => sharePost(blogPosts[0].id, blogPosts[0].title)}
                      className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
                      title="Share on Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => sharePost(blogPosts[0].id, blogPosts[0].title)}
                      className="p-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-600 transition-colors"
                      title="Share on Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => sharePost(blogPosts[0].id, blogPosts[0].title)}
                      className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors"
                      title="Share on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => sharePost(blogPosts[0].id, blogPosts[0].title)}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                      title="Share via Email"
                    >
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map(post => (
            <Card key={post.id} className="border-border hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex gap-2 mb-3">
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">{post.excerpt}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                    Read Story
                  </Button>
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => sharePost(post.id, post.title)}
                      className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
                      title="Share on Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => sharePost(post.id, post.title)}
                      className="p-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-600 transition-colors"
                      title="Share on Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => sharePost(post.id, post.title)}
                      className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors"
                      title="Share on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => sharePost(post.id, post.title)}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                      title="Share via Email"
                    >
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                  {sharedPostId === post.id && (
                    <p className="text-xs text-green-600 text-center">✓ Shared successfully!</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">Your Story Could Be Next</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of patients who have transformed their health through Dr. Kalyan's authentic Ayurvedic treatment. Share your success story and inspire others on their healing journey.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Start Your Transformation Today
          </Button>
        </div>
      </div>
    </section>
  );
}
