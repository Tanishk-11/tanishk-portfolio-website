import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: React.ReactNode;
}

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl, icon }: ProjectCardProps) => {
  return (
    <Card className="group glow-card hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-2xl mb-2">
          {icon}
        </div>
        <div>
          <CardTitle className="text-xl font-semibold gradient-text">{title}</CardTitle>
          <CardDescription className="text-muted-foreground mt-2 leading-relaxed">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-secondary/50 hover:bg-secondary/70 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2 border-border/50 hover:border-neon-blue/50"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github className="w-4 h-4" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2 border-border/50 hover:border-neon-purple/50"
              onClick={() => window.open(liveUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;