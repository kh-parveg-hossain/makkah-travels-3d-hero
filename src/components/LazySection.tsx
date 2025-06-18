
import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

const LazySection = ({ children, fallback, className }: LazySectionProps) => {
  const defaultFallback = (
    <div className={`w-full ${className || ''}`}>
      <div className="container mx-auto px-4 py-20">
        <Skeleton className="h-8 w-64 mx-auto mb-4" />
        <Skeleton className="h-4 w-96 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  );
};

export default LazySection;
