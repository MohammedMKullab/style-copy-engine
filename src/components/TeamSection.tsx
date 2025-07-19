import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Lead Programmer",
      subtitle: "Matthew Fitzgerald",
      image: teamMember1,
    },
    {
      name: "Lead Designer", 
      subtitle: "Matthew Chen",
      image: teamMember1,
    },
    {
      name: "Lead Programmer",
      subtitle: "Michael Rodriguez", 
      image: teamMember1,
    },
  ];

  return (
    <section className="pt-20 ">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,215,0,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,215,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gaming-gold mb-4 tracking-wide">
            A BRIEF OF THE TEAM MEMBERS
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gaming-text/60 hover:text-gaming-gold transition-colors duration-300 -translate-x-4">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gaming-text/60 hover:text-gaming-gold transition-colors duration-300 translate-x-4">
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 mx-auto w-32 h-32 md:w-40 md:h-40">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-lg shadow-gaming group-hover:shadow-glow transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gaming-gold/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-gaming-gold font-semibold text-lg mb-1 tracking-wide">
                  {member.name}
                </h3>
                <p className="text-gaming-text-muted text-sm tracking-wide">
                  {member.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gaming-text mb-8 leading-tight">
            Here at Eram Games, we're not just making<br />
            games, we're exploring the further<br />
            possibilities of the medium.
          </h3>
          
          <div className="max-w-2xl mx-auto space-y-6 text-gaming-text-muted">
            <p className="leading-relaxed">
              As we expand our horizons, we're on the lookout for creative voices who are ready to push boundaries and explore deep, compelling narratives.
            </p>
            <p className="leading-relaxed">
              If you're eager to meet the challenge, check out the opportunities we've got lined up—or if you think you're right for something down the line, submit a general application. We still have a lot to explore together.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            variant="gaming" 
            size="xl"
            className="tracking-widest"
          >
            JOIN US
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;