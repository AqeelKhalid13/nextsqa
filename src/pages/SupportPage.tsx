
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Book, 
  Video, 
  Search,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      availability: "24/7 Available"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      action: "Send Email",
      availability: "Response within 4 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      action: "Call Now",
      availability: "Mon-Fri 9AM-6PM EST"
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

  const commonIssues = [
    "Getting started with your first test",
    "Setting up CI/CD integrations",
    "Understanding test results",
    "Configuring browser settings",
    "Managing team permissions",
    "Billing and subscription questions"
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
              <Badge variant="secondary" className="mb-4 md:mb-6">
                Support Center
              </Badge>
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

        {/* Quick Search */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Options */}
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
                Get Support Your Way
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose the support method that works best for you
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
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
                      <div className="flex items-center justify-center text-sm text-primary mb-4">
                        <Clock className="w-4 h-4 mr-2" />
                        {option.availability}
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

        {/* Common Issues */}
        <section className="py-16 md:py-20">
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

              <div className="grid gap-4">
                {commonIssues.map((issue, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-border hover:shadow-md transition-all duration-300 hover:scale-105 group cursor-pointer">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-sm md:text-base text-foreground">{issue}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
                Still Need Help?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                Our support team is standing by to help you succeed with NextSQA. 
                Don't hesitate to reach out - we're here for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                  <MessageCircle className="w-4 h-4" />
                  Start Live Chat
                </Button>
                <Button variant="outline" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                  <Mail className="w-4 h-4" />
                  Send Email
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;
