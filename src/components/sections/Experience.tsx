import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Joint Secretary",
      organization: "Society for Data Science, BIT Mesra",
      period: "February 2024 - Present",
      type: "Leadership",
      description: "Leading data science initiatives and organizing technical workshops for the student community.",
      icon: <Briefcase className="w-6 h-6 text-white" />
    },
    {
      title: "Research Intern",
      organization: "Dr. Janimanul Bakas, BIT Mesra",
      period: "February 2025 - Present",
      type: "Research",
      description: "Conducting research in artificial intelligence and machine learning applications.",
      icon: <Briefcase className="w-6 h-6 text-white" />
    },
    {
      title: "Member",
      organization: "IET, BIT Mesra",
      period: "September 2024 - Present",
      type: "Professional",
      description: "Active member of the Institution of Engineering and Technology student chapter.",
      icon: <Users className="w-6 h-6 text-white" />
    },
    {
      title: "Volunteer",
      organization: "NSS, BIT Mesra",
      period: "September 2023 - April 2025",
      type: "Community Service",
      description: "Participated in community service activities and social awareness programs.",
      icon: <Users className="w-6 h-6 text-white" />
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Leadership':
        return 'from-neon-blue to-neon-purple';
      case 'Research':
        return 'from-neon-purple to-neon-pink';
      case 'Professional':
        return 'from-neon-pink to-neon-blue';
      default:
        return 'from-neon-blue to-neon-purple';
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Experience & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Active involvement in research, leadership, and community service
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="glow-card bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${getTypeColor(experience.type)} flex items-center justify-center`}>
                      {experience.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl gradient-text">{experience.title}</CardTitle>
                        <Badge variant="secondary" className="bg-secondary/50">
                          {experience.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-lg font-medium text-foreground">
                        {experience.organization}
                      </CardDescription>
                      <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;