
import { useEffect } from 'react';

export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.value}ms`);
      });
    });

    // Observe paint timings
    if ('PerformanceObserver' in window) {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
    }

    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`Page load time: ${loadTime}ms`);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};
