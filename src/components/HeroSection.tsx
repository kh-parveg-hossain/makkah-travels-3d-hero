import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Map, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/translations';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { currentLanguage } = useLanguage();
  const t = useTranslation(currentLanguage);
  const isRtl = currentLanguage === 'ar' || currentLanguage === 'ur';
  const isMobile = useIsMobile();
  
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
    <section id="home" className={`relative min-h-screen w-full overflow-hidden islamic-pattern ${isRtl ? 'rtl' : ''}`}>
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-hajj-dark/90 via-hajj-primary/80 to-hajj-dark/90 z-10"></div>
      
      {/* 3D Model - Only show on large devices (lg and above) */}
      {!isMobile && (
        <div className={`hidden lg:block absolute inset-0 w-full h-full z-0 transition-opacity duration-700 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
      )}
      
      {/* Static background image for mobile and medium devices */}
      <div className="lg:hidden absolute inset-0 w-full h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kaaba"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Loading indicator - Only show when 3D model is loading on large devices */}
      {!isMobile && !iframeLoaded && (
        <div className="hidden lg:flex absolute inset-0 z-5 items-center justify-center">
          <div className="w-16 h-16 border-4 border-hajj-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 flex items-center" style={{ minHeight: '80vh' }}>
        <div className="w-full md:w-2/3 lg:w-1/2 text-white py-16 md:py-0">
          <div className={`transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2">
              <span className="block font-arabic mb-2">আল মুত্তাকিন</span>
              <span className="text-hajj-accent">{t.hero.title}</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-4 font-light">{t.hero.subtitle}</p>
            <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-lg">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/packages">
                <Button size={isMobile ? "default" : "lg"} className="bg-hajj-accent hover:bg-hajj-accent/90 text-white rounded-full">
                  <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" /> {t.hero.explorePackages}
                </Button>
              </Link>
              <Button size={isMobile ? "default" : "lg"} variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" /> {t.hero.contactUs}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 py-3 md:py-4 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-center justify-center md:justify-start text-white">
              <span className="bg-hajj-accent/20 p-1.5 md:p-2 rounded-full mr-2 md:mr-3">
                <Map className="h-5 w-5 md:h-6 md:w-6 text-hajj-accent" />
              </span>
              <div>
                <h3 className="font-semibold text-sm md:text-base">{t.hero.features.locations.title}</h3>
                <p className="text-xs md:text-sm opacity-80">{t.hero.features.locations.description}</p>
              </div>
            </div>
            <div className="flex items-center justify-center text-white">
              <span className="bg-hajj-accent/20 p-1.5 md:p-2 rounded-full mr-2 md:mr-3">
                <Calendar className="h-5 w-5 md:h-6 md:w-6 text-hajj-accent" />
              </span>
              <div>
                <h3 className="font-semibold text-sm md:text-base">{t.hero.features.packages.title}</h3>
                <p className="text-xs md:text-sm opacity-80">{t.hero.features.packages.description}</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end text-white">
              <span className="bg-hajj-accent/20 p-1.5 md:p-2 rounded-full mr-2 md:mr-3">
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-hajj-accent" />
              </span>
              <div>
                <h3 className="font-semibold text-sm md:text-base">{t.hero.features.support.title}</h3>
                <p className="text-xs md:text-sm opacity-80">{t.hero.features.support.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
