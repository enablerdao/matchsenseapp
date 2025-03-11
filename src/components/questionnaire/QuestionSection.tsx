import React from 'react';
import { Question } from './Question';
import { QuestionType } from './types';

interface QuestionSectionProps {
  title: string;
  description: string;
  questions: QuestionType[];
}

export const QuestionSection: React.FC<QuestionSectionProps> = ({ 
  title, 
  description, 
  questions 
}) => {
  console.log('QuestionSection rendered', { title, questionsCount: questions.length });
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-subtle">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-8">
        {questions.map((question, index) => (
          <Question 
            key={question.id} 
            question={question} 
            number={index + 1} 
          />
        ))}
      </div>
    </div>
  );
};
