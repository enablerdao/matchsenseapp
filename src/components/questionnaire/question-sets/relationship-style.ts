import { QuestionType } from '../types';

export const relationshipStyleQuestions: QuestionType[] = [
  {
    id: 'rs-1',
    textEn: 'I prefer to resolve conflicts directly rather than avoid them.',
    textJa: '私は対立を避けるよりも直接的に解決することを好みます。',
    type: 'likert',
    required: true,
    category: 'relationship-style',
    weight: 3
  },
  {
    id: 'rs-2',
    textEn: 'I need regular alone time, even when in close relationships.',
    textJa: '親密な関係にあっても、定期的に一人の時間が必要です。',
    type: 'likert',
    required: true,
    category: 'relationship-style',
    weight: 2
  },
  {
    id: 'rs-3',
    textEn: 'I find it easy to express my feelings to others.',
    textJa: '私は自分の気持ちを他人に表現することが簡単だと感じます。',
    type: 'likert',
    required: true,
    category: 'relationship-style',
    weight: 3
  },
  {
    id: 'rs-4',
    textEn: 'I prefer to make decisions together with others rather than independently.',
    textJa: '私は独立して決断するよりも、他の人と一緒に決断することを好みます。',
    type: 'likert',
    required: true,
    category: 'relationship-style',
    weight: 2
  },
  {
    id: 'rs-5',
    textEn: 'How do you typically respond when someone close to you is upset?',
    textJa: '親しい人が動揺しているとき、あなたは通常どのように対応しますか？',
    type: 'multiple-choice',
    required: true,
    options: [
      { value: 'listen', labelEn: 'Listen quietly without offering solutions', labelJa: '解決策を提供せずに静かに聞く' },
      { value: 'solve', labelEn: 'Try to solve their problem', labelJa: '問題を解決しようとする' },
      { value: 'distract', labelEn: 'Try to distract them or cheer them up', labelJa: '気を紛らわせたり、元気づけようとする' },
      { value: 'empathize', labelEn: 'Share similar experiences to show empathy', labelJa: '共感を示すために似た経験を共有する' },
      { value: 'space', labelEn: 'Give them space to process their emotions', labelJa: '感情を処理する空間を与える' }
    ],
    category: 'relationship-style',
    weight: 3
  }
];
