import { QuestionType } from '../types';

export const dealBreakersQuestions: QuestionType[] = [
  {
    id: 'db-1',
    textEn: 'I could not be with someone who smokes regularly.',
    textJa: '私は定期的にタバコを吸う人とは一緒にいられません。',
    type: 'likert',
    required: true,
    category: 'deal-breakers',
    weight: 3
  },
  {
    id: 'db-2',
    textEn: 'Different religious beliefs would be a major obstacle in a relationship for me.',
    textJa: '異なる宗教的信念は私にとって人間関係における大きな障害となります。',
    type: 'likert',
    required: true,
    category: 'deal-breakers',
    weight: 3
  },
  {
    id: 'db-3',
    textEn: 'I could not be with someone who doesn\'t want children.',
    textJa: '私は子供を望まない人とは一緒にいられません。',
    type: 'likert',
    required: true,
    category: 'deal-breakers',
    weight: 3
  },
  {
    id: 'db-4',
    textEn: 'I could not be with someone who has very different political views from mine.',
    textJa: '私は自分とは非常に異なる政治的見解を持つ人とは一緒にいられません。',
    type: 'likert',
    required: true,
    category: 'deal-breakers',
    weight: 3
  },
  {
    id: 'db-5',
    textEn: 'Which of these would be an absolute deal-breaker for you in a relationship?',
    textJa: '人間関係において、次のうちどれが絶対的な障害となりますか？',
    type: 'checkbox',
    required: true,
    options: [
      { value: 'dishonesty', labelEn: 'Dishonesty or lack of trust', labelJa: '不誠実さや信頼の欠如' },
      { value: 'financial', labelEn: 'Financial irresponsibility', labelJa: '金銭的無責任' },
      { value: 'communication', labelEn: 'Poor communication', labelJa: '不十分なコミュニケーション' },
      { value: 'respect', labelEn: 'Lack of respect', labelJa: '尊重の欠如' },
      { value: 'goals', labelEn: 'Different life goals', labelJa: '異なる人生の目標' }
    ],
    category: 'deal-breakers',
    weight: 4
  }
];
