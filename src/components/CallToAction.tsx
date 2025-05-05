
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const CallToAction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div 
          className="bg-gradient-to-br from-navy to-navy-light text-white rounded-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
            scale: 1.01,
            transition: { duration: 0.5 }
          }}
        >
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Ready to Test with AI?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-200 mb-8"
              variants={itemVariants}
            >
              Start finding bugs faster and shipping with confidence. Try NextSQA today and see the difference.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Start Free Trial
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Schedule Demo
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-sm text-gray-300 mt-6"
              variants={itemVariants}
            >
              No credit card required. 14-day free trial.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Integrations */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-white">Seamlessly Integrates With</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {/* Integration logos */}
              {["GitHub", "GitLab", "Azure DevOps", "Jenkins", "CircleCI"].map((platform, index) => (
                <motion.div
                  key={platform}
                  className="bg-gray-900/70 backdrop-blur-sm border border-white/10 p-4 rounded-lg shadow-sm"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)", 
                    borderColor: "rgba(255, 255, 255, 0.2)" 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  {/* Replace with actual logo */}
                  <motion.div
                    whileHover={{ rotate: [0, 5, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* GitHub */}
                    {platform === "GitHub" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.21.66-.47v-1.66c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.844c.85.004 1.7.114 2.5.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.56 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                      </svg>
                    )}
                    {/* GitLab */}
                    {platform === "GitLab" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="#FC6D26">
                        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" />
                      </svg>
                    )}
                    {/* Azure DevOps */}
                    {platform === "Azure DevOps" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="#0078D7">
                        <path d="M0 8.877L2.247 5.91l8.405-3.416V.022l7.37 5.393L2.966 8.338v8.225L0 15.707zm24-4.45v14.651l-8.415 3.42v2.027l-7.359-5.403 14.923-2.717V4.878l.851-.451z" />
                      </svg>
                    )}
                    {/* Jenkins */}
                    {platform === "Jenkins" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24">
                        <path fill="#D33833" d="M4.367 17.705c.28 2.256 1.034 3.88 3.302 4.674.231.05.468.058.642.18.55-.048-.472-.379-.52-.416a3.11 3.11 0 0 1-1.082-1.079c-.43-.705-.827-1.466-.897-2.301-.046-.56.065-.247.095-.37.386.416.693.872 1.184 1.198.364.245.968.646 1.484.705.142.016.403.032.636-.16.058-.466-.197-.693-.366-.963-.307-.487-.614-.876-.92-1.362-.577-.923-1.304-1.935-1.324-3.358-.007-.617.006-1.22.1-1.592a3.934 3.934 0 0 1 1.74-2.638c.52-.377 1.22-.56 1.933-.626-.48-.038-1.02-.143-1.483-.1-.569.05-1.125.096-1.592.27-1.937.734-3.648 2.954-3.882 5.264a8.757 8.757 0 0 0-.06 2.513" />
                      </svg>
                    )}
                    {/* CircleCI */}
                    {platform === "CircleCI" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="#343434">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15z" />
                      </svg>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
