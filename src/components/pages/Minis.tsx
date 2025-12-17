import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Minis() {
  const miniProjects = [
    {
      title: "Seam Strike",
      description:
        "A tactical wave-based FPS featuring a unique quilt-based progression system and dynamic combat mechanics. Developed core systems including wave spawning logic, procedural upgrade paths, weapon ability customization, and strategic resource management.",
      tech: ["GDevelop, Pixel Art, Git, Figma, Miro"],
    },
    {
      title: "Caring for Someone with Epilepsy",
      description:
        "Caring for Someone with Epilepsy is my first story line game made with Twine using JavaScript and HTML/CSS. Inspired by my personal experiences with my mother who had Epilepsy, I aim to create an educational simulator version while I learn 3D game engines.",
      tech: ["Twine, JavaScript, HTML/CSS"],
    },
    {
      title: "Cafe",
      description: "Mock Cookie Clicker but coffee shop",
      tech: "TypeScript, HTML/CSS",
    },
    {
      title: "World of Bits",
      description: "Description",
      tech: "TypeScript, HTML/CSS, Leaflet",
    },
    {
      title: "Name",
      description: "Description",
      tech: "Tech",
    },
    {
      title: "Name",
      description: "Description",
      tech: "Tech",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-primary mb-2">Mini Projects</h1>
          <p className="text-muted-foreground">
            Smaller experiments and prototypes exploring specific gameplay mechanics and systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {miniProjects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                <div className="text-muted-foreground">Prototype</div>
              </div>
              <h3 className="text-primary mb-2">{project.title}</h3>
              <p className="text-foreground mb-3">{project.description}</p>
              <p className="text-sm text-muted-foreground">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
