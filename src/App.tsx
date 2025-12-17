import { useState } from "react";
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

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

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
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

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
