
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Shield, CheckCircle, Zap, Database } from 'lucide-react';

const AIAnimation = () => {
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

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Central Brain Icon */}
      <motion.div
        className="relative z-10"
        variants={floatingVariants}
        animate="animate"
      >
        <motion.div
          className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30"
          variants={pulseVariants}
          animate="animate"
        >
          <Brain className="w-12 h-12 text-primary" />
        </motion.div>
      </motion.div>

      {/* Orbiting Elements */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        variants={orbitVariants}
        animate="animate"
      >
        {/* Code Icon */}
        <motion.div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30"
          whileHover={{ scale: 1.2 }}
        >
          <Code className="w-8 h-8 text-blue-400" />
        </motion.div>

        {/* Shield Icon */}
        <motion.div
          className="absolute top-1/2 right-8 transform -translate-y-1/2 w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/30"
          whileHover={{ scale: 1.2 }}
        >
          <Shield className="w-7 h-7 text-green-400" />
        </motion.div>

        {/* CheckCircle Icon */}
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-500/30"
          whileHover={{ scale: 1.2 }}
        >
          <CheckCircle className="w-8 h-8 text-emerald-400" />
        </motion.div>

        {/* Zap Icon */}
        <motion.div
          className="absolute top-1/2 left-8 transform -translate-y-1/2 w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-500/30"
          whileHover={{ scale: 1.2 }}
        >
          <Zap className="w-7 h-7 text-yellow-400" />
        </motion.div>

        {/* Database Icon */}
        <motion.div
          className="absolute top-24 right-24 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30"
          whileHover={{ scale: 1.2 }}
        >
          <Database className="w-6 h-6 text-purple-400" />
        </motion.div>
      </motion.div>

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Text Content */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <h3 className="text-2xl font-bold text-white mb-2">AI-Powered Quality Assurance</h3>
        <p className="text-gray-400">Revolutionizing software testing with intelligent automation</p>
      </motion.div>
    </div>
  );
};

export default AIAnimation;
