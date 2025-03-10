import { QuestionType } from '../types';

export const physicalPreferencesQuestions: QuestionType[] = [
  {
    id: 'pp-1',
    textEn: 'Physical appearance is very important to me in relationships.',
    textJa: '人間関係において外見は私にとって非常に重要です。',
    type: 'likert',
    required: true,
    category: 'physical-preferences',
    weight: 2
  },
  {
    id: 'pp-2',
    textEn: 'I prefer partners who maintain an active lifestyle.',
    textJa: '私はアクティブなライフスタイルを維持するパートナーを好みます。',
    type: 'likert',
    required: true,
    category: 'physical-preferences',
    weight: 1
  },
  {
    id: 'pp-3',
    textEn: 'I am comfortable with public displays of affection.',
    textJa: '私は公共の場での愛情表現に抵抗がありません。',
    type: 'likert',
    required: true,
    category: 'physical-preferences',
    weight: 1
  },
  {
    id: 'pp-4',
    textEn: 'Physical touch is an important way for me to express affection.',
    textJa: '身体的な接触は私が愛情を表現する重要な方法です。',
    type: 'likert',
    required: true,
    category: 'physical-preferences',
    weight: 2
  },
  {
    id: 'pp-5',
    textEn: 'How important is physical chemistry in your relationships?',
    textJa: 'あなたの人間関係において、身体的な相性はどれくらい重要ですか？',
    type: 'slider',
    required: true,
    minLabelEn: 'Not important',
    minLabelJa: '重要ではない',
    maxLabelEn: 'Very important',
    maxLabelJa: '非常に重要',
    defaultValue: 50,
    category: 'physical-preferences',
    weight: 3
  }
];
