import { ProjectCard } from "../ProjectCard";
import { TechBar } from "../TechBar";

export function Home() {
  const projects = [
    {
      title: "Trickbit",
      description:
        "A 2D platformer featuring pathfinding enemy AI and dynamic environmental interactions. Developed core systems including finite state machine behaviors, particle effects, physics-based movement, and progressive multi-layer level design.",
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
      title: "Clash of Clans Mod - UI Redesign",
      description:
        "A Clash of Clans game mod prototype built in Figma featuring a squadron-based combat system and enhanced player agency inspired by auto-chess strategy games. Designed and developed core systems including customizable unit targeting, offensive and defensive battle planning, and adaptive progression balancing for deeper, decision-driven gameplay.",
      role: "UX/UI Designer and Project Coordinator",
      tech: ["Figma", "Google Suites", "Miro"],
    },
    {
      title: "Game Name",
      description:
        "Game Description",
      role: "Role",
      tech: ["Tech Stack"],
    },
  ];

  // Tech tiles: provide `img` for an image URL (absolute or from `public/`), and `href` to make the tile a link.
  const techIcons = [
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

  const profileImage = "16.JPG";

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="ml-[2%]">
            <div className="flex items-center justify-between">
              {profileImage ? (
                <div
                  className="mr-4 rounded-full overflow-hidden border border-accent/20"
                  style={{ width: 400, height: 400 }}
                >
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : null}

              <div className="text-right">
                <h1 className="mb-2">Jenalee Nguyen</h1>
                <p className="text-xl opacity-90">Junior Gameplay Developer</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="bg-accent/5 border border-accent/10 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-1">Technologies</h3>
            <p className="text-muted-foreground mb-4">Tools and technologies I commonly use</p>
            <TechBar techIcons={techIcons} />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-primary mb-2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            A selection of my game development work showcasing
            gameplay programming and system design
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}