
import React from 'react';

const useCases = [
  {
    title: "Frontend Developers",
    description: "Quickly test UI/UX flows without writing endless test scripts. Catch bugs before PR reviews.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "QA Engineers",
    description: "Automate regression tests and focus on creating more complex test cases that really matter.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Startup Teams",
    description: "Move fast without breaking things. Quickly test features before launch without dedicated QA resources.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Agile Teams",
    description: "Integrate automated testing directly into sprint cycles with CI/CD pipeline support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Use Cases</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how different teams are using BlackBox AI to streamline their testing processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm flex flex-col md:flex-row gap-6 border border-gray-100"
            >
              <div className="bg-primary/10 p-4 rounded-full h-fit">
                {useCase.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">Why Choose BlackBox AI?</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center border border-gray-100">
              <div className="text-3xl font-bold text-primary mb-2">80%</div>
              <p className="text-gray-600">Reduction in manual testing time</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-gray-100">
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <p className="text-gray-600">Bugs caught before production</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-gray-100">
              <div className="text-3xl font-bold text-primary mb-2">3x</div>
              <p className="text-gray-600">Faster development iterations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
