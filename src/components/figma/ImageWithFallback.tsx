// ImageWithFallback.tsx
import { useState, ReactNode } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: ReactNode;
  onError?: () => void;
}

export function ImageWithFallback({ 
  src, 
  alt, 
  className = '', 
  fallback,
  onError 
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  if (hasError && fallback) {
    return <>{fallback}</>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
}