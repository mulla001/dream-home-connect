import { Star, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import contractor1 from "@/assets/contractor-1.jpg";
import contractor2 from "@/assets/contractor-2.jpg";
import contractor3 from "@/assets/contractor-3.jpg";

const contractors = [
  {
    name: "Arjun Mehta",
    title: "Senior Civil Engineer",
    location: "Bangalore, Karnataka",
    rating: 4.9,
    reviews: 127,
    projects: 85,
    experience: "15 years",
    specialization: "Residential Buildings",
    image: contractor1,
    verified: true,
  },
  {
    name: "Priya Sharma",
    title: "Structural Engineer",
    location: "Chennai, Tamil Nadu",
    rating: 4.8,
    reviews: 94,
    projects: 62,
    experience: "10 years",
    specialization: "Villa Construction",
    image: contractor2,
    verified: true,
  },
  {
    name: "Vikram Reddy",
    title: "Construction Contractor",
    location: "Hyderabad, Telangana",
    rating: 4.9,
    reviews: 156,
    projects: 110,
    experience: "18 years",
    specialization: "Commercial & Residential",
    image: contractor3,
    verified: true,
  },
];

const FeaturedContractors = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Top Professionals
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Featured Contractors
          </h2>
          <p className="text-muted-foreground text-lg">
            Meet some of our highly-rated and verified civil engineers ready to build your dream home.
          </p>
        </div>

        {/* Contractor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contractors.map((contractor, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={contractor.image}
                  alt={contractor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {contractor.verified && (
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Award className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-semibold text-foreground">Verified</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {contractor.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{contractor.title}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-secondary/10 rounded-lg px-2 py-1">
                    <Star className="w-4 h-4 text-secondary fill-secondary" />
                    <span className="font-semibold text-foreground text-sm">{contractor.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  {contractor.location}
                </div>

                <div className="grid grid-cols-3 gap-2 mb-5 text-center">
                  <div className="bg-muted rounded-lg py-2">
                    <p className="font-bold text-foreground">{contractor.projects}</p>
                    <p className="text-muted-foreground text-xs">Projects</p>
                  </div>
                  <div className="bg-muted rounded-lg py-2">
                    <p className="font-bold text-foreground">{contractor.reviews}</p>
                    <p className="text-muted-foreground text-xs">Reviews</p>
                  </div>
                  <div className="bg-muted rounded-lg py-2">
                    <p className="font-bold text-foreground">{contractor.experience}</p>
                    <p className="text-muted-foreground text-xs">Exp</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xs text-muted-foreground">Specializes in:</span>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {contractor.specialization}
                  </span>
                </div>

                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Contractors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContractors;
