

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/forms/ContactForm';
import ContactAIAnimation from '@/components/animations/ContactAIAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Mail, 
  Book, 
  Video, 
  Phone,
  Clock,
  CheckCircle,
  FileText,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  const supportOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      action: "Send Email",
      availability: "Response within 4 hours",
      contact: "support@nextsqa.com"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      action: "Call Now",
      availability: "Mon-Fri 9AM-6PM EST",
      contact: "+1 (555) 123-4567"
    }
  ];

  const resources = [
    {
      icon: Book,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      link: "/docs"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for common tasks",
      link: "/tutorials"
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Answers to frequently asked questions",
      link: "/faq"
    },
    {
      icon: FileText,
      title: "Knowledge Base",
      description: "In-depth articles and troubleshooting guides",
      link: "/knowledge-base"
    }
  ];

  const commonQuestions = [
    {
      question: "Getting started with your first test",
      answer: "To get started with NextSQA, simply sign up for an account, verify your email, and follow our quick setup guide. You can run your first automated test within 5 minutes by entering your website URL and describing what you want to test in plain English."
    },
    {
      question: "Setting up CI/CD integrations",
      answer: "NextSQA integrates seamlessly with popular CI/CD platforms like GitHub Actions, GitLab CI, Jenkins, and Azure DevOps. Use our pre-built plugins or REST API to trigger tests automatically on code commits, pull requests, or scheduled intervals."
    },
    {
      question: "Understanding test results",
      answer: "Test results include detailed reports with screenshots, performance metrics, and identified issues. Each result shows pass/fail status, execution time, browser compatibility, and actionable recommendations for fixing any detected problems."
    },
    {
      question: "Configuring browser settings",
      answer: "You can configure browser settings including viewport sizes, user agents, geolocation, and device emulation. NextSQA supports testing across Chrome, Firefox, Safari, and Edge with customizable settings for each browser environment."
    },
    {
      question: "Managing team permissions",
      answer: "Team management allows you to invite members with different permission levels: Admin (full access), Editor (create/edit tests), and Viewer (read-only). You can also set up team-specific projects and control access to sensitive test data."
    },
    {
      question: "Billing and subscription questions",
      answer: "We offer flexible pricing plans including a free tier for small projects. Billing is monthly or annual, with options to upgrade/downgrade anytime. Enterprise plans include custom features, dedicated support, and volume discounts."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 hero-gradient">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground">
                We're Here to{' '}
                <span className="text-gradient-primary">Help You Succeed</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Get the support you need to make the most of NextSQA. Our team is ready to help you 
                with setup, troubleshooting, and everything in between.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section with Side Animation */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
                Get in Touch
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Contact our support team for any questions or assistance you need
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-center">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <ContactForm />
              </div>
              
              {/* Animation */}
              <div className="order-1 lg:order-2">
                <ContactAIAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
                Alternative Support Methods
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose the support method that works best for you
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-6 md:p-8">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                        <option.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">
                        {option.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                        {option.description}
                      </p>
                      <div className="flex items-center justify-center text-sm text-primary mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        {option.availability}
                      </div>
                      <div className="text-sm font-medium text-foreground mb-4">
                        {option.contact}
                      </div>
                      <Button className="w-full hover:scale-105 transition-transform duration-300">
                        {option.action}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Resources */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
                Self-Service Resources
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Find answers and learn at your own pace
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={resource.link}>
                    <Card className="text-center h-full border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                          <resource.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {resource.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Questions */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12 md:mb-16"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
                  Common Questions
                </h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  Quick answers to frequently asked questions
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {commonQuestions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-background rounded-lg border border-border px-6 overflow-hidden"
                    >
                      <AccordionTrigger className="text-left text-base font-medium py-4 hover:text-primary transition-colors">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{item.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;

