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
  return (
    <div>
      <div className="mb-6">
        <div className="inline-block px-3 py-1 bg-professional-primary-light/10 rounded-full text-sm font-medium text-professional-primary mb-2">
          {title}
        </div>
        <p className="text-professional-text-secondary">{description}</p>
      </div>
      
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
