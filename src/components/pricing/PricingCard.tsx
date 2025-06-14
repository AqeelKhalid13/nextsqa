
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  popular: boolean;
  features: string[];
}

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4
    }
  }
};

const PricingCard = ({ plan, index }: PricingCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 15 }
      }}
      className="relative"
    >
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 400 }}
          className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10"
        >
          <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
            Most Popular
          </Badge>
        </motion.div>
      )}
      
      <Card className={`h-full relative overflow-hidden ${
        plan.popular 
          ? 'border-primary shadow-lg shadow-primary/20' 
          : 'border-border hover:border-primary/30'
      } transition-all duration-300`}>
        <CardHeader className="text-center pb-10 pt-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 400 }}
            className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6"
          >
            <div className="text-primary">
              {plan.icon}
            </div>
          </motion.div>
          
          <CardTitle className="text-3xl font-bold mb-4">{plan.name}</CardTitle>
          <p className="text-muted-foreground text-base mb-6 leading-relaxed px-2">{plan.description}</p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="flex items-end justify-center gap-1"
          >
            <span className="text-5xl font-bold text-foreground">{plan.price}</span>
            <span className="text-muted-foreground text-lg mb-1">{plan.period}</span>
          </motion.div>
        </CardHeader>
        
        <CardContent className="pt-0 px-8 pb-8">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.4 + index * 0.1
                }
              }
            }}
            className="space-y-4 mb-10"
          >
            {plan.features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                variants={featureVariants}
                className="flex items-start gap-3"
              >
                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-base text-muted-foreground leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <Button
              className={`w-full h-12 text-base font-semibold ${
                plan.popular
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
              }`}
              size="lg"
            >
              Get Started
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
