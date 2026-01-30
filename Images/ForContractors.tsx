import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, TrendingUp, BadgeCheck } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Direct Client Access",
    description: "Connect directly with land owners looking for your expertise",
  },
  {
    icon: Briefcase,
    title: "Showcase Your Work",
    description: "Create a professional portfolio with your completed projects",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Get discovered by clients in your area and beyond",
  },
  {
    icon: BadgeCheck,
    title: "Build Credibility",
    description: "Your license and certifications displayed prominently",
  },
];

const ForContractors = () => {
  return (
    <section id="for-contractors" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Illustration */}
          <div className="order-2 lg:order-1 relative">
            <div className="bg-muted rounded-3xl p-8 lg:p-12">
              {/* Stats Card */}
              <div className="bg-card rounded-2xl p-6 shadow-elevated mb-6">
                <h4 className="font-display text-lg font-bold text-foreground mb-4">
                  Your Dashboard
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-xl p-4 text-center">
                    <span className="font-display text-2xl font-bold text-primary">24</span>
                    <p className="text-muted-foreground text-xs">New Inquiries</p>
                  </div>
                  <div className="bg-muted rounded-xl p-4 text-center">
                    <span className="font-display text-2xl font-bold text-secondary">8</span>
                    <p className="text-muted-foreground text-xs">Active Projects</p>
                  </div>
                  <div className="bg-muted rounded-xl p-4 text-center">
                    <span className="font-display text-2xl font-bold text-primary">₹45L</span>
                    <p className="text-muted-foreground text-xs">This Month</p>
                  </div>
                  <div className="bg-muted rounded-xl p-4 text-center">
                    <span className="font-display text-2xl font-bold text-secondary">4.9</span>
                    <p className="text-muted-foreground text-xs">Avg Rating</p>
                  </div>
                </div>
              </div>

              {/* Recent Inquiry */}
              <div className="bg-card rounded-2xl p-4 shadow-soft">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-secondary uppercase">New Inquiry</span>
                  <span className="text-xs text-muted-foreground">2 min ago</span>
                </div>
                <p className="text-foreground font-medium mb-2">3BHK Residential Project</p>
                <p className="text-muted-foreground text-sm">Looking for a civil engineer for 2400 sq ft plot in Bangalore...</p>
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-gold rounded-xl px-5 py-3 shadow-gold">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-primary font-bold">+47% Growth</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              For Contractors & Engineers
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Grow Your Construction Business
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Are you a licensed civil engineer struggling to find clients? 
              Join BuildConnect and get discovered by land owners actively looking 
              for qualified professionals like you.
            </p>

            {/* Benefit List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Register as Contractor
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForContractors;
