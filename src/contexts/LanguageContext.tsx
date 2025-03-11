import React, { createContext, useState, useContext, useEffect } from 'react';

// Define the structure of our translations
type TranslationDictionary = {
  [key: string]: string | TranslationDictionary;
};

// Define translations for both languages
const translations: Record<string, TranslationDictionary> = {
  en: {
    home: 'Home',
    services: 'Services',
    blog: 'Blog',
    company: 'Company',
    brand: 'Brand',
    press: 'Press',
    pointsProgram: 'Points Program',
    contact: 'Contact',
    language: 'Language',
    loading: 'Loading...',
    search: 'Search',
    viewDetails: 'View Details',
    
    // Home page translations
    home: {
      title: 'Find Your Perfect Match',
      subtitle: 'Our scientifically validated 200-question assessment helps you find ideal matches based on personality, values, and lifestyle compatibility.',
      startAssessment: 'Start Assessment',
      howItWorks: 'How It Works',
      step1Title: 'Complete the Assessment',
      step1Description: 'Answer our scientifically designed questions to create your detailed personality profile.',
      step2Title: 'Get Your Results',
      step2Description: 'Receive a comprehensive analysis of your personality traits and compatibility factors.',
      step3Title: 'Find Your Matches',
      step3Description: 'Connect with people who are truly compatible with your personality and values.',
      whyChooseUs: 'Why Choose MatchSense',
      feature1Title: 'Scientific Approach',
      feature1Description: 'Our matching algorithm is based on decades of psychological research and validated personality models.',
      feature2Title: '200-Question Assessment',
      feature2Description: 'The optimal number of questions to ensure accuracy while maintaining completion rates.',
      feature3Title: 'Holistic Compatibility',
      feature3Description: 'We consider personality traits, core values, relationship styles, and lifestyle preferences.',
      feature4Title: 'Privacy First',
      feature4Description: 'Your data is secure and only used to provide you with the best matching experience.',
      readyToStart: 'Ready to Find Your Perfect Match?',
      readyToStartDescription: 'Take the first step toward meaningful connections based on true compatibility.'
    },
    
    // Not Found page translations
    notFound: {
      title: 'Page Not Found',
      description: 'The page you are looking for doesn\'t exist or has been moved.',
      backToHome: 'Back to Home'
    },
    
    // Footer translations
    footer: {
      company: 'Company',
      about: 'About Us',
      team: 'Our Team',
      careers: 'Careers',
      press: 'Press',
      services: 'Services',
      resources: 'Resources',
      blog: 'Blog',
      faq: 'FAQ',
      support: 'Support',
      legal: 'Legal',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      allRightsReserved: 'All rights reserved.'
    },
    
    // Questionnaire translations
    questionnaire: {
      pageTitle: 'MatchSense - Personality Assessment',
      pageDescription: 'Take our scientifically validated 200-question assessment to find your perfect matches based on personality, values, and lifestyle compatibility.',
      title: 'Discover Your True Compatibility',
      subtitle: 'Answer these questions to create your detailed personality profile and find your ideal matches.',
      progress: 'Progress',
      previous: 'Previous',
      next: 'Next',
      submit: 'Submit',
      
      sections: {
        coreValues: 'Core Values',
        coreValuesDesc: 'These questions help us understand your fundamental beliefs and principles that guide your decisions.',
        
        personalityTraits: 'Personality Traits',
        personalityTraitsDesc: 'These questions assess your natural tendencies and behavioral patterns.',
        
        relationshipStyle: 'Relationship Style',
        relationshipStyleDesc: 'These questions explore how you interact with others in close relationships.',
        
        lifestyleCompatibility: 'Lifestyle Compatibility',
        lifestyleCompatibilityDesc: 'These questions help us understand your daily habits and preferences.',
        
        interestsHobbies: 'Interests & Hobbies',
        interestsHobbiesDesc: 'These questions identify activities and topics you enjoy.',
        
        physicalPreferences: 'Physical & Intimacy Preferences',
        physicalPreferencesDesc: 'These questions explore your preferences regarding physical aspects of relationships.',
        
        dealBreakers: 'Deal Breakers',
        dealBreakersDesc: 'These questions identify factors that would make a relationship impossible for you.'
      },
      
      results: {
        title: 'Your Personality Profile',
        subtitle: 'Based on your responses, we\'ve created a detailed profile of your personality and compatibility preferences.',
        personalityType: 'Your Personality Type',
        keyTraits: 'Key Traits',
        compatibilityScores: 'Compatibility Scores',
        viewService: 'View Matching Service',
        retake: 'Retake Assessment'
      }
    }
  },
  ja: {
    home: 'ホーム',
    services: 'サービス',
    blog: 'ブログ',
    company: '会社情報',
    brand: 'ブランド',
    press: 'プレス',
    pointsProgram: 'ポイントプログラム',
    contact: 'お問い合わせ',
    language: '言語',
    loading: '読み込み中...',
    search: '検索',
    viewDetails: '詳細を見る',
    
    // Home page translations
    home: {
      title: '最適なマッチングを見つける',
      subtitle: '科学的に検証された200問の診断テストで、性格、価値観、ライフスタイルの相性に基づいた理想的なマッチングを見つけましょう。',
      startAssessment: '診断を始める',
      howItWorks: '仕組み',
      step1Title: '診断を完了する',
      step1Description: '科学的に設計された質問に答えて、詳細な性格プロフィールを作成します。',
      step2Title: '結果を受け取る',
      step2Description: 'あなたの性格特性と相性要因の包括的な分析を受け取ります。',
      step3Title: 'マッチングを見つける',
      step3Description: 'あなたの性格や価値観と本当に相性の良い人々とつながりましょう。',
      whyChooseUs: 'MatchSenseを選ぶ理由',
      feature1Title: '科学的アプローチ',
      feature1Description: '私たちのマッチングアルゴリズムは、数十年の心理学研究と検証された性格モデルに基づいています。',
      feature2Title: '200問の診断テスト',
      feature2Description: '完了率を維持しながら精度を確保するための最適な質問数です。',
      feature3Title: '総合的な相性',
      feature3Description: '性格特性、核となる価値観、関係性のスタイル、ライフスタイルの好みを考慮します。',
      feature4Title: 'プライバシー重視',
      feature4Description: 'あなたのデータは安全で、最高のマッチング体験を提供するためだけに使用されます。',
      readyToStart: '最適なマッチングを見つける準備はできましたか？',
      readyToStartDescription: '真の相性に基づいた意味のある繋がりへの第一歩を踏み出しましょう。'
    },
    
    // Not Found page translations
    notFound: {
      title: 'ページが見つかりません',
      description: 'お探しのページは存在しないか、移動されました。',
      backToHome: 'ホームに戻る'
    },
    
    // Footer translations
    footer: {
      company: '会社情報',
      about: '私たちについて',
      team: 'チーム紹介',
      careers: '採用情報',
      press: 'プレス',
      services: 'サービス',
      resources: 'リソース',
      blog: 'ブログ',
      faq: 'よくある質問',
      support: 'サポート',
      legal: '法的情報',
      terms: '利用規約',
      privacy: 'プライバシーポリシー',
      cookies: 'Cookieポリシー',
      allRightsReserved: '全ての権利を保有します。'
    },
    
    // Questionnaire translations
    questionnaire: {
      pageTitle: 'マッチセンス - 性格診断',
      pageDescription: '科学的に検証された200問の診断テストで、性格、価値観、ライフスタイルの相性に基づいた最適なマッチングを見つけましょう。',
      title: '本当の相性を発見しよう',
      subtitle: 'これらの質問に答えて、あなたの詳細な性格プロフィールを作成し、理想的なマッチングを見つけましょう。',
      progress: '進捗',
      previous: '前へ',
      next: '次へ',
      submit: '送信',
      
      sections: {
        coreValues: '核となる価値観',
        coreValuesDesc: 'これらの質問は、あなたの決断を導く基本的な信念や原則を理解するのに役立ちます。',
        
        personalityTraits: '性格特性',
        personalityTraitsDesc: 'これらの質問は、あなたの自然な傾向や行動パターンを評価します。',
        
        relationshipStyle: '関係性のスタイル',
        relationshipStyleDesc: 'これらの質問は、親密な関係におけるあなたの交流の仕方を探ります。',
        
        lifestyleCompatibility: 'ライフスタイルの相性',
        lifestyleCompatibilityDesc: 'これらの質問は、あなたの日常の習慣や好みを理解するのに役立ちます。',
        
        interestsHobbies: '興味・趣味',
        interestsHobbiesDesc: 'これらの質問は、あなたが楽しむ活動やトピックを特定します。',
        
        physicalPreferences: '身体的・親密さの好み',
        physicalPreferencesDesc: 'これらの質問は、関係性における身体的側面に関するあなたの好みを探ります。',
        
        dealBreakers: '絶対条件',
        dealBreakersDesc: 'これらの質問は、あなたにとって関係を不可能にする要因を特定します。'
      },
      
      results: {
        title: 'あなたの性格プロフィール',
        subtitle: 'あなたの回答に基づいて、性格と相性の好みに関する詳細なプロフィールを作成しました。',
        personalityType: 'あなたの性格タイプ',
        keyTraits: '主要な特性',
        compatibilityScores: '相性スコア',
        viewService: 'マッチングサービスを見る',
        retake: '診断を再受験する'
      }
    }
  },
};

// Define the context type
interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create the provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get the initial language from localStorage or default to 'ja'
  const [language, setLanguage] = useState<string>(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'ja';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Translation function that supports nested keys
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
