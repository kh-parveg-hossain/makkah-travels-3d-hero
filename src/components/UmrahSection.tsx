
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star } from 'lucide-react';

const UmrahSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="umrah" className="py-20 bg-hajj-light relative overflow-hidden">
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
            <span className="text-hajj-accent font-medium">Sacred Journey</span>
            <h2 className="section-title">Umrah Packages For Every Season</h2>
            
            <p className="text-gray-600 mb-6">
              Perform Umrah at any time of the year with our all-inclusive packages designed for 
              individuals, families, and groups. Experience the spiritual journey with comfort and ease.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-hajj-primary/10 p-2 rounded-full mr-4 mt-1">
                  <Star className="h-5 w-5 text-hajj-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-hajj-primary">Year-round Availability</h4>
                  <p className="text-gray-600">
                    Choose your preferred time to perform Umrah with our flexible scheduling options.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-hajj-primary/10 p-2 rounded-full mr-4 mt-1">
                  <Star className="h-5 w-5 text-hajj-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-hajj-primary">Customizable Packages</h4>
                  <p className="text-gray-600">
                    Tailor your Umrah experience according to your budget and preferences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-hajj-primary/10 p-2 rounded-full mr-4 mt-1">
                  <Star className="h-5 w-5 text-hajj-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-hajj-primary">Expert Guidance</h4>
                  <p className="text-gray-600">
                    Our knowledgeable guides assist you throughout your spiritual journey.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-x-4">
              <Button className="bg-hajj-primary hover:bg-hajj-dark text-white">
                View Umrah Packages <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-hajj-primary text-hajj-primary hover:bg-hajj-primary/5">
                Request Custom Package
              </Button>
            </div>
          </div>
          
          {/* Right side image */}
          <div 
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-x-10'}`}
          >
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1604934128850-88e4f3f29bde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Madinah" 
                className="rounded-lg h-40 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1572443490709-e57455b01aa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Umrah pilgrims" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
            <div className="space-y-4 mt-6">
              <img 
                src="https://images.unsplash.com/photo-1590588885377-d782f696bf28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" 
                alt="Kaaba" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1566624790190-511a09f6ddbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
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
