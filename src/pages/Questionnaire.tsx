import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import PersonalityQuestionnaire from '@/components/questionnaire/PersonalityQuestionnaire';
import { useLanguage } from '@/contexts/LanguageContext';

const Questionnaire = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={t('questionnaire.pageTitle')} 
        description={t('questionnaire.pageDescription')}
        path="/questionnaire"
      />
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <PersonalityQuestionnaire />
      </main>
      <Footer />
    </div>
  );
};

export default Questionnaire;
