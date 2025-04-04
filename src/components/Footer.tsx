
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hajj-dark text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="block text-sm md:text-base font-arabic">আল মুত্তাকিন</span>
              <span className="block text-hajj-accent">International Travels</span>
            </h3>
            <p className="text-white/70 mb-6">
              Your trusted partner for Hajj and Umrah services, dedicated to providing 
              spiritual journeys with comfort, care, and authentic Islamic guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-hajj-accent transition-colors p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-hajj-accent transition-colors p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-hajj-accent transition-colors p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-hajj-accent transition-colors p-2 rounded-full">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-hajj-accent">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#packages" className="text-white/70 hover:text-white transition-colors">Hajj Packages</a>
              </li>
              <li>
                <a href="#umrah" className="text-white/70 hover:text-white transition-colors">Umrah Packages</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-hajj-accent">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex">
                <Phone className="h-5 w-5 text-hajj-accent mr-3 flex-shrink-0" />
                <span className="text-white/70">+880 123 456 789</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-hajj-accent mr-3 flex-shrink-0" />
                <span className="text-white/70">info@almuttakin.com</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-hajj-accent mr-3 flex-shrink-0 mt-1" />
                <span className="text-white/70">
                  123 Islam Road, Gulshan, Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-hajj-accent">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter to receive updates and special offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/10 text-white border-0 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-hajj-accent"
              />
              <button 
                type="submit" 
                className="bg-hajj-accent hover:bg-hajj-accent/90 text-white px-4 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} আল মুত্তাকিন International Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
