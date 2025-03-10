export type QuestionType = {
  id: string;
  textEn: string;
  textJa: string;
  type: 'likert' | 'multiple-choice' | 'checkbox' | 'slider' | 'text' | 'textarea';
  required?: boolean;
  defaultValue?: number | string;
  options?: {
    value: string;
    labelEn: string;
    labelJa: string;
  }[];
  minLabelEn?: string;
  minLabelJa?: string;
  maxLabelEn?: string;
  maxLabelJa?: string;
  placeholderEn?: string;
  placeholderJa?: string;
  category: 'core-values' | 'personality-traits' | 'relationship-style' | 'lifestyle-compatibility' | 'interests-hobbies' | 'physical-preferences' | 'deal-breakers';
  weight?: number;
};
