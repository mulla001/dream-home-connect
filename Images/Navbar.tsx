import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold text-xl">B</span>
          </div>
          <span className={`font-display font-bold text-xl ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
            BuildConnect
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className={`font-medium transition-colors hover:text-secondary ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          >
            How It Works
          </a>
          <a
            href="#for-landowners"
            className={`font-medium transition-colors hover:text-secondary ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          >
            For Land Owners
          </a>
          <a
            href="#for-contractors"
            className={`font-medium transition-colors hover:text-secondary ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          >
            For Contractors
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant={isScrolled ? "ghost" : "heroOutline"} size="sm">
            Login
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-foreground' : 'text-primary-foreground'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-foreground' : 'text-primary-foreground'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-elevated p-4 animate-fade-up">
          <div className="flex flex-col gap-4">
            <a href="#how-it-works" className="font-medium text-foreground py-2">
              How It Works
            </a>
            <a href="#for-landowners" className="font-medium text-foreground py-2">
              For Land Owners
            </a>
            <a href="#for-contractors" className="font-medium text-foreground py-2">
              For Contractors
            </a>
            <div className="flex gap-3 pt-4 border-t border-border">
              <Button variant="outline" className="flex-1">
                Login
              </Button>
              <Button variant="hero" className="flex-1">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
