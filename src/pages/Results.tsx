import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import QuestionnaireResults from '@/components/questionnaire/QuestionnaireResults';

// Mock results data - in a real app, this would come from an API or state
const mockResults = {
  personalityType: "分析的コネクター",
  personalityTypeEn: "Analytical Connector",
  personalityDescription: "あなたは深い繋がりと論理的思考を大切にする思慮深い人です。分析的なアプローチで複雑な問題を解決し、自然な共感能力で意味のある関係を築くことができます。",
  personalityDescriptionEn: "You're a thoughtful individual who values deep connections and logical thinking. Your analytical approach helps you solve complex problems, while your natural empathy allows you to form meaningful relationships.",
  matchPercentage: 92,
  traits: [
    {
      name: "開放性",
      nameEn: "Openness",
      score: 8,
      description: "あなたは知的好奇心が強く、芸術、感情、冒険、そして珍しいアイデアを評価します。",
      descriptionEn: "You are intellectually curious and appreciate art, emotion, adventure, and unusual ideas.",
      color: "#3B82F6" // Blue
    },
    {
      name: "誠実性",
      nameEn: "Conscientiousness",
      score: 7,
      description: "あなたは組織的で信頼性があり、自己規律を示し、義務を果たします。",
      descriptionEn: "You tend to be organized and dependable, showing self-discipline and acting dutifully.",
      color: "#10B981" // Green
    },
    {
      name: "外向性",
      nameEn: "Extraversion",
      score: 6,
      description: "あなたは適度なエネルギーを持ち、社交的な状況を楽しむ一方で、静かな時間も大切にします。",
      descriptionEn: "You have moderate energy and enjoy social situations while also valuing quiet time.",
      color: "#F59E0B" // Amber
    },
    {
      name: "協調性",
      nameEn: "Agreeableness",
      score: 8,
      description: "あなたは他者との良好な関係を重視し、一般的に思いやりがあり、友好的で、助けになります。",
      descriptionEn: "You value getting along with others and are generally considerate, friendly, and helpful.",
      color: "#8B5CF6" // Purple
    },
    {
      name: "神経症的傾向",
      nameEn: "Neuroticism",
      score: 4,
      description: "あなたは比較的感情的に安定しており、動揺しにくく、ストレスにうまく対処します。",
      descriptionEn: "You are relatively emotionally stable and less easily upset, handling stress well.",
      color: "#EC4899" // Pink
    }
  ],
  compatibilityScores: [
    {
      category: "核となる価値観",
      categoryEn: "Core Values",
      score: 85
    },
    {
      category: "コミュニケーションスタイル",
      categoryEn: "Communication Style",
      score: 78
    },
    {
      category: "ライフスタイルの好み",
      categoryEn: "Lifestyle Preferences",
      score: 92
    },
    {
      category: "関係性へのアプローチ",
      categoryEn: "Relationship Approach",
      score: 81
    },
    {
      category: "対立解決",
      categoryEn: "Conflict Resolution",
      score: 73
    }
  ],
  idealMatches: [
    {
      type: "共感的ビジョナリー",
      typeEn: "Empathetic Visionary",
      compatibility: 94,
      description: "これらの人々は、感情的知性と創造的なビジョンであなたの分析的な性質を補完します。",
      descriptionEn: "These individuals complement your analytical nature with their emotional intelligence and creative vision."
    },
    {
      type: "実践的イノベーター",
      typeEn: "Practical Innovator",
      compatibility: 89,
      description: "これらの人々はあなたの論理的なアプローチを共有しながら、問題解決に新鮮な視点をもたらします。",
      descriptionEn: "These individuals share your logical approach while bringing fresh perspectives to problem-solving."
    }
  ],
  strengthsAndChallenges: {
    strengths: [
      "深い思考と分析",
      "関係における忠誠心",
      "思慮深いコミュニケーション",
      "問題解決能力",
      "感情的安定性"
    ],
    strengthsEn: [
      "Deep thinking and analysis",
      "Loyalty in relationships",
      "Thoughtful communication",
      "Problem-solving abilities",
      "Emotional stability"
    ],
    challenges: [
      "決断を過度に考えすぎることがある",
      "新しい社交的状況で控えめになることがある",
      "自発性に苦労することがある",
      "時に論理的すぎると思われることがある"
    ],
    challengesEn: [
      "May overthink decisions",
      "Can be reserved in new social situations",
      "Might struggle with spontaneity",
      "Could be perceived as too logical at times"
    ]
  }
};

const Results = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-professional-background py-12">
        <QuestionnaireResults results={mockResults} />
      </main>
      <Footer />
    </div>
  );
};

export default Results;
