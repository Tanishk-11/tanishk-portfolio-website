import { Card, CardContent } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCard = ({ title, skills, icon }: SkillCardProps) => {
  return (
    <Card className="group glow-card hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-xl">
            {icon}
          </div>
          <h3 className="text-lg font-semibold gradient-text">{title}</h3>
        </div>
        <div className="space-y-2">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-blue"></div>
              <span className="text-muted-foreground">{skill}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;