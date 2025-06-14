import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Share2, 
  Github, 
  Twitter, 
  MessageCircle,
  Calendar,
  Trophy,
  Zap,
  Star,
  ArrowRight,
  BookOpen,
  Video,
  Coffee,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityPage = () => {
  const communityStats = [
    { icon: Users, label: "Active Members", value: "15,000+" },
    { icon: MessageSquare, label: "Monthly Discussions", value: "2,500+" },
    { icon: Trophy, label: "Solved Issues", value: "10,000+" },
    { icon: Star, label: "Community Rating", value: "4.9/5" }
  ];

  const communityChannels = [
    {
      icon: MessageCircle,
      title: "Discord Server",
      description: "Real-time chat with fellow developers and our team",
      members: "8,500+ members",
      action: "Join Discord",
      color: "bg-purple-500"
    },
    {
      icon: Github,
      title: "GitHub Discussions",
      description: "Technical discussions, feature requests, and bug reports",
      members: "3,200+ contributors",
      action: "View on GitHub",
      color: "bg-gray-800"
    },
    {
      icon: Twitter,
      title: "Twitter Community",
      description: "Latest updates, tips, and community highlights",
      members: "12,000+ followers",
      action: "Follow Us",
      color: "bg-blue-500"
    }
  ];

  const communityFeatures = [
    {
      icon: Lightbulb,
      title: "Share Ideas",
      description: "Propose new features and improvements to NextSQA"
    },
    {
      icon: BookOpen,
      title: "Learn Together",
      description: "Access community-created tutorials and best practices"
    },
    {
      icon: Coffee,
      title: "Virtual Meetups",
      description: "Join monthly community calls and workshops"
    },
    {
      icon: Trophy,
      title: "Recognition Program",
      description: "Get recognized for your contributions to the community"
    }
  ];

  const upcomingEvents = [
    {
      date: "Dec 15",
      title: "Monthly Community Call",
      time: "2:00 PM EST",
      type: "Virtual Meetup"
    },
    {
      date: "Dec 22",
      title: "Testing Best Practices Workshop",
      time: "1:00 PM EST",
      type: "Workshop"
    },
    {
      date: "Jan 5",
      title: "New Year Planning Session",
      time: "3:00 PM EST",
      type: "Planning"
    }
  ];

  const featuredContributors = [
    {
      name: "Sarah Chen",
      role: "Testing Evangelist",
      contributions: "125 helpful answers",
      avatar: "SC"
    },
    {
      name: "Alex Rodriguez",
      role: "Community Moderator",
      contributions: "200+ discussions led",
      avatar: "AR"
    },
    {
      name: "Jordan Kim",
      role: "Tutorial Creator",
      contributions: "15 video tutorials",
      avatar: "JK"
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
                Join a Community of{' '}
                <span className="text-gradient-primary">Testing Innovators</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Connect with developers, share knowledge, and shape the future of testing together. 
                Our community is your gateway to collaboration and continuous learning.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Channels */}
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
                Connect on Your Favorite Platform
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose where you want to engage with our community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {communityChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-6 md:p-8 text-center">
                      <div className={`w-12 h-12 md:w-16 md:h-16 ${channel.color} rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <channel.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">
                        {channel.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                        {channel.description}
                      </p>
                      <div className="text-sm text-primary mb-4 font-medium">
                        {channel.members}
                      </div>
                      <Button className="w-full hover:scale-105 transition-transform duration-300">
                        {channel.action}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Features */}
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
                What You Can Do
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover all the ways you can contribute and benefit from our community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                        <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                {/* Events */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                    Upcoming Events
                  </h2>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <Card key={index} className="border-border hover:shadow-md transition-all duration-300 hover:scale-105 group cursor-pointer">
                        <CardContent className="p-4 md:p-6">
                          <div className="flex items-start gap-4">
                            <div className="text-center flex-shrink-0">
                              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-1">
                                <Calendar className="w-5 h-5 text-primary" />
                              </div>
                              <div className="text-xs font-medium text-primary">{event.date}</div>
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                              <p className="text-sm text-muted-foreground mb-2">{event.time}</p>
                              <Badge variant="secondary" className="text-xs">{event.type}</Badge>
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>

                {/* Featured Contributors */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                    Featured Contributors
                  </h2>
                  <div className="space-y-4">
                    {featuredContributors.map((contributor, index) => (
                      <Card key={index} className="border-border hover:shadow-md transition-all duration-300 hover:scale-105 group">
                        <CardContent className="p-4 md:p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">
                              {contributor.avatar}
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-foreground">{contributor.name}</h3>
                              <p className="text-sm text-muted-foreground mb-1">{contributor.role}</p>
                              <p className="text-xs text-primary">{contributor.contributions}</p>
                            </div>
                            <Star className="w-5 h-5 text-yellow-500" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
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
                Ready to Join Our Community?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                Become part of a thriving community of testers, developers, and innovators. 
                Share your knowledge, learn from others, and help shape the future of testing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                  <MessageCircle className="w-4 h-4" />
                  Join Discord
                </Button>
                <Button variant="outline" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                  <Github className="w-4 h-4" />
                  GitHub Discussions
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

export default CommunityPage;
