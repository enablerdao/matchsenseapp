import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import MobileNav from './MobileNav';
import MobileMenuButton from './MobileMenuButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src="/logo.svg" alt="MatchSense" className="h-10" />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  {t('homeLink')}
                </Link>
                <Link to="/questionnaire" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  {t('questionnaire.pageTitle')}
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="text-gray-700 hover:text-nike-blue px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                {language === 'en' ? (
                  <>
                    <span className="mr-1">🇯🇵</span>
                    <span>日本語</span>
                  </>
                ) : (
                  <>
                    <span className="mr-1">🇺🇸</span>
                    <span>English</span>
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
