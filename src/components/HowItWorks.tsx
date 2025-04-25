
import React from 'react';
import { motion } from 'framer-motion';

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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Background accent */}
      <div className="absolute top-0 inset-x-0 h-1/2 bg-primary/5"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-3 inline-block"
          >
            Simple Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Black Box makes website testing simple with just three easy steps. No complex setup required.
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
              className="glass-card bg-white p-8 rounded-xl shadow-neumorphic border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-neumorphic-hover"
            >
              <div className="bg-primary/10 p-4 rounded-full mb-6 transform transition-transform duration-300 group-hover:scale-110 relative">
                <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse-slow"></div>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Process diagram */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 max-w-4xl mx-auto hidden md:block"
        >
          <div className="h-1 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 relative mx-12">
            {/* Process dots */}
            <div className="absolute left-0 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-primary/80 shadow-glow-small"></div>
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-primary/80 shadow-glow-small"></div>
            <div className="absolute right-0 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-primary/80 shadow-glow-small"></div>
          </div>
          
          <div className="flex justify-between mt-6 text-sm text-gray-500 font-medium">
            <div className="text-center w-48 -ml-24">Step 1</div>
            <div className="text-center w-48">Step 2</div>
            <div className="text-center w-48 -mr-24">Step 3</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
