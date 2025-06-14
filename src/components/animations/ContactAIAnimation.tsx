
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, Send, User, Clock, MapPin, Globe, Heart, Star } from 'lucide-react';

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
      
      {/* Central Contact Hub */}
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
          <MessageCircle className="w-12 h-12 text-white" />
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

      {/* Free-floating Contact Icons */}
      {[
        { Icon: Send, color: 'text-blue-500', delay: 0 },
        { Icon: User, color: 'text-green-500', delay: 0.5 },
        { Icon: Heart, color: 'text-red-500', delay: 1 },
        { Icon: Star, color: 'text-yellow-500', delay: 1.5 },
        { Icon: MapPin, color: 'text-purple-500', delay: 2 },
        { Icon: Clock, color: 'text-orange-500', delay: 2.5 }
      ].map(({ Icon, color, delay }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + (i * 12)}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            rotate: [0, 180, 360],
            opacity: [0.4, 0.9, 0.6, 0.4],
          }}
          transition={{
            duration: 6 + (i * 0.3),
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        >
          <div className="w-10 h-10 bg-background/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-border/30 shadow-lg">
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
        </motion.div>
      ))}

      {/* Floating Message Bubbles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20],
            y: [0, Math.random() * 40 - 20],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-6 bg-primary/30 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
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
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
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
          We're here to help you succeed
        </p>
      </motion.div>
    </div>
  );
};

export default ContactAIAnimation;
