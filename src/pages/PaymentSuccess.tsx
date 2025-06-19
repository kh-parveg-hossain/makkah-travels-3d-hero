import { useEffect } from 'react';
import { CheckCircle, Package, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';

const PaymentSuccess = () => {
  const { currentLanguage } = useLanguage();
  const t = useTranslation(currentLanguage);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-4">
          <BackButton />
        </div>

        <div className="container mx-auto px-4 py-16">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="flex flex-row items-center justify-center space-y-0 pb-2">
              <CheckCircle className="h-10 w-10 text-green-500 mr-2" />
              <CardTitle className="text-2xl font-semibold tracking-tight">
                {t.packageDetails.bookNow} Successful!
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 py-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  {t.packageDetails.bookNow} confirmation sent to your email.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4">
                <Link to="/" className="w-full">
                  <Button className="w-full">
                    <Home className="mr-2 h-4 w-4" />
                    {t.navbar.home}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
