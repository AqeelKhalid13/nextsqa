
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Bot, CheckCircle, ArrowRight, Mail, Zap, Shield } from 'lucide-react';

const ContactAIAnimation = () => {
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pathVariants = {
    animate: {
      pathLength: [0, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-xl backdrop-blur-sm border border-white/10">
      {/* Contact Interface */}
      <motion.div
        className="absolute left-8 top-16 w-64 bg-gray-900/80 rounded-lg border border-gray-600/50 shadow-2xl"
        variants={floatingVariants}
        animate="animate"
      >
        <div className="flex items-center p-4 border-b border-gray-600/50">
          <MessageCircle className="w-5 h-5 text-primary mr-2" />
          <span className="text-white font-medium">Contact Support</span>
        </div>
        
        <div className="p-4 space-y-3">
          <motion.div
            className="bg-blue-600 text-white p-3 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            Need help with testing
          </motion.div>
          
          <motion.div
            className="bg-gray-700 text-gray-300 p-3 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
          >
            <div className="flex items-center space-x-2">
              <Bot className="w-4 h-4 text-green-400" />
              <span>AI analyzing request...</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* AI Processing Center */}
      <motion.div
        className="relative z-10"
        variants={floatingVariants}
        animate="animate"
      >
        <motion.div
          className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30"
          variants={pulseVariants}
          animate="animate"
        >
          <Bot className="w-10 h-10 text-primary" />
        </motion.div>
      </motion.div>

      {/* Testing Automation Flow */}
      <motion.div
        className="absolute right-8 top-16 w-64 bg-gray-900/80 rounded-lg border border-gray-600/50 shadow-2xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center p-4 border-b border-gray-600/50">
          <Zap className="w-5 h-5 text-yellow-400 mr-2" />
          <span className="text-white font-medium">AI Testing</span>
        </div>
        
        <div className="p-4 space-y-3">
          <motion.div
            className="flex items-center space-x-2 text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Login flow tested</span>
          </motion.div>
          
          <motion.div
            className="flex items-center space-x-2 text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Form validation checked</span>
          </motion.div>
          
          <motion.div
            className="flex items-center space-x-2 text-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
          >
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm">Generating report...</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <motion.path
          d="M 120 200 Q 250 150 380 200"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          variants={pathVariants}
          animate="animate"
        />
        <motion.path
          d="M 380 250 Q 250 300 120 250"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          variants={pathVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[Mail, Shield, CheckCircle, Zap].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + (i * 20)}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Icon className="w-4 h-4 text-primary/60" />
          </motion.div>
        ))}
      </div>

      {/* Bottom Text */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <p className="text-gray-300 text-sm">
          AI-powered support meets intelligent testing
        </p>
      </motion.div>
    </div>
  );
};

export default ContactAIAnimation;
