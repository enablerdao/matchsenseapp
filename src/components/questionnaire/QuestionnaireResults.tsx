import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Award, 
  Brain, 
  Heart, 
  Zap, 
  Target, 
  TrendingUp, 
  AlertTriangle,
  Users,
  CheckCircle
} from 'lucide-react';

interface QuestionnaireResultsProps {
  results: {
    personalityType: string;
    personalityDescription?: string;
    matchPercentage?: number;
    traits: {
      name: string;
      score: number;
      description: string;
      color?: string;
    }[];
    compatibilityScores: {
      category: string;
      score: number;
    }[];
    idealMatches?: {
      type: string;
      compatibility: number;
      description: string;
    }[];
    strengthsAndChallenges?: {
      strengths: string[];
      challenges: string[];
    };
  };
}

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

const QuestionnaireResults: React.FC<QuestionnaireResultsProps> = ({ results }) => {
  const { t } = useLanguage();
  
  // Function to get icon for trait
  const getTraitIcon = (traitName: string) => {
    switch(traitName.toLowerCase()) {
      case 'openness':
        return <Brain className="w-5 h-5" />;
      case 'conscientiousness':
        return <CheckCircle className="w-5 h-5" />;
      case 'extraversion':
        return <Users className="w-5 h-5" />;
      case 'agreeableness':
        return <Heart className="w-5 h-5" />;
      case 'neuroticism':
        return <Zap className="w-5 h-5" />;
      default:
        return <Target className="w-5 h-5" />;
    }
  };
  
  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Personality Type Card */}
      <motion.div 
        className="nike-card-gradient p-8 mb-12 relative overflow-hidden"
        variants={itemVariants}
      >
        <div className="absolute top-0 right-0 p-4">
          <div className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full">
            <div className="text-center">
              <div className="text-2xl font-bold">{results.matchPercentage}%</div>
              <div className="text-xs">Match</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <Award className="w-8 h-8 mr-3" />
          <h2 className="text-2xl font-bold">Your Personality Type</h2>
        </div>
        
        <h3 className="text-3xl font-bold mb-4">{results.personalityType}</h3>
        
        {results.personalityDescription && (
          <p className="text-white text-opacity-90 text-lg leading-relaxed">
            {results.personalityDescription}
          </p>
        )}
      </motion.div>
      
      {/* Traits Section */}
      <motion.div 
        className="mb-12"
        variants={itemVariants}
      >
        <h2 className="nike-heading text-2xl mb-6 flex items-center">
          <Brain className="w-6 h-6 mr-2 text-nike-blue" />
          Key Personality Traits
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.traits.map((trait, index) => (
            <motion.div 
              key={index}
              className="nike-card p-6 hover:border-l-4 hover:border-l-nike-blue transition-all duration-300"
              whileHover={{ y: -5 }}
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full mr-3" style={{ backgroundColor: trait.color ? `${trait.color}20` : '#f3f4f6' }}>
                  <div className="text-white p-1 rounded-full" style={{ backgroundColor: trait.color || '#6b7280' }}>
                    {getTraitIcon(trait.name)}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{trait.name}</h3>
                </div>
                <div className="ml-auto">
                  <div className="text-lg font-bold" style={{ color: trait.color || '#6b7280' }}>
                    {trait.score}<span className="text-sm text-gray-400">/10</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                <div 
                  className="h-1.5 rounded-full" 
                  style={{ 
                    width: `${trait.score * 10}%`,
                    backgroundColor: trait.color || '#6b7280'
                  }}
                ></div>
              </div>
              
              <p className="text-gray-600">{trait.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Compatibility Scores */}
      <motion.div 
        className="nike-card p-8 mb-12"
        variants={itemVariants}
      >
        <h2 className="nike-heading text-2xl mb-6 flex items-center">
          <Target className="w-6 h-6 mr-2 text-nike-blue" />
          Compatibility Scores
        </h2>
        
        <div className="space-y-6">
          {results.compatibilityScores.map((category, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium group-hover:text-nike-blue transition-colors">{category.category}</h3>
                <span className="font-bold text-lg">{category.score}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-nike-blue to-nike-volt group-hover:animate-pulse-slow transition-all duration-300" 
                  style={{ width: `${category.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Ideal Matches */}
      {results.idealMatches && (
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <h2 className="nike-heading text-2xl mb-6 flex items-center">
            <Heart className="w-6 h-6 mr-2 text-nike-red" />
            Your Ideal Matches
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.idealMatches.map((match, index) => (
              <div key={index} className="nike-card p-6 border-t-4" style={{ borderTopColor: index === 0 ? '#CCFF00' : '#0063D1' }}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">{match.type}</h3>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                    {match.compatibility}% Match
                  </div>
                </div>
                <p className="text-gray-600">{match.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
      
      {/* Strengths and Challenges */}
      {results.strengthsAndChallenges && (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={itemVariants}
        >
          <div className="nike-card p-6">
            <h2 className="nike-heading text-xl mb-4 flex items-center text-nike-green">
              <TrendingUp className="w-5 h-5 mr-2" />
              Your Strengths
            </h2>
            
            <ul className="space-y-3">
              {results.strengthsAndChallenges.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-nike-green bg-opacity-10 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2 h-2 rounded-full bg-nike-green"></div>
                  </div>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="nike-card p-6">
            <h2 className="nike-heading text-xl mb-4 flex items-center text-nike-orange">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Growth Areas
            </h2>
            
            <ul className="space-y-3">
              {results.strengthsAndChallenges.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-nike-orange bg-opacity-10 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2 h-2 rounded-full bg-nike-orange"></div>
                  </div>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuestionnaireResults;
