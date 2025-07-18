import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";
import slide5 from "@/assets/slide-5.jpg";

const slides = [
  {
    title: "Vision",
    subtitle: "To redefine the way we play",
    sideText: "CREATE",
    image: slide1
  },
  {
    title: "Innovation",
    subtitle: "Building the future of gaming",
    sideText: "INNOVATE",
    image: slide2
  },
  {
    title: "Excellence",
    subtitle: "Delivering unmatched experiences",
    sideText: "EXCEL",
    image: slide3
  },
  {
    title: "Community",
    subtitle: "Connecting players worldwide",
    sideText: "CONNECT",
    image: slide4
  },
  {
    title: "Evolution",
    subtitle: "Constantly pushing boundaries",
    sideText: "EVOLVE",
    image: slide5
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 150);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 150);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with Smooth Transition */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gaming-darker/60"></div>
          </div>
        ))}
      </div>

      {/* Animated Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-gaming-darker/80 via-transparent to-gaming-darker/40"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Main Heading with Animation */}
          <h1 className={`text-6xl md:text-8xl font-bold text-gaming-text mb-6 tracking-tight transition-all duration-700 transform ${
            isTransitioning ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'
          }`}>
            {slides[currentSlide].title}
            <span className={`block text-gaming-gold-muted text-lg md:text-xl font-light tracking-[0.2em] mt-4 opacity-60 transform -rotate-90 origin-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 hidden lg:block transition-all duration-700 ${
              isTransitioning ? 'opacity-0' : 'opacity-60'
            }`}>
              {slides[currentSlide].sideText}
            </span>
          </h1>

          {/* Subtitle with Animation */}
          <p className={`text-xl md:text-2xl text-gaming-text-muted mb-12 font-light tracking-wide transition-all duration-700 delay-100 transform ${
            isTransitioning ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'
          }`}>
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Button with Animation */}
          <Button 
            variant="gaming" 
            size="xl"
            className={`mb-16 transition-all duration-700 delay-200 transform ${
              isTransitioning ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'
            }`}
          >
            LEARN MORE
          </Button>
        </div>
      </div>

      {/* Navigation Dots - Centered */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-4 bg-gaming-darker/20 backdrop-blur-sm rounded-full px-6 py-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 transform ${
                index === currentSlide 
                  ? 'bg-gaming-gold shadow-glow scale-125' 
                  : 'bg-gaming-text/30 hover:bg-gaming-text/50 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows with Enhanced Styling */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-gaming-darker/20 backdrop-blur-sm rounded-full text-gaming-text/60 hover:text-gaming-gold hover:bg-gaming-darker/40 transition-all duration-300 transform hover:scale-110"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-gaming-darker/20 backdrop-blur-sm rounded-full text-gaming-text/60 hover:text-gaming-gold hover:bg-gaming-darker/40 transition-all duration-300 transform hover:scale-110"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;