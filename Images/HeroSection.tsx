import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";

const HeroSection = () => {
  const bgUrl = "https://images.unsplash.com/photo-1542317854-8f2d3b1d7b2b?auto=format&fit=crop&w=1920&q=60";

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgUrl})`, backgroundRepeat: "no-repeat" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/55 to-blue-900/65" />

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 py-2 mb-8 justify-center mx-auto">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-primary-foreground text-sm font-medium">Verified & Licensed Professionals Only</span>
          </div>

          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mx-auto">
            Build Your Dream Home with <span className="text-gradient-gold block lg:inline">Licensed Engineers</span>
          </h1>

          <p className="mt-6 text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            Connect land owners with verified civil engineers and contractors. No more unqualified masons — only licensed professionals with proven track records.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="flex items-center gap-3">
              I'm a Land Owner
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg" className="flex items-center gap-3">
              I'm a Contractor
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center text-white">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-secondary" />
                <span className="font-display text-3xl font-bold">500+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Licensed Engineers</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-6 h-6 text-secondary" />
                <span className="font-display text-3xl font-bold">1,200+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Projects Completed</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-6 h-6 text-secondary" />
                <span className="font-display text-3xl font-bold">100%</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Verified Licenses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fff" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
