import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface QuestionnaireResultsProps {
  results: {
    personalityType: string;
    personalityTypeEn?: string;
    personalityDescription?: string;
    personalityDescriptionEn?: string;
    matchPercentage?: number;
    traits: {
      name: string;
      nameEn?: string;
      score: number;
      description: string;
      descriptionEn?: string;
      color?: string;
    }[];
    compatibilityScores: {
      category: string;
      categoryEn?: string;
      score: number;
    }[];
    idealMatches?: {
      type: string;
      typeEn?: string;
      compatibility: number;
      description: string;
      descriptionEn?: string;
    }[];
    strengthsAndChallenges?: {
      strengths: string[];
      strengthsEn?: string[];
      challenges: string[];
      challengesEn?: string[];
    };
  };
}

const QuestionnaireResults: React.FC<QuestionnaireResultsProps> = ({ results }) => {
  const { t } = useLanguage();
  
  const { language } = useLanguage();
  
  // Get localized content
  const getLocalizedContent = (jaContent: string, enContent?: string) => {
    if (language === 'ja') return jaContent;
    return enContent || jaContent;
  };
  
  const personalityType = getLocalizedContent(results.personalityType, results.personalityTypeEn);
  const personalityDescription = results.personalityDescription || results.personalityDescriptionEn || '';
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <h1 className="heading-1 mb-2 text-center">
        {t('questionnaire.results.title')}
      </h1>
      <p className="subtitle mb-8 text-center max-w-2xl mx-auto">
        {t('questionnaire.results.subtitle')}
      </p>
      
      {/* Personality Type Card */}
      <div className="card mb-8 animate-slide-up">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          {/* Match percentage circle */}
          {results.matchPercentage && (
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="#E2E8F0" 
                    strokeWidth="8"
                  />
                  <circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="#2563EB" 
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 45 * results.matchPercentage / 100} ${2 * Math.PI * 45 * (1 - results.matchPercentage / 100)}`}
                    strokeDashoffset={2 * Math.PI * 45 * 0.25}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-professional-primary">{results.matchPercentage}%</span>
                  <span className="text-xs text-professional-text-secondary">{t('questionnaire.results.match')}</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Personality type info */}
          <div className="flex-grow">
            <div className="badge-primary mb-2">{t('questionnaire.results.personalityType')}</div>
            <h2 className="heading-2 mb-2">{personalityType}</h2>
            <p className="body-large text-professional-text-secondary">
              {getLocalizedContent(
                results.personalityDescription || '', 
                results.personalityDescriptionEn
              )}
            </p>
          </div>
        </div>
        
        {/* Traits */}
        <h3 className="heading-3 mb-4">{t('questionnaire.results.keyTraits')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {results.traits.map((trait, index) => {
            const traitName = getLocalizedContent(trait.name, trait.nameEn);
            const traitDescription = getLocalizedContent(trait.description, trait.descriptionEn);
            const traitColor = trait.color || '#2563EB';
            
            return (
              <div key={index} className="card-bordered">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-professional-text-primary">{traitName}</h4>
                  <span 
                    className="text-sm px-2 py-1 rounded-full font-medium"
                    style={{ backgroundColor: `${traitColor}20`, color: traitColor }}
                  >
                    {trait.score}/10
                  </span>
                </div>
                <div className="w-full bg-professional-neutral-lighter rounded-full h-1.5 mb-3">
                  <div 
                    className="h-1.5 rounded-full" 
                    style={{ width: `${trait.score * 10}%`, backgroundColor: traitColor }}
                  ></div>
                </div>
                <p className="text-sm text-professional-text-secondary">{traitDescription}</p>
              </div>
            );
          })}
        </div>
        
        {/* Compatibility Scores */}
        <h3 className="heading-3 mb-4">{t('questionnaire.results.compatibilityScores')}</h3>
        <div className="space-y-4 mb-8">
          {results.compatibilityScores.map((category, index) => {
            const categoryName = getLocalizedContent(category.category, category.categoryEn);
            
            return (
              <div key={index} className="flex items-center">
                <span className="w-1/3 text-professional-text-primary font-medium">{categoryName}</span>
                <div className="w-2/3 bg-professional-neutral-light rounded-full h-2.5 mr-3">
                  <div 
                    className="bg-professional-primary h-2.5 rounded-full" 
                    style={{ width: `${category.score}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-professional-primary">{category.score}%</span>
              </div>
            );
          })}
        </div>
        
        {/* Ideal Matches */}
        {results.idealMatches && (
          <>
            <h3 className="heading-3 mb-4">{t('questionnaire.results.idealMatches')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {results.idealMatches.map((match, index) => {
                const matchType = getLocalizedContent(match.type, match.typeEn);
                const matchDescription = getLocalizedContent(match.description, match.descriptionEn);
                
                return (
                  <div key={index} className="card-bordered">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-professional-text-primary">{matchType}</h4>
                      <span className="text-sm bg-professional-primary-light/10 text-professional-primary px-2 py-1 rounded-full font-medium">
                        {match.compatibility}% {t('questionnaire.results.compatible')}
                      </span>
                    </div>
                    <p className="text-sm text-professional-text-secondary">{matchDescription}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
        
        {/* Strengths and Challenges */}
        {results.strengthsAndChallenges && (
          <>
            <h3 className="heading-3 mb-4">{t('questionnaire.results.strengthsAndChallenges')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-professional-success mb-3">{t('questionnaire.results.strengths')}</h4>
                <ul className="space-y-2">
                  {(language === 'ja' ? results.strengthsAndChallenges.strengths : results.strengthsAndChallenges.strengthsEn || results.strengthsAndChallenges.strengths).map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-professional-success-light/20 text-professional-success flex-shrink-0 flex items-center justify-center mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-professional-text-primary">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-professional-warning mb-3">{t('questionnaire.results.challenges')}</h4>
                <ul className="space-y-2">
                  {(language === 'ja' ? results.strengthsAndChallenges.challenges : results.strengthsAndChallenges.challengesEn || results.strengthsAndChallenges.challenges).map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-professional-warning-light/20 text-professional-warning flex-shrink-0 flex items-center justify-center mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-professional-text-primary">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Action buttons */}
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <Link to="/services/10" className="btn-outline">
          {t('questionnaire.results.viewService')}
        </Link>
        <Link to="/questionnaire" className="btn-primary">
          {t('questionnaire.results.retake')}
        </Link>
      </div>
    </div>
  );
};

export default QuestionnaireResults;
