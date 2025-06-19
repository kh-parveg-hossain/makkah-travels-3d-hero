import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowLeft, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';

const PackageDetails = () => {
  const { packageId } = useParams();
  const [packageData, setPackageData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const { theme } = useTheme();
  const { currentLanguage } = useLanguage();
  const t = useTranslation(currentLanguage);

  // Bengali packages data with detailed explanations
  const packages = [
    {
      id: "standard",
      title: "স্ট্যান্ডার্ড হজ্জ প্যাকেজ",
      days: 14,
      price: 3499,
      startDate: "১৫ মে, ২০২৫",
      location: "মক্কা ও মদিনা",
      groupSize: "২০-৩০ জন হাজী",
      image: "https://images.unsplash.com/photo-1604934128850-88e4f3f29bde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1604934128850-88e4f3f29bde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1563804021050-3e6f4cd9a5fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1566235943848-4da844f52fbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "৩-তারকা হোটেলে থাকার ব্যবস্থা",
        "পবিত্র স্থানগুলোর মধ্যে পরিবহন",
        "প্রতিদিনের খাবার অন্তর্ভুক্ত",
        "অভিজ্ঞ আলেমদের নির্দেশনা",
        "ভিসা প্রক্রিয়াকরণ সহায়তা"
      ],
      description: "আমাদের স্ট্যান্ডার্ড হজ্জ প্যাকেজটি সাশ্রয়ী মূল্যে একটি সম্পূর্ণ এবং আরামদায়ক তীর্থযাত্রার অভিজ্ঞতা প্রদান করে। আপনি পবিত্র স্থানগুলির যুক্তিসঙ্গত দূরত্বে অবস্থিত মানসম্পন্ন ৩-তারকা আবাসনে থাকবেন। আমাদের অভিজ্ঞ গাইডরা আপনার আধ্যাত্মিক যাত্রা জুড়ে আপনাকে সহায়তা করবেন, নিশ্চিত করে যে আপনি আপনার প্রার্থনা এবং আচার-অনুষ্ঠানে মনোনিবেশ করতে পারেন। আপনাকে পুষ্টিকর এবং শক্তিশালী রাখতে প্রতিদিনের খাবার প্রদান করা হয়।",
      itinerary: [
        "১ম-২য় দিন: জেদ্দায় পৌঁছানো, মদিনায় স্থানান্তর",
        "৩য়-৫ম দিন: মদিনায় অবস্থান, ঐতিহাসিক স্থান পরিদর্শন",
        "৬ষ্ঠ-৮ম দিন: মক্কায় স্থানান্তর, উমরাহ পালন",
        "৯ম-১২তম দিন: মিনা, আরাফাত এবং মুজদালিফায় হজ্জের আচার",
        "১৩তম-১৪তম দিন: মক্কায় শেষ দিন, প্রস্থান"
      ],
      rating: 4.5
    },
    {
      id: "premium",
      title: "প্রিমিয়াম হজ্জ প্যাকেজ",
      days: 18,
      price: 5299,
      startDate: "১২ মে, ২০২৫",
      location: "মক্কা ও মদিনা",
      groupSize: "১৫-২০ জন হাজী",
      image: "https://images.unsplash.com/photo-1590588885377-d782f696bf28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1590588885377-d782f696bf28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1581888517319-2f76e03aee3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1532248333363-770cab162728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      popular: true,
      features: [
        "হারামের কাছে বিলাসবহুল আবাসন",
        "ব্যক্তিগত পরিবহন",
        "সুস্বাদু খাবার অন্তর্ভুক্ত",
        "ব্যক্তিগত নির্দেশনা",
        "স্থানগুলিতে অগ্রাধিকার প্রবেশাধিকার",
        "অতিরিক্ত জিয়ারত ট্যুর অন্তর্ভুক্ত"
      ],
      description: "আমাদের প্রিমিয়াম প্যাকেজের সাথে বিলাসিতা এবং আরামে হজ্জ অনুভব করুন। হারামের হাঁটার দূরত্বের মধ্যে অবস্থিত ৫-তারকা আবাসন উপভোগ করুন, যা অত্যাশ্চর্য দৃশ্য এবং প্রিমিয়াম সুবিধা প্রদান করে। আমাদের ব্যক্তিগত পরিবহন নিশ্চিত করে যে আপনি সাইটগুলির মধ্যে আরামে ভ্রমণ করেন। ছোট গ্রুপে ডেডিকেটেড গাইড ব্যক্তিগত মনোযোগ প্রদান করে, আরও অন্তরঙ্গ আধ্যাত্মিক অভিজ্ঞতার অনুমতি দেয়।",
      itinerary: [
        "১ম-৩য় দিন: জেদ্দায় ভিআইপি আগমন, মদিনায় স্থানান্তর",
        "৪র্থ-৭ম দিন: মদিনায় বিলাসবহুল আবাসনে অবস্থান",
        "৮ম-১০ম দিন: মক্কায় প্রিমিয়াম স্থানান্তর, উমরাহ পালন",
        "১১তম-১৫তম দিন: অগ্রাধিকার প্রবেশাধিকার সহ হজ্জের আচার",
        "১৬তম-১৮তম দিন: মক্কায় শেষ দিন, ভিআইপি প্রস্থান সহায়তা"
      ],
      rating: 4.9
    },
    {
      id: "family",
      title: "পারিবারিক হজ্জ প্যাকেজ",
      days: 16,
      price: 4799,
      startDate: "১৪ মে, ২০২৫",
      location: "মক্কা ও মদিনা",
      groupSize: "৩-৬ জনের পরিবার",
      image: "https://images.unsplash.com/photo-1572443490709-e57455b01aa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1572443490709-e57455b01aa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1526139334526-f591a54b477b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1546983341-073c3fbf90e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "৪-তারকা হোটেলে পারিবারিক রুম",
        "প্রশস্ত পরিবহন",
        "শিশু-বান্ধব খাবার",
        "শিশুদের জন্য বিশেষ প্রোগ্রাম",
        "পারিবারিক নির্দেশনা সেশন",
        "চিকিৎসা সহায়তা অন্তর্ভুক্ত"
      ],
      description: "আমাদের পারিবারিক হজ্জ প্যাকেজটি বিশেষভাবে শিশু এবং বিস্তৃত পরিবারের সাথে তীর্থযাত্রা করার জন্য ডিজাইন করা হয়েছে। ৪-তারকা হোটেলে প্রশস্ত পারিবারিক কক্ষ উপভোগ করুন যা আপনার সম্পূর্ণ পরিবারকে আরামদায়কভাবে থাকার সুবিধা দেয়। আমাদের পরিবহন সেবা স্ট্রলার এবং পারিবারিক প্রয়োজনীয়তার জন্য অতিরিক্ত স্থান বৈশিষ্ট্য। শিশু-বান্ধব খাবার নিশ্চিত করে যে এমনকি সবচেয়ে ছোট তীর্থযাত্রীরাও পুষ্ট এবং খুশি থাকে।",
      itinerary: [
        "১ম-২য় দিন: পরিবার-বান্ধব আগমন প্রক্রিয়া, মদিনায় স্থানান্তর",
        "৩য়-৬ষ্ঠ দিন: পারিবারিক কার্যক্রম সহ মদিনায় অবস্থান",
        "৭ম-৯ম দিন: মক্কায় স্থানান্তর, পারিবারিক উমরাহ পালন",
        "১০ম-১৪তম দিন: পারিবারিক সহায়তা সেবা সহ হজ্জের আচার",
        "১৫তম-১৬তম দিন: মক্কায় শেষ দিন, প্রস্থান"
      ],
      rating: 4.7
    }
  ];

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchPackageData = () => {
      setIsLoading(true);
      // Simulate API delay
      setTimeout(() => {
        const foundPackage = packages.find(pkg => pkg.id === packageId);
        if (foundPackage) {
          setPackageData(foundPackage);
          // Update the document title with the package name
          document.title = `${foundPackage.title} | মক্কা ট্রাভেলস`;
        }
        setIsLoading(false);
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
          title: "পেমেন্ট ত্রুটি",
          description: "পেমেন্ট শুরু করতে ব্যর্থ। অনুগ্রহ করে আবার চেষ্টা করুন।",
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
        title: "বুকিং ত্রুটি",
        description: "কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
        variant: "destructive"
      });
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-4">
          <BackButton />
        </div>

        {isLoading ? (
          <div className="min-h-screen flex items-center justify-center bg-hajj-light dark:bg-gray-900">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-hajj-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="mt-4 text-hajj-primary dark:text-white">{t.packageDetails.loading}</p>
            </div>
          </div>
        ) : !packageData ? (
          <div className="min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 py-20 text-center">
              <h1 className="text-3xl font-bold text-hajj-primary dark:text-white">{t.packageDetails.packageNotFound}</h1>
              <p className="mt-4 text-gray-600 dark:text-gray-400 mb-6">{t.packageDetails.packageNotFoundDesc}</p>
              <Link to="/">
                <Button className="bg-hajj-primary hover:bg-hajj-dark text-white">
                  <ArrowLeft className="mr-2 h-4 w-4" /> {t.packageDetails.returnHome}
                </Button>
              </Link>
            </div>
            <Footer />
          </div>
        ) : (
          <div>
            <Link to="/packages" className="inline-flex items-center text-hajj-primary dark:text-white hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t.packageDetails.backToPackages}
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
                            alt={`${packageData.title} - ছবি ${index + 1}`} 
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
                        <Badge className="bg-hajj-accent text-white">জনপ্রিয় পছন্দ</Badge>
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
                          <p className="text-sm text-gray-600 dark:text-gray-400">{t.packageDetails.duration}</p>
                          <p className="font-medium">{packageData.days} দিন</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-hajj-accent mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{t.packageDetails.departureDate}</p>
                          <p className="font-medium">{packageData.startDate}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-hajj-accent mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{t.packageDetails.location}</p>
                          <p className="font-medium">{packageData.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-hajj-accent mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{t.packageDetails.groupSize}</p>
                          <p className="font-medium">{packageData.groupSize}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleBookNow}
                      disabled={bookingLoading}
                      className="w-full bg-hajj-primary hover:bg-hajj-dark text-white"
                    >
                      {bookingLoading ? t.packageDetails.processing : t.packageDetails.bookNow}
                    </Button>
                    
                    <div className="mt-6">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.packageDetails.needHelp}</p>
                      <div className="flex items-center mt-2">
                        <Phone className="h-4 w-4 text-hajj-accent mr-2" />
                        <a href="tel:+1234567890" className="text-hajj-primary dark:text-white font-medium">+৮৮ ০১৭১১-১২৩৪৫৬</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Package Description */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-hajj-primary dark:text-white mb-4">{t.packageDetails.packageDescription}</h2>
              <div className="glass-card p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {packageData.description}
                </p>
              </div>
            </div>
            
            {/* Features */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-hajj-primary dark:text-white mb-4">{t.packageDetails.packageFeatures}</h2>
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
              <h2 className="text-2xl font-bold text-hajj-primary dark:text-white mb-4">{t.packageDetails.itineraryOverview}</h2>
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
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default PackageDetails;
