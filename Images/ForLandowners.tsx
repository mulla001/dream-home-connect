import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Shield, Clock, DollarSign, Star } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Licensed Professionals Only",
    description: "All contractors are verified with valid construction licenses",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    description: "Read authentic reviews from previous land owners",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "No more searching — get matched with qualified engineers quickly",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Compare quotes and choose what fits your budget",
  },
];

const ForLandowners = () => {
  return (
    <section id="for-landowners" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              For Land Owners
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Find Qualified Engineers for Your Dream Home
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Stop worrying about unqualified masons and fake contractors. 
              BuildConnect connects you only with licensed civil engineers who have 
              proven track records and genuine credentials.
            </p>

            {/* Benefit List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-soft"
                >
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Find a Contractor
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12">
              <div className="bg-card rounded-2xl p-6 shadow-elevated">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">RC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Rajesh Kumar</h4>
                    <p className="text-muted-foreground text-sm">Civil Engineer</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <Star className="w-4 h-4 text-secondary fill-secondary" />
                    <span className="font-semibold text-foreground">4.9</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-foreground">Licensed Civil Engineer</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-foreground">12 Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-foreground">150+ Projects Completed</span>
                  </div>
                </div>

                <Button className="w-full" variant="default">
                  View Profile
                </Button>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl px-4 py-2 shadow-elevated flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm font-semibold text-foreground">Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForLandowners;
