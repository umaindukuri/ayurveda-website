import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

interface TestimonialVideo {
  id: string;
  patientName: string;
  condition: string;
  beforeAfter: string;
  videoThumbnail: string;
  videoUrl: string;
  duration: string;
  rating: number;
  testimonialText: string;
  treatmentDuration: string;
}

const testimonialVideos: TestimonialVideo[] = [
  {
    id: 'vid-001',
    patientName: 'Priya Sharma',
    condition: 'Infertility & PCOS',
    beforeAfter: 'Struggled for 5 years → Natural pregnancy in 8 months',
    videoThumbnail: '/manus-storage/carousel-thumb-infertility_9453379d.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '4:32',
    rating: 5,
    testimonialText: 'Dr. Kalyan\'s personalized Ayurvedic treatment gave me hope when I had lost it. The combination of herbal medicines and lifestyle changes worked wonders.',
    treatmentDuration: '8 months',
  },
  {
    id: 'vid-002',
    patientName: 'Rajesh Kumar',
    condition: 'Chronic Back Pain',
    beforeAfter: 'Severe pain limiting mobility → Pain-free and active',
    videoThumbnail: '/manus-storage/carousel-thumb-back-pain_ace4f1e7.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '5:15',
    rating: 5,
    testimonialText: 'After 3 years of conventional treatment, Ayurveda gave me relief. The Panchakarma therapy was transformative.',
    treatmentDuration: '6 months',
  },
  {
    id: 'vid-003',
    patientName: 'Anjali Patel',
    condition: 'Thyroid Imbalance',
    beforeAfter: 'Medication dependent → Normalized TSH levels naturally',
    videoThumbnail: '/manus-storage/carousel-thumb-thyroid_cea4486a.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '3:48',
    rating: 5,
    testimonialText: 'I reduced my thyroid medication significantly. Dr. Kalyan\'s approach to root cause treatment is remarkable.',
    treatmentDuration: '5 months',
  },
  {
    id: 'vid-004',
    patientName: 'Deepak Singh',
    condition: 'Digestive Issues & IBS',
    beforeAfter: 'Frequent symptoms → Stable digestion and energy',
    videoThumbnail: '/manus-storage/carousel-thumb-digestion_622eeb69.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '4:20',
    rating: 5,
    testimonialText: 'The dietary recommendations and herbal formulations completely changed my digestive health. I feel energized again.',
    treatmentDuration: '4 months',
  },
];

export function TestimonialVideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<TestimonialVideo | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonialVideos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setAutoPlay(false);
    setCurrentIndex(prev => (prev - 1 + testimonialVideos.length) % testimonialVideos.length);
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentIndex(prev => (prev + 1) % testimonialVideos.length);
  };

  const goToSlide = (index: number) => {
    setAutoPlay(false);
    setCurrentIndex(index);
  };

  const currentVideo = testimonialVideos[currentIndex];

  return (
    <div className="space-y-6">
      {/* Main Carousel */}
      <div className="relative">
        <Card className="overflow-hidden bg-black">
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center group">
            {/* Thumbnail with Play Button */}
            <div className="relative w-full h-full">
              <img
                src={currentVideo.videoThumbnail}
                alt={currentVideo.patientName}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <button
                  onClick={() => setSelectedVideo(currentVideo)}
                  className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 transform group-hover:scale-110 transition-transform"
                >
                  <Play className="w-8 h-8 fill-white" />
                </button>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {currentIndex + 1} / {testimonialVideos.length}
            </div>
          </div>

          {/* Video Info */}
          <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{currentVideo.patientName}</h3>
                <p className="text-primary font-semibold text-sm mt-1">{currentVideo.condition}</p>
              </div>
              <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                {[...Array(currentVideo.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <p className="text-lg font-semibold text-green-600 mb-3">{currentVideo.beforeAfter}</p>
            <p className="text-foreground/70 mb-4 leading-relaxed">{currentVideo.testimonialText}</p>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-foreground/60">Treatment Duration:</span>
                <span className="font-semibold text-foreground">{currentVideo.treatmentDuration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-foreground/60">Video Length:</span>
                <span className="font-semibold text-foreground">{currentVideo.duration}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Thumbnail Navigation */}
      <div className="space-y-3">
        <p className="text-sm font-semibold text-foreground/60">More Success Stories</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {testimonialVideos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => goToSlide(index)}
              className={`relative aspect-video rounded-lg overflow-hidden group transition-all ${
                index === currentIndex ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={video.videoThumbnail}
                alt={video.patientName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 flex items-center justify-center transition-colors">
                <Play className="w-4 h-4 fill-white text-white" />
              </div>
              <div className="absolute bottom-1 left-1 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <p className="text-xs text-green-600 font-semibold mb-1">Success Rate</p>
          <p className="text-3xl font-bold text-green-900">87%</p>
          <p className="text-xs text-green-600 mt-2">of patients see significant improvement</p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <p className="text-xs text-blue-600 font-semibold mb-1">Average Rating</p>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-bold text-blue-900">4.9</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <p className="text-xs text-purple-600 font-semibold mb-1">Patient Testimonials</p>
          <p className="text-3xl font-bold text-purple-900">500+</p>
          <p className="text-xs text-purple-600 mt-2">verified success stories</p>
        </Card>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20 text-center">
        <h3 className="text-lg font-bold text-foreground mb-2">Ready to Start Your Transformation?</h3>
        <p className="text-foreground/60 mb-4">
          Join hundreds of patients who have found relief and wellness through authentic Ayurvedic treatment.
        </p>
        <a href="/">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Book Your Consultation Today
          </Button>
        </a>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="bg-black rounded-lg max-w-2xl w-full aspect-video" onClick={e => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo.videoUrl}
              title={selectedVideo.patientName}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
