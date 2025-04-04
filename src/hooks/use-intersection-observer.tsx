
import { useEffect, useState, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

interface IntersectionObserverEntry {
  isIntersecting: boolean;
}

export function useInView(
  options: UseInViewOptions = {}
): { ref: (node: Element | null) => void; inView: boolean } {
  const [ref, setRef] = useState<Element | null>(null);
  const [inView, setInView] = useState(false);
  
  const { threshold = 0, triggerOnce = false } = options;

  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        const isIntersecting = entry.isIntersecting;
        
        setInView(isIntersecting);
        
        if (isIntersecting && triggerOnce && ref) {
          observer.unobserve(ref);
        }
      },
      { threshold }
    );
    
    observer.observe(ref);
    
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, threshold, triggerOnce]);
  
  return { ref: setRef, inView };
}
