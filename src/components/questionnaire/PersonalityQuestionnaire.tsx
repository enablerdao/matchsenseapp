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
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
        {t('questionnaire.title')}
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        {t('questionnaire.subtitle')}
      </p>
      
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span>{t('questionnaire.progress')}: {completedQuestions}/{totalQuestions}</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>
      
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <QuestionSection 
            title={sections[currentSection].title}
            description={sections[currentSection].description}
            questions={sections[currentSection].questions}
          />
          
          <div className="flex justify-between mt-8">
            <Button 
              type="button" 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentSection === 0}
            >
              {t('questionnaire.previous')}
            </Button>
            
            {currentSection < sections.length - 1 ? (
              <Button type="button" onClick={handleNext}>
                {t('questionnaire.next')}
              </Button>
            ) : (
              <Button type="submit">
                {t('questionnaire.submit')}
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default PersonalityQuestionnaire;
