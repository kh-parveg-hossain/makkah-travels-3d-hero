
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { useLanguage, Language, languageNames } from '@/contexts/LanguageContext';
import { useTranslation } from '@/translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();
  const t = useTranslation(currentLanguage);

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
    { name: t.navbar.home, href: '#home' },
    { name: t.navbar.about, href: '#about' },
    { name: t.navbar.hajjPackages, href: '#packages' },
    { name: t.navbar.umrah, href: '#umrah' },
    { name: t.navbar.testimonials, href: '#testimonials' },
    { name: t.navbar.contact, href: '#contact' },
  ];

  const languages: { name: string; code: Language }[] = [
    { name: languageNames.bn, code: 'bn' },
    { name: languageNames.en, code: 'en' },
    { name: languageNames.hi, code: 'hi' },
    { name: languageNames.ur, code: 'ur' },
    { name: languageNames.ar, code: 'ar' },
  ];

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
  };

  const isRtl = currentLanguage === 'ar' || currentLanguage === 'ur';
  const rtlClass = isRtl ? 'rtl' : '';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'} ${rtlClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <span className={`text-xl md:text-2xl font-bold ${isScrolled ? 'text-hajj-primary' : 'text-white'}`}>
                <span className="block text-sm md:text-base font-arabic">আল মুত্তাকিন</span>
                <span className="block text-hajj-accent">{t.hero.title}</span>
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
                <span>{languageNames[currentLanguage]}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    className={`${currentLanguage === lang.code ? 'bg-hajj-accent/10 text-hajj-accent' : ''}`}
                    onClick={() => handleLanguageChange(lang.code)}
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
                    className={`${currentLanguage === lang.code ? 'bg-hajj-accent/10 text-hajj-accent' : ''}`}
                    onClick={() => handleLanguageChange(lang.code)}
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
