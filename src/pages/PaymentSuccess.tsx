
import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-hajj-light dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-hajj-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-hajj-primary dark:text-white">Processing your booking...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-hajj-primary dark:text-white mb-4">
              Payment Successful!
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Thank you for booking your Hajj package with us. Your spiritual journey awaits!
            </p>
          </div>

          <Card className="glass-card mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-hajj-primary dark:text-white mb-4">
                What's Next?
              </h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <div className="bg-hajj-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Confirmation Email</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      You'll receive a detailed confirmation email with your booking details within 24 hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-hajj-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Document Preparation</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Our team will contact you regarding visa processing and required documents.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-hajj-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Pre-Departure Briefing</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Join our orientation session to prepare for your spiritual journey.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="outline" className="border-hajj-primary text-hajj-primary hover:bg-hajj-primary hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Homepage
              </Button>
            </Link>
            
            <Button className="bg-hajj-primary hover:bg-hajj-dark text-white">
              <Download className="mr-2 h-4 w-4" />
              Download Receipt
            </Button>
          </div>

          {sessionId && (
            <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Session ID: {sessionId}
              </p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
