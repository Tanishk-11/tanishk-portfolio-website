import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative AI/ML projects or discuss opportunities
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="glow-card bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl gradient-text mb-4">Get In Touch</CardTitle>
              <p className="text-muted-foreground text-lg">
                I'm always open to discussing new opportunities, innovative projects, and collaborations in AI/ML
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-secondary/30 border border-border/50">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">galaxytanishk01@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-secondary/30 border border-border/50">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">+91 7600808814</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-secondary/30 border border-border/50">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-pink to-neon-blue flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground text-sm">Ahmedabad, Gujarat</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-6">
                <div className="flex justify-center gap-4">
                  <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white border-0 px-8">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="outline" className="border-border/50 hover:border-neon-blue/50 px-8">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </div>
                
                <div className="flex justify-center gap-3">
                  <Badge variant="secondary" className="bg-secondary/50 px-4 py-2 text-sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Tanishk Singh Thakur
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary/50 px-4 py-2 text-sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Tanishk-11
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;