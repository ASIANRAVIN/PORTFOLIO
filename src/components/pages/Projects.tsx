import { AnimatedPageWrapper } from "../animation/AnimatedPageWrapper";
import { AnimatedSection } from "../animation/AnimatedSection";
import { AnimatedList } from "../animation/AnimatedList";
import { useEffect } from 'react';

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
  images: string[]; 
  imageAlt?: string; 
}

export function Projects() {
  const detailedProjects: Project[] = [
    {
      title: "Balajong",
      role: "Systems Developer: Scoring & Consumables",
      duration: "3 weeks",
      team: "Team of 4",
      description: "A roguelike-deckbuilder promoting procedural systems across enemy generation, map layouts, loot tables, and tile randomization. Balajong leverages class-based procedural generators for encounters, decks, jokers, consumables, and audio so every run offers unique synergies and strategic adaptation.",
      contributions: [
        "Implemented the Score system with bucket sort for meld type recognition, score updates, and meld info communication",
        "Developed the Consumables system including consumable effects, inventory management, and bonus tile functionality",
        "Managed project documentation including ideation, check-ins, notes, and playtest summaries to track development progress",
        "Contributed to deck improvements and bonus tile enhancements to refine core gameplay mechanics",
        "Facilitated team coordination through check-ins and synthesis of playtest feedback into actionable development priorities",
      ],
      technologies: ["Unity", "C#", "CSV Tables", "GitHub"],
      achievements: "Engineered inventory persistence enabling player stats to persist across scene transitions and progression loops.",
      images: [
        "./projects/balajong1.png",
        "./projects/balajong2.png",
        "./projects/balajong3.png",
        "./projects/balajong4.png"
      ],
      imageAlt: "Balajong screenshots"

    },
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
      images: [
        "./projects/minimania1.png",
        "./projects/minimania2.png",
        "./projects/minimania3.png",
        "./projects/minimania4.png"
      ],
      imageAlt: "Mini Mania 3D puzzle platformer screenshots"
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
      images: [
        "./projects/trickbit1.png",
        "./projects/trickbit2.png",
        "./projects/trickbit3.png",
        "./projects/trickbit4.png"
      ],
      imageAlt: "Trickbit 2D platformer gameplay screenshots"
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
      images: [
        "./projects/token1.png",
        "./projects/token2.png",
        "./projects/token3.png",
        "./projects/token4.png"
      ],
      imageAlt: "Token To-Go location-based puzzle game interface"
    }
  ];

  // Handle direct URL access with hash
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          // Small delay to ensure animations are complete
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
      }
    };

    handleHashNavigation();
    
    // Also handle hash changes
    const handleHashChange = () => handleHashNavigation();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

        {/* Projects List */}
        <AnimatedList
          items={detailedProjects}
          renderItem={(project: Project, index: number) => {
            // Generate consistent ID (same as in Home.tsx)
            const projectId = project.title.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <article
                id={projectId}
                key={index}
                className="bg-card border border-border rounded-lg p-8 mb-8 
                         hover:border-primary/30 hover:shadow-lg transition-all duration-300
                         scroll-mt-20"
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

                {/* Image Gallery - Replaces Project Screenshot */}
                <div className="mb-6">
                  <div className={`grid gap-4 ${project.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                    {project.images.map((image, imgIndex) => (
                      <div 
                        key={imgIndex}
                        className="aspect-video rounded-md overflow-hidden bg-muted group relative"
                      >
                        <img 
                          src={image} 
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            // Fallback if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = `https://placehold.co/800x450/1a1a2e/6366f1?text=${encodeURIComponent(project.title)}+${imgIndex + 1}`;
                            target.alt = `${project.title} placeholder image`;
                          }}
                        />
                        {/* Image counter for multiple images */}
                        {project.images.length > 1 && (
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {imgIndex + 1}/{project.images.length}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Single image variant without grid */}
                  {project.images.length === 0 && (
                    <div className="aspect-video bg-gradient-to-br from-muted/80 to-muted/40 rounded-md flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg mb-2 opacity-70">🖼️</div>
                        <div className="text-muted-foreground">Project Screenshots Coming Soon</div>
                      </div>
                    </div>
                  )}
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
            );
          }}
          fromTransform="translateY(40px)"
          staggerDelay={150}
          className="space-y-8"
        />
      </div>
    </AnimatedPageWrapper>
  );
}