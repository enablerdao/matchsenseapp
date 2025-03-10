import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Home = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
                MatchSense: {t('home.title')}
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                {t('home.subtitle')}
              </p>
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg">
                <Link to="/questionnaire">
                  {t('home.startAssessment')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t('home.howItWorks')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-3">{t('home.step1Title')}</h3>
                <p className="text-gray-600">{t('home.step1Description')}</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-3">{t('home.step2Title')}</h3>
                <p className="text-gray-600">{t('home.step2Description')}</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-3">{t('home.step3Title')}</h3>
                <p className="text-gray-600">{t('home.step3Description')}</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t('home.whyChooseUs')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('home.feature1Title')}</h3>
                <p className="text-gray-600">{t('home.feature1Description')}</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('home.feature2Title')}</h3>
                <p className="text-gray-600">{t('home.feature2Description')}</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('home.feature3Title')}</h3>
                <p className="text-gray-600">{t('home.feature3Description')}</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('home.feature4Title')}</h3>
                <p className="text-gray-600">{t('home.feature4Description')}</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{t('home.readyToStart')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{t('home.readyToStartDescription')}</p>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg bg-white text-blue-600 hover:bg-blue-50">
              <Link to="/questionnaire">
                {t('home.startAssessment')}
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
