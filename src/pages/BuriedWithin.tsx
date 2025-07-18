import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import canvas1 from "@/assets/canvas-1.jpg";
import canvas2 from "@/assets/canvas-2.jpg";
import canvas3 from "@/assets/canvas-3.jpg";
import canvas4 from "@/assets/canvas-4.jpg";
import canvas5 from "@/assets/canvas-5.jpg";

const BuriedWithin = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gaming-darker">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-8 flex items-center justify-center">
            <div className="w-8 h-8 bg-gaming-gold rounded-full"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-gaming-text mb-6">
            BURIED<span className="text-gaming-text-muted">"</span>WITHIN
          </h1>
          
          <div className="w-full max-w-md mx-auto">
            <img 
              src={canvas1} 
              alt="Gaming Development" 
              className="w-full h-48 object-cover rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          
          <Button 
            variant="outline" 
            className="bg-transparent border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-dark px-8 py-3 text-lg"
          >
            LEARN MORE
          </Button>
          
          <div className="mt-16">
            <div className="w-full h-1 bg-gaming-card rounded-full">
              <div className="w-1/3 h-full bg-gaming-gold rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Oblivion Section */}
      <section className="py-20 px-4 bg-gaming-darker relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gaming-gold text-center mb-16">
            AN INTERNAL OBLIVION
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full max-w-sm">
              <img 
                src={canvas2} 
                alt="Code Programming" 
                className="w-full h-40 object-cover rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            
            <div className="text-gaming-text">
              <p className="text-lg leading-relaxed mb-6">
                <strong>EMBARK ON A HAUNTING JOURNEY THROUGH THE SHADOWED SPRAWLS OF HARRON'S MIND.</strong> A REALM INTRICATELY WOVEN FROM THE FABRIC OF ILLUSIONS AND FORGOTTEN MEMORIES.
              </p>
              
              <p className="text-sm leading-relaxed mb-6">
                HERE, DREAMS INTERTWINE WITH REALITY, AND PHANTOMS WHISPER SECRETS OF A PAST THAT HARRON STRUGGLES TO REMEMBER. FUELED BY DESPERATION, HE MUST FIND THE STRENGTH AND ESCAPE THE MENTAL PRISON HE'S ENGRAVED. AS HARRON MUST NAVIGATE A LABYRINTH OF MEMORIES— EACH MANIFESTING AS VIVID LEVELS, FORMIDABLE ENEMIES, AND HAUNTING ENCOUNTERS.
              </p>
              
              <p className="text-sm leading-relaxed">
                AS YOU DELVE DEEPER, CONFRONT THE ESSENCE OF DESPAIR, HATE, REGRET, AND FEAR—EMOTIONS THAT FORM THE CORE CHALLENGES OF HIS MENTAL PRISON. EACH SUCCESS SHALL BRING SOLACE TO THE END AND ALLOW HARRON MUST TO BE UNLEASHED. THE UNIVERSE THAT RESONATES WITH US ALL. THE MYSTERIES THAT LAY HARRON CAN REBUILD HIMSELF AND FIND SOLACE WITHIN THE TUMULTUOUS ECHOES OF HIS ACTIONS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fight to Remember Section */}
      <section className="py-20 px-4 bg-gaming-dark relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gaming-gold text-center mb-16">
            A FIGHT TO REMEMBER
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gaming-text mb-6">
                Once a relentless and ambitious monarch, Harron has been left weakened.
              </h3>
              <p className="text-gaming-text-muted">
                Now as faces from his past overpower him with his own forgotten strengths, Harron must fight to regain what he lost, using whatever cunning he can recall.
              </p>
            </div>
            <div className="w-full max-w-sm">
              <img 
                src={canvas3} 
                alt="MacBook Development" 
                className="w-full h-48 object-cover rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Combat Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gaming-gold mb-8">Combat Your Inner Demons</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gaming-text mb-4">
                  <strong>Within the twisted corridors of Harron's mind, every enemy stands as a dark reflection of his own fears and failures.</strong>
                </p>
                <p className="text-gaming-text-muted text-sm mb-4">
                  These adversaries are no mere obstacles; they are puzzles crafted from Harron's subconscious, each manifested to challenge his strategies and exploit his weaknesses.
                </p>
                <p className="text-gaming-text-muted text-sm">
                  The most relentless foes emerge from his fractured past, requiring more than hacking and slashing to overcome. As you face these spectral enemies, remember: every encounter is a riddle, and solving it brings Harron one step closer to reclaiming his lost memories.
                </p>
              </div>
              <div className="w-full max-w-xs">
                <img 
                  src={canvas4} 
                  alt="Video Screens Display" 
                  className="w-full h-32 object-cover rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>

          {/* Sigil System Section */}
          <div>
            <h3 className="text-2xl font-bold text-gaming-gold mb-8">Plan & Execute or Battles with the Sigil System</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="w-full max-w-sm">
                <img 
                  src={canvas5} 
                  alt="People with Laptops" 
                  className="w-full h-40 object-cover rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div>
                <p className="text-gaming-text mb-4">
                  <strong>Rebuild Harron's true potential using the Sigil System, a key to piecing back together the legend he once was.</strong>
                </p>
                <p className="text-gaming-text-muted text-sm mb-4">
                  Craft versatile Sigils to achieve unique functions tailored to your strategic needs. Customize your approach and manipulate the battlefield to your advantage, confronting challenges posed by adversaries with innovative solutions born from your creativity.
                </p>
                <p className="text-gaming-text-muted text-sm">
                  The Sigil System enables you to solve difficult puzzles and overpower enemies in a world formed by the shapes of your mind, whether it by boosting your weaponry or controlling enemy actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perilous Paths Section */}
      <section className="py-20 px-4 bg-gaming-darker relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="w-full max-w-md">
              <img 
                src={canvas1} 
                alt="Gaming Development" 
                className="w-full h-48 object-cover rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gaming-gold mb-6">
                Walk the Perilous Paths of the Mind
              </h2>
              <p className="text-gaming-text mb-4">
                <strong>Navigate Harron's treacherous psyche, where each memory is a vividly designed environment reflecting parts of his life story.</strong>
              </p>
              <p className="text-gaming-text-muted text-sm mb-4">
                From serene fields to storm-wracked ruins, these environments are often more backdrop; they are the paths Harron must tread to forge his escape. Each setting not only diversifies gameplay but also deepens your understanding of the challenges he faces.
              </p>
              <p className="text-gaming-text-muted text-sm">
                Discover how navigating these fragmented biomes—each with its own challenges and secrets—becomes a crucial part of his quest, illustrating the dangerous and haunted journey Harron must undertake, so piece together what was and find his way out.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="w-full max-w-lg mx-auto">
              <img 
                src={canvas2} 
                alt="Code Programming" 
                className="w-full h-56 object-cover rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            
            <Button 
              variant="outline" 
              className="bg-transparent border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-dark px-12 py-4 text-lg"
            >
              JOIN US
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuriedWithin;