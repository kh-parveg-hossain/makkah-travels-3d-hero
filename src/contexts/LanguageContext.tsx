
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'bn' | 'hi' | 'ur' | 'ar';

// Language names for display
export const languageNames: Record<Language, string> = {
  'en': 'English',
  'bn': 'Bengali',
  'hi': 'Hindi',
  'ur': 'Urdu',
  'ar': 'Arabic'
};

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Get saved language from localStorage or default to English
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'en';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
    // You could also update the document's lang attribute for accessibility
    document.documentElement.lang = currentLanguage;
    // For RTL languages (Arabic and Urdu)
    document.documentElement.dir = ['ar', 'ur'].includes(currentLanguage) ? 'rtl' : 'ltr';
  }, [currentLanguage]);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
