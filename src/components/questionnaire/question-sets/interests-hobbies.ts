import { QuestionType } from '../types';

export const interestsHobbiesQuestions: QuestionType[] = [
  {
    id: 'ih-1',
    textEn: 'I enjoy outdoor activities and nature.',
    textJa: '私はアウトドア活動や自然を楽しみます。',
    type: 'likert',
    required: true,
    category: 'interests-hobbies',
    weight: 1
  },
  {
    id: 'ih-2',
    textEn: 'I prefer quiet activities like reading or watching movies over social events.',
    textJa: '私は社交イベントよりも読書や映画鑑賞などの静かな活動を好みます。',
    type: 'likert',
    required: true,
    category: 'interests-hobbies',
    weight: 1
  },
  {
    id: 'ih-3',
    textEn: 'I enjoy trying new foods and cuisines.',
    textJa: '私は新しい食べ物や料理を試すことを楽しみます。',
    type: 'likert',
    required: true,
    category: 'interests-hobbies',
    weight: 1
  },
  {
    id: 'ih-4',
    textEn: 'I enjoy learning about different cultures and traveling.',
    textJa: '私は異なる文化について学び、旅行することを楽しみます。',
    type: 'likert',
    required: true,
    category: 'interests-hobbies',
    weight: 1
  },
  {
    id: 'ih-5',
    textEn: 'Which of these activities do you enjoy most in your free time?',
    textJa: '自由時間に最も楽しむ活動は次のうちどれですか？',
    type: 'multiple-choice',
    required: true,
    options: [
      { value: 'sports', labelEn: 'Sports and physical activities', labelJa: 'スポーツや身体活動' },
      { value: 'arts', labelEn: 'Arts and creative pursuits', labelJa: '芸術や創造的な活動' },
      { value: 'tech', labelEn: 'Technology and gaming', labelJa: 'テクノロジーやゲーム' },
      { value: 'social', labelEn: 'Social gatherings and events', labelJa: '社交的な集まりやイベント' },
      { value: 'learning', labelEn: 'Learning and intellectual pursuits', labelJa: '学習や知的活動' }
    ],
    category: 'interests-hobbies',
    weight: 2
  }
];
