import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gaming-darker/60"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-gaming-text mb-6 tracking-tight">
            Vision
            <span className="block text-gaming-gold-muted text-lg md:text-xl font-light tracking-[0.2em] mt-4 opacity-60 transform -rotate-90 origin-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 hidden lg:block">
              CREATE
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gaming-text-muted mb-12 font-light tracking-wide">
            To redefine the way we play
          </p>

          {/* CTA Button */}
          <Button 
            variant="gaming" 
            size="xl"
            className="mb-16"
          >
            LEARN MORE
          </Button>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3">
            {[0, 1, 2, 3, 4].map((index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === 0 
                    ? 'bg-gaming-gold shadow-glow' 
                    : 'bg-gaming-text/30 hover:bg-gaming-text/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-gaming-text/60 hover:text-gaming-gold transition-colors duration-300">
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-gaming-text/60 hover:text-gaming-gold transition-colors duration-300">
        <ChevronRight className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;