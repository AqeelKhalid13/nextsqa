
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface WaitlistFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistForm = ({ open, onOpenChange }: WaitlistFormProps) => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      // In a real app, this would be an API call to save the user's information
      console.log("Waitlist submission:", { name, email });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });

      // Reset form after 3 seconds and close the dialog
      setTimeout(() => {
        setName('');
        setEmail('');
        setIsSuccess(false);
        onOpenChange(false);
      }, 3000);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Join Our Waitlist</DialogTitle>
              <DialogDescription>
                Be the first to know when NextSQA launches. We'll notify you as soon as we're ready!
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  disabled={isSubmitting}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                  required
                />
              </div>
              <DialogFooter>
                <Button 
                  type="submit" 
                  className="w-full mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Join Waitlist"}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="py-12 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium">Thank you!</h3>
            <p className="text-muted-foreground">
              We've added you to our waitlist. We'll notify you when NextSQA is ready to launch!
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistForm;
