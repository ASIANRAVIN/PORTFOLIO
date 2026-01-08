import { ProjectCard } from "../ProjectCard";
import { TechBar } from "../TechBar";
import { AnimatedSection } from "../animation/AnimatedSection";
import { AnimatedList } from "../animation/AnimatedList";
import { AnimatedPageWrapper } from "../animation/AnimatedPageWrapper";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const PROFILE_IMAGE = './tech-icons/portrait.png';
const GITHUB_LINK = "https://github.com/jnguy405";
const LINKEDIN_LINK = "https://www.linkedin.com/in/jenalee-nguyen-195624314/";
const RESUME_LINK = "https://drive.google.com/file/d/1l-EDgjYgvfIpS4V3cYZi4VzaOKK9eomA/view?usp=sharing";

type Project = {
  title: string;
  description: string;
  role: string;
  tech: string[];
  imageUrl?: string;
  repoLink?: string;
  demoLink?: string;
  detailsLink?: string;
};

type TechIcon = {
  id: string;
  name: string;
  img: string;
  href: string;
};

const PROJECTS: Project[] = [
  {
    title: "Mini Mania",
    description: "Mini Mania is an immersive 3D escape-style adventure where players solve physics-based puzzles, manage economy, and obtain keys by winning. Features implemented include persistent inventory systems, dynamic theming across environments, and accessibility features such as multi-language support and save states.",
    role: "Tools Lead & System Developer",
    tech: ["Three.js", "Cannon-es", "React Three Fiber", "Drei", "Zustand", "Blender"],
    imageUrl: "./game-thumbs/minimania.png",
    repoLink: "https://github.com/jnguy405/Mini-Mania", 
    demoLink: "https://jnguy405.github.io/Mini-Mania/", 
    detailsLink: "Projects#mini-mania", 
  },
  {
    title: "Trickbit",
    description: "A 2D platformer featuring pathfinding enemy AI and dynamic environmental interactions. Core systems developed include finite state machine behaviors, particle effects, physics-based movement, and progressive multi-layer level design.",
    role: "Solo Developer",
    tech: ["Phaser.js", "Tiled", "Javascript", "HTML/CSS", "VS LiveServer"],
    imageUrl: "./game-thumbs/trickbit.png", 
    repoLink: "https://github.com/jnguy405/Trickbit",
    demoLink: "https://jnguy405.github.io/Trickbit/", 
    detailsLink: "Projects#trickbit", 
  },
  {
    title: "Token To-Go",
    description: "Token To Go is a location-based puzzle game where players collect and combine tokens on a real-world map to reach target values through strategic movement and deterministic spawning. It features proximity-based interactions, single-slot inventory management, token crafting mechanics, and dual movement controls with comprehensive game state persistence.",
    role: "Solo Developer",
    tech: ["TypeScript", "Leaflet", "HTML/CSS"],
    imageUrl: "./game-thumbs/tokentogo.png",
    repoLink: "https://github.com/jnguy405/TokenToGo", 
    demoLink: "https://jnguy405.github.io/TokenToGo/", 
    detailsLink: "Projects#token-to-go",
  },
];

const TECH_ICONS: TechIcon[] = [
  { id: "phaser", name: "Phaser", img: "./tech-icons/phaser.png", href: "https://phaser.io/" },
  { id: "javascript", name: "JavaScript", img: "./tech-icons/javascript.png", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { id: "html", name: "HTML/CSS", img: "./tech-icons/html-css.png", href: "https://developer.mozilla.org/en-US/docs/Web" },
  { id: "figma", name: "Figma", img: "./tech-icons/figma.png", href: "https://figma.com/" },
  { id: "tiled", name: "Tiled", img: "./tech-icons/tiled.png", href: "https://www.mapeditor.org/" },
  { id: "react", name: "React", img: "./tech-icons/react.png", href: "https://reactjs.org/" },
  { id: "typescript", name: "TypeScript", img: "./tech-icons/typescript.png", href: "https://www.typescriptlang.org/" },
  { id: "github", name: "GitHub", img: "./tech-icons/github.png", href: "https://github.com/" },
  { id: "three", name: "Three.js", img: "./tech-icons/three.png", href: "https://threejs.org/" },
];

export function Home() {
  return (
    <AnimatedPageWrapper>
      {/* Header Section */}
      <AnimatedSection
        as="header"
        delay={0}
        fromTransform="translateY(30px)"
        className="bg-primary text-primary-foreground py-12 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="ml-[2%]">
            <div className="flex items-center justify-between">
              {PROFILE_IMAGE && (
                <div 
                  className="mr-4 rounded-full overflow-hidden border border-accent/20" 
                  style={{ width: 400, height: 400 }}
                >
                  <img
                    src={PROFILE_IMAGE}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="text-right">
                <h1 className="mb-2">Jenalee Nguyen</h1>
                <p className="text-xl opacity-90 mb-4">Junior Gameplay Developer</p>
                
                {/* Add social icons here */}
                <div className="flex justify-end gap-4">
                  <a
                    href={GITHUB_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:scale-110"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={LINKEDIN_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={RESUME_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:scale-110"
                    aria-label="Download Resume"
                  >
                    <FaFilePdf className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Technologies Section */}
        <AnimatedSection
          delay={100}
          className="mb-8"
        >
          <div className="bg-accent/5 border border-accent/10 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-1">Technologies</h3>
            <TechBar techIcons={TECH_ICONS} />
          </div>
        </AnimatedSection>

        {/* Projects Header */}
        <AnimatedSection
          delay={200}
          className="mb-8"
        >
          <h2 className="text-primary mb-2">Featured Projects</h2>
          <p className="text-muted-foreground">
            A selection of my game development work showcasing
            gameplay programming and system design
          </p>
        </AnimatedSection>

        {/* Projects List */}
        <AnimatedList
          items={PROJECTS}
          renderItem={(project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title}
              description={project.description}
              role={project.role}
              tech={project.tech}
              // Pass the new link props:
              imageUrl={project.imageUrl}
              repoLink={project.repoLink}
              demoLink={project.demoLink}
              detailsLink={project.detailsLink}
            />
          )}
          fromTransform="translateY(40px)"
          staggerDelay={100}
          className="flex flex-col gap-6"
        />
      </main>
    </AnimatedPageWrapper>
  );
}