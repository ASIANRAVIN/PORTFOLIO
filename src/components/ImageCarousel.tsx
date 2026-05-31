import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
  autoPlayInterval?: number;
  showControls?: boolean;
}

export function ImageCarousel({
  images,
  className = "",
  autoPlayInterval = 5000,
  showControls = true,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  useEffect(() => {
    if (!isPlaying || images.length <= 1) {
      return;
    }

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, images.length, autoPlayInterval, goToNext]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }
      if (event.key === "ArrowRight") {
        goToNext();
      }
      if (event.key === " ") {
        event.preventDefault();
        setIsPlaying((playing) => !playing);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={`image-carousel ${className}`.trim()}>
      <div className="image-carousel-stage">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="image-carousel-image"
          draggable={false}
        />
      </div>

      {showControls && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            className="image-carousel-btn image-carousel-btn--prev"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="image-carousel-btn image-carousel-btn--next"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {showControls && images.length > 1 && (
        <button
          type="button"
          onClick={() => setIsPlaying((playing) => !playing)}
          className="image-carousel-btn image-carousel-btn--play"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      )}

      {images.length > 1 && (
        <div className="image-carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`image-carousel-dot${
                index === currentIndex ? " image-carousel-dot--active" : ""
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
