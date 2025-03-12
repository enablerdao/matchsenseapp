
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
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
    allCategories: 'All Categories',
    stayTravel: 'Stay & Travel',
    lifeCommunity: 'Life & Community',
    workProductivity: 'Work & Productivity',
    healthWellness: 'Health & Wellness',
    investGrow: 'Investment & Growth',
    
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
      pageTitle: 'PersonaMatch - Personality Assessment',
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
        viewService: 'View PersonaMatch Service',
        retake: 'Retake Assessment'
      }
    },
    // Add more translations as needed
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
    allCategories: 'すべて',
    stayTravel: '滞在・旅行',
    lifeCommunity: '生活・コミュニティ',
    workProductivity: '仕事・生産性',
    healthWellness: '健康・ウェルネス',
    investGrow: '投資・成長',
    
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
      pageTitle: 'パーソナマッチ - 性格診断',
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
        viewService: 'パーソナマッチサービスを見る',
        retake: '診断を再受験する'
      }
    },
    // Add more translations as needed
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Detect browser language and default to 'en' if not Japanese
  const detectBrowserLanguage = (): Language => {
    const browserLang = navigator.language || (navigator as any).userLanguage;
    return browserLang && browserLang.startsWith('ja') ? 'ja' : 'en';
  };

  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Set the initial language based on browser settings
    const savedLanguage = localStorage.getItem('app-language') as Language;
    const initialLanguage = savedLanguage || detectBrowserLanguage();
    setLanguage(initialLanguage);
  }, []);

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('app-language', language);
    // Update html lang attribute for accessibility
    document.documentElement.lang = language;
  }, [language]);

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

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
