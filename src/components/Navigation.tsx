interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 w-full bg-neutral-50/80 backdrop-blur-sm z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => handleNavigation("home")}
            className="text-neutral-900 tracking-wide"
          >
            AB
          </button>
          
          <div className="flex gap-8">
            <button
              onClick={() => handleNavigation("home")}
              className={`text-sm tracking-wide transition-colors ${
                currentPage === "home"
                  ? "text-neutral-900"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("community")}
              className={`text-sm tracking-wide transition-colors ${
                currentPage === "community"
                  ? "text-neutral-900"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Community Involvement
            </button>
            <button
              onClick={() => handleNavigation("art")}
              className={`text-sm tracking-wide transition-colors ${
                currentPage === "art"
                  ? "text-neutral-900"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Art & Culture
            </button>
            <button
              onClick={() => handleNavigation("research")}
              className={`text-sm tracking-wide transition-colors ${
                currentPage === "research"
                  ? "text-neutral-900"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Research Paper
            </button>
            <button
              onClick={() => handleNavigation("work")}
              className={`text-sm tracking-wide transition-colors ${
                currentPage === "work"
                  ? "text-neutral-900"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Work Experiences
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className={`text-sm tracking-wide transition-colors ${
                currentPage === "contact"
                  ? "text-neutral-900"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
