
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

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
          <a href="/" className="text-2xl font-bold text-navy flex items-center group">
            <span className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-2 mr-2 transition-all duration-300 group-hover:shadow-glow-small">
              <span className="text-white font-bold">BB</span>
            </span>
            <span className={`transition-colors duration-300 ${isScrolled ? 'text-navy' : 'text-white'}`}>BlackBox</span>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          <a 
            href="#features" 
            className={`font-medium transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-200 hover:text-white'
            }`}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className={`font-medium transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-200 hover:text-white'
            }`}
          >
            How It Works
          </a>
          <a 
            href="#use-cases" 
            className={`font-medium transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-200 hover:text-white'
            }`}
          >
            Use Cases
          </a>
          
          <Button 
            variant="ghost" 
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            Sign In
          </Button>
          
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow-glow-small transition-all duration-300">
            Start Free Trial
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md p-6 shadow-lg z-50"
        >
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 hover:text-primary font-medium transition-colors px-4 py-2 rounded-md hover:bg-gray-50">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary font-medium transition-colors px-4 py-2 rounded-md hover:bg-gray-50">How It Works</a>
            <a href="#use-cases" className="text-gray-700 hover:text-primary font-medium transition-colors px-4 py-2 rounded-md hover:bg-gray-50">Use Cases</a>
            <Button variant="ghost" className="justify-start">Sign In</Button>
            <Button className="w-full">Start Free Trial</Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
