import SkillCard from "@/components/SkillCard";
import { Code, Database, Cpu, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-white" />,
      skills: ["Python", "C++", "JavaScript (ES6)", "SQL", "R"]
    },
    {
      title: "AI/ML & Data Science",
      icon: <Cpu className="text-white" />,
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "TensorFlow", "Keras", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="text-white" />,
      skills: ["FastAPI", "HTML", "CSS", "Bootstrap", "React", "Node.js", "Streamlit", "Docker", "Git"]
    },
    {
      title: "Tools & Platforms",
      icon: <Database className="text-white" />,
      skills: ["Jupyter Notebook", "Google Colab", "VS Code", "GitHub", "PostgreSQL", "MongoDB", "AWS", "Heroku"]
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across AI/ML, web development, and data science
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <SkillCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;