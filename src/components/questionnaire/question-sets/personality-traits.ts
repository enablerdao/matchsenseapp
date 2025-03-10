import { QuestionType } from '../types';

export const personalityTraitsQuestions: QuestionType[] = [
  {
    id: 'pt-1',
    textEn: 'I enjoy being the center of attention at social gatherings.',
    textJa: '私は社交の場で注目の的になることを楽しみます。',
    type: 'likert',
    required: true,
    category: 'personality-traits',
    weight: 2
  },
  {
    id: 'pt-2',
    textEn: 'I prefer to think through problems carefully before acting.',
    textJa: '私は行動する前に問題を慎重に考えることを好みます。',
    type: 'likert',
    required: true,
    category: 'personality-traits',
    weight: 2
  },
  {
    id: 'pt-3',
    textEn: 'I often worry about things that might go wrong.',
    textJa: '私はよく物事が間違った方向に進むことを心配します。',
    type: 'likert',
    required: true,
    category: 'personality-traits',
    weight: 2
  },
  {
    id: 'pt-4',
    textEn: 'I am generally trusting of other people\'s intentions.',
    textJa: '私は一般的に他人の意図を信頼しています。',
    type: 'likert',
    required: true,
    category: 'personality-traits',
    weight: 2
  },
  {
    id: 'pt-5',
    textEn: 'I enjoy exploring new ideas and concepts.',
    textJa: '私は新しいアイデアや概念を探求することを楽しみます。',
    type: 'likert',
    required: true,
    category: 'personality-traits',
    weight: 2
  }
];
