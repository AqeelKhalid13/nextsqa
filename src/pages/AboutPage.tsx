import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Target, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Clock, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Building2,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Accuracy",
      description: "Smarter test coverage with fewer false positives"
    },
    {
      icon: Zap,
      title: "Developer-Centric Design",
      description: "Built for speed, simplicity, and productivity"
    },
    {
      icon: Clock,
      title: "Faster Time to Market",
      description: "Test automation that keeps up with your sprint cycles"
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description: "Run hundreds of tests in parallel with enterprise-grade reliability"
    }
  ];

  const differentiators = [
    {
      icon: Sparkles,
      title: "AI-Based Test Generation",
      description: "Say goodbye to time-consuming manual scripting. Generate smart, stable tests with the click of a button using AI."
    },
    {
      icon: Shield,
      title: "Automated End-to-End Testing",
      description: "Run tests across browsers and devices with ease, ensuring a consistent user experience everywhere."
    },
    {
      icon: CheckCircle,
      title: "Smooth GitHub & CI/CD Integration",
      description: "Keep testing where your code lives. NextSQA integrates directly with GitHub and your DevOps tools to catch issues before they hit production."
    },
    {
      icon: Target,
      title: "Actionable Test Reports",
      description: "Instantly identify flaky tests, performance lags, and regressions with real-time, visual dashboards."
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
                Redefining Quality Assurance with{' '}
                <span className="text-gradient-primary">AI Innovation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're building the future of testing where AI, automation, and analytics work together 
                to create a seamless quality assurance experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are & Our Mission Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Who We Are */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <Building2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
                    Who We Are
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    At NextSQA, we're redefining how modern software teams approach quality assurance. 
                    Our platform harnesses the power of AI-driven automation to make testing faster, 
                    smarter, and more reliable. Whether you're a startup building your MVP or an 
                    enterprise scaling operations, we help you test confidently and release faster.
                  </p>
                </motion.div>

                {/* Our Mission */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <Target className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
                    Our Mission
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    We believe that software testing should enable innovation—not slow it down. 
                    That's why we built NextSQA: to deliver intelligent, developer-friendly testing 
                    solutions that integrate effortlessly into your existing workflows. Our goal is 
                    to empower teams to find bugs early, reduce manual effort, and ship with confidence.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
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
                What Sets Us Apart
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We're not just another testing tool. We're your AI-powered QA partner. 
                Here's what makes NextSQA different:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                          <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story & Our Vision Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Our Story */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
                    Our Story
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    NextSQA was born out of a simple realization: manual testing can't keep up with 
                    modern development cycles. Our founders—developers and QA experts themselves—set 
                    out to build a smarter way. Today, we help teams of all sizes automate, optimize, 
                    and scale their testing like never before.
                  </p>
                </motion.div>

                {/* Our Vision */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <Compass className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">
                    Our Vision
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    We're building the future of testing. Where AI, automation, and analytics work 
                    together to create a seamless quality assurance experience. Our platform is 
                    designed to help teams shift left, speed up releases, and build better software, faster.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Teams Choose NextSQA Section */}
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
                Why Teams Choose NextSQA
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-4 md:p-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                        <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Journey Section */}
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
                Join Our Journey
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                We're more than a tool. We're a community of forward-thinking developers, QA 
                professionals, and product teams. Explore our blog, follow us on social media, 
                or join our waitlist to get early access to the latest in AI-powered testing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/blogs">
                  <Button variant="outline" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                    Explore Our Blog
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Button className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                  Join Our Waitlist
                  <ArrowRight className="w-4 h-4" />
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

export default AboutPage;
