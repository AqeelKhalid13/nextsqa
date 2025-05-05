
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered Exploratory Testing",
    description: "Let AI intelligently explore your website finding bugs humans might miss.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Form Field & Flow Detection",
    description: "Automatically detects and validates all form fields and user flows.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "GitHub/DevOps Integration",
    description: "Seamlessly integrates with your existing development workflows.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Auto-Generated Bug Reports",
    description: "Get detailed bug reports with screenshots, logs, and reproduction steps.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Targeted Prompt-Based Testing",
    description: "Tell the AI exactly what to test using natural language prompts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    title: "CI/CD Pipeline Support",
    description: "Run tests automatically as part of your continuous integration workflow.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 15 }
      }}
    >
      <Card className="h-full neo-blur border border-white/10 transition-all duration-300">
        <CardContent className="p-6">
          <motion.div 
            className="bg-primary/10 p-3 w-fit rounded-lg mb-4"
            whileHover={{ 
              rotate: [0, 5, -5, 0], 
              scale: 1.1, 
              transition: { duration: 0.5 }
            }}
          >
            {feature.icon}
          </motion.div>
          <h3 className="text-xl font-bold mb-2 text-white">
            {feature.title}
          </h3>
          <p className="text-gray-400">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 opacity-10"
      >
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 50, 
            ease: "linear", 
            repeat: Infinity 
          }}
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/30 filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 70, 
            ease: "linear", 
            repeat: Infinity 
          }}
          className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-primary/20 filter blur-3xl"
        />
      </motion.div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-medium mb-3 inline-block">Powerful Toolset</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Key Features</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            NextSQA delivers everything you need to automate and improve your website testing process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Feature screenshot or diagram */}
        <motion.div 
          className="mt-20 neo-blur rounded-2xl p-8 md:p-12 max-w-5xl mx-auto shadow-neumorphic overflow-hidden border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            transition: { duration: 0.5 }
          }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-6 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive Bug Reports
          </motion.h3>
          
          <div className="neo-blur rounded-xl overflow-hidden border border-gray-800">
            <motion.div 
              className="bg-gray-900 p-4 border-b border-gray-800"
              whileHover={{
                backgroundColor: "rgba(17, 24, 39, 0.8)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <div className="mx-auto text-sm font-medium text-gray-400">NextSQA Testing Report</div>
              </div>
            </motion.div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <motion.div 
                  className="md:w-1/2 bg-gray-900/70 rounded-lg p-4 border border-gray-800"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  whileHover={{
                    scale: 1.03,
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <div className="text-lg font-bold mb-3 text-white">Test Results</div>
                  <div className="space-y-3">
                    <motion.div 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Homepage loads properly</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Navigation menu accessible</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Login form validation issue</span>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div 
                  className="md:w-1/2"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <div className="text-lg font-bold mb-3 text-white">Bug Details</div>
                  <motion.div 
                    className="bg-red-950/30 p-4 rounded-lg border border-red-900/50"
                    whileHover={{
                      scale: 1.03,
                      borderColor: "rgba(248, 113, 113, 0.4)",
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    <div className="text-red-400 font-medium mb-2">Login Form Validation Issue</div>
                    <p className="text-sm text-gray-300 mb-2">
                      The login form accepts submissions with an empty email field.
                    </p>
                    <div className="text-sm font-medium text-gray-300 mt-4 mb-1">Recommendation:</div>
                    <motion.div 
                      className="bg-gray-900/80 p-3 rounded border border-gray-800 text-sm font-mono text-gray-300"
                      whileHover={{
                        backgroundColor: "rgba(17, 24, 39, 0.9)",
                        borderColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      Add required attribute to email input<br />
                      Add client-side validation check
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
