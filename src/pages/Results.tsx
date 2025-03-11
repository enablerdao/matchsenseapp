import React, { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import QuestionnaireResults from '@/components/questionnaire/QuestionnaireResults';
import { motion } from 'framer-motion';
import { Share2, Download, RefreshCw } from 'lucide-react';

// Mock results data - in a real app, this would come from an API or state
const mockResults = {
  personalityType: "Analytical Connector",
  personalityDescription: "You're a thoughtful individual who values deep connections and logical thinking. Your analytical approach helps you solve complex problems, while your natural empathy allows you to form meaningful relationships.",
  matchPercentage: 92,
  traits: [
    {
      name: "Openness",
      score: 8,
      description: "You are intellectually curious and appreciate art, emotion, adventure, and unusual ideas.",
      color: "#0063D1" // Nike blue
    },
    {
      name: "Conscientiousness",
      score: 7,
      description: "You tend to be organized and dependable, showing self-discipline and acting dutifully.",
      color: "#00A36C" // Nike green
    },
    {
      name: "Extraversion",
      score: 6,
      description: "You have moderate energy and enjoy social situations while also valuing quiet time.",
      color: "#FF6B00" // Nike orange
    },
    {
      name: "Agreeableness",
      score: 8,
      description: "You value getting along with others and are generally considerate, friendly, and helpful.",
      color: "#CCFF00" // Nike volt
    },
    {
      name: "Neuroticism",
      score: 4,
      description: "You are relatively emotionally stable and less easily upset, handling stress well.",
      color: "#F82C2C" // Nike red
    }
  ],
  compatibilityScores: [
    {
      category: "Core Values",
      score: 85
    },
    {
      category: "Communication Style",
      score: 78
    },
    {
      category: "Lifestyle Preferences",
      score: 92
    },
    {
      category: "Relationship Approach",
      score: 81
    },
    {
      category: "Conflict Resolution",
      score: 73
    }
  ],
  idealMatches: [
    {
      type: "Empathetic Visionary",
      compatibility: 94,
      description: "These individuals complement your analytical nature with their emotional intelligence and creative vision."
    },
    {
      type: "Practical Innovator",
      compatibility: 89,
      description: "These individuals share your logical approach while bringing fresh perspectives to problem-solving."
    }
  ],
  strengthsAndChallenges: {
    strengths: [
      "Deep thinking and analysis",
      "Loyalty in relationships",
      "Thoughtful communication",
      "Problem-solving abilities",
      "Emotional stability"
    ],
    challenges: [
      "May overthink decisions",
      "Can be reserved in new social situations",
      "Might struggle with spontaneity",
      "Could be perceived as too logical at times"
    ]
  }
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const Results = () => {
  const { t } = useLanguage();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero section with confetti animation */}
      <div className="relative bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-nike-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="nike-heading text-4xl md:text-5xl mb-4">Your Results Are Ready!</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Based on your responses, we've created a detailed profile of your personality and compatibility preferences.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
      </div>
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <QuestionnaireResults results={mockResults} />
        
        {/* Action buttons */}
        <div className="max-w-4xl mx-auto mt-12 flex flex-wrap justify-center gap-4">
          <button className="nike-btn-secondary group">
            <Share2 className="w-5 h-5 mr-2 group-hover:animate-pulse-slow" />
            Share Results
          </button>
          <button className="nike-btn-secondary group">
            <Download className="w-5 h-5 mr-2 group-hover:animate-pulse-slow" />
            Download PDF
          </button>
          <button className="nike-btn-primary group">
            <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Retake Assessment
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
