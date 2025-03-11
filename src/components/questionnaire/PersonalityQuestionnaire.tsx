import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useLanguage } from '@/contexts/LanguageContext';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { QuestionSection } from './QuestionSection';
import { coreValuesQuestions } from './question-sets/core-values';
import { personalityTraitsQuestions } from './question-sets/personality-traits';
import { relationshipStyleQuestions } from './question-sets/relationship-style';
import { lifestyleCompatibilityQuestions } from './question-sets/lifestyle-compatibility';
import { interestsHobbiesQuestions } from './question-sets/interests-hobbies';
import { physicalPreferencesQuestions } from './question-sets/physical-preferences';
import { dealBreakersQuestions } from './question-sets/deal-breakers';

type FormValues = {
  [key: string]: any;
};

export const PersonalityQuestionnaire = () => {
  const { t, language } = useLanguage();
  const methods = useForm<FormValues>();
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    {
      title: t('questionnaire.sections.coreValues'),
      description: t('questionnaire.sections.coreValuesDesc'),
      questions: coreValuesQuestions,
    },
    {
      title: t('questionnaire.sections.personalityTraits'),
      description: t('questionnaire.sections.personalityTraitsDesc'),
      questions: personalityTraitsQuestions,
    },
    {
      title: t('questionnaire.sections.relationshipStyle'),
      description: t('questionnaire.sections.relationshipStyleDesc'),
      questions: relationshipStyleQuestions,
    },
    {
      title: t('questionnaire.sections.lifestyleCompatibility'),
      description: t('questionnaire.sections.lifestyleCompatibilityDesc'),
      questions: lifestyleCompatibilityQuestions,
    },
    {
      title: t('questionnaire.sections.interestsHobbies'),
      description: t('questionnaire.sections.interestsHobbiesDesc'),
      questions: interestsHobbiesQuestions,
    },
    {
      title: t('questionnaire.sections.physicalPreferences'),
      description: t('questionnaire.sections.physicalPreferencesDesc'),
      questions: physicalPreferencesQuestions,
    },
    {
      title: t('questionnaire.sections.dealBreakers'),
      description: t('questionnaire.sections.dealBreakersDesc'),
      questions: dealBreakersQuestions,
    },
  ];
  
  const totalQuestions = sections.reduce((acc, section) => acc + section.questions.length, 0);
  const completedQuestions = currentSection > 0 
    ? sections.slice(0, currentSection).reduce((acc, section) => acc + section.questions.length, 0) 
    : 0;
  const progressPercentage = (completedQuestions / totalQuestions) * 100;
  
  const handleNext = async () => {
    const result = await methods.trigger(
      sections[currentSection].questions.map(q => q.id)
    );
    
    if (result && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    // Here we would process the data and calculate matches
  };
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <h1 className="heading-1 mb-2 text-center">
        {t('questionnaire.title')}
      </h1>
      <p className="subtitle mb-8 text-center max-w-2xl mx-auto">
        {t('questionnaire.subtitle')}
      </p>
      
      <div className="mb-10">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-professional-text-secondary">{t('questionnaire.progress')}: {completedQuestions}/{totalQuestions}</span>
          <span className="font-medium text-professional-primary">{Math.round(progressPercentage)}%</span>
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
      
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="card animate-slide-up">
            <QuestionSection 
              title={sections[currentSection].title}
              description={sections[currentSection].description}
              questions={sections[currentSection].questions}
            />
            
            <div className="flex justify-between mt-10">
              <button 
                type="button" 
                className="btn-secondary"
                onClick={handlePrevious}
                disabled={currentSection === 0}
              >
                {t('questionnaire.previous')}
              </button>
              
              {currentSection < sections.length - 1 ? (
                <button type="button" className="btn-primary" onClick={handleNext}>
                  {t('questionnaire.next')}
                </button>
              ) : (
                <button type="submit" className="btn-primary">
                  {t('questionnaire.submit')}
                </button>
              )}
            </div>
          </div>
          
          {/* Section navigation */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {sections.map((section, index) => (
              <button
                key={index}
                type="button"
                onClick={() => index <= currentSection && setCurrentSection(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSection 
                    ? 'bg-professional-primary scale-125' 
                    : index < currentSection 
                      ? 'bg-professional-primary-light' 
                      : 'bg-professional-neutral-light'
                } ${index > currentSection ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={index > currentSection}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default PersonalityQuestionnaire;
