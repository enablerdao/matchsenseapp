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
          className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => setIsOpen(false)}
        >
          {t('home')}
        </Link>
        <Link
          to="/questionnaire"
          className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => setIsOpen(false)}
        >
          {t('questionnaire.pageTitle')}
        </Link>
        <button
          onClick={toggleLanguage}
          className="text-gray-700 hover:text-blue-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
        >
          {language === 'en' ? '日本語' : 'English'}
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
