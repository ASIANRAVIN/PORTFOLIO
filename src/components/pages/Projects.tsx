import { AnimatedPageWrapper } from "../animation/AnimatedPageWrapper";
import { AnimatedSection } from "../animation/AnimatedSection";
import { AnimatedList } from "../animation/AnimatedList";

// Define the Project type interface
interface Project {
  title: string;
  role: string;
  duration: string;
  team: string;
  description: string;
  contributions: string[];
  technologies: string[];
  achievements: string;
}

export function Projects() {
  const detailedProjects: Project[] = [
    {
      title: "Mini Mania",
      role: "Tools Lead & Systems Developer",
      duration: "3 Weeks",
      team: "Team of 4",
      description: "A modular 3D puzzle platformer featuring physics-driven gameplay mechanics and persistent progression systems. Architected with developer experience in mind through automated workflows, type-safe state containers, and optimized rendering pipelines for smooth player interaction.",
      contributions: [
        "Designed and implemented the save/load system architecture supporting multiple slots and auto-save",
        "Developed the dynamic theming system with CSS custom properties and React context integration",
        "Integrated internationalization (i18n) for three languages with RTL support",
        "Conducted systematic refactoring to improve code maintainability and reduce technical debt",
        "Managed project documentation including technical specifications and development logs",
      ],
      technologies: ["TypeScript", "Vite", "GitHub Actions", "ESLint/Husky", "React", "Zustand", "Three.js", "Cannon-es"],
      achievements: "Established professional-grade development infrastructure supporting cross-functional collaboration and rapid iteration cycles.",
    },
    {
      title: "Trickbit",
      role: "Technical Designer",
      duration: "3 Weeks",
      team: "Solo Project",
      description: "A 2D platformer with progressive difficulty across three distinct levels, featuring environmental puzzles, interactive objects, and physics-driven movement. Focused on polished gameplay feel through audio integration and visual feedback.",
      contributions: [
        "Implemented player physics system with acceleration/deceleration mechanics",
        "Designed and integrated three-tier level progression with increasing complexity",
        "Built interactive systems for doors, chests, and environmental triggers",
        "Integrated audio systems for player actions and environmental interactions",
        "Configured tilemap collisions and layer management for precise gameplay",
      ],
      technologies: ["Phaser.js", "JavaScript", "Tiled", "HTML5/CSS", "VS Code Live Server"],
      achievements: "Delivered a complete 3-level platformer with progressive difficulty curve and polished player experience.",
    },
    {
      title: "Token To-Go",
      role: "Systems Architect",
      duration: "2 Weeks",
      team: "Solo Project",
      description: "A location-based puzzle game merging 4096 mechanics with real-world mapping, where players strategically collect and combine tokens through proximity interactions and deterministic world generation. Built with performance-conscious architecture and persistent state management.",
      contributions: [
        "Architected deterministic world generation system using seed-based RNG for reproducible gameplay",
        "Implemented Flyweight pattern for efficient grid cell management and memory optimization",
        "Designed Memento pattern-based persistence system for complete game state serialization",
        "Built dual movement system integrating manual controls with HTML5 Geolocation API",
        "Developed proximity-based interaction mechanics with dynamic range calculation",
      ],
      technologies: ["TypeScript", "Leaflet.js", "HTML5 Geolocation API", "Design Patterns", "GitHub Pages"],
      achievements: "Successfully engineered a location-based puzzle game with deterministic replayability and memory-optimized architecture.",
    }
  ];

  return (
    <AnimatedPageWrapper>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Header */}
        <AnimatedSection
          delay={0}
          fromTransform="translateY(20px)"
          className="mb-8"
        >
          <h1 className="text-primary mb-2">Project Details</h1>
          <p className="text-muted-foreground">
            In-depth look at major game development projects with full context and contributions
          </p>
        </AnimatedSection>

        {/* Projects List with staggered animation */}
        <AnimatedList
          items={detailedProjects}
          renderItem={(project: Project, index: number) => (
            <article
              key={index}
              className="bg-card border border-border rounded-lg p-8 mb-8 
                         hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <h2 className="text-primary mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <span>{project.role}</span>
                  <span>•</span>
                  <span>{project.duration}</span>
                  <span>•</span>
                  <span>{project.team}</span>
                </div>
              </div>

              <div className="aspect-video bg-muted rounded-md mb-6 flex items-center justify-center">
                <div className="text-muted-foreground">Project Screenshot</div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2">Overview</h3>
                  <p className="text-foreground">{project.description}</p>
                </div>

                <div>
                  <h3 className="mb-2">Key Contributions</h3>
                  <ul className="space-y-2">
                    {project.contributions.map((resp: string, idx: number) => (
                      <li key={idx} className="text-foreground">
                        • {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground italic">{project.achievements}</p>
                </div>
              </div>
            </article>
          )}
          fromTransform="translateY(40px)"
          staggerDelay={150}
          className="space-y-8"
        />
      </div>
    </AnimatedPageWrapper>
  );
}