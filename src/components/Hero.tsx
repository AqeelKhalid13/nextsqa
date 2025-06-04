
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';
import WaitlistForm from './WaitlistForm';
import { useTheme } from '@/components/ThemeProvider';

const Hero = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
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
    <>
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
            className={`absolute -top-40 -right-40 w-96 h-96 rounded-full filter blur-3xl ${isLight ? 'bg-primary/10' : 'bg-primary/20'}`}
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
            className={`absolute -bottom-20 -left-20 w-72 h-72 rounded-full filter blur-3xl ${isLight ? 'bg-primary/5' : 'bg-primary/10'}`}
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
                className={`inline-flex items-center px-3 py-1.5 mb-6 backdrop-blur-sm border rounded-full text-sm self-start ${
                  isLight 
                    ? 'bg-white/80 border-gray-300 text-gray-700' 
                    : 'bg-white/10 border-white/20 text-white/90'
                }`}>
                <div className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></div>
                <span>New: AI-powered visual regression testing</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                custom={2}
                className={`text-4xl md:text-6xl font-bold leading-tight mb-6 ${
                  isLight ? 'text-gray-900' : 'text-white'
                }`}>
                Test Smarter, Not Harder – 
                <span className="text-gradient-primary">AI-Powered</span> Website Testing in One Click.
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                custom={3}
                className={`text-xl mb-10 ${
                  isLight ? 'text-gray-600' : 'text-gray-200'
                }`}>
                NextSQA lets developers test any website with AI automation — integrated with GitHub, DevOps, and more.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                custom={4}
                className="flex flex-col sm:flex-row gap-5">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-8 h-12 shadow-glow transition-all duration-300"
                  onClick={() => setWaitlistOpen(true)}
                >
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
                whileHover={{ y: -10, boxShadow: isLight ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)" : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className={`relative neo-blur rounded-xl p-6 border shadow-glow-subtle transition-all duration-500 ${
                  isLight ? 'border-gray-300' : 'border-white/10'
                }`}>
                {/* Browser mockup */}
                <div className={`rounded-t-lg p-3 border-b ${
                  isLight 
                    ? 'bg-gray-100 border-gray-300' 
                    : 'bg-gray-900/90 backdrop-blur-sm border-white/10'
                }`}>
                  <div className="flex items-center">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className={`mx-auto rounded-full px-4 py-1 text-xs flex items-center ${
                      isLight 
                        ? 'bg-white border border-gray-300 text-gray-600' 
                        : 'bg-gray-800/80 backdrop-blur-sm text-gray-300'
                    }`}>
                      <div className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></div>
                      yourwebsite.com
                    </div>
                  </div>
                </div>
                
                {/* Browser content */}
                <div className={`p-6 h-[320px] rounded-b-lg overflow-hidden relative ${
                  isLight ? 'bg-gray-50' : 'bg-gray-900/80 backdrop-blur-sm'
                }`}>
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
                          className={`rounded ${isLight ? 'bg-gray-300/40' : 'bg-white/10'}`}
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
                    className="absolute left-0 top-0 w-full h-1 bg-primary/60"
                  />
                  
                  {/* Test runner visualization */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className={`absolute top-6 left-6 right-6 p-4 rounded-md border shadow-glow-subtle ${
                      isLight 
                        ? 'bg-white border-gray-300' 
                        : 'bg-gray-800/90 backdrop-blur-sm border-white/5'
                    }`}>
                    <div className="flex justify-between items-center mb-3">
                      <div className={`font-medium ${isLight ? 'text-gray-800' : 'text-gray-200'}`}>AI Test Running...</div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium animate-pulse ${
                        isLight 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-primary/30 backdrop-blur-sm text-white'
                      }`}>
                        Testing in progress
                      </div>
                    </div>
                    <motion.div className={`h-2 rounded-full w-full mb-4 overflow-hidden relative ${
                      isLight ? 'bg-gray-200' : 'bg-gray-700/70'
                    }`}>
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "75%" }}
                        transition={{ 
                          duration: 3,
                          ease: [0.3, 0.1, 0.3, 1]
                        }}
                        className="h-full bg-primary/80 rounded-full"
                      />
                    </motion.div>
                    <div className={`font-mono text-sm flex items-center ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>
                      <span className="inline-block w-3 h-3 bg-primary/70 rounded-full mr-2 animate-pulse"></span>
                      Checking login form validation...
                    </div>
                  </motion.div>
                  
                  {/* Test results */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className={`absolute bottom-6 left-6 right-6 p-4 rounded-md border shadow-glow-subtle ${
                      isLight 
                        ? 'bg-white border-gray-300' 
                        : 'bg-gray-800/90 backdrop-blur-sm border-white/5'
                    }`}>
                    <div className={`font-medium mb-2 flex items-center ${isLight ? 'text-red-600' : 'text-red-400'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Issue detected
                    </div>
                    <div className={`text-sm mb-3 ${isLight ? 'text-gray-800' : 'text-white'}`}>
                      Login form accepts empty email field
                    </div>
                    <motion.div 
                      animate={{ 
                        borderColor: isLight 
                          ? ["rgba(229, 231, 235, 1)", "rgba(156, 163, 175, 1)", "rgba(229, 231, 235, 1)"]
                          : ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.05)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`p-3 rounded border ${
                        isLight 
                          ? 'bg-gray-50 border-gray-300' 
                          : 'bg-gray-700/50 backdrop-blur-sm border-white/5'
                      }`}>
                      <div className={`text-xs font-medium mb-1 ${isLight ? 'text-green-600' : 'text-green-400'}`}>Suggestion:</div>
                      <div className={`font-mono text-xs ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
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
      
      {/* Waitlist Form Dialog */}
      <WaitlistForm open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </>
  );
};

export default Hero;
