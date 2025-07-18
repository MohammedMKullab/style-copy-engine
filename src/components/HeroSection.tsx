import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Vision",
    subtitle: "To redefine the way we play",
    sideText: "CREATE"
  },
  {
    title: "Innovation",
    subtitle: "Building the future of gaming",
    sideText: "INNOVATE"
  },
  {
    title: "Excellence",
    subtitle: "Delivering unmatched experiences",
    sideText: "EXCEL"
  },
  {
    title: "Community",
    subtitle: "Connecting players worldwide",
    sideText: "CONNECT"
  },
  {
    title: "Evolution",
    subtitle: "Constantly pushing boundaries",
    sideText: "EVOLVE"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gaming-darker/60"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Content - Moved to left */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-gaming-text mb-6 tracking-tight transition-all duration-500">
            {slides[currentSlide].title}
            <span className="block text-gaming-gold-muted text-lg md:text-xl font-light tracking-[0.2em] mt-4 opacity-60 transform -rotate-90 origin-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 hidden lg:block transition-all duration-500">
              {slides[currentSlide].sideText}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gaming-text-muted mb-12 font-light tracking-wide transition-all duration-500">
            {slides[currentSlide].subtitle}
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
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gaming-gold shadow-glow' 
                    : 'bg-gaming-text/30 hover:bg-gaming-text/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-gaming-text/60 hover:text-gaming-gold transition-colors duration-300"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-gaming-text/60 hover:text-gaming-gold transition-colors duration-300"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;