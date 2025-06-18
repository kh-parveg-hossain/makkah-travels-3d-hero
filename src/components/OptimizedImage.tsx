
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onError?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false,
  onError 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    if (onError) onError();
  };

  const fallbackSrc = "https://images.unsplash.com/photo-1604934128850-88e4f3f29bde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;
