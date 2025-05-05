import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.1, 0.9, 0.2, 1]
      }
    })
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="hero-gradient py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }} 
          transition={{ 
            duration: 30,
            ease: "linear",
            repeat: Infinity 
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }} 
          transition={{ 
            duration: 40,
            ease: "linear",
            repeat: Infinity
          }}
          className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"
        />
      </motion.div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Hero Content */}
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:w-1/2">
            <motion.div 
              variants={fadeInUp} 
              custom={1}
              className="inline-flex items-center px-3 py-1.5 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90 self-start">
              <div className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></div>
              <span>New: AI-powered visual regression testing</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              custom={2}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Test Smarter, Not Harder – 
              <span className="text-gradient-primary">AI-Powered</span> Website Testing in One Click.
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              custom={3}
              className="text-xl text-gray-200 mb-10">
              NextSQA lets developers test any website with AI automation — integrated with GitHub, DevOps, and more.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              custom={4}
              className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 h-12 shadow-glow transition-all duration-300">
                Join our Wait List
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Hero Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:w-1/2">
            <motion.div 
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="relative neo-blur rounded-xl p-6 border border-white/10 shadow-glow-subtle transition-all duration-500">
              {/* Browser mockup */}
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-t-lg p-3 border-b border-white/10">
                <div className="flex items-center">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-1 text-xs text-gray-300 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></div>
                    yourwebsite.com
                  </div>
                </div>
              </div>
              
              {/* Browser content */}
              <div className="bg-gray-900/80 backdrop-blur-sm p-6 h-[320px] rounded-b-lg overflow-hidden relative">
                {/* Website mockup with scan effect */}
                <motion.div 
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute inset-0 opacity-30">
                  <div className="grid grid-cols-4 grid-rows-6 gap-2 p-4 h-full">
                    {Array(24).fill(0).map((_, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0.1 }}
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          delay: i * 0.1 % 1
                        }}
                        className="bg-white/10 rounded"
                      />
                    ))}
                  </div>
                </motion.div>
                
                {/* Scan line animation */}
                <motion.div 
                  animate={{ 
                    top: ["0%", "100%", "0%"],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute left-0 top-0 w-full h-1 bg-primary/40"
                />
                
                {/* Test runner visualization */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute top-6 left-6 right-6 bg-gray-800/90 backdrop-blur-sm p-4 rounded-md border border-white/5 shadow-glow-subtle">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-gray-200 font-medium">AI Test Running...</div>
                    <div className="bg-primary/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white font-medium animate-pulse">
                      Testing in progress
                    </div>
                  </div>
                  <motion.div className="h-2 bg-gray-700/70 rounded-full w-full mb-4 overflow-hidden relative">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "75%" }}
                      transition={{ 
                        duration: 3,
                        ease: [0.3, 0.1, 0.3, 1]
                      }}
                      className="h-full bg-primary/60 rounded-full"
                    />
                  </motion.div>
                  <div className="font-mono text-sm text-gray-300 flex items-center">
                    <span className="inline-block w-3 h-3 bg-primary/70 rounded-full mr-2 animate-pulse"></span>
                    Checking login form validation...
                  </div>
                </motion.div>
                
                {/* Test results */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute bottom-6 left-6 right-6 bg-gray-800/90 backdrop-blur-sm p-4 rounded-md border border-white/5 shadow-glow-subtle">
                  <div className="text-red-400 font-medium mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Issue detected
                  </div>
                  <div className="text-sm text-white mb-3">
                    Login form accepts empty email field
                  </div>
                  <motion.div 
                    animate={{ 
                      borderColor: ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.05)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gray-700/50 backdrop-blur-sm p-3 rounded border border-white/5">
                    <div className="text-xs text-green-400 font-medium mb-1">Suggestion:</div>
                    <div className="font-mono text-xs text-gray-300">
                      Add validation to require email format
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
