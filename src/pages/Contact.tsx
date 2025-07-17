
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gaming-darker">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-gaming-gold mb-8">
            CONTACT US
          </h1>
          
          <div className="space-y-4 text-gaming-text text-lg max-w-2xl mx-auto mb-12">
            <p>Ready to push boundaries with us? Share your details,</p>
            <p>and let's forge something extraordinary together.</p>
            <p className="font-semibold">We're excited to explore new horizons together!</p>
          </div>
          
          <ChevronDown className="w-8 h-8 text-gaming-gold mx-auto animate-bounce" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gaming-dark relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <Label htmlFor="name" className="text-gaming-text text-sm font-medium mb-4 block">
                Name (required)
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-gaming-text-muted text-xs mb-2 block">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-white text-gaming-dark border-0 h-12 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gaming-text-muted text-xs mb-2 block">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-white text-gaming-dark border-0 h-12 rounded-lg"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-gaming-text text-sm font-medium mb-2 block">
                Email (required)
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white text-gaming-dark border-0 h-12 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-gaming-text text-sm font-medium mb-2 block">
                Message (required)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={8}
                className="bg-white text-gaming-dark border-0 rounded-lg w-full resize-none"
                required
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-gaming-gold text-gaming-dark hover:bg-gaming-gold-muted font-semibold py-4 text-lg rounded-lg"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
