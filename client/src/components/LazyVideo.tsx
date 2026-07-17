import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

interface LazyVideoProps {
  src: string;
  poster: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function LazyVideo({ src, poster, alt, className = '', width, height }: LazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isLoaded) {
            setIsLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isLoaded]);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-gray-900 ${className}`}
      style={{ width, height }}
    >
      {isLoaded ? (
        <>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={poster}
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors"
              aria-label={`Play ${alt}`}
            >
              <Play className="w-16 h-16 text-white fill-white" />
            </button>
          )}
        </>
      ) : (
        <img
          src={poster}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
}
