import SkillCard from "@/components/SkillCard";
import { Code, Database, Cpu, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-white" />,
      skills: ["Python", "C++", "JavaScript (Basics)"]
    },
    {
      title: "Data Science & Artificial Intelligence",
      icon: <Cpu className="text-white" />,
      skills: ["Supervised Learning", "Unsupervised Learning", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Exploratory Data Analysis (EDA)", "TensorFlow", "Computer Vision (OpenCV)", "Transfer Learning", "Power BI (Basics)"]
    },
    {
      title: "Web Technologies & Deployment",
      icon: <Globe className="text-white" />,
      skills: ["FastAPI", "Pydantic", "HTML", "CSS", "Docker", "Containerization"]
    },
    {
      title: "Developer Tools",
      icon: <Database className="text-white" />,
      skills: ["Git", "GitHub", "Version Control", "Jupyter Notebooks"]
    },
    {
      title: "Core Concepts",
      icon: <Database className="text-white" />,
      skills: ["Data Structures & Algorithms", "OOP", "PostgreSQL", "Statistics", "Probability", "Linear Algebra"]
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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