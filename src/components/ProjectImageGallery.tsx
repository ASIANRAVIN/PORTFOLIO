import { useEffect, useState, type SyntheticEvent } from "react";

interface ProjectImageGalleryProps {
  images: string[];
  title: string;
}

const MOBILE_BREAKPOINT = 768;
const AUTO_PLAY_MS = 4000;

export function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    );

    let intervalId: ReturnType<typeof setInterval> | undefined;

    const startAutoPlay = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
      }

      if (mediaQuery.matches) {
        intervalId = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        }, AUTO_PLAY_MS);
      }
    };

    startAutoPlay();
    mediaQuery.addEventListener("change", startAutoPlay);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      mediaQuery.removeEventListener("change", startAutoPlay);
    };
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="project-gallery-placeholder">
        <div className="text-center">
          <div className="text-lg mb-2 opacity-70">🖼️</div>
          <div className="text-muted-foreground">Project Screenshots Coming Soon</div>
        </div>
      </div>
    );
  }

  const handleImageError = (
    event: SyntheticEvent<HTMLImageElement>,
    imageIndex: number
  ) => {
    const target = event.currentTarget;
    target.src = `https://placehold.co/800x450/1a1a2e/6366f1?text=${encodeURIComponent(title)}+${imageIndex + 1}`;
    target.alt = `${title} placeholder image`;
  };

  return (
    <div className="project-gallery">
      <div className="project-gallery-mobile" aria-live="polite">
        <div className="project-gallery-mobile-frame">
          {images.map((image, imageIndex) => (
            <img
              key={image}
              src={image}
              alt={`${title} screenshot ${imageIndex + 1}`}
              className={`project-gallery-mobile-image${
                imageIndex === currentIndex
                  ? " project-gallery-mobile-image--active"
                  : ""
              }`}
              onError={(event) => handleImageError(event, imageIndex)}
            />
          ))}
        </div>
        {images.length > 1 && (
          <>
            <div className="project-gallery-counter">
              {currentIndex + 1}/{images.length}
            </div>
            <div className="project-gallery-dots">
              {images.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  className={`project-gallery-dot${
                    dotIndex === currentIndex ? " project-gallery-dot--active" : ""
                  }`}
                  aria-label={`Show screenshot ${dotIndex + 1}`}
                  onClick={() => setCurrentIndex(dotIndex)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="project-gallery-desktop">
        {images.map((image, imageIndex) => (
          <div key={image} className="project-gallery-desktop-item">
            <img
              src={image}
              alt={`${title} screenshot ${imageIndex + 1}`}
              className="project-gallery-desktop-image"
              onError={(event) => handleImageError(event, imageIndex)}
            />
            {images.length > 1 && (
              <div className="project-gallery-counter">
                {imageIndex + 1}/{images.length}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
