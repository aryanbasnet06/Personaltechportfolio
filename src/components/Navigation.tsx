interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const links = [
    ["home", "Home"],
    ["community", "Community Involvement"],
    ["art", "Art & Culture"],
    ["projects", "Projects"],
    ["leadership", "Leadership"],
    ["work", "Work Experience"],
    ["contact", "Contact"],
  ];

  return (
    <nav className="fixed top-0 w-full bg-neutral-50/80 backdrop-blur-sm border-b border-neutral-200 z-50 nav-root">
      <style>{`
        /* FORCE pointer cursor for all navigation items */
        .nav-root button,
        .nav-root button * {
          cursor: pointer !important;
        }

        /* LOGO + NAV TEXT SIZE */
        .nav-root .nav-logo {
          font-size: 22px; /* increased */
        }

        .nav-root .nav-link {
          font-size: 15.5px;
        }

        @media (min-width: 1024px) {
          .nav-root .nav-logo {
            font-size: 24px; /* increased */
          }

          .nav-root .nav-link {
            font-size: 16.5px;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigation("home")}
            className="nav-logo text-neutral-900 tracking-wide font-medium"
          >
            AB
          </button>

          {/* Navigation Links */}
          <div className="flex gap-8">
            {links.map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleNavigation(key)}
                className={`nav-link tracking-wide transition-colors ${
                  currentPage === key
                    ? "text-neutral-900 font-medium"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
