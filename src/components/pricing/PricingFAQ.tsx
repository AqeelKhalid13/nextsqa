
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PricingFAQ = () => {
  const faqItems = [
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
  ];

  return (
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
              {faqItems.map((item, index) => (
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
  );
};

export default PricingFAQ;
