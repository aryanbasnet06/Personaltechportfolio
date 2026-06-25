import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1200;
      setIsMobile(mobile);

      if (!mobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        .nav-root button,
        .nav-root button * {
          cursor: pointer !important;
        }

        .nav-logo {
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          font-size: 16px;
          transition: color 0.2s ease;
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 20px 0;
        }

        .mobile-link {
          text-align: left;
          font-size: 16px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigation("home")}
            className="nav-logo text-neutral-900"
          >
            AB
          </button>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="desktop-nav">
              {links.map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => handleNavigation(key)}
                  className={`nav-link tracking-wide ${
                    currentPage === key
                      ? "text-neutral-900 font-medium"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

        {/* Mobile Dropdown */}
        {isMobile && menuOpen && (
          <div className="mobile-menu">
            {links.map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleNavigation(key)}
                className={`mobile-link ${
                  currentPage === key
                    ? "text-neutral-900 font-medium"
                    : "text-neutral-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
