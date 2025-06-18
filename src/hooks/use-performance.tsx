
import { useEffect } from 'react';

export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'paint') {
          console.log(`${entry.name}: ${entry.startTime}ms`);
        } else if (entry.entryType === 'largest-contentful-paint') {
          const lcpEntry = entry as any; // LCP entries have value property
          console.log(`${entry.name}: ${lcpEntry.value || entry.startTime}ms`);
        } else {
          console.log(`${entry.name}: ${entry.startTime}ms`);
        }
      });
    });

    // Observe paint timings
    if ('PerformanceObserver' in window) {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
    }

    // Monitor page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        console.log(`Page load time: ${loadTime}ms`);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};
