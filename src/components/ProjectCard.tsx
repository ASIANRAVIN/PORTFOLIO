import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  tech: string[];
  imageUrl?: string;
  repoLink?: string;
  demoLink?: string;
  detailsLink?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  role, 
  tech, 
  imageUrl,
  repoLink = "#",
  demoLink = "#",
  detailsLink = "#" 
}: ProjectCardProps) {
  
  const handleDetailsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (detailsLink && detailsLink !== "#") {
      // Dispatch custom event for navigation
      window.dispatchEvent(new CustomEvent('navigate', { 
        detail: detailsLink 
      }));
    }
  };

  return (
    <div className="w-full bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="grid md:grid-cols-[300px_1fr] gap-6 p-6">
        {/* Image column */}
        <div className="aspect-video md:aspect-auto bg-muted rounded-md overflow-hidden flex items-center justify-center">
          {imageUrl ? (
            <ImageWithFallback
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              fallback={
                <div className="text-muted-foreground p-4 text-center">
                  <div className="text-3xl mb-2">🎮</div>
                  <div>{title} Thumbnail</div>
                </div>
              }
            />
          ) : (
            <div className="text-muted-foreground p-4 text-center">
              <div className="text-3xl mb-2">🎮</div>
              <div>Game Thumbnail</div>
            </div>
          )}
        </div>
        
        {/* Content + Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Text content */}
          <div className="flex-1 flex flex-col gap-3">
            <div>
              <h3 className="text-primary mb-1">{title}</h3>
              <p className="text-muted-foreground">{role}</p>
            </div>
            <p className="text-foreground">{description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          {/* Button column */}
          <div className="flex md:flex-col gap-3 justify-start md:justify-start self-start shrink-0">
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors hover:scale-105 active:scale-95" 
              title="View Repository"
            >
              {/* GitHub icon */}
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors hover:scale-105 active:scale-95" 
              title="Play Demo"
            >
              {/* Play icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 8L16 12L10 16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <button
              onClick={handleDetailsClick}
              disabled={detailsLink === "#"}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-105 active:scale-95 ${
                detailsLink === "#" 
                  ? "bg-secondary/10 text-muted-foreground cursor-not-allowed" 
                  : "bg-secondary/20 hover:bg-secondary/30 cursor-pointer"
              }`}
              title="Project Details"
            >
              {/* Info icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}