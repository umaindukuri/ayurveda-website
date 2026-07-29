import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Play, Filter, X } from 'lucide-react';
import { Link } from 'wouter';
import { CompactHeader } from '@/components/CompactHeader';

interface VideoTestimonial {
  id: string;
  title: string;
  condition: string;
  category: string;
  duration: string;
  patientName: string;
  patientAge: string;
  videoUrl: string;
  description: string;
  results: string[];
  thumbnail: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: '1',
    title: 'Arthritis Recovery: From Pain to Active Life',
    condition: 'Rheumatoid Arthritis',
    category: 'Musculoskeletal',
    duration: '4:32',
    patientName: 'James M.',
    patientAge: '58',
    videoUrl: '/images/testimonial-arthritis-james-placeholder_9ad0abac.mp4',
    description: 'James suffered from severe joint pain for 10 years. After completing the 21-day Panchakarma program, he regained mobility and returned to his favorite activities.',
    results: ['100% pain reduction', 'Improved mobility', 'Discontinued pain medications', 'Active lifestyle restored'],
    thumbnail: '/images/video-thumb-arthritis_686bce95.png'
  },
  {
    id: '2',
    title: 'Diabetes Management: Blood Sugar Normalized',
    condition: 'Type 2 Diabetes',
    category: 'Metabolic',
    duration: '5:15',
    patientName: 'Maria S.',
    patientAge: '52',
    videoUrl: '/images/testimonial-diabetes-maria-placeholder_ce571f6b.mp4',
    description: 'Maria\'s blood sugar levels normalized after completing one 14-day program. She shares how dietary changes and herbal treatments transformed her health.',
    results: ['Normal blood sugar levels', 'Weight loss of 8kg', 'Increased energy', 'Reduced medication dependency'],
    thumbnail: '/images/video-thumb-diabetes_a2bc2afd.png'
  },
  {
    id: '3',
    title: 'Anxiety Relief: Finding Inner Peace',
    condition: 'Chronic Anxiety',
    category: 'Mental Health',
    duration: '3:48',
    patientName: 'David K.',
    patientAge: '45',
    videoUrl: '/images/testimonial-anxiety-david-placeholder_9c7bf059.mp4',
    description: 'David struggled with anxiety for years. Through Shirodhara and meditation practices, he found lasting peace without pharmaceutical interventions.',
    results: ['Anxiety symptoms eliminated', 'Better sleep quality', 'Improved focus', 'Emotional stability'],
    thumbnail: '/images/video-thumb-anxiety_2ec41ab8.webp'
  },
  {
    id: '4',
    title: 'Skin Transformation: Eczema Completely Cleared',
    condition: 'Severe Eczema',
    category: 'Skin',
    duration: '4:12',
    patientName: 'Lisa T.',
    patientAge: '38',
    videoUrl: '/images/testimonial-eczema-lisa-placeholder_a2b63c06.mp4',
    description: 'Lisa\'s eczema cleared completely within 2 months. She explains how the holistic approach addressed the root cause rather than just treating symptoms.',
    results: ['Complete skin clearance', 'No itching or irritation', 'Improved confidence', 'Sustained results'],
    thumbnail: '/images/video-thumb-eczema_f88e5484.png'
  },
  {
    id: '5',
    title: 'Fertility Success: Natural Conception After Treatment',
    condition: 'Infertility',
    category: 'Fertility',
    duration: '5:42',
    patientName: 'Sarah M.',
    patientAge: '35',
    videoUrl: '/images/testimonial-fertility-sarah-placeholder_d5b706c4.mp4',
    description: 'Sarah conceived naturally after 3 years of trying. The fertility-focused Ayurvedic treatment balanced her hormones and restored reproductive health.',
    results: ['Natural conception', 'Healthy pregnancy', 'Balanced hormones', 'Restored confidence'],
    thumbnail: '/images/video-thumb-fertility_fd34ed2b.png'
  },
  {
    id: '6',
    title: 'Digestive Health: IBS Symptoms Gone',
    condition: 'IBS',
    category: 'Digestive',
    duration: '4:05',
    patientName: 'Robert P.',
    patientAge: '48',
    videoUrl: '/images/testimonial-digestive-robert-placeholder_d5d72f4a.mp4',
    description: 'Robert suffered from IBS for 15 years. After the treatment program, his digestive issues resolved completely, and he enjoys food without fear.',
    results: ['IBS symptoms eliminated', 'Improved digestion', 'Better energy levels', 'Quality of life restored'],
    thumbnail: '/images/video-thumb-digestion_acafb7ba.png'
  }
];

const categories = ['All', 'Musculoskeletal', 'Metabolic', 'Mental Health', 'Skin', 'Fertility', 'Digestive'];

export default function VideoTestimonials() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredVideos = selectedCategory === 'All' 
    ? videoTestimonials 
    : videoTestimonials.filter(v => v.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <CompactHeader />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container max-w-5xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-4">Patient Video Testimonials</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch real patients share their transformation stories and healing journeys with Dr. Kalyan's authentic Ayurvedic treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-40">
        <div className="container max-w-5xl">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Filter by Condition:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  size="sm"
                  className={selectedCategory === cat ? 'bg-primary text-white' : ''}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
          <div className="text-sm text-muted-foreground mt-4">
            Showing {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 bg-white">
        <div className="container max-w-5xl">
          {filteredVideos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <Card 
                  key={video.id} 
                  className="border-border hover:shadow-lg transition-all cursor-pointer overflow-hidden group"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative overflow-hidden bg-muted h-48">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
                        <CardDescription className="text-xs mt-1">{video.category}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{video.patientName}</p>
                      <p className="text-xs text-muted-foreground">{video.condition}</p>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
                    <Button 
                      size="sm" 
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVideo(video);
                      }}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No videos found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Player Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <div className="space-y-6">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                {selectedVideo.videoUrl.includes('youtube.com') || selectedVideo.videoUrl.includes('youtu.be') ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    width="100%"
                    height="100%"
                    controls
                    autoPlay
                    className="w-full h-full"
                  >
                    <source src={selectedVideo.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Patient Name</p>
                    <p className="text-lg font-semibold text-foreground">{selectedVideo.patientName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="text-lg font-semibold text-foreground">{selectedVideo.patientAge}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Condition</p>
                    <p className="text-lg font-semibold text-foreground">{selectedVideo.condition}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="text-lg font-semibold text-foreground">{selectedVideo.category}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">About This Case</p>
                  <p className="text-foreground leading-relaxed">{selectedVideo.description}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Key Results</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedVideo.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-green-50 p-2 rounded">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-sm text-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Book Your Consultation
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Start Your Healing Journey?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Schedule a personalized consultation with Dr. Kalyan to discuss your health concerns and create your customized treatment plan.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Book Your Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/images/dr_kalyan_logo_final_07bd8e78.png" alt="Logo" className="h-6 w-6 invert" />
                <span className="font-bold text-sm">Ayurveda Wellness</span>
              </div>
              <p className="text-white/70 text-xs leading-relaxed">
                Authentic Ayurvedic healing for chronic diseases, wellness optimization, and natural transformation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition-colors">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Treatment Areas</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><Link href="/treatments" className="hover:text-white transition-colors">Panchakarma</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Chronic Diseases</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Mental Health</Link></li>
                <li><Link href="/treatments" className="hover:text-white transition-colors">Fertility</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Contact</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li><a href="mailto:contact@drkalyan.com" className="hover:text-white">contact@drkalyan.com</a></li>
                <li><a href="tel:+919281332544" className="hover:text-white">+91 92813 32544</a></li>
                <li className="text-xs leading-snug">Flat No.102, Plot No.309, Near Volkswagen Service Centre, Prashanth Hills Colony, Raidurg Navkhalsa</li>
                <li>8:00 AM - 1:00 PM | 5:00 PM - 9:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-6 pt-4 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/70 text-xs text-center md:text-left">&copy; 2026 Dr. Kalyan Ayurveda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
