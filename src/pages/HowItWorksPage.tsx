
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Code, TestTube, BarChart3 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import URLInputAnimation from '@/components/animations/URLInputAnimation';
import AITestingAnimation from '@/components/animations/AITestingAnimation';
import SmartReportAnimation from '@/components/animations/SmartReportAnimation';
import { useTheme } from '@/components/ThemeProvider';

const steps = [
  {
    step: 1,
    title: "Paste Your URL",
    description: "Simply enter the link to your web application or staging site. No complex setup or configuration required.",
    details: [
      "Support for any web application or website",
      "Works with staging and production environments",
      "No installation or browser extensions needed",
      "Secure and private - we don't store your data"
    ],
    icon: <Code className="h-8 w-8 text-primary" />,
    animation: <URLInputAnimation />
  },
  {
    step: 2,
    title: "Tell AI What to Test",
    description: "Describe what you want to test in plain English. Our AI understands natural language and converts it into comprehensive test scenarios.",
    details: [
      "Natural language test descriptions",
      "AI understands complex user flows",
      "Automatic test scenario generation",
      "Support for edge cases and error handling"
    ],
    icon: <TestTube className="h-8 w-8 text-primary" />,
    animation: <AITestingAnimation />
  },
  {
    step: 3,
    title: "Review Smart Report",
    description: "Get a comprehensive report with screenshots, videos, and actionable insights. Our AI identifies bugs and suggests fixes.",
    details: [
      "Visual bug reports with screenshots",
      "Step-by-step reproduction guides",
      "Performance metrics and insights",
      "Integration with your development workflow"
    ],
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    animation: <SmartReportAnimation />
  }
];

const features = [
  "Cross-browser testing",
  "Mobile responsiveness checks",
  "Performance monitoring",
  "Accessibility compliance",
  "SEO optimization",
  "Security vulnerability scanning"
];

const HowItWorksPage = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className={`pt-32 pb-20 hero-gradient relative overflow-hidden ${isLight ? 'bg-white' : ''}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLight ? 0.1 : 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            background: isLight 
              ? "radial-gradient(circle at 30% 40%, rgba(79, 70, 229, 0.08) 0%, transparent 70%), radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.05) 0%, transparent 70%)"
              : "radial-gradient(circle at 30% 40%, rgba(79, 70, 229, 0.15) 0%, transparent 70%), radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 70%)"
          }}
        />
        
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isLight ? 'text-gray-900' : 'text-white'}`}>
              How NextSQA <span className="text-gradient-primary">Works</span>
            </h1>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>
              Discover how our AI-powered testing platform transforms the way you test websites. 
              Simple, powerful, and designed for developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className={`py-20 md:py-32 ${isLight ? 'bg-white' : ''}`}>
        <div className="container mx-auto px-6 md:px-10">
          <motion.div 
            className="space-y-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {step.icon}
                    </div>
                    <span className="text-primary font-bold text-lg">Step {step.step}</span>
                  </div>
                  
                  <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-lg mb-6 ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {step.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        className={`flex items-center gap-3 ${isLight ? 'text-gray-600' : 'text-gray-300'}`}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <CheckCircle size={20} className="text-primary flex-shrink-0" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {step.animation}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Features */}
      <section className={`py-20 ${isLight ? 'bg-gray-50' : 'bg-secondary/30'}`}>
        <div className="container mx-auto px-6 md:px-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${isLight ? 'text-gray-900' : 'text-white'}`}>
              Everything You Need
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
              Our comprehensive testing suite covers all aspects of web application quality assurance.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`neo-blur p-6 rounded-xl border text-center ${isLight ? 'border-gray-200' : 'border-white/10'}`}
                whileHover={{ 
                  y: -5, 
                  boxShadow: isLight 
                    ? "0 8px 15px -3px rgba(0, 0, 0, 0.1)" 
                    : "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                  borderColor: isLight ? "rgba(82, 54, 255, 0.3)" : "rgba(255, 255, 255, 0.15)"
                }}
              >
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className={`text-lg font-semibold ${isLight ? 'text-gray-900' : 'text-white'}`}>{feature}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
