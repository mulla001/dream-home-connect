import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">B</span>
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                BuildConnect
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6">
              Connecting land owners with licensed civil engineers and contractors for better construction.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5 text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Find Contractors
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Join as Contractor
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  123 Construction Lane, Tech Park, Bangalore 560001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/70">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/70">
                  hello@buildconnect.in
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © 2025 BuildConnect. All rights reserved. Made with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
