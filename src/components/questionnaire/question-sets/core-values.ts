import { QuestionType } from '../types';

export const coreValuesQuestions: QuestionType[] = [
  {
    id: 'cv-1',
    textEn: 'I believe that honesty is more important than politeness.',
    textJa: '私は礼儀よりも正直さの方が重要だと考えています。',
    type: 'likert',
    required: true,
    category: 'core-values',
    weight: 3
  },
  {
    id: 'cv-2',
    textEn: 'I prefer to plan things carefully rather than be spontaneous.',
    textJa: '私は自発的に行動するよりも、物事を慎重に計画することを好みます。',
    type: 'likert',
    required: true,
    category: 'core-values',
    weight: 2
  },
  {
    id: 'cv-3',
    textEn: 'I believe that tradition is important for maintaining social stability.',
    textJa: '私は社会の安定を維持するために伝統が重要だと考えています。',
    type: 'likert',
    required: true,
    category: 'core-values',
    weight: 2
  },
  {
    id: 'cv-4',
    textEn: 'I value personal freedom more than social harmony.',
    textJa: '私は社会の調和よりも個人の自由を重視します。',
    type: 'likert',
    required: true,
    category: 'core-values',
    weight: 3
  },
  {
    id: 'cv-5',
    textEn: 'Which of these values is most important to you?',
    textJa: '以下の価値観のうち、あなたにとって最も重要なものはどれですか？',
    type: 'multiple-choice',
    required: true,
    options: [
      { value: 'achievement', labelEn: 'Achievement and success', labelJa: '達成と成功' },
      { value: 'security', labelEn: 'Security and stability', labelJa: '安全と安定' },
      { value: 'relationships', labelEn: 'Relationships and connection', labelJa: '人間関係とつながり' },
      { value: 'autonomy', labelEn: 'Autonomy and independence', labelJa: '自律と独立' },
      { value: 'creativity', labelEn: 'Creativity and innovation', labelJa: '創造性と革新' }
    ],
    category: 'core-values',
    weight: 4
  }
];
