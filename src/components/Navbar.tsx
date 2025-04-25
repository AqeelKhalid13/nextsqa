
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-10 w-full sticky top-0 bg-white/90 backdrop-blur-sm z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-navy flex items-center">
            <span className="bg-primary rounded p-1 mr-2">
              <span className="text-white font-bold">BB</span>
            </span>
            BlackBox
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
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
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-primary font-medium transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium transition-colors">How It Works</a>
          <a href="#use-cases" className="text-gray-600 hover:text-primary font-medium transition-colors">Use Cases</a>
          <Button variant="ghost">Sign In</Button>
          <Button>Start Free Trial</Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white p-4 shadow-lg z-50">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-600 hover:text-primary font-medium transition-colors px-4 py-2">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium transition-colors px-4 py-2">How It Works</a>
            <a href="#use-cases" className="text-gray-600 hover:text-primary font-medium transition-colors px-4 py-2">Use Cases</a>
            <Button variant="ghost" className="justify-start">Sign In</Button>
            <Button className="w-full">Start Free Trial</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
