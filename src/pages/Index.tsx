
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Features from '@/components/Features';
import UseCases from '@/components/UseCases';
import BlogsSection from '@/components/BlogsSection';
import FAQs from '@/components/FAQs';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhyChooseUs />
        <HowItWorks />
        <Features />
        <UseCases />
        <BlogsSection />
        <FAQs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
