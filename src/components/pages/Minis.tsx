import { AnimatedPageWrapper } from "../animation/AnimatedPageWrapper";
import { AnimatedSection } from "../animation/AnimatedSection";
import { AnimatedList } from "../animation/AnimatedList";

// Define the MiniProject type interface
interface MiniProject {
  title: string;
  description: string;
  tech: string | string[];
  image: string; 
  imageAlt?: string; 
}

export function Minis() {
  const miniProjects: MiniProject[] = [
    {
      title: "Seam Strike",
      description:
        "A tactical wave-based FPS featuring a unique quilt-based progression system and dynamic combat mechanics. Developed core systems including wave spawning logic, procedural upgrade paths, weapon ability customization, and strategic resource management.",
      tech: ["GDevelop", "Pixel Art", "Figma", "Miro"],
      image: "./game-thumbs/seamstrike.png", 
      imageAlt: "Seam Strike game screenshot"
    },
    {
      title: "Caring for Someone with Epilepsy",
      description:
        "Caring for Someone with Epilepsy is my first story line game made with Twine using JavaScript and HTML/CSS. Inspired by my personal experiences with my mother who had Epilepsy, I aim to create an educational simulator version while I learn 3D game engines.",
      tech: ["Twine", "JavaScript", "HTML/CSS"],
      image: "./game-thumbs/epilepsy.png",
      imageAlt: "Caring for Someone with Epilepsy game interface"
    },
    {
      title: "Waat.io",
      description: "A feature-rich drawing application built with TypeScript and HTML5 Canvas, featuring multiple brush tools, customizable stickers, and a complete undo/redo system implemented via the command pattern.",
      tech: ["TypeScript", "HTML5 Canvas", "CSS3"],
      image: "./game-thumbs/waatio.png",
      imageAlt: "Waat.io drawing application interface"
    },
    {
      title: "UX/UI MOD - Clash of Clans",
      description: "A prototype featuring a squadron-based combat system and enhanced player agency. Core systems include customizable unit targeting, offensive and defensive battle planning, and adaptive progression balancing.",
      tech: ["Figma", "Google Suites", "Miro"],
      image: "./game-thumbs/coc.png",
      imageAlt: "Clash of Clans UX/UI mod design"
    },
  ];

  return (
    <AnimatedPageWrapper>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <AnimatedSection
          delay={0}
          fromTransform="translateY(20px)"
          className="mb-8"
        >
          <h1 className="text-primary mb-2">Mini Projects</h1>
          <p className="text-muted-foreground">
            Smaller experiments and prototypes exploring specific gameplay mechanics and systems
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatedList
          items={miniProjects}
          renderItem={(project: MiniProject, index: number) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow hover:border-primary/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
            >
              {/* Image container - replaces prototype text */}
              <div className="aspect-video rounded-md mb-4 overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.imageAlt || project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/600x400/1a1a2e/6366f1?text=Project+Image";
                    target.alt = "Project image placeholder";
                  }}
                />
              </div>
              
              <h3 className="text-primary mb-2">{project.title}</h3>
              <p className="text-foreground mb-3 text-sm leading-relaxed">{project.description}</p>
              
              {/* Bubble-style technology tags - MATCHING PROJECTS PAGE */}
              <div className="flex flex-wrap gap-2">
                {(Array.isArray(project.tech) ? project.tech : [project.tech]).map((tech: string, techIndex: number) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          fromTransform="translateY(30px)"
          fromOpacity={0.8}
          staggerDelay={60}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        />
      </div>
    </AnimatedPageWrapper>
  );
}