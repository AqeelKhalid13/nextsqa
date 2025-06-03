
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Camera, Play, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react';

const SmartReportAnimation = () => {
  const reportVariants = {
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const chartVariants = {
    animate: {
      scaleY: [0.3, 1, 0.7, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative w-full h-80 flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl backdrop-blur-sm border border-white/10">
      {/* Report Document */}
      <motion.div
        className="w-80 bg-gray-900/80 rounded-lg border border-gray-600/50 shadow-2xl overflow-hidden"
        variants={reportVariants}
        animate="animate"
      >
        {/* Report Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Test Report</span>
            </div>
            <div className="flex space-x-2">
              <Camera className="w-4 h-4 text-white/80" />
              <Play className="w-4 h-4 text-white/80" />
            </div>
          </div>
        </div>
        
        {/* Report Content */}
        <div className="p-4 space-y-3">
          {/* Status Items */}
          <motion.div
            className="flex items-center justify-between p-2 bg-green-500/20 rounded border border-green-500/30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm">Login Test</span>
            </div>
            <span className="text-green-400 text-xs">Passed</span>
          </motion.div>
          
          <motion.div
            className="flex items-center justify-between p-2 bg-red-500/20 rounded border border-red-500/30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm">Form Validation</span>
            </div>
            <span className="text-red-400 text-xs">Failed</span>
          </motion.div>

          {/* Mini Chart */}
          <motion.div
            className="mt-4 p-3 bg-gray-800/50 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300 text-xs">Performance</span>
              <BarChart3 className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex items-end space-x-1 h-8">
              {[0.6, 0.8, 0.4, 0.9, 0.7].map((height, i) => (
                <motion.div
                  key={i}
                  className="bg-blue-500 rounded-t flex-1"
                  variants={chartVariants}
                  animate="animate"
                  style={{ height: `${height * 100}%` }}
                  transition={{ delay: 2.5 + (i * 0.1) }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Visual Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + (i * 13)}%`,
              top: `${10 + (i % 2) * 25}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2.5 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            {i % 3 === 0 && <Camera className="w-4 h-4 text-purple-400/60" />}
            {i % 3 === 1 && <Play className="w-4 h-4 text-blue-400/60" />}
            {i % 3 === 2 && <BarChart3 className="w-4 h-4 text-pink-400/60" />}
          </motion.div>
        ))}
      </div>

      {/* Text */}
      <motion.p
        className="absolute bottom-6 text-center text-gray-300 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Comprehensive visual reports
      </motion.p>
    </div>
  );
};

export default SmartReportAnimation;
