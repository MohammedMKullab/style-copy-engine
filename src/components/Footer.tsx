import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/career_bg.png";

const Footer = () => {
  return (
    <footer className="bg-gaming-darker py-12 border-t border-gaming-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <img src={logo} alt="Eram Games" className=" h-10 w-10 mr-3" />
            <span className="text-white font-bold text-xl tracking-wide">
              ERAM GAMES
            </span>
          </div>

          {/* Location */}
          <div className="text-center">
            <h4 className="text-gaming-text font-semibold mb-2 tracking-wide">
              Location
            </h4>
            <p className="text-gaming-text-muted text-sm tracking-wide">
              5253 N CENTRAL AVE, CHICAGO, IL 60630
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-gaming-text font-semibold mb-2 tracking-wide">
              Contact
            </h4>
            <p className="text-gaming-text-muted text-sm tracking-wide">
              ERAM@ERAMGAMES.COM
            </p>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 pt-8 border-t border-gaming-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gaming-text-muted hover:text-gaming-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gaming-text-muted hover:text-gaming-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gaming-text-muted hover:text-gaming-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gaming-text-muted hover:text-gaming-gold transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright & Links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gaming-text-muted">
              <p>Copyright © Eram Games, LLC 2024</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gaming-gold transition-colors duration-300">
                  Terms & Conditions
                </a>
                <a href="#" className="hover:text-gaming-gold transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-gaming-gold transition-colors duration-300">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;