import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-professional-text-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">{t('footer.about')}</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">{t('footer.team')}</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">{t('footer.careers')}</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">{t('footer.press')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li><Link to="/questionnaire" className="text-gray-300 hover:text-white transition-colors duration-200">PersonaMatch</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">RelationshipAI</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">TeamSync</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">CareerMatch</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">{t('footer.blog')}</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">{t('footer.faq')}</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">{t('footer.support')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">{t('footer.terms')}</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">{t('footer.privacy')}</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">{t('footer.cookies')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/logo.svg" alt="MatchSense" className="h-10" />
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} MatchSense. {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
