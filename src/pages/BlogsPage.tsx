import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';

const blogs = [
  {
    id: 1,
    title: "The Future of AI-Powered Testing: What's Next?",
    excerpt: "Explore how artificial intelligence is revolutionizing software testing and what developers can expect in the coming years. From machine learning algorithms to predictive analytics.",
    content: "As we stand at the forefront of technological advancement, artificial intelligence is reshaping every aspect of software development...",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "AI & Testing",
    featured: true
  },
  {
    id: 2,
    title: "10 Common Website Bugs That AI Can Catch Instantly",
    excerpt: "Discover the most frequent website issues that traditional testing misses but AI can identify automatically. Save hours of manual debugging.",
    content: "Manual testing, while thorough, often misses subtle bugs that can significantly impact user experience...",
    author: "Mike Rodriguez",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Bug Detection"
  },
  {
    id: 3,
    title: "From Manual to Automated: A Developer's Journey",
    excerpt: "A real developer's story of transitioning from manual testing to AI-powered automated testing workflows. Learn from their experiences.",
    content: "When I first started as a frontend developer, testing was the bane of my existence...",
    author: "Alex Thompson",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Developer Stories"
  },
  {
    id: 4,
    title: "Cross-Browser Testing Made Simple with AI",
    excerpt: "Learn how AI simplifies cross-browser compatibility testing and ensures your website works perfectly across all browsers and devices.",
    content: "Cross-browser testing has always been a nightmare for developers. Different browsers render websites differently...",
    author: "Emma Wilson",
    date: "2024-01-02",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Testing Strategies"
  },
  {
    id: 5,
    title: "The ROI of Automated Testing: A Business Perspective",
    excerpt: "Understand the financial benefits of implementing automated testing in your development workflow and how it impacts your bottom line.",
    content: "In today's fast-paced development environment, the cost of bugs reaching production can be astronomical...",
    author: "David Park",
    date: "2023-12-28",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "Business"
  },
  {
    id: 6,
    title: "Performance Testing in the Age of AI",
    excerpt: "Discover how AI-powered performance testing can help you identify bottlenecks and optimize your application's speed and efficiency.",
    content: "Performance is crucial for user experience and business success. Slow websites lose users and revenue...",
    author: "Lisa Zhang",
    date: "2023-12-25",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Performance"
  }
];

const categories = ["All", "AI & Testing", "Bug Detection", "Developer Stories", "Testing Strategies", "Business", "Performance"];

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  
  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              NextSQA <span className="text-gradient-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Insights, tutorials, and stories about AI-powered testing, 
              development best practices, and the future of software quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-glow-small'
                    : 'bg-card/50 text-muted-foreground hover:bg-card/80'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Blog */}
      {selectedCategory === "All" && (
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-10">
            <motion.div 
              className="neo-blur rounded-xl border border-border overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                borderColor: "rgba(255, 255, 255, 0.2)"
              }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative overflow-hidden">
                  <img 
                    src={blogs[0].image} 
                    alt={blogs[0].title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs">
                      {blogs[0].category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(blogs[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{blogs[0].readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {blogs[0].title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6">
                    {blogs[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">By {blogs[0].author}</span>
                    <Link to={`/blogs/${blogs[0].id}`}>
                      <Button className="bg-primary hover:bg-primary/90">
                        Read Article <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredBlogs.slice(selectedCategory === "All" ? 1 : 0).map((blog) => (
              <motion.article 
                key={blog.id}
                className="neo-blur rounded-xl border border-border overflow-hidden group"
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                  borderColor: "rgba(255, 255, 255, 0.15)"
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Tag size={12} />
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">By {blog.author}</span>
                    <Link to={`/blogs/${blog.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                        Read More <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default BlogsPage;
