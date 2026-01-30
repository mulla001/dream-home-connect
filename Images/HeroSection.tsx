import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-primary-foreground text-sm font-medium">
              Verified & Licensed Professionals Only
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Build Your Dream Home with{" "}
            <span className="text-gradient-gold">Licensed Engineers</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Connect land owners with verified civil engineers and contractors. 
            No more unqualified masons — only licensed professionals with proven track records.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg">
              I'm a Land Owner
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg">
              I'm a Contractor
            </Button>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-secondary" />
                <span className="font-display text-3xl font-bold text-primary-foreground">500+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Licensed Engineers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-5 h-5 text-secondary" />
                <span className="font-display text-3xl font-bold text-primary-foreground">1,200+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="font-display text-3xl font-bold text-primary-foreground">100%</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Verified Licenses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(210 20% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
