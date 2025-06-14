
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, Crown } from 'lucide-react';
import PricingCard from './PricingCard';

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started with AI testing",
      icon: <Zap className="h-6 w-6" />,
      popular: false,
      features: [
        "Test Case Management",
        "Basic Bug Reports",
        "Up to 5 Test Executions/month",
        "Email Support",
        "Basic Analytics",
        "1 Team Member",
        "Version Control Integration"
      ]
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Advanced features for growing teams and comprehensive testing",
      icon: <Star className="h-6 w-6" />,
      popular: true,
      features: [
        "Advanced Test Cases",
        "Detailed Bug Reports",
        "Unlimited Test Executions",
        "Test Plans & Automation",
        "Advanced Analytics & Reports",
        "Quality Metrics Dashboard",
        "Up to 10 Team Members",
        "Priority Support",
        "All Integrations",
        "Custom Test Flows"
      ]
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "Full-scale solution for large organizations with custom needs",
      icon: <Crown className="h-6 w-6" />,
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited Team Members",
        "Advanced Team Management",
        "Custom Integrations",
        "White-label Options",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Custom SLA",
        "Advanced Security Features",
        "API Access",
        "Custom Training"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
