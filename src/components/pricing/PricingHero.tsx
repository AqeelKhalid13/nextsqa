
import React from 'react';
import { motion } from 'framer-motion';

const PricingHero = () => {
  return (
    <section className="pt-32 pb-20 md:pb-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-foreground leading-tight">
            Choose Your{' '}
            <span className="text-gradient-primary">Testing Plan</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Scale your AI-powered testing with plans designed for teams of all sizes
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
