import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Trophy, Code } from "lucide-react";

const Education = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Education & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic excellence and notable accomplishments
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="glow-card bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl gradient-text">Bachelor of Technology</CardTitle>
                  <CardDescription className="text-lg">Artificial Intelligence and Machine Learning</CardDescription>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-semibold">Birla Institute of Technology, Mesra</p>
                <p className="text-muted-foreground">September 2023 - Present | Ranchi, Jharkhand</p>
                <Badge className="bg-gradient-to-r from-neon-blue to-neon-purple text-white border-0 text-lg px-4 py-1">
                  CGPA: 9.39
                </Badge>
              </div>
            </CardHeader>
          </Card>

          <Card className="glow-card bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl gradient-text">Higher Secondary</CardTitle>
                  <CardDescription className="text-lg">Science Stream</CardDescription>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-semibold">Tulip International School, Ahmedabad</p>
                <p className="text-muted-foreground">2015 - 2023 | Ahmedabad, Gujarat</p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="bg-secondary/50">10th: 93%</Badge>
                  <Badge variant="secondary" className="bg-secondary/50">12th: 95%</Badge>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="glow-card bg-card/50 backdrop-blur-sm border-border/50 lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="text-2xl gradient-text flex items-center gap-3">
                <Award className="w-8 h-8" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">JEE Excellence</h4>
                    <p className="text-sm text-muted-foreground">Achieved 98+ percentile in JEE Mains 2023 (top 2% of over 1 million candidates) and qualified JEE Advanced 2023</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Academic Excellence</h4>
                    <p className="text-sm text-muted-foreground">Maintained consistent academic excellence with a CGPA of 9.39, placing among the top performers in the Computer Science department</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-pink to-neon-blue flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Coding Proficiency</h4>
                    <p className="text-sm text-muted-foreground">Solved over 500+ problems on LeetCode, demonstrating proficiency in Data Structures & Algorithms</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;