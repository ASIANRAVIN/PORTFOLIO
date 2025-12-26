import { AnimatedPageWrapper } from "../animation/AnimatedPageWrapper";
import { AnimatedSection } from "../animation/AnimatedSection";
import { AnimatedList } from "../animation/AnimatedList";

// Define the MiniProject type interface
interface MiniProject {
  title: string;
  description: string;
  tech: string | string[];
}

export function Minis() {
  const miniProjects: MiniProject[] = [
    {
      title: "Seam Strike",
      description:
        "A tactical wave-based FPS featuring a unique quilt-based progression system and dynamic combat mechanics. Developed core systems including wave spawning logic, procedural upgrade paths, weapon ability customization, and strategic resource management.",
      tech: ["GDevelop", "Pixel Art", "Git", "Figma", "Miro"],
    },
    {
      title: "Caring for Someone with Epilepsy",
      description:
        "Caring for Someone with Epilepsy is my first story line game made with Twine using JavaScript and HTML/CSS. Inspired by my personal experiences with my mother who had Epilepsy, I aim to create an educational simulator version while I learn 3D game engines.",
      tech: ["Twine", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Cafe",
      description: "Mock Cookie Clicker but coffee shop",
      tech: ["TypeScript", "HTML/CSS"],
    },
    {
      title: "Waat.io",
      description: "A feature-rich drawing application built with TypeScript and HTML5 Canvas, featuring multiple brush tools, customizable stickers, and a complete undo/redo system implemented via the command pattern.",
      tech: ["TypeScript", "HTML5 Canvas", "CSS3"],
    },
    {
      title: "UX/UI MOD - Clash of Clans",
      description: "A prototype featuring a squadron-based combat system and enhanced player agency. Core systems include customizable unit targeting, offensive and defensive battle planning, and adaptive progression balancing.",
      tech: ["Figma", "Google Suites", "Miro"],
    },
    {
      title: "Name",
      description: "Description",
      tech: ["Tech"],
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
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow hover:border-primary/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-md mb-4 flex items-center justify-center">
                <div className="text-muted-foreground text-center">
                  <div className="text-lg mb-1 opacity-70">🎮</div>
                  <div className="text-sm">Prototype</div>
                </div>
              </div>
              
              <h3 className="text-primary mb-2">{project.title}</h3>
              <p className="text-foreground mb-3 text-sm leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-1.5">
                {(Array.isArray(project.tech) ? project.tech : [project.tech]).map((tech: string, techIndex: number) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-md"
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