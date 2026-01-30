import { Search, FileCheck, Handshake, Home } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Professionals",
    description: "Browse verified civil engineers and contractors in your area with ratings and reviews.",
    color: "bg-primary",
  },
  {
    icon: FileCheck,
    title: "Verify Credentials",
    description: "View licenses, certifications, and past project portfolios before connecting.",
    color: "bg-secondary",
  },
  {
    icon: Handshake,
    title: "Connect & Discuss",
    description: "Chat directly, share your requirements, and get transparent quotes.",
    color: "bg-primary",
  },
  {
    icon: Home,
    title: "Build Your Dream",
    description: "Work with trusted professionals to bring your dream home to life.",
    color: "bg-secondary",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            How BuildConnect Works
          </h2>
          <p className="text-muted-foreground text-lg">
            From finding the right professional to completing your project — we make it seamless.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 group-hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-primary font-bold text-sm shadow-gold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-5`}>
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
