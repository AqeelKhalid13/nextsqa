
import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: i * 0.2,
        duration: 0.7,
        ease: [0, 0.71, 0.2, 1.01]
      }
    })
  };

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Choose NextSQA?</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="neo-blur p-6 rounded-xl text-center border border-white/10"
            custom={0}
            variants={statVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              borderColor: "rgba(255, 255, 255, 0.2)" 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <motion.div 
              className="text-4xl font-bold text-gradient-primary mb-2"
              animate={{ 
                scale: [1, 1.05, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              80%
            </motion.div>
            <p className="text-gray-300">Reduction in manual testing time</p>
          </motion.div>
          
          <motion.div 
            className="neo-blur p-6 rounded-xl text-center border border-white/10"
            custom={1}
            variants={statVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              borderColor: "rgba(255, 255, 255, 0.2)" 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <motion.div 
              className="text-4xl font-bold text-gradient-primary mb-2"
              animate={{ 
                scale: [1, 1.05, 1],
                transition: { duration: 2, repeat: Infinity, delay: 0.7 }
              }}
            >
              90%
            </motion.div>
            <p className="text-gray-300">Bugs caught before production</p>
          </motion.div>
          
          <motion.div 
            className="neo-blur p-6 rounded-xl text-center border border-white/10"
            custom={2}
            variants={statVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              borderColor: "rgba(255, 255, 255, 0.2)" 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <motion.div 
              className="text-4xl font-bold text-gradient-primary mb-2"
              animate={{ 
                scale: [1, 1.05, 1],
                transition: { duration: 2, repeat: Infinity, delay: 1.4 }
              }}
            >
              3x
            </motion.div>
            <p className="text-gray-300">Faster development iterations</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
