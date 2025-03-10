
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-enabler-600 transition-colors"
      aria-label={`Switch to ${language === 'en' ? 'Japanese' : 'English'}`}
    >
      <Globe size={16} className="text-enabler-500" />
      <span>{language === 'en' ? '日本語' : 'English'}</span>
    </motion.button>
  );
};

export default LanguageSwitcher;
