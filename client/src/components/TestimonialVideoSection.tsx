import { useRef, useState } from 'react';
import { Play, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface Video {
  id: string;
  title: string;
  condition: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

export function TestimonialVideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const testimonialVideos: Video[] = [
    {
      id: '1',
      title: "Arthritis Recovery - Complete Pain Relief",
      condition: "Rheumatoid Arthritis",
      thumbnail: "/images/panchakarma_treatment_vibrant_d075a65b.png",
      videoUrl: "/manus-storage/final_arthritis_bb8f7c2c.mp4",
      duration: "0:08"
    },
    {
      id: '2',
      title: "Diabetes Management - Blood Sugar Normalized",
      condition: "Type 2 Diabetes",
      thumbnail: "/images/hero_meditation_premium_0f0d5eb0.png",
      videoUrl: "/manus-storage/final_diabetes_0c9d2036.mp4",
      duration: "0:08"
    },
    {
      id: '3',
      title: "Anxiety Relief - Found Inner Peace",
      condition: "Chronic Anxiety",
      thumbnail: "/images/anxiety-relief-thumb-final_524ff34b.png",
      videoUrl: "/manus-storage/final_anxiety_0fd48568.mp4",
      duration: "0:08"
    }
  ];

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Patient Success Stories - Video Testimonials</h2>
          <p className="text-lg text-muted-foreground">
            Hear directly from our patients about their transformative healing journeys
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonialVideos.map((video) => (
            <Card
              key={video.id}
              className="border-border overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => setSelectedVideo(video)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden bg-black/5 aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="bg-primary hover:bg-primary/90 rounded-full p-4 transition-all transform group-hover:scale-110">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
              </CardContent>
              <div className="p-4">
                <p className="text-sm font-semibold text-primary mb-2">{video.condition}</p>
                <h3 className="font-semibold text-foreground line-clamp-2">{video.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <div
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-foreground text-white p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/70">{selectedVideo.condition}</p>
                  <h3 className="text-lg font-semibold">{selectedVideo.title}</h3>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close video"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Video Container */}
              <div className="relative bg-black aspect-video">
                <video
                  ref={videoRef}
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Footer */}
              <div className="p-4 bg-muted border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Interested in experiencing similar results? Schedule your consultation with Dr. Kalyan today.
                </p>
                <Link href="/book-appointment">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Book Your Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            These are just a few of the hundreds of patients we've helped transform their health
          </p>
          <Link href="/video-testimonials">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              View All Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
