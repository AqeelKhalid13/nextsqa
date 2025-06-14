
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started with AI testing",
      icon: <Zap className="h-6 w-6" />,
      popular: false,
      features: [
        "Test Case Management",
        "Basic Bug Reports",
        "Up to 5 Test Executions/month",
        "Email Support",
        "Basic Analytics",
        "1 Team Member",
        "Version Control Integration"
      ]
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Advanced features for growing teams and comprehensive testing",
      icon: <Star className="h-6 w-6" />,
      popular: true,
      features: [
        "Advanced Test Cases",
        "Detailed Bug Reports",
        "Unlimited Test Executions",
        "Test Plans & Automation",
        "Advanced Analytics & Reports",
        "Quality Metrics Dashboard",
        "Up to 10 Team Members",
        "Priority Support",
        "All Integrations",
        "Custom Test Flows"
      ]
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "Full-scale solution for large organizations with custom needs",
      icon: <Crown className="h-6 w-6" />,
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited Team Members",
        "Advanced Team Management",
        "Custom Integrations",
        "White-label Options",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Custom SLA",
        "Advanced Security Features",
        "API Access",
        "Custom Training"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground">
              Choose Your{' '}
              <span className="text-gradient-primary">Testing Plan</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Scale your AI-powered testing with plans designed for teams of all sizes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                className="relative"
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 400 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                
                <Card className={`h-full relative overflow-hidden ${
                  plan.popular 
                    ? 'border-primary shadow-lg shadow-primary/20' 
                    : 'border-border hover:border-primary/30'
                } transition-all duration-300`}>
                  <CardHeader className="text-center pb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 400 }}
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                    >
                      <div className="text-primary">
                        {plan.icon}
                      </div>
                    </motion.div>
                    
                    <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-end justify-center"
                    >
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                            delayChildren: 0.4 + index * 0.1
                          }
                        }
                      }}
                      className="space-y-3 mb-8"
                    >
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          variants={featureVariants}
                          className="flex items-start"
                        >
                          <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                            : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                        }`}
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
                <p className="text-muted-foreground text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground text-sm">Yes, we offer a 14-day free trial for all plans. No credit card required.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground text-sm">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-muted-foreground text-sm">Yes, you can cancel your subscription at any time. Your plan remains active until the end of the billing period.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
