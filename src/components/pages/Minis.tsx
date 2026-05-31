import { AnimatedPageWrapper } from "../animation/AnimatedPageWrapper";
import { AnimatedSection } from "../animation/AnimatedSection";
import { AnimatedList } from "../animation/AnimatedList";
import { FaLink } from "react-icons/fa";

// Define the MiniProject type interface
interface MiniProject {
  title: string;
  description: string;
  tech: string | string[];
  image: string;
  imageAlt?: string;
  link?: string;
}

export function Minis() {
  const miniProjects: MiniProject[] = [
    {
      title: "Waat.io",
      description: "A feature-rich drawing application built with TypeScript and HTML5 Canvas, featuring multiple brush tools, customizable stickers, and a complete undo/redo system implemented via the command pattern.",
      tech: ["TypeScript", "HTML5 Canvas", "CSS3"],
      image: "./game-thumbs/waatio.png",
      imageAlt: "Waat.io drawing application interface",
      link: "https://jnguy405.github.io/Waatio/",
    },
    {
      title: "The Claw",
      description: "The Claw is a 3D electromechanical game where you control the claw to save the toys from destruction. The game was inspired by Toy Story 3 and combines elements of claw machines and coin pushers. Coins and toys are procedurally generated.",
      tech: ["Unity 3D", "C#", "Procedural Generation", "Wave Spawning"],
      image: "./game-thumbs/theclaw.png",
      imageAlt: "The Claw game screenshot",
      link: "https://joshuwoshua.itch.io/the-claw",
    },
    {
      title: "Alein Store",
      description: "A 3D shopping cart game placed in space where you continusously load procedurally generated items into the ship. Enemies have wave-based spawning with proximity triggered attacks.",
      tech: ["Unity 3D", "C#", "FSM AI", "Procedural Generation", "Wave Spawning"],
      image: "./game-thumbs/aleinstore.png",
      imageAlt: "Alein Store game screenshot",
      link: "https://joshuwoshua.itch.io/alein-store",
    },
    {
      title: "Winx: Butterfly Garden",
      description: "A 3D exploration game where you explore the Garden and collect items to build your own butterfly garden. The game allowed me to experiment with NPC AI (FSMs), animators, and player flying/gliding mechanics.",
      tech: ["Unity 3D", "C#", "FSM AI", "Animators"],
      image: "./game-thumbs/winxgarden.png",
      imageAlt: "Winx: Butterfly Garden game screenshot",
      link: "https://ilyjenalee.itch.io/winx-fairy-garden",
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
      title: "UX/UI MOD - Clash of Clans",
      description: "A prototype featuring a squadron-based combat system and enhanced player agency. Core systems include customizable unit targeting, offensive and defensive battle planning, and adaptive progression balancing.",
      tech: ["Figma", "Google Suites", "Miro"],
      image: "./game-thumbs/coc.png",
      imageAlt: "Clash of Clans UX/UI mod design"
    },
    {
      title: "Seam Strike",
      description:
        "A tactical wave-based FPS featuring a unique quilt-based progression system and dynamic combat mechanics. Developed core systems including wave spawning logic, procedural upgrade paths, weapon ability customization, and strategic resource management.",
      tech: ["GDevelop", "Pixel Art", "Figma", "Miro"],
      image: "./game-thumbs/seamstrike.png", 
      imageAlt: "Seam Strike game screenshot",
      link: "https://gd.games/games/4b41ad4c-4d74-4b62-b051-47eec7281471",
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
          <h1 className="text-foreground mb-2">Mini Projects</h1>
          <p className="text-muted-foreground">
            Smaller experiments and rapid prototyping exploring specific gameplay mechanics and systems ranging from solo to collaborative projects.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatedList
          items={miniProjects}
          renderItem={(project: MiniProject, index: number) => (
            <div
              key={index}
              className="glass-panel mini-card p-6 hover:scale-[1.02] transition-all duration-300 group"
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

              <div className="mini-card-header">
                <h3 className="text-primary mini-card-title">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mini-card-link"
                    aria-label={`Open ${project.title}`}
                    title="View project"
                  >
                    <FaLink aria-hidden="true" />
                  </a>
                )}
              </div>
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