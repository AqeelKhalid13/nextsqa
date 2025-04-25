
import React from 'react';

const steps = [
  {
    title: "Paste Your URL",
    description: "Enter the link to your web app or staging site.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Tell AI What to Test",
    description: 'Type a prompt like "Check login flow" or "Verify checkout process."',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    title: "Review Smart Report",
    description: "AI runs the test and gives you an interactive bug report with visuals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Black Box makes website testing simple with just three easy steps. No complex setup required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md"
            >
              <div className="bg-primary/10 p-3 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process diagram */}
        <div className="mt-16 max-w-4xl mx-auto hidden md:block">
          <div className="h-1 bg-primary/30 relative mx-12">
            {/* Process dots */}
            <div className="absolute left-0 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
            <div className="absolute right-0 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
