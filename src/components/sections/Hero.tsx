import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="hero-gradient absolute inset-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-secondary/50 border-border/50 px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              Ahmedabad, Gujarat
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Tanishk Singh</span>
              <br />
              <span className="text-foreground">Thakur</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AI/ML Enthusiast
              <br />
              <span className="text-neon-blue font-semibold">CGPA 9.39</span> at Birla Institute of Technology, Mesra
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white border-0 px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white border-0 px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 7600808814
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              galaxytanishk01@gmail.com
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold gradient-text">98%</div>
              <div className="text-muted-foreground">JEE Mains Percentile</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-muted-foreground">LeetCode Problems</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold gradient-text">9+</div>
              <div className="text-muted-foreground">SGPA in every semester</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;