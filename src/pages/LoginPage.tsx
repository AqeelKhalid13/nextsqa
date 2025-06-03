
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import AIAnimation from '@/components/animations/AIAnimation';

const LoginPage = () => {
  const [activeForm, setActiveForm] = useState<'login' | 'register' | 'forgot'>('login');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <motion.main 
        className="pt-20 pb-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-[80vh] gap-12">
            
            {/* AI Animation - Left Side */}
            <motion.div 
              className="flex-1 max-w-lg"
              variants={itemVariants}
            >
              <AIAnimation />
            </motion.div>

            {/* Authentication Forms - Right Side */}
            <motion.div 
              className="flex-1 max-w-md w-full"
              variants={itemVariants}
            >
              <div className="bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-8 shadow-2xl">
                <AnimatePresence mode="wait">
                  {activeForm === 'login' && (
                    <LoginForm 
                      key="login"
                      onSwitchToRegister={() => setActiveForm('register')}
                      onSwitchToForgot={() => setActiveForm('forgot')}
                    />
                  )}
                  {activeForm === 'register' && (
                    <RegisterForm 
                      key="register"
                      onSwitchToLogin={() => setActiveForm('login')}
                    />
                  )}
                  {activeForm === 'forgot' && (
                    <ForgotPasswordForm 
                      key="forgot"
                      onSwitchToLogin={() => setActiveForm('login')}
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default LoginPage;
