
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, User, Share2, Heart, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import WaitlistForm from '@/components/WaitlistForm';

// Define the valid blog IDs as a union type
type BlogId = "1" | "2" | "3";

const blogs = {
  "1": {
    id: 1,
    title: "The Future of AI-Powered Testing: What's Next?",
    content: `
      <p>Artificial Intelligence is revolutionizing the software testing landscape in ways we never imagined. As we look toward the future, several key trends are emerging that will shape how we approach quality assurance in software development.</p>
      
      <h2>The Current State of AI Testing</h2>
      <p>Today's AI testing tools can automatically generate test cases, identify visual regressions, and even predict where bugs are likely to occur. But this is just the beginning. The next generation of AI-powered testing will be more sophisticated, more intuitive, and more integrated into the development workflow.</p>
      
      <h2>Emerging Trends</h2>
      <p>We're seeing several exciting developments:</p>
      <ul>
        <li><strong>Predictive Testing:</strong> AI will soon be able to predict which parts of your application are most likely to break before you even deploy.</li>
        <li><strong>Self-Healing Tests:</strong> Tests that can automatically adapt when the UI changes, reducing maintenance overhead.</li>
        <li><strong>Natural Language Testing:</strong> Writing tests in plain English that AI can understand and execute.</li>
      </ul>
      
      <h2>What This Means for Developers</h2>
      <p>The future of AI-powered testing means developers can focus on what they do best - building amazing features - while AI handles the heavy lifting of ensuring quality. This shift will fundamentally change how teams approach software development.</p>
    `,
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "AI & Testing",
    tags: ["AI", "Testing", "Future", "Automation"]
  },
  "2": {
    id: 2,
    title: "10 Common Website Bugs That AI Can Catch Instantly",
    content: `
      <p>Traditional testing methods often miss subtle bugs that can significantly impact user experience. AI-powered testing tools excel at catching these issues that human testers might overlook.</p>
      
      <h2>1. Visual Regressions</h2>
      <p>Small changes in layout, fonts, or colors that break the visual design. AI can detect pixel-perfect differences across different browsers and devices.</p>
      
      <h2>2. Broken Links and Images</h2>
      <p>AI crawlers can systematically check every link and image on your site, identifying broken resources that could frustrate users.</p>
      
      <h2>3. Performance Bottlenecks</h2>
      <p>AI can analyze load times, identify slow-loading elements, and suggest optimizations for better performance.</p>
      
      <h2>4. Accessibility Issues</h2>
      <p>From missing alt text to poor color contrast, AI can automatically scan for accessibility violations.</p>
      
      <h2>5. Mobile Responsiveness Problems</h2>
      <p>AI testing can simulate hundreds of device configurations to ensure your site works perfectly on every screen size.</p>
    `,
    author: "Mike Rodriguez",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Bug Detection",
    tags: ["Bugs", "Detection", "AI", "Quality Assurance"]
  },
  "3": {
    id: 3,
    title: "From Manual to Automated: A Developer's Journey",
    content: `
      <p>Three years ago, I was spending 40% of my time writing and maintaining tests. Today, AI handles most of that work, and I'm more productive than ever. Here's my story of transitioning from manual to AI-powered testing.</p>
      
      <h2>The Old Way</h2>
      <p>Manual testing was time-consuming and error-prone. I'd spend hours writing test scripts, only to have them break when the UI changed. The maintenance overhead was crushing our team's productivity.</p>
      
      <h2>Discovery</h2>
      <p>When I first heard about AI-powered testing, I was skeptical. How could a machine understand the nuances of user experience testing? But after trying it on a small project, I was amazed.</p>
      
      <h2>The Transformation</h2>
      <p>The transition wasn't instant, but the benefits became clear quickly:</p>
      <ul>
        <li>Test creation time reduced by 80%</li>
        <li>Faster feedback loops</li>
        <li>More comprehensive test coverage</li>
        <li>Reduced maintenance overhead</li>
      </ul>
      
      <h2>Lessons Learned</h2>
      <p>The key to successful adoption is starting small and gradually expanding AI testing to more areas of your application. Don't try to automate everything at once.</p>
    `,
    author: "Alex Thompson",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Developer Stories",
    tags: ["Developer Experience", "Automation", "Journey", "Productivity"]
  }
};

const BlogDetailPage = () => {
  const { id } = useParams();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(42);

  // Type guard to ensure id is a valid BlogId
  const isValidBlogId = (id: string | undefined): id is BlogId => {
    return id !== undefined && (id === "1" || id === "2" || id === "3");
  };

  if (!isValidBlogId(id)) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
            <Link to="/blogs">
              <Button variant="outline">Back to Blogs</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const blog = blogs[id];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-background via-secondary/20 to-background">
          <div className="container mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/blogs" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-2" />
                Back to Blogs
              </Link>
              
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {blog.title}
                </h1>
                
                <div className="flex items-center gap-6 text-gray-400 mb-8">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-8">
                  <Button
                    variant={isLiked ? "default" : "outline"}
                    size="sm"
                    onClick={handleLike}
                    className="flex items-center gap-2"
                  >
                    <Heart size={16} className={isLiked ? "fill-current" : ""} />
                    {likes}
                  </Button>
                  
                  <Button variant="outline" size="sm" onClick={handleShare} className="flex items-center gap-2">
                    <Share2 size={16} />
                    Share
                  </Button>
                  
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <MessageCircle size={16} />
                    Comment
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 pt-8 border-t border-gray-800"
              >
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CallToAction onJoinWaitlist={() => setIsWaitlistOpen(true)} />
      </main>

      <Footer />
      <WaitlistForm open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </div>
  );
};

export default BlogDetailPage;
