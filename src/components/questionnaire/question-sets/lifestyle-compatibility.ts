import { QuestionType } from '../types';

export const lifestyleCompatibilityQuestions: QuestionType[] = [
  {
    id: 'lc-1',
    textEn: 'I prefer to keep my living space very neat and organized.',
    textJa: '私は生活空間を非常に整頓された状態に保つことを好みます。',
    type: 'likert',
    required: true,
    category: 'lifestyle-compatibility',
    weight: 2
  },
  {
    id: 'lc-2',
    textEn: 'I enjoy going out and socializing multiple times per week.',
    textJa: '私は週に何度も外出して社交することを楽しみます。',
    type: 'likert',
    required: true,
    category: 'lifestyle-compatibility',
    weight: 2
  },
  {
    id: 'lc-3',
    textEn: 'I prefer to save money rather than spend it on immediate enjoyment.',
    textJa: '私は即座の楽しみにお金を使うよりも、貯金することを好みます。',
    type: 'likert',
    required: true,
    category: 'lifestyle-compatibility',
    weight: 2
  },
  {
    id: 'lc-4',
    textEn: 'I am an early riser rather than a night owl.',
    textJa: '私は夜型というよりは早起きです。',
    type: 'likert',
    required: true,
    category: 'lifestyle-compatibility',
    weight: 1
  },
  {
    id: 'lc-5',
    textEn: 'What is your ideal living environment?',
    textJa: 'あなたの理想的な生活環境は何ですか？',
    type: 'multiple-choice',
    required: true,
    options: [
      { value: 'urban', labelEn: 'Urban city center', labelJa: '都市の中心部' },
      { value: 'suburban', labelEn: 'Suburban neighborhood', labelJa: '郊外の住宅地' },
      { value: 'rural', labelEn: 'Rural countryside', labelJa: '田舎の田園地帯' },
      { value: 'coastal', labelEn: 'Coastal/beach area', labelJa: '海岸/ビーチエリア' },
      { value: 'mountain', labelEn: 'Mountain/forest region', labelJa: '山/森林地域' }
    ],
    category: 'lifestyle-compatibility',
    weight: 2
  }
];
