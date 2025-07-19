
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import career_1 from "@/assets/career_1.png";

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    subject: "",
    message: "",
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const openings = [
    { category: "ART", count: 0 },
    { category: "PROGRAMMING", count: 0 },
    { category: "DESIGN", count: 0 },
    { category: "HR", count: 0 },
    { category: "PRODUCTION", count: 0 }
  ];

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gaming-darker bg-cover  bg-[url(@/assets/Extreme_Close_FullQuality.png)]">
        <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <div className="flex-1 z-10   mx-auto px-4">
          <h1 className="text-6xl text-center md:text-9xl font-bold text-gaming-gold mb-6">
            JOIN
          </h1>
          <h2 className="text-4xl text-center ms-96 md:text-7xl font-bold text-gaming-gold mb-8">
            THE TEAM
          </h2>
          
          <p className="text-gaming-text  text-2xl mb-4">
            We're always on the lookout for top talent for future
          </p>
          <p className="text-gaming-text text-2xl mb-4">
            opportunities. If you're interested in working with
          </p>
          <p className="text-gaming-text text-2xl mb-8">
            us, please email us at jobs@eramgames.com or via
          </p>
          <p className="text-gaming-text text-2xl mb-12">
            Contact form
          </p>
          
          <ChevronDown className="w-8 h-8 text-gaming-gold mx-auto animate-bounce" />
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20 px-4 bg-gaming-darker relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gaming-gold text-center mb-16">
            CURRENT OPENINGS
          </h2>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gaming-text mb-8">
              PROJECT: BURIED WITHIN
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {openings.map((opening) => (
              <div key={opening.category} className="border border-gaming-gold p-6 text-center ">
                <div className="text-gaming-gold font-medium mb-2 ">{opening.category} {opening.count}</div>
                {/* <div className=" text-2xl font-bold"></div> */}
              </div>
            ))}
          </div>
          
          {/* <div className="text-center mb-16">
            <div className="w-full max-w-lg mx-auto">
              <img 
                src={canvas1} 
                alt="Gaming Development" 
                className="w-full h-56 object-cover rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="py-20 px-4 bg-gaming-gold relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gaming-dark">
            WORK WITH US
          </h2>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gaming-dark relative bg-cover bg-center bg-[url(@/assets/career_bg.png)]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gaming-text text-sm font-medium">
                    Name <span className="text-red-500">(Required)</span>
                  </Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <Label htmlFor="firstName" className="text-gaming-text-muted text-xs">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="bg-gaming-card border-gaming-gold/30 text-gaming-text"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gaming-text-muted text-xs">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="bg-gaming-card border-gaming-gold/30 text-gaming-text"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gaming-text text-sm font-medium">
                    Email Address <span className="text-red-500">(Required)</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gaming-card border-gaming-gold/30 text-gaming-text mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="role" className="text-gaming-text text-sm font-medium">
                    Role <span className="text-red-500">(Required)</span>
                  </Label>
                  <Input
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="bg-gaming-card border-gaming-gold/30 text-gaming-text mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gaming-text text-sm font-medium">
                    Subject <span className="text-red-500">(Required)</span>
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-gaming-card border-gaming-gold/30 text-gaming-text mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gaming-text text-sm font-medium">
                    Message <span className="text-red-500">(Required)</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-gaming-card border-gaming-gold/30 text-gaming-text mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="resume" className="text-gaming-text text-sm font-medium">
                    Resume
                  </Label>
                  <div className="mt-2">
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('resume')?.click()}
                      className="bg-transparent border-gaming-gold text-gaming-gold hover:bg-gaming-gold hover:text-gaming-dark"
                    >
                      Add File
                    </Button>
                    {formData.resume && (
                      <p className="text-gaming-text-muted text-sm mt-2">
                        Selected: {formData.resume.name}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gaming-gold text-gaming-dark hover:bg-gaming-gold-muted font-semibold py-3"
                >
                  SUBMIT
                </Button>
              </form>
            </div>

            {/* Logo/Graphic */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <img 
                  src={career_1} 
                  alt="Code Programming" 
                  className="w-full h-[42rem] object-cover rounded-lg shadow-lg opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
