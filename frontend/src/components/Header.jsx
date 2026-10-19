import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV } from "../data/content";

const slug = (to) => (to === "/" ? "home" : to.slice(1));

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} data-testid="site-header">
      <div className="container-x flex h-[76px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3 focus-ring rounded-xl" data-testid="nav-logo" aria-label="Aryan Basnet, home">
          <Logo className="h-10 w-10" />
          <span className="hidden font-serif text-lg tracking-tight text-ink sm:block">Aryan Basnet</span>
        </Link>
        <nav className="hidden xl:flex items-center gap-7" aria-label="Primary">
          {NAV.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} data-testid={`nav-link-${slug(to)}`} className={({ isActive }) => `nav-link focus-ring ${isActive ? "is-active" : ""}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <button type="button" className="xl:hidden menu-btn focus-ring" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} data-testid="mobile-menu-toggle">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && <MobileMenu />}
      </AnimatePresence>
    </header>
  );
};

const MobileMenu = () => (
  <motion.div id="mobile-menu" className="mobile-menu xl:hidden" data-testid="mobile-menu" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
    <nav className="container-x flex flex-col pt-6 pb-10" aria-label="Mobile">
      {NAV.map(([to, label], i) => (
        <motion.div key={to} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + i * 0.05, duration: 0.5 }}>
          <NavLink to={to} end={to === "/"} data-testid={`mobile-nav-link-${slug(to)}`} className={({ isActive }) => `mobile-link focus-ring ${isActive ? "is-active" : ""}`}>
            <span className="text-xs tabular-nums opacity-70">0{i + 1}</span>
            <span>{label}</span>
          </NavLink>
        </motion.div>
      ))}
    </nav>
  </motion.div>
);
