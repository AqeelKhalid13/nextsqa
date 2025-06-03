
import React from 'react';
import { motion } from 'framer-motion';
import { Link, Globe, Code } from 'lucide-react';

const URLInputAnimation = () => {
  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const typewriterVariants = {
    animate: {
      width: ["0%", "100%", "100%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.7, 1]
      }
    }
  };

  return (
    <div className="relative w-full h-80 flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm border border-white/10">
      {/* Browser Window */}
      <motion.div
        className="w-80 bg-gray-900/80 rounded-lg border border-gray-600/50 shadow-2xl"
        variants={floatingVariants}
        animate="animate"
      >
        {/* Browser Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-600/50">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <Globe className="w-4 h-4 text-gray-400" />
        </div>
        
        {/* URL Bar */}
        <div className="p-4">
          <div className="relative bg-gray-800 rounded-lg p-3 border border-gray-600">
            <div className="flex items-center space-x-2">
              <Link className="w-4 h-4 text-blue-400" />
              <motion.div
                className="bg-gray-700 rounded px-2 py-1 text-sm text-white overflow-hidden"
                variants={typewriterVariants}
                animate="animate"
              >
                https://your-app.com
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Code Icons */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${15 + (i % 2) * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 2 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <Code className="w-4 h-4 text-blue-400/60" />
          </motion.div>
        ))}
      </div>

      {/* Text */}
      <motion.p
        className="mt-6 text-center text-gray-300 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Simply paste your URL
      </motion.p>
    </div>
  );
};

export default URLInputAnimation;
