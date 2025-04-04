
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('English');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Hajj Packages', href: '#packages' },
    { name: 'Umrah', href: '#umrah' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const languages = [
    { name: 'Bengali', code: 'bn' },
    { name: 'English', code: 'en' },
    { name: 'Hindi', code: 'hi' },
    { name: 'Urdu', code: 'ur' },
    { name: 'Arabic', code: 'ar' },
  ];

  const handleLanguageChange = (name: string) => {
    setLanguage(name);
    // In a real application, you would implement language switching logic here
    console.log(`Language changed to ${name}`);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <span className={`text-xl md:text-2xl font-bold ${isScrolled ? 'text-hajj-primary' : 'text-white'}`}>
                <span className="block text-sm md:text-base font-arabic">আল মুত্তাকিন</span>
                <span className="block text-hajj-accent">International Travels</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`transition-colors hover:text-hajj-accent ${isScrolled ? 'text-hajj-primary' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Button and Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center px-3 py-1 rounded-full border ${isScrolled ? 'border-hajj-primary text-hajj-primary' : 'border-white text-white'} hover:bg-white/10`}>
                <Globe className="mr-2 h-4 w-4" />
                <span>{language}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    className={`${language === lang.name ? 'bg-hajj-accent/10 text-hajj-accent' : ''}`}
                    onClick={() => handleLanguageChange(lang.name)}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Button */}
            <Button className="bg-hajj-accent hover:bg-hajj-accent/90 text-white rounded-full">
              <Phone className="mr-2 h-4 w-4" /> +880 123 456 789
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* Mobile Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`mr-3 flex items-center p-1 rounded-full ${isScrolled ? 'text-hajj-primary' : 'text-white'}`}>
                <Globe className="h-5 w-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    className={`${language === lang.name ? 'bg-hajj-accent/10 text-hajj-accent' : ''}`}
                    onClick={() => handleLanguageChange(lang.name)}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${isScrolled ? 'text-hajj-primary' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-4 bg-white mt-2 rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-hajj-primary hover:text-hajj-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-hajj-accent hover:bg-hajj-accent/90 text-white rounded-full">
                <Phone className="mr-2 h-4 w-4" /> +880 123 456 789
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
