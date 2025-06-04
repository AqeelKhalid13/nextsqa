
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';

const steps = [
  {
    title: "Paste Your URL",
    description: 'Enter the link to your web app or staging site.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Tell AI What to Test",
    description: 'Type a prompt like "Check login flow" or "Verify checkout process."',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    title: "Review Smart Report",
    description: 'AI runs the test and gives you an interactive bug report with visuals.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.9, 0.2, 1]
      }
    }
  };

  return (
    <section id="how-it-works" className={`py-20 md:py-32 relative overflow-hidden ${isLight ? 'bg-gray-50' : 'bg-secondary/30'}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLight ? 0.1 : 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          background: isLight 
            ? "radial-gradient(circle at 20% 30%, rgba(82, 54, 255, 0.08) 0%, transparent 70%), radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.05) 0%, transparent 70%)"
            : "radial-gradient(circle at 20% 30%, rgba(79, 70, 229, 0.15) 0%, transparent 70%), radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 70%)"
        }}
      />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium mb-3 inline-block"
          >
            Simple Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-3xl md:text-5xl font-bold mb-6 ${isLight ? 'text-gray-900' : 'text-white'}`}
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-lg max-w-2xl mx-auto ${isLight ? 'text-gray-600' : 'text-gray-300'}`}
          >
            NextSQA makes website testing simple with just three easy steps. No complex setup required.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants} 
              whileHover={{ 
                y: -10, 
                scale: 1.03, 
                boxShadow: isLight 
                  ? "0 10px 20px -5px rgba(0, 0, 0, 0.1)"
                  : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                borderColor: isLight ? "rgba(156, 163, 175, 0.4)" : "rgba(255, 255, 255, 0.2)" 
              }}
              className={`neo-blur p-8 rounded-xl border flex flex-col items-center text-center transition-all duration-300 ${
                isLight ? 'border-gray-300' : 'border-white/10'
              }`}
            >
              <motion.div 
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
                className="bg-primary/10 p-4 rounded-full mb-6 relative"
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute inset-0 rounded-full ${isLight ? 'bg-primary/3' : 'bg-primary/5'}`}
                />
                {step.icon}
              </motion.div>
              <h3 className={`text-2xl font-bold mb-3 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                {step.title}
              </h3>
              <p className={isLight ? 'text-gray-600' : 'text-gray-300'}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
