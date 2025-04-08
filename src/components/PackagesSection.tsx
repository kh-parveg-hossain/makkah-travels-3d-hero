
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Check, Clock, Calendar, Users, MapPin, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';
import { Link } from 'react-router-dom';

const PackageCard = ({ 
  id,
  title, 
  days, 
  price, 
  startDate, 
  image, 
  popular = false,
  features
}: { 
  id: string;
  title: string; 
  days: number; 
  price: number; 
  startDate: string; 
  image: string;
  popular?: boolean;
  features: string[];
  rating?: number; // Keep the type but we won't use it
}) => {
  return (
    <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl group rounded-lg bg-white dark:bg-gray-800 shadow-md">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1604934128850-88e4f3f29bde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
          }}
        />
        {popular && (
          <Badge className="absolute top-4 right-4 bg-hajj-accent text-white">
            Popular Choice
          </Badge>
        )}
        <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 py-1 px-3 rounded-full flex items-center">
          <Clock className="h-4 w-4 text-hajj-primary dark:text-hajj-accent mr-1" />
          <span className="text-sm">{days} Days</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-hajj-primary dark:text-white mb-2">{title}</h3>
        
        <div className="flex justify-between items-center my-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-hajj-accent mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{startDate}</span>
          </div>
          <div className="text-hajj-accent font-bold text-xl">
            ${price}
          </div>
        </div>
        
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-hajj-accent mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
        
        <Link to={`/package/${id}`}>
          <Button className="w-full bg-hajj-primary hover:bg-hajj-dark text-white">
            View Details <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const PackagesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const { theme } = useTheme();

  const packages = [
    {
      id: "standard",
      title: "Standard Hajj Package",
      days: 14,
      price: 3499,
      startDate: "May 15, 2025",
      image: "https://images.unsplash.com/photo-1604934128850-88e4f3f29bde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Accommodation in 3-star hotels",
        "Transportation between holy sites",
        "Daily meals included",
        "Guidance from experienced scholars",
        "Visa processing assistance"
      ]
    },
    {
      id: "premium",
      title: "Premium Hajj Package",
      days: 18,
      price: 5299,
      startDate: "May 12, 2025",
      image: "https://images.unsplash.com/photo-1590588885377-d782f696bf28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      popular: true,
      features: [
        "Luxury accommodation near Haram",
        "Private transportation",
        "Gourmet meals included",
        "Personalized guidance",
        "Priority access at sites",
        "Additional Ziyarat tours included"
      ]
    },
    {
      id: "family",
      title: "Family Hajj Package",
      days: 16,
      price: 4799,
      startDate: "May 14, 2025",
      image: "https://images.unsplash.com/photo-1572443490709-e57455b01aa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Family rooms in 4-star hotels",
        "Spacious transportation",
        "Child-friendly meals",
        "Special programs for children",
        "Family guidance sessions",
        "Medical assistance included"
      ]
    },
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-hajj-primary to-hajj-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-white font-medium">Our Packages</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Premium Hajj Packages
          </h2>
          <p className="max-w-3xl mx-auto text-white/80 mt-4">
            Choose from our carefully crafted Hajj packages designed to provide 
            a meaningful and comfortable spiritual journey.
          </p>
        </div>

        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            View All Packages <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
