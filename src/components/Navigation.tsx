import { useEffect, useState } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isLoading?: boolean;
}

const NAV_ITEMS = ["Home", "Contact", "About Me", "Minis", "Projects"];

export function Navigation({
  currentPage,
  onNavigate,
  isLoading = false,
}: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (item: string) => {
    if (!isLoading) {
      onNavigate(item);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPage]);

  return (
    <nav className="portfolio-nav w-full bg-primary border-b border-primary-foreground/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="portfolio-nav-bar flex items-center justify-between">
          <h1
            className={`text-primary-foreground cursor-pointer transition-opacity ${
              isLoading ? "opacity-70" : "hover:opacity-80"
            }`}
            onClick={() => handleClick("Home")}
          >
            Portfolio
          </h1>

          <button
            type="button"
            className="portfolio-nav-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="portfolio-nav-menu"
            disabled={isLoading}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`portfolio-nav-toggle-icon${menuOpen ? " portfolio-nav-toggle-icon--open" : ""}`}
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </span>
          </button>

          <ul className="portfolio-nav-desktop">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => handleClick(item)}
                  disabled={isLoading}
                  className={`portfolio-nav-link${
                    currentPage === item ? " portfolio-nav-link--active" : ""
                  }${isLoading ? " portfolio-nav-link--disabled" : ""}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div
          id="portfolio-nav-menu"
          className={`portfolio-nav-dropdown${menuOpen ? " portfolio-nav-dropdown--open" : ""}`}
        >
          <ul className="portfolio-nav-mobile">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => handleClick(item)}
                  disabled={isLoading}
                  className={`portfolio-nav-link portfolio-nav-link--mobile${
                    currentPage === item ? " portfolio-nav-link--active" : ""
                  }${isLoading ? " portfolio-nav-link--disabled" : ""}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
