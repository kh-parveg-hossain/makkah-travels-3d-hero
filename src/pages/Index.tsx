
import { useEffect, lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ScrollToTop from '@/components/ScrollToTop';
import LazySection from '@/components/LazySection';

// Lazy load non-critical sections
const AboutSection = lazy(() => import('@/components/AboutSection'));
const PackagesSection = lazy(() => import('@/components/PackagesSection'));
const UmrahSection = lazy(() => import('@/components/UmrahSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle initial hash in URL
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <LazySection>
        <AboutSection />
      </LazySection>
      
      <LazySection>
        <PackagesSection />
      </LazySection>
      
      <LazySection>
        <UmrahSection />
      </LazySection>
      
      <LazySection>
        <TestimonialsSection />
      </LazySection>
      
      <LazySection>
        <ContactSection />
      </LazySection>
      
      <LazySection>
        <Footer />
      </LazySection>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
