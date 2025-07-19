import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import canvas1 from "@/assets/Crow-_loading_screen_-wip-_2feb25.jpg";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

const BuriedWithin = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gaming-darker">
      <Navbar />
      {/* Hero Video Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            poster={canvas1}
          >
            <source
              src="https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gaming-darker/70"></div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        {/* Main Content */}
        <div className="relative flex-1 z-10 min-h-screen pb-32 flex flex-col justify-end items-center text-center px-4">
          <div className="space-y-10">
            <h1 className="text-8xl md:text-9xl font-bold text-stone-500  shadow-gaming-gold mb-8 tracking-wider">
              BURIED <span className="text-stone-500">WITHIN</span>
            </h1>

            {/* <div className="text-9xl font-serif italic text-gaming-text-muted/60 mb-12 leading-none">
              Canvas
            </div> */}

            <Button
              variant="gaming"
              size="xl"
              className="mb-16 border-2 border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-darker transition-all duration-300"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
        {/* Video Controls */}
        <div className="absolute bottom-4 w-full left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex items-center space-x-4 bg-gaming-darker/30 backdrop-blur-sm rounded-full px-6 py-3">
            <button
              onClick={toggleVideo}
              className="w-12 h-12 rounded-full bg-gaming-gold/20 hover:bg-gaming-gold/30 flex items-center justify-center transition-all duration-300"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-gaming-gold" />
              ) : (
                <Play className="w-6 h-6 text-gaming-gold ml-1" />
              )}
            </button>
            <div className="w-full h-1 bg-gaming-text/30 rounded-full">
              <div className="w-1/3 h-full bg-gaming-gold rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AN INTERNAL OBLIVION Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-cover bg-[url(@/assets/Crow-_Bridge_fight_keyframe-8feb25.jpg)]">
        <div className="absolute inset-0 bg-gradient-to-b from-gaming-darker to-black/20"></div>
        {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]"></div> */}

        <div className="relative z-10 max-w-6xl mx-auto ">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative backdrop-blur-md">
              {/* <img 
                src={canvas2} 
                alt="Harron's Mind" 
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/60 to-transparent rounded-lg"></div>
            </div>
            <div className="space-y-6 backdrop-blur-md ">
              <h2 className="text-4xl text-center font-bold text-gaming-gold mb-8 tracking-wider">
                AN INTERNAL OBLIVION
              </h2>
              <p className="text-xl text-white text-center leading-relaxed">
                EMBARK ON A HAUNTING JOURNEY THROUGH THE SHADOWED SPRAWLS OF
                HARRON'S MIND. A REALM INTRICATELY WOVEN FROM THE FABRIC OF
                ILLUSIONS AND FORGOTTEN MEMORIES.
              </p>

              <p className="text-lg text-white text-center leading-relaxed">
                HERE, DREAMS INTERTWINE WITH REALITY, AND PHANTOMS WHISPER
                SECRETS OF A PAST THAT HARRON STRUGGLES TO UNLOCK. HE MUST DRAW
                UPON HIS INNER STRENGTH AND ESCAPE THE MENTAL PRISON HE'S
                ENSNARED IN. HARRON MUST NAVIGATE A LABYRINTH OF MEMORIES, EACH
                MANIFESTING AS VIVID LEVELS, FORMIDABLE ENEMIES, AND HAUNTING
                ENCOUNTERS.
              </p>

              <p className="text-lg text-white text-center leading-relaxed">
                AS YOU DELVE DEEPER, CONFRONT THE ESSENCE OF DESPAIR, HATE,
                REGRET, AND FEAR—EMOTIONS THAT FORM THE CORE ELEMENTS OF
                PSYCHOLOGICAL TORMENT. THESE TRIALS REFLECT DEEPER TRUTHS—THEIR
                SUBVERSIVE NATURE PERMITS YOU TO REINFORCE YOURSELF. WITH US
                ALL, HARKEN TO THE NARRATIVE INTO A REFLECTION OF OUR COLLECTIVE
                PSYCHE VENTURE FORTH AND UNRAVEL THE MYSTERIES THAT LIE BEYOND
                LOGIC. ONLY THEN CAN YOU REBUILD HIMSELF AND FIND SOLACE WITHIN
                THE TUMULTUOUS ECHOES OF HIS ACTIONS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex  items-center justify-center py-8">
        {" "}
        <h2 className="text-6xl font-bold text-gaming-gold text-center tracking-wider">
          A FIGHT TO REMEMBER
        </h2>
      </div>
      {/* A FIGHT TO REMEMBER Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-cover bg-[url(@/assets/FINAL_ILLU__copie.jpg)]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gaming-darker/5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        <div className="relative z-10 max-w-6xl mx-auto ">
          {/* First Subsection */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24 ">
            <div>
              <h3 className="text-4xl font-bold text-gaming-text mb-8">
                Once a relentless and ambitious monarch, Harron has been left
                weakened.
              </h3>

              {/* <div className="text-7xl font-serif italic text-gaming-text-muted/40 mb-8">
                Canvas
              </div> */}

              <p className="text-lg text-gaming-text-muted leading-relaxed">
                Now as faces from his past overpower him with his own forgotten
                strengths, Harron must fight to regain what he lost, using
                whatever cunning he can recall.
              </p>
            </div>

            <div className="relative">
              {/* <img
                src={canvas3}
                alt="Harron's Battle"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/60 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24  px-24 overflow-hidden">
        {/* Combat Your Inner Demons */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-gaming-gold mb-8">
            Combat Your Inner Demons
          </h3>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gaming-text-muted leading-relaxed">
                <span className="text-gaming-gold font-bold">
                  Within the twisted corridors of Harron's mind, every enemy
                  stands as a dark reflection of his own fears and failures.
                </span>
              </p>

              <p className="text-lg text-gaming-text-muted leading-relaxed">
                These adversaries are no mere obstacles; they are puzzles
                crafted from Harron's subconscious, each manifested to challenge
                his strategies and exploit his weaknesses.
              </p>

              <p className="text-lg text-gaming-text-muted leading-relaxed">
                The most relentless foes emerge from his fractured past,
                requiring more than hacking and slashing to overcome. As you
                face these spectral enemies, remember: every encounter is a
                riddle, and solving it brings Harron one step closer to
                reclaiming his lost memories.
              </p>
            </div>

            <div
              className=" w-full rotate-180 h-96"
              style={{
                paddingInlineEnd: "cal4(50px + 0.3em)",
                clipPath:
                  "polygon(0 0, calc(100% - 50px) 0, 100% 50%, calc(100% - 50px) 100%, 0 100%)",
              }}
            >
              <img
                src={canvas1}
                alt="Inner Demons"
                className="rotate-180 w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Plan & Execute */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className=" w-full h-96 bg-cover bg-[url(@/assets/Crow-_faces_fight-_rough_key_frame1-_7feb25.jpg)]"
            style={{
              paddingInlineEnd: "cal4(50px + 0.3em)",
              clipPath:
                "polygon(0 0, calc(100% - 50px) 0, 100% 50%, calc(100% - 50px) 100%, 0 100%)",
            }}
          />

          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-gaming-gold">
              Plan & Execute or Battles with the Sigil System
            </h3>

            <p className="text-lg text-gaming-text-muted leading-relaxed">
              <span className="text-gaming-gold font-bold">
                Rebuild Harron's true potential using the Sigil System, a key to
                piecing back together the legend he once was.
              </span>
            </p>

            <p className="text-lg text-gaming-text-muted leading-relaxed">
              Craft versatile Sigils to achieve unique functions tailored to
              your strategic needs. Customize your approach and manipulate the
              battlefield to your advantage, confronting challenges posed by
              adversaries with innovative solutions born from your creativity.
            </p>

            <p className="text-lg text-gaming-text-muted leading-relaxed">
              The Sigil System enables you to solve difficult puzzles and
              overpower enemies in a world formed by the shapes of your mind,
              whether it by boosting your weaponry or controlling enemy actions.
            </p>
          </div>
        </div>
      </section>
      {/* Walk the Perilous Paths Section */}
      <section className="py-24 px-4 relative  overflow-hidden  bg-cover  bg-[url(@/assets/Faces_Camera_2_001.png)]">
        <div className="absolute inset-0 bg-gradient-to-b from-gaming-darker to-black/15"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        <div className="flex-1 relative  flex flex-col items-end">
          <h2 className="text-6xl text-center max-w-3xl font-bold text-gaming-gold mb-12 tracking-wider">
            Walk the Perilous Paths of the Mind
          </h2>

          <div className="mb-16  text-start  max-w-3xl">
            <p className="text-xl text-gaming-text-muted mb-8 max-w-4xl mx-auto leading-relaxed">
              Navigate Harron's treacherous psyche, where each memory is a
              vividly designed environment reflecting parts of his life story.
            </p>

            <p className="text-lg text-gaming-text-muted mb-12 max-w-4xl mx-auto leading-relaxed">
              From serene fields to storm-wracked ruins, these environments are
              more than mere backdrops; they are the paths Harron must tread to
              forge his escape. Each setting not only diversifies gameplay but
              also deepens your understanding of the challenges he faces.
            </p>

            <p className="text-lg text-gaming-text-muted mb-16 max-w-4xl mx-auto leading-relaxed">
              Discover how navigating these fragmented biomes—each with its own
              challenges and secrets—becomes a crucial part of his quest,
              illustrating the dangerous and haunted journey Harron must
              undertake to piece together his shattered self and find a way out.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 min-h-screen relative flex flex-col items-center justify-end overflow-hidden  bg-cover bg-top bg-[url(@/assets/Harron_cover-7feb25.jpg)]">
        <div className="text-9xl font-serif italic text-gaming-text-muted/30 mb-16"></div>

        <Button
          variant="gaming"
          size="xl"
          className="border-2 border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-darker transition-all duration-300 px-12 py-4"
        >
          JOIN US
        </Button>
      </section>
      <Footer />
    </div>
  );
};

export default BuriedWithin;
