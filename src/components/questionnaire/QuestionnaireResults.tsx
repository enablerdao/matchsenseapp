import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface QuestionnaireResultsProps {
  results: {
    personalityType: string;
    traits: {
      name: string;
      score: number;
      description: string;
    }[];
    compatibilityScores: {
      category: string;
      score: number;
    }[];
  };
}

const QuestionnaireResults: React.FC<QuestionnaireResultsProps> = ({ results }) => {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
        {t('questionnaire.results.title')}
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        {t('questionnaire.results.subtitle')}
      </p>
      
      <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
        <h2 className="text-xl font-bold mb-4">{t('questionnaire.results.personalityType')}</h2>
        <div className="p-4 bg-enabler-50 rounded-lg mb-6">
          <h3 className="text-lg font-bold text-enabler-800">{results.personalityType}</h3>
        </div>
        
        <h2 className="text-xl font-bold mb-4">{t('questionnaire.results.keyTraits')}</h2>
        <div className="space-y-4 mb-6">
          {results.traits.map((trait, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{trait.name}</h3>
                <span className="text-sm bg-enabler-100 text-enabler-800 px-2 py-1 rounded-full">
                  {trait.score}/10
                </span>
              </div>
              <p className="text-sm text-gray-600">{trait.description}</p>
            </div>
          ))}
        </div>
        
        <h2 className="text-xl font-bold mb-4">{t('questionnaire.results.compatibilityScores')}</h2>
        <div className="space-y-3 mb-6">
          {results.compatibilityScores.map((category, index) => (
            <div key={index} className="flex items-center">
              <span className="w-1/3 text-sm">{category.category}</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-enabler-600 h-2.5 rounded-full" 
                  style={{ width: `${category.score}%` }}
                ></div>
              </div>
              <span className="ml-2 text-sm">{category.score}%</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <Button asChild variant="outline">
          <Link to="/services/10">
            {t('questionnaire.results.viewService')}
          </Link>
        </Button>
        <Button asChild>
          <Link to="/questionnaire">
            {t('questionnaire.results.retake')}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default QuestionnaireResults;
