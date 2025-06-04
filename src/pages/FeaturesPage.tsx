
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Globe, BarChart3, Clock, Code, TestTube, Monitor, Smartphone, Search, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { useTheme } from '@/components/ThemeProvider';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "AI-Powered Testing",
    description: "Advanced machine learning algorithms that understand your application and create intelligent test scenarios automatically.",
    benefits: ["Smart test generation", "Pattern recognition", "Predictive bug detection", "Continuous learning"]
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Lightning Fast",
    description: "Get comprehensive test results in minutes, not hours. Our optimized infrastructure delivers rapid feedback for faster development cycles.",
    benefits: ["Sub-minute test execution", "Parallel testing", "Real-time results", "Instant notifications"]
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "No Code Required",
    description: "Describe tests in plain English. No need to write complex test scripts or learn new testing frameworks.",
    benefits: ["Natural language input", "Zero learning curve", "Non-technical friendly", "Instant setup"]
  },
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: "Cross-Browser Testing",
    description: "Test across all major browsers and versions automatically. Ensure consistent user experience everywhere.",
    benefits: ["Chrome, Firefox, Safari, Edge", "Multiple browser versions", "Automatic compatibility checks", "Visual diff detection"]
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile Responsive",
    description: "Verify your application works perfectly on all device sizes and orientations with comprehensive mobile testing.",
    benefits: ["Device simulation", "Touch gesture testing", "Orientation changes", "Performance on mobile"]
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Security Scanning",
    description: "Built-in security vulnerability detection that identifies potential threats and security weaknesses in your application.",
    benefits: ["XSS detection", "SQL injection checks", "CSRF protection", "Data exposure analysis"]
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Performance Monitoring",
    description: "Real-time performance metrics and insights to optimize your application's speed and user experience.",
    benefits: ["Page load times", "Resource optimization", "Core Web Vitals", "Performance bottlenecks"]
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "SEO Analysis",
    description: "Comprehensive SEO auditing to ensure your website ranks well and follows best practices for search engines.",
    benefits: ["Meta tag analysis", "Content optimization", "Schema markup", "Technical SEO checks"]
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Accessibility Testing",
    description: "Ensure your application is accessible to all users with automated WCAG compliance checking.",
    benefits: ["WCAG 2.1 compliance", "Screen reader testing", "Color contrast analysis", "Keyboard navigation"]
  },
  {
    icon: <TestTube className="h-8 w-8 text-primary" />,
    title: "Visual Regression",
    description: "Automatic detection of visual changes and layout issues with pixel-perfect comparison tools.",
    benefits: ["Screenshot comparison", "Layout diff detection", "CSS regression alerts", "Visual baseline management"]
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "CI/CD Integration",
    description: "Seamlessly integrate with your existing development workflow and continuous integration pipelines.",
    benefits: ["GitHub Actions", "Jenkins support", "Webhook notifications", "API integration"]
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Enterprise Security",
    description: "Bank-level security with data encryption, compliance certifications, and privacy protection.",
    benefits: ["End-to-end encryption", "SOC 2 compliance", "GDPR ready", "Private cloud options"]
  }
];

const FeaturesPage = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLight ? 0.1 : 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            background: isLight 
              ? "radial-gradient(circle at 30% 40%, rgba(82, 54, 255, 0.08) 0%, transparent 70%), radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.05) 0%, transparent 70%)"
              : "radial-gradient(circle at 30% 40%, rgba(82, 54, 255, 0.15) 0%, transparent 70%), radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 70%)"
          }}
        />
        
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isLight ? 'text-foreground' : 'text-white'}`}>
              Powerful <span className="text-gradient-primary">Features</span>
            </h1>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${isLight ? 'text-muted-foreground' : 'text-gray-300'}`}>
              Discover all the capabilities that make NextSQA the most comprehensive 
              AI-powered testing platform for modern web applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`neo-blur p-8 rounded-xl group ${isLight ? 'border-gray-200 hover:border-primary/20' : 'border-white/10 hover:border-white/20'}`}
                whileHover={{ 
                  y: -10, 
                  boxShadow: isLight 
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                    : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <motion.div 
                  className="bg-primary/10 p-4 rounded-full w-fit mb-6"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className={`text-xl font-bold mb-4 group-hover:text-primary transition-colors ${isLight ? 'text-foreground' : 'text-white'}`}>
                  {feature.title}
                </h3>
                
                <p className={`mb-6 ${isLight ? 'text-muted-foreground' : 'text-gray-300'}`}>
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <motion.li 
                      key={i}
                      className={`flex items-center gap-2 text-sm ${isLight ? 'text-muted-foreground hover:text-foreground' : 'text-gray-400 hover:text-white'}`}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className={`py-20 ${isLight ? 'bg-gray-50' : 'bg-secondary/30'}`}>
        <div className="container mx-auto px-6 md:px-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${isLight ? 'text-foreground' : 'text-white'}`}>
              Why Choose NextSQA?
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isLight ? 'text-muted-foreground' : 'text-gray-400'}`}>
              Built for modern development teams who demand speed, accuracy, and reliability.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={itemVariants}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">10x</div>
              <div className={`text-lg font-semibold mb-2 ${isLight ? 'text-foreground' : 'text-white'}`}>Faster Testing</div>
              <div className={isLight ? 'text-muted-foreground' : 'text-gray-400'}>Reduce testing time from hours to minutes</div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className={`text-lg font-semibold mb-2 ${isLight ? 'text-foreground' : 'text-white'}`}>Accuracy Rate</div>
              <div className={isLight ? 'text-muted-foreground' : 'text-gray-400'}>Industry-leading bug detection accuracy</div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className={`text-lg font-semibold mb-2 ${isLight ? 'text-foreground' : 'text-white'}`}>Monitoring</div>
              <div className={isLight ? 'text-muted-foreground' : 'text-gray-400'}>Continuous testing and monitoring</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default FeaturesPage;
