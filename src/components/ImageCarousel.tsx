// ImageCarousel.tsx - Updated with auto-play props
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
  autoPlayInterval?: number; // Add this
  showControls?: boolean; // Add this
}

export function ImageCarousel({ 
  images, 
  className = "", 
  autoPlayInterval = 5000, // Default value
  showControls = true // Default value
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;
    
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [currentIndex, isPlaying, images.length, autoPlayInterval]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isPlaying]);

  if (images.length === 0) return null;

  return (
    <div
      className={`
        relative
        w-[500px]
        h-[500px]
        min-w-[500px]
        min-h-[500px]
        max-w-[500px]
        max-h-[500px]
        bg-black
        overflow-hidden
        ${className}
      `}
    >
      {/* Black background layer */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Image container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="
            block
            max-w-full
            max-h-full
            object-contain
            w-auto
            h-auto
            transition-opacity duration-500
          "
          draggable={false}
          onLoad={(e) => {
            const img = e.target as HTMLImageElement;
            img.style.backgroundColor = 'black';
          }}
        />
      </div>

      {/* Navigation arrows (only show if showControls is true) */}
      {showControls && (
        <>
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-2 rounded-full z-20 border border-white/20"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-2 rounded-full z-20 border border-white/20"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Play/Pause button */}
      {showControls && images.length > 1 && (
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 right-4 bg-black/80 hover:bg-black text-white p-2 rounded-full z-20 border border-white/20"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full ${
                i === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}