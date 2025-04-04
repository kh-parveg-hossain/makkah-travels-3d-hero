
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Map, Phone } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden islamic-pattern">
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-hajj-dark/90 via-hajj-primary/80 to-hajj-dark/90 z-10"></div>
      
      {/* 3D Model */}
      <div className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-700 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <iframe 
          ref={iframeRef}
          title="Kaaba" 
          className="w-full h-full"
          frameBorder="0" 
          allowFullScreen 
          onLoad={handleIframeLoad}
          allow="autoplay; fullscreen; xr-spatial-tracking" 
          src="https://sketchfab.com/models/45d4b0b4404a4ad7b3f7235f7a10382c/embed?autospin=1&autostart=1&preload=1&ui_infos=0&ui_controls=0&ui_stop=0"
        />
      </div>
      
      {/* Loading indicator */}
      {!iframeLoaded && (
        <div className="absolute inset-0 z-5 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-hajj-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 h-full flex items-center">
        <div className="w-full md:w-2/3 lg:w-1/2 text-white">
          <div className={`transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              <span className="block font-arabic mb-2">আল মুত্তাকিন</span>
              <span className="text-hajj-accent">International Travels</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">Your Trusted Partner for Sacred Journeys</p>
            <p className="text-base md:text-lg mb-8 max-w-lg">
              Experience a transformative spiritual journey with our premium Hajj and Umrah packages,
              crafted with care, devotion, and attention to every detail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-hajj-accent hover:bg-hajj-accent/90 text-white rounded-full">
                <Calendar className="mr-2 h-5 w-5" /> Explore Hajj Packages
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
                <Phone className="mr-2 h-5 w-5" /> Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 py-4 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center md:justify-start text-white">
              <span className="bg-hajj-accent/20 p-2 rounded-full mr-3">
                <Map className="h-6 w-6 text-hajj-accent" />
              </span>
              <div>
                <h3 className="font-semibold">Premium Locations</h3>
                <p className="text-sm opacity-80">Close proximity to Haram</p>
              </div>
            </div>
            <div className="flex items-center justify-center text-white">
              <span className="bg-hajj-accent/20 p-2 rounded-full mr-3">
                <Calendar className="h-6 w-6 text-hajj-accent" />
              </span>
              <div>
                <h3 className="font-semibold">Customized Packages</h3>
                <p className="text-sm opacity-80">Tailored to your needs</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end text-white">
              <span className="bg-hajj-accent/20 p-2 rounded-full mr-3">
                <Phone className="h-6 w-6 text-hajj-accent" />
              </span>
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm opacity-80">Always there for you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
