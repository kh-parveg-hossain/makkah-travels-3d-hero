
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { useInView } from '@/hooks/use-intersection-observer';

const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 hero-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-hajj-accent font-medium">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mt-4">
            Have questions about our packages or need customized services? 
            We're here to help you plan your perfect spiritual journey.
          </p>
        </div>

        <div 
          ref={ref} 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Contact Information */}
          <div className={`transition-all duration-700 ${inView ? 'translate-x-0' : '-translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-hajj-primary mb-6">Our Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Our dedicated customer service team is available to assist you with any inquiries. 
              Feel free to reach out to us through any of the following channels.
            </p>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-hajj-primary text-white flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-hajj-primary">Phone</h4>
                  <p className="text-gray-600 mt-1">+880 123 456 789</p>
                  <p className="text-gray-600">+880 987 654 321</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-hajj-primary text-white flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-hajj-primary">Email</h4>
                  <p className="text-gray-600 mt-1">info@almuttakin.com</p>
                  <p className="text-gray-600">support@almuttakin.com</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-hajj-primary text-white flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-hajj-primary">Office Address</h4>
                  <p className="text-gray-600 mt-1">
                    123 Islam Road, Gulshan
                  </p>
                  <p className="text-gray-600">Dhaka, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-hajj-primary text-white flex items-center justify-center">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-hajj-primary">Working Hours</h4>
                  <p className="text-gray-600 mt-1">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Friday: 9:00 AM - 12:00 PM</p>
                  <p className="text-gray-600">Saturday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-300 ${inView ? 'translate-x-0' : 'translate-x-10'}`}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-hajj-primary mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your Name" 
                      className="border-gray-300 focus:border-hajj-primary focus:ring focus:ring-hajj-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your Email" 
                      className="border-gray-300 focus:border-hajj-primary focus:ring focus:ring-hajj-primary/20"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="Your Phone Number" 
                    className="border-gray-300 focus:border-hajj-primary focus:ring focus:ring-hajj-primary/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Message Subject" 
                    className="border-gray-300 focus:border-hajj-primary focus:ring focus:ring-hajj-primary/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your Message" 
                    rows={4}
                    className="border-gray-300 focus:border-hajj-primary focus:ring focus:ring-hajj-primary/20"
                  />
                </div>
                
                <Button className="w-full bg-hajj-primary hover:bg-hajj-dark text-white">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
