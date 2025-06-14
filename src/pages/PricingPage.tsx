import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-foreground leading-tight">
              Choose Your{' '}
              <span className="text-gradient-primary">Testing Plan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Scale your AI-powered testing with plans designed for teams of all sizes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto"
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
                    className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                
                <Card className={`h-full relative overflow-hidden ${
                  plan.popular 
                    ? 'border-primary shadow-lg shadow-primary/20' 
                    : 'border-border hover:border-primary/30'
                } transition-all duration-300`}>
                  <CardHeader className="text-center pb-10 pt-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 400 }}
                      className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6"
                    >
                      <div className="text-primary">
                        {plan.icon}
                      </div>
                    </motion.div>
                    
                    <CardTitle className="text-3xl font-bold mb-4">{plan.name}</CardTitle>
                    <p className="text-muted-foreground text-base mb-6 leading-relaxed px-2">{plan.description}</p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-end justify-center gap-1"
                    >
                      <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground text-lg mb-1">{plan.period}</span>
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="pt-0 px-8 pb-8">
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
                      className="space-y-4 mb-10"
                    >
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          variants={featureVariants}
                          className="flex items-start gap-3"
                        >
                          <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <span className="text-base text-muted-foreground leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Button
                        className={`w-full h-12 text-base font-semibold ${
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
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-foreground leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about our pricing and plans
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full space-y-6">
                {[
                  {
                    question: "Can I change plans anytime?",
                    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences. Your existing data and configurations remain intact during the transition."
                  },
                  {
                    question: "Is there a free trial?",
                    answer: "Yes, we offer a 14-day free trial for all plans with full access to features. No credit card required to start. You can experience the complete NextSQA platform and see how it transforms your testing workflow."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans. All payments are processed securely with industry-standard encryption."
                  },
                  {
                    question: "Can I cancel anytime?",
                    answer: "Absolutely! You can cancel your subscription at any time without any penalties. Your plan remains active until the end of the current billing period, and you'll retain access to all your data for 30 days after cancellation."
                  },
                  {
                    question: "Do you offer discounts for annual billing?",
                    answer: "Yes! Save up to 20% when you choose annual billing. This applies to all plans and is automatically applied at checkout. You can also switch to annual billing anytime from your account settings."
                  },
                  {
                    question: "What happens if I exceed my plan limits?",
                    answer: "We'll notify you when you're approaching your limits. For test executions, you can purchase additional capacity or upgrade your plan. We never interrupt your testing mid-execution - you'll always have time to adjust your plan."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <AccordionItem 
                      value={`item-${index}`}
                      className="bg-background rounded-xl border border-border/50 px-8 md:px-10 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                    >
                      <AccordionTrigger className="text-left text-xl font-semibold py-8 hover:text-primary transition-colors [&[data-state=open]]:text-primary">
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="leading-relaxed">{item.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-8 text-muted-foreground leading-relaxed text-lg">
                        <div className="ml-6 pr-4">
                          {item.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16 md:mt-20"
          >
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Still have questions? We're here to help!
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 h-12 px-8 text-base font-semibold"
            >
              Contact Support
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
