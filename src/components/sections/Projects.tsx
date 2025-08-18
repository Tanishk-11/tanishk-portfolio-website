import ProjectCard from "@/components/ProjectCard";
import { Brain, Globe, Leaf } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Celestic AI",
      description: "AI-Powered Constellation Identifier leveraging an EfficientNet model to recognize major constellations from photos, curated a unique dataset from scratch using Stellarium, enabling the model to train on highly realistic, computer-specific night sky images.",
      technologies: ["Computer Vision", "CNN", "Transfer Learning", "Python", "TensorFlow", "Keras", "FastAPI", "Docker"],
      icon: <Brain className="text-white" />,
      githubUrl: "https://github.com/Tanishk-11/Celestic_AI",
      liveUrl: "https://celestic-ai.onrender.com/"
    },
    {
      title: "ExoCluster",
      description: "Unsupervised Exoplanet Habitability Analysis tool for astronomers that analyzes NASA data on 900+ exoplanets, categorizing them into 3 distinct habitability clusters to help prioritize research targets.",
      technologies: ["Unsupervised Learning", "Pandas", "Scikit-learn", "Matplotlib", "FastAPI", "Docker"],
      icon: <Globe className="text-white" />,
      githubUrl: "https://github.com/Tanishk-11/ExoPlanet",
      liveUrl: "https://exoplanet-jz1y.onrender.com"
    },
    {
      title: "LichenAQI",
      description: "Bio-Indicator for Air Pollution using Deep Learning. A citizen-science tool that empowers the public to estimate local air quality by using image recognition to classify 10 different species of lichen, natural bio-indicators.",
      technologies: ["Deep Learning", "Image Recognition", "TensorFlow", "Python", "FastAPI", "Docker"],
      icon: <Leaf className="text-white" />,
      githubUrl: "https://github.com/Tanishk-11/Lichen_Ecology_AQI_Project",
      liveUrl: "https://lichen-aqi.onrender.com/"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative AI/ML solutions that bridge technology and real-world applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;