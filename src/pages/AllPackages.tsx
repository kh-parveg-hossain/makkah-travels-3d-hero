import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/translations';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, Users, MapPin, Check, ChevronRight, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const AllPackages = () => {
  const [bookingLoading, setBookingLoading] = useState<string | null>(null);

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
      features: [
        "৩-তারকা হোটেলে থাকার ব্যবস্থা",
        "পবিত্র স্থানগুলোর মধ্যে পরিবহন",
        "প্রতিদিনের খাবার অন্তর্ভুক্ত",
        "অভিজ্ঞ আলেমদের নির্দেশনা",
        "ভিসা প্রক্রিয়াকরণ সহায়তা"
      ],
      description: "আমাদের স্ট্যান্ডার্ড হজ্জ প্যাকেজটি সাশ্রয়ী মূল্যে একটি সম্পূর্ণ এবং আরামদায়ক তীর্থযাত্রার অভিজ্ঞতা প্রদান করে।",
      rating: 4.5,
      popular: false
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
      features: [
        "হারামের কাছে বিলাসবহুল আবাসন",
        "ব্যক্তিগত পরিবহন",
        "সুস্বাদু খাবার অন্তর্ভুক্ত",
        "ব্যক্তিগত নির্দেশনা",
        "স্থানগুলিতে অগ্রাধিকার প্রবেশাধিকার",
        "অতিরিক্ত জিয়ারত ট্যুর অন্তর্ভুক্ত"
      ],
      description: "আমাদের প্রিমিয়াম প্যাকেজের সাথে বিলাসিতা এবং আরামে হজ্জ অনুভব করুন।",
      rating: 4.9,
      popular: true
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
      features: [
        "৪-তারকা হোটেলে পারিবারিক রুম",
        "প্রশস্ত পরিবহন",
        "শিশু-বান্ধব খাবার",
        "শিশুদের জন্য বিশেষ প্রোগ্রাম",
        "পারিবারিক নির্দেশনা সেশন",
        "চিকিৎসা সহায়তা অন্তর্ভুক্ত"
      ],
      description: "আমাদের পারিবারিক হজ্জ প্যাকেজটি বিশেষভাবে পরিবারের সাথে তীর্থযাত্রা করার জন্য ডিজাইন করা হয়েছে।",
      rating: 4.7,
      popular: false
    },
    {
      id: "economy",
      title: "ইকোনমি হজ্জ প্যাকেজ",
      days: 12,
      price: 2999,
      startDate: "১৮ মে, ২০২৫",
      location: "মক্কা ও মদিনা",
      groupSize: "৩০-৪০ জন হাজী",
      image: "https://images.unsplash.com/photo-1563804021050-3e6f4cd9a5fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "বাজেট-বান্ধব আবাসন",
        "শেয়ার্ড পরিবহন",
        "মৌলিক খাবার অন্তর্ভুক্ত",
        "গ্রুপ নির্দেশনা",
        "ভিসা সহায়তা"
      ],
      description: "আমাদের ইকোনমি প্যাকেজ সাশ্রয়ী মূল্যে হজ্জ পালনের সুযোগ প্রদান করে।",
      rating: 4.2,
      popular: false
    },
    {
      id: "deluxe",
      title: "ডিলাক্স হজ্জ প্যাকেজ",
      days: 20,
      price: 6999,
      startDate: "১০ মে, ২০২৫",
      location: "মক্কা ও মদিনা",
      groupSize: "১০-১৫ জন হাজী",
      image: "https://images.unsplash.com/photo-1566235943848-4da844f52fbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "৫-তারকা হোটেলে বিলাসবহুল আবাসন",
        "ভিআইপি পরিবহন",
        "গুরমেট খাবার",
        "ব্যক্তিগত গাইড",
        "এয়ারপোর্ট ভিআইপি সেবা",
        "বিস্তৃত জিয়ারত ট্যুর"
      ],
      description: "আমাদের ডিলাক্স প্যাকেজের সাথে সর্বোচ্চ বিলাসিতায় হজ্জ অনুভব করুন।",
      rating: 5.0,
      popular: false
    },
    {
      id: "youth",
      title: "যুব হজ্জ প্যাকেজ",
      days: 15,
      price: 3299,
      startDate: "১৬ মে, ২০২৫",
      location: "মক্কা ও মদিনা",
      groupSize: "২০-২৫ জন যুবক",
      image: "https://images.unsplash.com/photo-1526139334526-f591a54b477b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "যুব-বান্ধব আবাসন",
        "গ্রুপ পরিবহন",
        "স্বাস্থ্যকর খাবার",
        "যুব কার্যক্রম",
        "শিক্ষামূলক সেশন",
        "খেলাধুলার ব্যবস্থা"
      ],
      description: "তরুণদের জন্য বিশেষভাবে ডিজাইন করা হজ্জ প্যাকেজ।",
      rating: 4.6,
      popular: false
    }
  ];

  const handleQuickBook = async (packageData: any) => {
    setBookingLoading(packageData.id);
    
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
      setBookingLoading(null);
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

        {/* Header */}
        <div className="bg-gradient-to-r from-hajj-primary to-hajj-dark text-white py-16">
          <div className="container mx-auto px-4 py-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-hajj-primary dark:text-white mb-4">
                সমস্ত হজ্জ প্যাকেজ
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                আপনার প্রয়োজন এবং বাজেট অনুযায়ী সেরা হজ্জ প্যাকেজ বেছে নিন। আমাদের সব প্যাকেজই পেশাদার গাইড এবং সম্পূর্ণ সহায়তা সহ আসে।
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl group rounded-lg bg-white dark:bg-gray-800 shadow-md">
                <div className="relative">
                  <OptimizedImage
                    src={pkg.image}
                    alt={`${pkg.title} - প্রিমিয়াম হজ্জ প্যাকেজ`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    width={400}
                    height={256}
                  />
                  {pkg.popular && (
                    <Badge className="absolute top-4 right-4 bg-hajj-accent text-white">
                      জনপ্রিয় পছন্দ
                    </Badge>
                  )}
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 py-1 px-3 rounded-full flex items-center">
                    <Clock className="h-4 w-4 text-hajj-primary dark:text-hajj-accent mr-1" />
                    <span className="text-sm">{pkg.days} দিন</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-hajj-primary dark:text-white mb-2">{pkg.title}</h3>
                  
                  <div className="flex items-center mt-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(pkg.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{pkg.rating.toFixed(1)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center my-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-hajj-accent mr-2" />
                      <time className="text-sm text-gray-600 dark:text-gray-400">{pkg.startDate}</time>
                    </div>
                    <div className="text-hajj-accent font-bold text-xl">
                      ${pkg.price}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-hajj-accent mr-2" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{pkg.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-hajj-accent mr-2" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{pkg.groupSize}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    {pkg.description}
                  </p>
                  
                  <div className="flex gap-2">
                    <Link to={`/package/${pkg.id}`} className="flex-1">
                      <Button variant="outline" className="w-full border-hajj-primary text-hajj-primary hover:bg-hajj-primary hover:text-white">
                        বিস্তারিত দেখুন <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                    
                    <Button 
                      onClick={() => handleQuickBook(pkg)}
                      disabled={bookingLoading === pkg.id}
                      className="flex-1 bg-hajj-primary hover:bg-hajj-dark text-white"
                    >
                      {bookingLoading === pkg.id ? "..." : "এখনই বুক করুন"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AllPackages;
