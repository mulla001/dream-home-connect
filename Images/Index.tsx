import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ForLandowners from "@/components/ForLandowners";
import ForContractors from "@/components/ForContractors";
import FeaturedContractors from "@/components/FeaturedContractors";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ForLandowners />
      <ForContractors />
      <FeaturedContractors />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
