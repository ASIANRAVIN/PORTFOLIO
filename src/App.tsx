import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Minis } from "./components/pages/Minis";
import { Projects } from "./components/pages/Projects";

const pageEnter = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

// Save scroll positions per page
const scrollPositions: Record<string, number> = {};

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Custom navigation handler
  const handleNavigation = (page: string) => {
    // Save current scroll position before leaving
    scrollPositions[currentPage] = window.scrollY;
    
    // Scroll to top for the new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update page
    setCurrentPage(page);
  };

  // Handle page load and restoration
  useEffect(() => {
    // On component mount, try to restore scroll position
    const savedScroll = scrollPositions[currentPage];
    
    if (savedScroll !== undefined) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        window.scrollTo({ top: savedScroll, behavior: 'auto' });
      }, 50);
    } else {
      // If no saved position, scroll to top
      window.scrollTo(0, 0);
    }

    // Save scroll position before page unload/refresh
    const handleBeforeUnload = () => {
      scrollPositions[currentPage] = window.scrollY;
      // Optional: Save to localStorage for persistence across page refresh
      localStorage.setItem('scrollPositions', JSON.stringify(scrollPositions));
      localStorage.setItem('currentPage', currentPage);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [currentPage]);

  // Load saved positions from localStorage on initial mount
  useEffect(() => {
    const savedScrollPositions = localStorage.getItem('scrollPositions');
    const savedPage = localStorage.getItem('currentPage');
    
    if (savedScrollPositions) {
      try {
        const parsed = JSON.parse(savedScrollPositions);
        Object.assign(scrollPositions, parsed);
      } catch (e) {
        console.error('Failed to parse saved scroll positions:', e);
      }
    }
    
    if (savedPage && savedPage !== currentPage) {
      setCurrentPage(savedPage);
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About Me":
        return <About />;
      case "Minis":
        return <Minis />;
      case "Projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigation}
      />

      <motion.div
        key={currentPage}
        initial="initial"
        animate="animate"
        variants={pageEnter}
        className="min-h-screen"
      >
        {renderPage()}
      </motion.div>
    </div>
  );
}