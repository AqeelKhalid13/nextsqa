import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import WaitlistForm from './WaitlistForm';
import ThemeToggle from './ThemeToggle';
import UserProfileDropdown from './UserProfileDropdown';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isMobile = useIsMobile();

  // Check if user is logged in
  useEffect(() => {
    const checkLoginStatus = () => {
      const user = localStorage.getItem('user');
      setIsLoggedIn(!!user);
    };
    
    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      x: "100%", 
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: {
        duration: 0.2 
      }
    }
  };

  const navLinks = [
    { name: "How it works", url: "/how-it-works" },
    { name: "Features", url: "/features" },
    { name: "Use Cases", url: "/use-cases" },
    { name: "Blogs", url: "/blogs" },
    { name: "Pricing", url: "#pricing" }
  ];

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-background/70 shadow-sm' : ''}`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-lg font-bold text-white">N</span>
                </div>
                <span className="text-xl font-bold text-foreground">NextSQA</span>
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            {!isMobile && (
              <motion.nav variants={itemVariants} className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <motion.div key={link.name}>
                    {link.url.startsWith('#') ? (
                      <motion.a 
                        href={link.url}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {link.name}
                      </motion.a>
                    ) : (
                      <Link 
                        to={link.url}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <motion.span
                          whileHover={{ y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="block"
                        >
                          {link.name}
                        </motion.span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.nav>
            )}
            
            {/* Call to action buttons */}
            {!isMobile && (
              <motion.div variants={itemVariants} className="hidden md:flex items-center space-x-4">
                <ThemeToggle />
                {isLoggedIn ? (
                  <UserProfileDropdown />
                ) : (
                  <>
                    <motion.div>
                      <Link to="/login">
                        <Button
                          variant="ghost"
                          className="text-foreground hover:bg-accent"
                        >
                          Log in
                        </Button>
                      </Link>
                    </motion.div>
                    <motion.div>
                      <Button
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={() => setWaitlistOpen(true)}
                      >
                        Join our Wait List
                      </Button>
                    </motion.div>
                  </>
                )}
              </motion.div>
            )}
            
            {/* Mobile menu button */}
            <motion.div variants={itemVariants} className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              {isLoggedIn && <UserProfileDropdown />}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground hover:bg-accent"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 mt-16 bg-background/95 backdrop-blur-lg z-40"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="container mx-auto px-6 py-8">
                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={mobileItemVariants}>
                      {link.url.startsWith('#') ? (
                        <a 
                          href={link.url}
                          className="text-xl text-foreground border-b border-border pb-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link 
                          to={link.url}
                          className="text-xl text-foreground border-b border-border pb-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  
                  {!isLoggedIn && (
                    <motion.div variants={mobileItemVariants} className="pt-4">
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-4"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setWaitlistOpen(true);
                        }}
                      >
                        Join our Wait List
                      </Button>
                      
                      <Link to="/login">
                        <Button 
                          variant="outline"
                          className="w-full text-foreground border-border hover:bg-accent"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Log in
                        </Button>
                      </Link>
                    </motion.div>
                  )}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* Waitlist Form Dialog */}
      <WaitlistForm open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </>
  );
};

export default Navbar;
