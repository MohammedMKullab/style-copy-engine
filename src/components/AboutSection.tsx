import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gaming-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,215,0,0.1),transparent_50%)] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gaming-gold mb-8 tracking-wide">
            ABOUT US
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gaming-text-muted leading-relaxed mb-8">
              Our studio was established to craft immersive stories and memorable experiences designed to engage players who appreciate deep, character-driven narratives.
            </p>
            <p className="text-lg text-gaming-text-muted leading-relaxed">
              We approach every stage of game development from initial concept to final coding with a shared vision of delivering uniquely crafted gameplay that challenges players problem-solving skills and encourages them to think differently.
            </p>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <img 
              src={logo} 
              alt="Eram Games Logo" 
              className="w-32 h-32 md:w-40 md:h-40 opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gaming-gold/20 rounded-full blur-xl scale-150 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gaming-gold mb-8 tracking-wide">
            OUR PHILOSOPHY
          </h3>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gaming-text-muted leading-relaxed mb-6">
              At Eram Games, excellence is achieved through precise attention to detail, immersive game mechanics, and the nuanced development of complex characters and stories.
            </p>
            <p className="text-lg text-gaming-text-muted leading-relaxed">
              This commitment ensures every game is not just played but felt deeply and remembered long after the screen fades to black.
            </p>
          </div>

          <Button 
            variant="gaming" 
            size="lg"
            className="tracking-widest"
          >
            SEE WHAT WE'RE UP TO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;