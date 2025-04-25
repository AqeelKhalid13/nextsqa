
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "How does BlackBox AI test my website?",
    answer: "BlackBox AI uses advanced machine learning algorithms to analyze your website's UI, functionality, and user flows. It simulates real user interactions and identifies potential issues automatically."
  },
  {
    question: "Do I need to write test scripts?",
    answer: "No! That's the beauty of BlackBox. Simply describe what you want to test in plain English, and our AI will handle the rest. No coding or test scripting required."
  },
  {
    question: "Which integrations are supported?",
    answer: "BlackBox integrates seamlessly with GitHub, GitLab, Jenkins, Azure DevOps, and more. Our API allows for easy integration into your existing CI/CD pipeline."
  },
  {
    question: "Can BlackBox test dynamic content?",
    answer: "Yes! Our AI can handle dynamic content, single-page applications, and complex user interactions. It adapts to state changes and asynchronous content loading."
  },
  {
    question: "How accurate are the test results?",
    answer: "BlackBox achieves over 90% accuracy in bug detection, with a very low false-positive rate. Our AI continuously learns from feedback to improve accuracy."
  }
];

const FAQs = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-medium mb-3 inline-block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about BlackBox AI and how it can transform your testing process.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="neo-blur border border-white/10 rounded-lg px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;
