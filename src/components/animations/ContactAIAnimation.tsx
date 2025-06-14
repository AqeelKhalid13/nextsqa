
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Bot, CheckCircle, ArrowRight, Mail, Zap, Shield, Users, Clock, Target } from 'lucide-react';

const ContactAIAnimation = () => {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
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

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5 rounded-xl border border-border/50 overflow-hidden">
      
      {/* Central AI Hub */}
      <motion.div
        className="relative z-20"
        variants={floatingVariants}
        animate="animate"
      >
        <motion.div
          className="w-24 h-24 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center shadow-2xl"
          variants={pulseVariants}
          animate="animate"
        >
          <Bot className="w-12 h-12 text-white" />
        </motion.div>
        
        {/* Central glow effect */}
        <motion.div
          className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Orbiting Elements */}
      <motion.div
        className="absolute inset-0"
        variants={orbitVariants}
        animate="animate"
      >
        {/* Contact Form Orbit */}
        <motion.div
          className="absolute top-16 left-8 w-48 bg-background/80 backdrop-blur-md rounded-lg border border-border shadow-xl"
          style={{ transformOrigin: '200px 200px' }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="p-4">
            <div className="flex items-center mb-3">
              <MessageCircle className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-medium">Contact Form</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-muted rounded w-full"></div>
              <div className="h-2 bg-muted rounded w-3/4"></div>
              <div className="h-2 bg-primary/50 rounded w-1/2"></div>
            </div>
          </div>
        </motion.div>

        {/* AI Testing Orbit */}
        <motion.div
          className="absolute bottom-16 right-8 w-48 bg-background/80 backdrop-blur-md rounded-lg border border-border shadow-xl"
          style={{ transformOrigin: '-200px -200px' }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="p-4">
            <div className="flex items-center mb-3">
              <Zap className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-sm font-medium">AI Testing</span>
            </div>
            <div className="space-y-2">
              <motion.div
                className="flex items-center text-xs text-green-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <CheckCircle className="w-3 h-3 mr-1" />
                <span>Tests automated</span>
              </motion.div>
              <motion.div
                className="flex items-center text-xs text-blue-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                <Target className="w-3 h-3 mr-1" />
                <span>Issues detected</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Icons */}
      {[Mail, Shield, Users, Clock].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${25 + (i * 15)}%`,
            top: `${20 + (i % 2) * 60}%`,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 360],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + (i * 0.5),
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-4 h-4 text-primary" />
          </div>
        </motion.div>
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
        <motion.circle
          cx="50%"
          cy="50%"
          r="120"
          stroke="url(#gradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="10,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r="80"
          stroke="url(#gradient2)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Bottom Text */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-muted-foreground text-sm font-medium">
          Contact support meets AI automation
        </p>
      </motion.div>
    </div>
  );
};

export default ContactAIAnimation;
