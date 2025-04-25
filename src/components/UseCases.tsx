import React from 'react';
import { motion } from 'framer-motion';

const useCases = [
  {
    title: "Frontend Developers",
    description: "Quickly test UI/UX flows without writing endless test scripts. Catch bugs before PR reviews.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "QA Engineers",
    description: "Automate regression tests and focus on creating more complex test cases that really matter.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Startup Teams",
    description: "Move fast without breaking things. Quickly test features before launch without dedicated QA resources.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Agile Teams",
    description: "Integrate automated testing directly into sprint cycles with CI/CD pipeline support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const UseCases = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="use-cases" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-full">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-primary rounded-full opacity-20"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(50px)'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-medium mb-3 inline-block">For Everyone</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Use Cases</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See how different teams are using BlackBox AI to streamline their testing processes.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index} 
              className="neo-blur p-8 rounded-xl border border-gray-800 flex flex-col md:flex-row gap-6 hover:shadow-neumorphic-hover transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 p-4 rounded-xl h-fit">
                {useCase.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {useCase.title}
                </h3>
                <p className="text-gray-400">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
