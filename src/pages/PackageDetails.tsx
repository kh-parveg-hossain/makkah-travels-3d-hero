import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Users, 
  MapPin, 
  Check, 
  Star, 
  Phone
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const PackageDetails = () => {
  const { packageId } = useParams();
  const [packageData, setPackageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const { theme } = useTheme();

  // Mock packages data - in a real app this would come from an API/database
  const packages = [
    {
      id: "standard",
      title: "Standard Hajj Package",
      days: 14,
      price: 3499,
      startDate: "May 15, 2025",
      location: "Makkah & Madinah",
      groupSize: "20-30 pilgrims",
      image: "https://images.unsplash.com/photo-1604934128850-88e4f3f29bde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1604934128850-88e4f3f29bde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1563804021050-3e6f4cd9a5fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1566235943848-4da844f52fbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Accommodation in 3-star hotels",
        "Transportation between holy sites",
        "Daily meals included",
        "Guidance from experienced scholars",
        "Visa processing assistance"
      ],
      description: "Our Standard Hajj Package offers a complete and comfortable pilgrimage experience at an affordable price. You'll stay in quality 3-star accommodations located within reasonable distance to the holy sites. Our experienced guides will assist you throughout your spiritual journey, ensuring you can focus on your prayers and rituals. Daily meals are provided to keep you nourished and energized.",
      itinerary: [
        "Days 1-2: Arrival in Jeddah, transfer to Madinah",
        "Days 3-5: Stay in Madinah, visit historical sites",
        "Days 6-8: Transfer to Makkah, perform Umrah",
        "Days 9-12: Hajj rituals in Mina, Arafat, and Muzdalifah",
        "Days 13-14: Final days in Makkah, departure"
      ],
      rating: 4.5
    },
    {
      id: "premium",
      title: "Premium Hajj Package",
      days: 18,
      price: 5299,
      startDate: "May 12, 2025",
      location: "Makkah & Madinah",
      groupSize: "15-20 pilgrims",
      image: "https://images.unsplash.com/photo-1590588885377-d782f696bf28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1590588885377-d782f696bf28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1581888517319-2f76e03aee3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1532248333363-770cab162728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      popular: true,
      features: [
        "Luxury accommodation near Haram",
        "Private transportation",
        "Gourmet meals included",
        "Personalized guidance",
        "Priority access at sites",
        "Additional Ziyarat tours included"
      ],
      description: "Experience Hajj in luxury and comfort with our Premium Package. Enjoy 5-star accommodations located within walking distance of the Haram, offering stunning views and premium amenities. Our private transportation ensures you travel comfortably between sites. Dedicated guides provide personalized attention in smaller groups, allowing for a more intimate spiritual experience. Gourmet meals cater to diverse tastes while maintaining the highest quality standards.",
      itinerary: [
        "Days 1-3: VIP arrival in Jeddah, transfer to Madinah",
        "Days 4-7: Stay in luxury accommodations in Madinah",
        "Days 8-10: Premium transfer to Makkah, perform Umrah",
        "Days 11-15: Hajj rituals with priority access",
        "Days 16-18: Final days in Makkah, VIP departure assistance"
      ],
      rating: 4.9
    },
    {
      id: "family",
      title: "Family Hajj Package",
      days: 16,
      price: 4799,
      startDate: "May 14, 2025",
      location: "Makkah & Madinah",
      groupSize: "Families of 3-6",
      image: "https://images.unsplash.com/photo-1572443490709-e57455b01aa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1572443490709-e57455b01aa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1526139334526-f591a54b477b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1546983341-073c3fbf90e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Family rooms in 4-star hotels",
        "Spacious transportation",
        "Child-friendly meals",
        "Special programs for children",
        "Family guidance sessions",
        "Medical assistance included"
      ],
      description: "Our Family Hajj Package is specially designed for those performing the pilgrimage with children and extended family. Enjoy spacious family rooms in 4-star hotels that accommodate your entire family comfortably. Our transportation services feature extra space for strollers and family necessities. Child-friendly meals ensure that even the youngest pilgrims stay nourished and happy. Special educational programs help children understand the significance of Hajj in an age-appropriate way.",
      itinerary: [
        "Days 1-2: Family-friendly arrival process, transfer to Madinah",
        "Days 3-6: Stay in Madinah with family activities",
        "Days 7-9: Transfer to Makkah, perform family Umrah",
        "Days 10-14: Hajj rituals with family support services",
        "Days 15-16: Final days in Makkah, departure"
      ],
      rating: 4.7
    }
  ];

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchPackageData = () => {
      setLoading(true);
      // Simulate API delay
      setTimeout(() => {
        const foundPackage = packages.find(pkg => pkg.id === packageId);
        if (foundPackage) {
          setPackageData(foundPackage);
          // Update the document title with the package name
          document.title = `${foundPackage.title} | Makkah Travels`;
        }
        setLoading(false);
      }, 500);
    };

    fetchPackageData();
  }, [packageId]);

  const handleBookNow = async () => {
    if (!packageData) return;
    
    setBookingLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          packageId: packageData.id,
          packageTitle: packageData.title,
          price: packageData.price,
        },
      });

      if (error) {
        console.error('Payment error:', error);
        toast({
          title: "Payment Error",
          description: "Failed to initiate payment. Please try again.",
          variant: "destructive"
        });
        return;
      }

      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Booking error:', error);
      toast({
        title: "Booking Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-hajj-light dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-hajj-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-hajj-primary dark:text-white">Loading package details...</p>
        </div>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-hajj-primary dark:text-white">Package Not Found</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 mb-6">The package you're looking for does not exist.</p>
          <Link to="/">
            <Button className="bg-hajj-primary hover:bg-hajj-dark text-white">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to Homepage
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-10">
        <Link to="/" className="inline-flex items-center text-hajj-primary dark:text-white hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Packages
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Package Images */}
          <div className="lg:col-span-2">
            <Carousel className="w-full">
              <CarouselContent>
                {packageData.images.map((image: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${packageData.title} - Image ${index + 1}`} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1604934128850-88e4f3f29bde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
          
          {/* Package Overview */}
          <div>
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-2xl font-bold text-hajj-primary dark:text-white">{packageData.title}</h1>
                  {packageData.popular && (
                    <Badge className="bg-hajj-accent text-white">Popular Choice</Badge>
                  )}
                </div>
                
                <div className="flex items-center mt-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(packageData.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-gray-600 dark:text-gray-400">{packageData.rating.toFixed(1)}</span>
                </div>
                
                <p className="text-3xl font-bold text-hajj-primary dark:text-white mb-6">${packageData.price}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-hajj-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                      <p className="font-medium">{packageData.days} Days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-hajj-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Departure Date</p>
                      <p className="font-medium">{packageData.startDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-hajj-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="font-medium">{packageData.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-hajj-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Group Size</p>
                      <p className="font-medium">{packageData.groupSize}</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handleBookNow}
                  disabled={bookingLoading}
                  className="w-full bg-hajj-primary hover:bg-hajj-dark text-white"
                >
                  {bookingLoading ? "Processing..." : "Book Now"}
                </Button>
                
                <div className="mt-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Need help with booking?</p>
                  <div className="flex items-center mt-2">
                    <Phone className="h-4 w-4 text-hajj-accent mr-2" />
                    <a href="tel:+1234567890" className="text-hajj-primary dark:text-white font-medium">+1 (234) 567-890</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Package Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-hajj-primary dark:text-white mb-4">Package Description</h2>
          <div className="glass-card p-6 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {packageData.description}
            </p>
          </div>
        </div>
        
        {/* Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-hajj-primary dark:text-white mb-4">Package Features</h2>
          <div className="glass-card p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packageData.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-hajj-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Itinerary */}
        <div className="mt-12 mb-16">
          <h2 className="text-2xl font-bold text-hajj-primary dark:text-white mb-4">Itinerary Overview</h2>
          <div className="glass-card p-6 rounded-lg">
            <ol className="space-y-4">
              {packageData.itinerary.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-hajj-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PackageDetails;
