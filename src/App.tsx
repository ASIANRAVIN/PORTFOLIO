import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/pages/Home';
import { Contact } from './components/pages/Contact';
import { About } from './components/pages/About';
import { Minis } from './components/pages/Minis';
import { Projects } from './components/pages/Projects';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>("Home");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pendingHash, setPendingHash] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    setIsLoading(true);
    
    if (page.includes('#')) {
      const [pageName, hash] = page.split('#');
      setCurrentPage(pageName);
      setPendingHash(hash);
    } else {
      setCurrentPage(page);
      setPendingHash(null);
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 300);
  };

  // Handle hash scrolling after Projects component mounts
  useEffect(() => {
    if (currentPage === "Projects" && pendingHash) {
      const scrollToElement = () => {
        const element = document.getElementById(pendingHash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
        setPendingHash(null);
      };

      // Delay to ensure DOM is rendered
      const timer = setTimeout(scrollToElement, 500);
      return () => clearTimeout(timer);
    }
  }, [currentPage, pendingHash]);

  // Listen for custom navigation events from ProjectCard
  useEffect(() => {
    const handleCustomNavigate = (event: CustomEvent) => {
      if (event.detail && typeof event.detail === 'string') {
        handleNavigate(event.detail);
      }
    };

    window.addEventListener('navigate' as any, handleCustomNavigate);
    return () => window.removeEventListener('navigate' as any, handleCustomNavigate);
  }, []);

  const renderPage = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      );
    }

    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Contact":
        return <Contact />;
      case "Projects":
        return <Projects />;
      case "About Me":
        return <About />;
      case "Minis":
        return <Minis />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        isLoading={isLoading}
      />
      {renderPage()}
    </div>
  );
}