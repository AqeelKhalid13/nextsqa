
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Zap, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';

const useCases = [
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "Frontend Developers",
    description: "Streamline your development workflow with instant UI/UX testing",
    challenges: [
      "Manual testing takes too long",
      "Missing edge cases in user flows",
      "Browser compatibility issues",
      "Visual regression bugs"
    ],
    solutions: [
      "Automated UI flow testing",
      "Cross-browser compatibility checks",
      "Visual regression detection",
      "Real-time feedback on changes"
    ],
    results: "75% reduction in bug discovery time"
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: "QA Engineers",
    description: "Focus on complex scenarios while AI handles routine testing",
    challenges: [
      "Repetitive regression testing",
      "Limited time for exploratory testing",
      "Manual test case creation",
      "Maintaining test documentation"
    ],
    solutions: [
      "Automated regression test suites",
      "AI-generated test scenarios",
      "Smart test case prioritization",
      "Comprehensive test reporting"
    ],
    results: "3x increase in test coverage"
  },
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    title: "Startup Teams",
    description: "Ship faster without compromising quality or hiring QA specialists",
    challenges: [
      "No dedicated QA resources",
      "Need to move fast",
      "Limited testing budget",
      "Technical debt accumulation"
    ],
    solutions: [
      "Self-service testing platform",
      "No QA expertise required",
      "Cost-effective solution",
      "Prevent technical debt"
    ],
    results: "50% faster time to market"
  },
  {
    icon: <Clock className="h-12 w-12 text-primary" />,
    title: "Agile Teams",
    description: "Integrate seamlessly into sprint cycles with CI/CD automation",
    challenges: [
      "Testing bottlenecks in sprints",
      "Manual CI/CD testing steps",
      "Delayed feedback cycles",
      "Release quality concerns"
    ],
    solutions: [
      "Automated sprint testing",
      "CI/CD pipeline integration",
      "Instant feedback loops",
      "Pre-release quality gates"
    ],
    results: "90% reduction in release delays"
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-primary" />,
    title: "Enterprise Teams",
    description: "Scale testing across multiple applications and environments",
    challenges: [
      "Complex application portfolios",
      "Multiple testing environments",
      "Compliance requirements",
      "Team coordination overhead"
    ],
    solutions: [
      "Centralized testing platform",
      "Multi-environment support",
      "Compliance reporting",
      "Team collaboration tools"
    ],
    results: "60% improvement in testing efficiency"
  },
  {
    icon: <ArrowRight className="h-12 w-12 text-primary" />,
    title: "DevOps Teams",
    description: "Automate testing in deployment pipelines for reliable releases",
    challenges: [
      "Manual testing in pipelines",
      "Deployment quality risks",
      "Rollback complexity",
      "Monitoring gaps"
    ],
    solutions: [
      "Automated pipeline testing",
      "Pre-deployment validation",
      "Smart rollback triggers",
      "Continuous monitoring"
    ],
    results: "85% fewer production issues"
  }
];

const testimonials = [
  {
    quote: "NextSQA transformed our testing process. We now catch bugs before they reach production and deploy with confidence.",
    author: "Sarah Chen",
    role: "Lead Developer at TechCorp",
    company: "TechCorp"
  },
  {
    quote: "As a startup, we needed fast and reliable testing without the overhead. NextSQA delivered exactly that.",
    author: "Mike Rodriguez",
    role: "CTO at StartupXYZ",
    company: "StartupXYZ"
  },
  {
    quote: "Our QA team can now focus on complex scenarios while AI handles the routine testing. It's a game-changer.",
    author: "Alex Thompson",
    role: "QA Manager at Enterprise Inc",
    company: "Enterprise Inc"
  }
];

const UseCasesPage = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 30% 40%, rgba(79, 70, 229, 0.15) 0%, transparent 70%), radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 70%)"
          }}
        />
        
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Perfect for <span className="text-gradient-primary">Every Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              See how different teams and roles are using NextSQA to transform 
              their testing workflows and ship better software faster.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="neo-blur p-8 rounded-xl border border-white/10 group"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  borderColor: "rgba(255, 255, 255, 0.2)"
                }}
              >
                <div className="flex items-start gap-6">
                  <motion.div 
                    className="bg-primary/10 p-4 rounded-full flex-shrink-0"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {useCase.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {useCase.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-red-400 mb-3">Challenges</h4>
                        <ul className="space-y-2">
                          {useCase.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Solutions</h4>
                        <ul className="space-y-2">
                          {useCase.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                              <CheckCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                      <div className="text-primary font-semibold text-sm mb-1">Results</div>
                      <div className="text-white font-bold">{useCase.results}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              What Teams Are Saying
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Real stories from teams who transformed their testing with NextSQA.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="neo-blur p-8 rounded-xl border border-white/10"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                  borderColor: "rgba(255, 255, 255, 0.15)"
                }}
              >
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-primary text-sm font-medium">{testimonial.company}</div>
                </div>
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

export default UseCasesPage;
