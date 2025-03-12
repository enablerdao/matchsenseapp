import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <div
      className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner">
        <Link
          to="/"
          className="text-professional-text-primary hover:text-professional-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          onClick={() => setIsOpen(false)}
        >
          {t('home')}
        </Link>
        <Link
          to="/questionnaire"
          className="text-professional-text-primary hover:text-professional-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          onClick={() => setIsOpen(false)}
        >
          {t('questionnaire.pageTitle')}
        </Link>
        <button
          onClick={toggleLanguage}
          className="text-professional-text-primary hover:text-professional-primary block w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center"
        >
          {language === 'en' ? (
            <>
              <span className="mr-2">🇯🇵</span>
              <span>日本語</span>
            </>
          ) : (
            <>
              <span className="mr-2">🇺🇸</span>
              <span>English</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
