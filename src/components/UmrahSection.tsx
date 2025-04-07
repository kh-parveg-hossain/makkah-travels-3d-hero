
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/translations';

const UmrahSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { currentLanguage } = useLanguage();
  const t = useTranslation(currentLanguage);
  const isRtl = currentLanguage === 'ar' || currentLanguage === 'ur';

  return (
    <section id="umrah" className={`py-20 bg-hajj-light relative overflow-hidden ${isRtl ? 'rtl' : ''}`}>
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-hajj-accent/10"></div>
      <div className="absolute -left-10 bottom-10 w-40 h-40 rounded-full bg-hajj-primary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side content */}
          <div 
            ref={ref}
            className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}
          >
            <span className="text-hajj-accent font-medium">{t.umrah.title}</span>
            <h2 className="section-title">{t.umrah.heading}</h2>
            
            <p className="text-gray-600 mb-6">
              {t.umrah.description}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-hajj-primary/10 p-2 rounded-full mr-4 mt-1">
                  <Star className="h-5 w-5 text-hajj-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-hajj-primary">{t.umrah.features.availability.title}</h4>
                  <p className="text-gray-600">
                    {t.umrah.features.availability.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-hajj-primary/10 p-2 rounded-full mr-4 mt-1">
                  <Star className="h-5 w-5 text-hajj-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-hajj-primary">{t.umrah.features.customizable.title}</h4>
                  <p className="text-gray-600">
                    {t.umrah.features.customizable.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-hajj-primary/10 p-2 rounded-full mr-4 mt-1">
                  <Star className="h-5 w-5 text-hajj-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-hajj-primary">{t.umrah.features.guidance.title}</h4>
                  <p className="text-gray-600">
                    {t.umrah.features.guidance.description}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-x-4">
              <Button className="bg-hajj-primary hover:bg-hajj-dark text-white">
                {t.umrah.viewPackages} <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-hajj-primary text-hajj-primary hover:bg-hajj-primary/5">
                {t.umrah.requestCustom}
              </Button>
            </div>
          </div>
          
          {/* Right side image */}
          <div 
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-x-10'}`}
          >
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photos/66Tu10CxYY0" 
                alt="Makkah" 
                className="rounded-lg h-40 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photos/66Tu10CxYY0" 
                alt="Makkah" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
            <div className="space-y-4 mt-6">
              <img 
                src="https://images.unsplash.com/photos/66Tu10CxYY0" 
                alt="Makkah" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photos/66Tu10CxYY0" 
                alt="Makkah" 
                className="rounded-lg h-40 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmrahSection;
