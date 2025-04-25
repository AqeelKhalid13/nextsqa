
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-gradient py-16 md:py-28">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <div className="flex flex-col lg:w-1/2 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Test Smarter, Not Harder – AI-Powered Website Testing in One Click.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Black Box lets developers test any website with AI automation — integrated with GitHub, DevOps, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Start Free Trial
              </Button>
              
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                See It In Action
              </Button>
            </div>
          </div>
          
          {/* Hero Animation */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              {/* Browser mockup */}
              <div className="bg-gray-900 rounded-t-lg p-3">
                <div className="flex items-center">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto bg-gray-700 rounded px-3 py-1 text-xs text-gray-300 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                    yourwebsite.com
                  </div>
                </div>
              </div>
              
              {/* Browser content */}
              <div className="bg-gray-800 p-4 h-[280px] rounded-b-lg overflow-hidden relative">
                {/* Test runner visualization */}
                <div className="absolute top-4 left-4 right-4 bg-gray-700 p-3 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-gray-300 font-mono text-sm">AI Test Running...</div>
                    <div className="bg-primary/40 px-2 py-0.5 rounded-full text-xs text-white animate-pulse">
                      Testing in progress
                    </div>
                  </div>
                  <div className="h-6 bg-gray-600 rounded-md w-full mb-2 overflow-hidden relative">
                    <div className="h-full bg-primary/60 rounded-md w-3/4 animate-pulse-light"></div>
                  </div>
                  <div className="font-mono text-xs text-gray-400">
                    Checking login form validation...
                  </div>
                </div>
                
                {/* Test results */}
                <div className="absolute bottom-4 left-4 right-4 bg-gray-700 p-3 rounded-md">
                  <div className="text-red-400 font-mono text-sm mb-1">
                    ⚠️ Issue detected: 
                  </div>
                  <div className="text-xs text-gray-300 font-mono">
                    Login form accepts empty email field
                  </div>
                  <div className="mt-2 bg-gray-600 p-2 rounded text-xs text-gray-300 font-mono">
                    <span className="text-green-400">Suggestion: </span> 
                    Add validation to require email format
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
