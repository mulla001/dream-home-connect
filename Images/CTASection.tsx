import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-primary-foreground rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10">
            Join thousands of land owners and contractors who trust BuildConnect 
            to make construction simple, transparent, and reliable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
