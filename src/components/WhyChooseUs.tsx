
import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose BlackBox AI?</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="neo-blur p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-bold text-gradient-primary mb-2">80%</div>
            <p className="text-gray-300">Reduction in manual testing time</p>
          </motion.div>
          
          <motion.div 
            className="neo-blur p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-bold text-gradient-primary mb-2">90%</div>
            <p className="text-gray-300">Bugs caught before production</p>
          </motion.div>
          
          <motion.div 
            className="neo-blur p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-bold text-gradient-primary mb-2">3x</div>
            <p className="text-gray-300">Faster development iterations</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
