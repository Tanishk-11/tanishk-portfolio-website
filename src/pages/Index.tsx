import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
