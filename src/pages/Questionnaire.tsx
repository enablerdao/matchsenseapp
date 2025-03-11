import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

// Sample questions for demonstration
const questions = [
  {
    id: 'q1',
    textEn: 'I believe that honesty is more important than politeness.',
    textJa: '私は礼儀よりも正直さの方が重要だと考えています。',
    category: 'Core Values',
    categoryJa: '核となる価値観'
  },
  {
    id: 'q2',
    textEn: 'I prefer to plan things carefully rather than be spontaneous.',
    textJa: '私は自発的に行動するよりも、物事を慎重に計画することを好みます。',
    category: 'Core Values',
    categoryJa: '核となる価値観'
  },
  {
    id: 'q3',
    textEn: 'I find it easy to stay relaxed and focused even when there is some pressure.',
    textJa: 'プレッシャーがあっても、リラックスして集中することが容易です。',
    category: 'Personality Traits',
    categoryJa: '性格特性'
  },
  {
    id: 'q4',
    textEn: 'I enjoy having a wide circle of acquaintances.',
    textJa: '幅広い知人関係を持つことを楽しんでいます。',
    category: 'Personality Traits',
    categoryJa: '性格特性'
  },
  {
    id: 'q5',
    textEn: 'I value personal freedom more than social harmony.',
    textJa: '私は社会の調和よりも個人の自由を重視します。',
    category: 'Core Values',
    categoryJa: '核となる価値観'
  }
];

const categoryDescriptions = {
  'Core Values': 'These questions help us understand your fundamental beliefs and principles that guide your decisions.',
  'Personality Traits': 'These questions assess your natural tendencies and behavioral patterns.',
  '核となる価値観': 'これらの質問は、あなたの決断を導く基本的な信念や原則を理解するのに役立ちます。',
  '性格特性': 'これらの質問は、あなたの自然な傾向や行動パターンを評価します。'
};

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [activeCategory, setActiveCategory] = useState('Core Values');
  const { language } = useLanguage();
  
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  // Get the appropriate category name based on language
  const getCategory = (question: typeof questions[0]) => {
    return language === 'ja' ? question.categoryJa : question.category;
  };
  
  // Get the appropriate question text based on language
  const getQuestionText = (question: typeof questions[0]) => {
    return language === 'ja' ? question.textJa : question.textEn;
  };
  
  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      
      // Update active category if needed
      const nextCategory = language === 'ja' 
        ? questions[currentQuestionIndex + 1].categoryJa 
        : questions[currentQuestionIndex + 1].category;
        
      if (nextCategory !== activeCategory) {
        setActiveCategory(nextCategory);
      }
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      
      // Update active category if needed
      const prevCategory = language === 'ja' 
        ? questions[currentQuestionIndex - 1].categoryJa 
        : questions[currentQuestionIndex - 1].category;
        
      if (prevCategory !== activeCategory) {
        setActiveCategory(prevCategory);
      }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with progress */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <h1 className="nike-heading text-3xl md:text-4xl text-nike-black">
                {language === 'ja' ? 'パーソナリティ診断' : 'Personality Assessment'}
              </h1>
              <div className="flex items-center text-sm font-medium text-gray-500">
                <span className="text-nike-blue font-bold">{currentQuestionIndex + 1}</span>
                <span className="mx-1">/</span>
                <span>{questions.length}</span>
              </div>
            </div>
            
            <p className="nike-subheading mb-4">
              {language === 'ja' 
                ? 'これらの質問に答えて、あなたの詳細な性格プロフィールを作成し、理想的なマッチングを見つけましょう。' 
                : 'Answer these questions to create your detailed personality profile and find your perfect matches.'}
            </p>
            
            {/* Progress bar */}
            <div className="nike-progress-container">
              <div 
                className="nike-progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left sidebar - Categories */}
            <div className="hidden md:block">
              <div className="bg-white rounded-2xl shadow-elevated p-6 sticky top-8">
                <h3 className="font-bold text-lg mb-4 text-nike-black">
                  {language === 'ja' ? 'カテゴリー' : 'Categories'}
                </h3>
                <ul className="space-y-2">
                  {Array.from(new Set(questions.map(q => language === 'ja' ? q.categoryJa : q.category))).map((category, index) => (
                    <li key={index} className={`flex items-center p-2 rounded-lg transition-all ${activeCategory === category ? 'bg-gray-100 text-nike-blue font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                      {activeCategory === category && (
                        <ChevronRight className="w-4 h-4 mr-2 text-nike-blue" />
                      )}
                      <span>{category}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-gradient-to-br from-gradient-blue-start to-gradient-blue-end text-white rounded-xl">
                  <div className="flex items-center mb-2">
                    <Zap className="w-5 h-5 mr-2" />
                    <h4 className="font-bold">{language === 'ja' ? 'ヒント' : 'Pro Tip'}</h4>
                  </div>
                  <p className="text-sm">
                    {language === 'ja' 
                      ? '最も正確なマッチングのために、正直に回答してください。正解や不正解はありません！' 
                      : 'Answer honestly for the most accurate matches. There are no right or wrong answers!'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Main question area */}
            <div className="md:col-span-2">
              <div className="nike-card p-8 animate-scale-in">
                {/* Category heading */}
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800 mb-2">
                    {language === 'ja' ? currentQuestion.categoryJa : currentQuestion.category}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {categoryDescriptions[(language === 'ja' ? currentQuestion.categoryJa : currentQuestion.category) as keyof typeof categoryDescriptions]}
                  </p>
                </div>
                
                {/* Question */}
                <div className="question-card question-card-active mb-8">
                  <h2 className="text-xl font-bold mb-6 text-nike-black">
                    <span className="text-nike-blue mr-2">{currentQuestionIndex + 1}.</span>
                    {getQuestionText(currentQuestion)}
                  </h2>
                  
                  {/* Rating scale */}
                  <div className="rating-scale">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <div key={value} className="rating-item">
                        <input 
                          type="radio" 
                          name={currentQuestion.id} 
                          id={`${currentQuestion.id}-${value}`} 
                          className="nike-radio"
                          checked={answers[currentQuestion.id] === value}
                          onChange={() => handleAnswer(currentQuestion.id, value)}
                        />
                        <label htmlFor={`${currentQuestion.id}-${value}`} className="rating-label">
                          {language === 'ja' 
                            ? (value === 1 ? '全く同意しない' : 
                               value === 2 ? '同意しない' : 
                               value === 3 ? '中立' : 
                               value === 4 ? '同意する' : 
                               '強く同意する')
                            : (value === 1 ? 'Strongly Disagree' : 
                               value === 2 ? 'Disagree' : 
                               value === 3 ? 'Neutral' : 
                               value === 4 ? 'Agree' : 
                               'Strongly Agree')
                          }
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Navigation buttons */}
                <div className="flex justify-between items-center">
                  <button 
                    type="button" 
                    className="nike-btn-secondary"
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    {language === 'ja' ? '前へ' : 'Previous'}
                  </button>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">{currentQuestionIndex + 1}</span>
                    <span className="mx-1">{language === 'ja' ? '/' : 'of'}</span>
                    <span className="font-medium">{questions.length}</span>
                  </div>
                  
                  <button 
                    type="button"
                    className={`${currentQuestionIndex === questions.length - 1 ? 'nike-btn-accent' : 'nike-btn-primary'}`}
                    onClick={handleNext}
                  >
                    {currentQuestionIndex === questions.length - 1 ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        {language === 'ja' ? '送信' : 'Submit'}
                      </>
                    ) : (
                      <>
                        {language === 'ja' ? '次へ' : 'Next'}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Question navigation dots */}
              <div className="flex justify-center mt-8 space-x-1">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentQuestionIndex 
                        ? 'bg-nike-blue scale-125' 
                        : index < currentQuestionIndex 
                          ? 'bg-gray-400' 
                          : 'bg-gray-200'
                    }`}
                    onClick={() => setCurrentQuestionIndex(index)}
                    aria-label={`Go to question ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Questionnaire;
