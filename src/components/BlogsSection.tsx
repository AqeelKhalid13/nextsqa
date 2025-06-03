
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: "The Future of AI-Powered Testing: What's Next?",
    excerpt: "Explore how artificial intelligence is revolutionizing software testing and what developers can expect in the coming years.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "AI & Testing"
  },
  {
    id: 2,
    title: "10 Common Website Bugs That AI Can Catch Instantly",
    excerpt: "Discover the most frequent website issues that traditional testing misses but AI can identify automatically.",
    author: "Mike Rodriguez",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Bug Detection"
  },
  {
    id: 3,
    title: "From Manual to Automated: A Developer's Journey",
    excerpt: "A real developer's story of transitioning from manual testing to AI-powered automated testing workflows.",
    author: "Alex Thompson",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Developer Stories"
  }
];

const BlogsSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    }
  };

  return (
    <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-full">
          {[...Array(6)].map((_, i) => (
            <motion.div 
              key={i} 
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
                rotate: [0, 45, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                ease: "easeInOut",
                repeat: Infinity,
                delay: i * 2
              }}
              className="absolute bg-primary rounded-full opacity-20"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(50px)'
              }}
            />
          ))}
        </div>
      </motion.div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-medium mb-3 inline-block">Latest Insights</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">From Our Blog</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in AI-powered testing.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {blogs.map((blog) => (
            <motion.article 
              key={blog.id}
              className="neo-blur rounded-xl border border-gray-800 overflow-hidden group hover:shadow-glow-subtle transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
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
                  <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">By {blog.author}</span>
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

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/blogs">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              View All Articles
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;
