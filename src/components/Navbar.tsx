
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }
    })
  };

  return (
    <nav 
      className={`py-4 px-6 md:px-10 w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <motion.a 
            href="/" 
            className="text-2xl font-bold text-navy flex items-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-2 mr-2 transition-all duration-300"
              whileHover={{ 
                boxShadow: "0 0 15px rgba(79, 70, 229, 0.6)",
              }}
            >
              <span className="text-white font-bold">NS</span>
            </motion.span>
            <span className={`transition-colors duration-300 ${isScrolled ? 'text-navy' : 'text-white'}`}>NextSQA</span>
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className={`transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.svg 
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg 
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Features", "How It Works", "Use Cases"].map((item, i) => (
            <motion.a 
              key={item}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`font-medium transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-200 hover:text-white'
              }`}
            >
              {item}
            </motion.a>
          ))}
          
          <motion.div
            custom={3}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Button 
              variant="ghost" 
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </Button>
          </motion.div>
          
          <motion.div
            custom={4}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Button 
              className="bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow-glow-small transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(79, 70, 229, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md p-6 shadow-lg z-50"
          >
            <motion.div 
              className="flex flex-col space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {["Features", "How It Works", "Use Cases"].map((item, i) => (
                <motion.a 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    transition: { delay: i * 0.1, duration: 0.4 } 
                  }}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-700 hover:text-primary font-medium transition-colors px-4 py-2 rounded-md hover:bg-gray-50"
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  transition: { delay: 0.3, duration: 0.4 } 
                }}
              >
                <Button variant="ghost" className="justify-start w-full text-left">Sign In</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  transition: { delay: 0.4, duration: 0.4 } 
                }}
              >
                <Button className="w-full">Start Free Trial</Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};
