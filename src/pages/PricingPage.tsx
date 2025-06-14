
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingHero from '@/components/pricing/PricingHero';
import PricingPlans from '@/components/pricing/PricingPlans';
import PricingFAQ from '@/components/pricing/PricingFAQ';

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <Footer />
    </div>
  );
};

export default PricingPage;
