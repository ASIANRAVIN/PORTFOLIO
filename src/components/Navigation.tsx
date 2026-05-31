interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isLoading?: boolean;
}

export function Navigation({ currentPage, onNavigate, isLoading = false }: NavigationProps) {
  const navItems = ["Home", "Contact", "About Me", "Minis", "Projects"];

  const handleClick = (item: string) => {
    if (!isLoading) {
      onNavigate(item);
    }
  };

  return (
    <nav className="w-full bg-primary border-b border-primary-foreground/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 
            className={`text-primary-foreground cursor-pointer transition-opacity ${
              isLoading ? 'opacity-70' : 'hover:opacity-80'
            }`}
            onClick={() => handleClick("Home")}
          >
            Portfolio
          </h1>
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleClick(item)}
                  disabled={isLoading}
                  className={`transition-all duration-200 ${
                    currentPage === item
                      ? "text-primary-foreground font-medium"
                      : "text-primary-foreground/60 hover:text-primary-foreground"
                  } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
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