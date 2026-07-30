import { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Star, X } from 'lucide-react';
import { Link } from 'wouter';

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
    videoThumbnail: '/images/thumb-priya-fertility.jpg',
    videoUrl: '/manus-storage/v2_fertility_2c2abea4.mp4',
    duration: '0:08',
    rating: 5,
    testimonialText: "Dr. Kalyan's personalized Ayurvedic treatment gave me hope when I had lost it. The combination of herbal medicines and lifestyle changes worked wonders.",
    treatmentDuration: '8 months',
  },
  {
    id: 'vid-002',
    patientName: 'Rajesh Kumar',
    condition: 'Chronic Back Pain',
    beforeAfter: 'Severe pain limiting mobility → Pain-free and active',
    videoThumbnail: '/images/thumb-rajesh-backpain.jpg',
    videoUrl: '/manus-storage/v2_arthritis_be930665.mp4',
    duration: '0:08',
    rating: 5,
    testimonialText: 'After 3 years of conventional treatment, Ayurveda gave me relief. The Panchakarma therapy was transformative.',
    treatmentDuration: '6 months',
  },
  {
    id: 'vid-003',
    patientName: 'Anjali Patel',
    condition: 'Thyroid Imbalance',
    beforeAfter: 'Medication dependent → Normalized TSH levels naturally',
    videoThumbnail: '/images/thumb-anjali-thyroid.jpg',
    videoUrl: '/manus-storage/v2_anxiety_4094f39b.mp4',
    duration: '0:08',
    rating: 5,
    testimonialText: "I reduced my thyroid medication significantly. Dr. Kalyan's approach to root cause treatment is remarkable.",
    treatmentDuration: '5 months',
  },
  {
    id: 'vid-004',
    patientName: 'Deepak Singh',
    condition: 'Digestive Issues & IBS',
    beforeAfter: 'Frequent symptoms → Stable digestion and energy',
    videoThumbnail: '/images/thumb-deepak-digestive.jpg',
    videoUrl: '/manus-storage/v2_digestive_3f49d354.mp4',
    duration: '0:08',
    rating: 5,
    testimonialText: 'The dietary recommendations and herbal formulations completely changed my digestive health. I feel energized again.',
    treatmentDuration: '4 months',
  },
  {
    id: 'vid-005',
    patientName: 'Priya R.',
    condition: 'Premature Aging & Fatigue',
    beforeAfter: 'Exhausted and aging rapidly → Radiant skin and restored vitality',
    videoThumbnail: '/manus-storage/thumb_rejuvenation_9894a534.jpg',
    videoUrl: '/manus-storage/v2_rejuvenation_d2cf3aa7.mp4',
    duration: '1:13',
    rating: 5,
    testimonialText: 'After the 28-day Rasayana program, my skin is glowing, my energy is back, and the joint stiffness I had accepted as normal is completely gone.',
    treatmentDuration: '28 days',
  },
  {
    id: 'vid-006',
    patientName: 'Arjun S.',
    condition: 'Chronic Asthma',
    beforeAfter: 'Inhaler 4x daily for 15 years → Breathing freely, no bronchitis',
    videoThumbnail: '/manus-storage/thumb_respiratory_b8b7fbac.jpg',
    videoUrl: '/manus-storage/v2_respiratory_0cfaafa6.mp4',
    duration: '1:14',
    rating: 5,
    testimonialText: 'I have not needed my inhaler in over eight months. Dr. Kalyan gave me my breath back — and with it, my life.',
    treatmentDuration: '2 months',
  },
];

export function TestimonialVideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<TestimonialVideo | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedVideo(null);
  };

  const currentVideo = testimonialVideos[currentIndex];

  return (
    <div className="space-y-6">
      {/* Main Carousel */}
      <div className="relative">
        <Card className="overflow-hidden bg-black">
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center group">
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
        <Link href="/book-appointment">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Book Your Consultation Today
          </Button>
        </Link>
      </div>

      {/* Video Modal — HTML5 player, no YouTube iframe */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div
            className="bg-black rounded-lg max-w-2xl w-full overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <p className="text-white text-sm font-medium truncate">{selectedVideo.patientName} — {selectedVideo.condition}</p>
              <button onClick={handleClose} className="text-white/70 hover:text-white p-1 rounded transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-black">
              <video
                ref={videoRef}
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
