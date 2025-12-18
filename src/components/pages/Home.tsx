import { ProjectCard } from "../ProjectCard";
import { TechBar } from "../TechBar";
import { animated, useSpring, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

type Project = {
  title: string;
  description: string;
  role: string;
  tech: string[];
};

type TechIcon = {
  id: string;
  name: string;
  img: string;
  href: string;
};

// Animation configuration constants
const ANIMATION_CONFIG = {
  threshold: 0.1,
  triggerOnce: true,
} as const;

const PROJECTS: Project[] = [
  {
    title: "Game Name",
    description: "Game Description",
    role: "Role",
    tech: ["Tech Stack"],
  },
  {
    title: "Trickbit",
    description: "A 2D platformer featuring pathfinding enemy AI and dynamic environmental interactions. Developed core systems including finite state machine behaviors, particle effects, physics-based movement, and progressive multi-layer level design.",
    role: "Solo Developer",
    tech: [
      "Phaser.js",
      "Tiled",
      "Javascript",
      "HTML/CSS",
      "Git",
      "VS LiveServer",
    ],
  },
  {
    title: "Game Name",
    description: "Game Description",
    role: "Role",
    tech: ["Tech Stack"],
  },
  {
    title: "Game Name",
    description: "Game Description",
    role: "Role",
    tech: ["Tech Stack"],
  },
  {
    title: "Game Name",
    description: "Game Description",
    role: "Role",
    tech: ["Tech Stack"],
  },
];

const TECH_ICONS: TechIcon[] = [
  { id: "phaser", name: "Phaser", img: "/tech-icons/phaser.png", href: "https://phaser.io/" },
  { id: "javascript", name: "JavaScript", img: "/tech-icons/javascript.png", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { id: "html", name: "HTML/CSS", img: "/tech-icons/html-css.png", href: "https://developer.mozilla.org/en-US/docs/Web" },
  { id: "figma", name: "Figma", img: "/tech-icons/figma.png", href: "https://figma.com/" },
  { id: "tiled", name: "Tiled", img: "/tech-icons/tiled.png", href: "https://www.mapeditor.org/" },
  { id: "react", name: "React", img: "/tech-icons/react.png", href: "https://reactjs.org/" },
  { id: "typescript", name: "TypeScript", img: "/tech-icons/typescript.png", href: "https://www.typescriptlang.org/" },
  { id: "github", name: "GitHub", img: "/tech-icons/github.png", href: "https://github.com/" },
  { id: "three", name: "Three.js", img: "/tech-icons/three.png", href: "https://threejs.org/" },
];

const PROFILE_IMAGE = "16.JPG";

// Separate component for each animated project card
const AnimatedProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [ref, inView] = useInView({
    ...ANIMATION_CONFIG,
    rootMargin: '-50px 0px',
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(40px)',
    config: config.gentle,
    delay: index * 100,
  });

  return (
    <animated.div ref={ref} style={animation}>
      <ProjectCard {...project} />
    </animated.div>
  );
};

export function Home() {
  // Header section
  const [headerRef, headerInView] = useInView(ANIMATION_CONFIG);
  const headerAnimation = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? 'translateY(0)' : 'translateY(20px)',
    config: config.gentle,
  });

  // Technologies section
  const [techRef, techInView] = useInView(ANIMATION_CONFIG);
  const techAnimation = useSpring({
    opacity: techInView ? 1 : 0,
    transform: techInView ? 'translateY(0)' : 'translateY(20px)',
    config: config.gentle,
    delay: 100,
  });

  // Projects header section
  const [projectsHeaderRef, projectsHeaderInView] = useInView(ANIMATION_CONFIG);
  const projectsHeaderAnimation = useSpring({
    opacity: projectsHeaderInView ? 1 : 0,
    transform: projectsHeaderInView ? 'translateY(0)' : 'translateY(20px)',
    config: config.gentle,
    delay: 200,
  });

  return (
    <div className="min-h-screen">
      <animated.header 
        ref={headerRef}
        style={headerAnimation}
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
                <p className="text-xl opacity-90">Junior Gameplay Developer</p>
              </div>
            </div>
          </div>
        </div>
      </animated.header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Technologies Section */}
        <animated.div 
          ref={techRef}
          style={techAnimation}
          className="mb-8"
        >
          <div className="bg-accent/5 border border-accent/10 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-1">Technologies</h3>
            <TechBar techIcons={TECH_ICONS} />
          </div>
        </animated.div>

        {/* Projects Header */}
        <animated.div 
          ref={projectsHeaderRef}
          style={projectsHeaderAnimation}
          className="mb-8"
        >
          <h2 className="text-primary mb-2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            A selection of my game development work showcasing
            gameplay programming and system design
          </p>
        </animated.div>

        {/* Projects List */}
        <div className="flex flex-col gap-6">
          {PROJECTS.map((project, index) => (
            <AnimatedProjectCard 
              key={`${project.title}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </main>
    </div>
  );
}