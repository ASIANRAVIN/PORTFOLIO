import { useState } from "react";

interface ImageWithFallbackProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function ImageWithFallback({ src, alt = "", className }: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className={`w-full h-full bg-muted flex items-center justify-center ${className ?? ""}`}>
        <span className="text-muted-foreground">{alt || "No image"}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

export default ImageWithFallback;
