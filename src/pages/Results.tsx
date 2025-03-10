import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import QuestionnaireResults from '@/components/questionnaire/QuestionnaireResults';

// Mock results data - in a real app, this would come from an API or state
const mockResults = {
  personalityType: "Analytical Connector",
  traits: [
    {
      name: "Openness",
      score: 8,
      description: "You are intellectually curious and appreciate art, emotion, adventure, and unusual ideas."
    },
    {
      name: "Conscientiousness",
      score: 7,
      description: "You tend to be organized and dependable, showing self-discipline and acting dutifully."
    },
    {
      name: "Extraversion",
      score: 6,
      description: "You have moderate energy and enjoy social situations while also valuing quiet time."
    },
    {
      name: "Agreeableness",
      score: 8,
      description: "You value getting along with others and are generally considerate, friendly, and helpful."
    },
    {
      name: "Neuroticism",
      score: 4,
      description: "You are relatively emotionally stable and less easily upset, handling stress well."
    }
  ],
  compatibilityScores: [
    {
      category: "Core Values",
      score: 85
    },
    {
      category: "Communication Style",
      score: 78
    },
    {
      category: "Lifestyle Preferences",
      score: 92
    },
    {
      category: "Relationship Approach",
      score: 81
    },
    {
      category: "Conflict Resolution",
      score: 73
    }
  ]
};

const Results = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <QuestionnaireResults results={mockResults} />
      </main>
      <Footer />
    </div>
  );
};

export default Results;
