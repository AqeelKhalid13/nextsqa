
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Brain, Wand2, CheckCircle } from 'lucide-react';

const AITestingAnimation = () => {
  const chatVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const brainVariants = {
    animate: {
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const magicVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="relative w-full h-80 flex items-center justify-center bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl backdrop-blur-sm border border-white/10">
      {/* Chat Interface */}
      <motion.div
        className="w-80 bg-gray-900/80 rounded-lg border border-gray-600/50 shadow-2xl"
        variants={chatVariants}
        animate="animate"
      >
        {/* Chat Header */}
        <div className="flex items-center p-4 border-b border-gray-600/50">
          <Brain className="w-5 h-5 text-primary mr-2" />
          <span className="text-white font-medium">AI Testing Assistant</span>
        </div>
        
        {/* Chat Messages */}
        <div className="p-4 space-y-3">
          <motion.div
            className="bg-blue-600 text-white p-3 rounded-lg max-w-xs"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            Check login flow
          </motion.div>
          
          <motion.div
            className="bg-gray-700 text-gray-300 p-3 rounded-lg max-w-xs ml-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
          >
            <div className="flex items-center space-x-2">
              <motion.div
                variants={brainVariants}
                animate="animate"
              >
                <Brain className="w-4 h-4 text-green-400" />
              </motion.div>
              <span>Analyzing your request...</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Magic Wand Effect */}
      <motion.div
        className="absolute top-16 right-16"
        variants={magicVariants}
        animate="animate"
      >
        <Wand2 className="w-8 h-8 text-yellow-400" />
      </motion.div>

      {/* Floating Test Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 10)}%`,
              top: `${20 + (i % 3) * 15}%`,
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.2, 0.7, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + (i * 0.2),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {i % 2 === 0 ? (
              <CheckCircle className="w-3 h-3 text-green-400/60" />
            ) : (
              <MessageSquare className="w-3 h-3 text-blue-400/60" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Text */}
      <motion.p
        className="absolute bottom-6 text-center text-gray-300 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        AI understands your testing needs
      </motion.p>
    </div>
  );
};

export default AITestingAnimation;
