
import React from 'react';
import { motion } from 'framer-motion';
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our pricing and plans
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
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
                    className="bg-background rounded-lg border border-border/50 px-6 md:px-8 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:text-primary transition-colors [&[data-state=open]]:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
