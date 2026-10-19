import { Link } from "react-router-dom";
import { Instagram, Mail, Youtube, ArrowUp } from "lucide-react";
import { NAV, SOCIALS } from "../data/content";
import { Logo } from "./Logo";
import { scrollToTarget } from "./SmoothScroll";

const ICONS = [
  ["instagram", Instagram, "Instagram"],
  ["email", Mail, "Email"],
  ["youtube", Youtube, "YouTube"],
];

export const Footer = () => (
  <footer className="bg-deep text-white relative overflow-hidden" data-testid="site-footer">
    <div className="container-x pt-24 pb-10">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Logo className="h-12 w-12 mb-8" inverted />
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">Aryan Basnet</h2>
        </div>
        <div className="flex gap-3">
          {ICONS.map(([key, Icon, label]) => (
            <a key={key} href={SOCIALS[key]} target={key === "email" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={label} className="footer-icon focus-ring" data-testid={`footer-social-${key}`}>
              <Icon size={19} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
      <nav className="mt-16 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/20 pt-8 sm:grid-cols-4 lg:flex lg:flex-wrap lg:gap-x-9" aria-label="Footer">
        {NAV.map(([to, label]) => (
          <Link key={to} to={to} className="footer-link focus-ring" data-testid={`footer-link-${to === "/" ? "home" : to.slice(1)}`}>{label}</Link>
        ))}
      </nav>
      <div className="mt-14 flex items-center justify-between text-sm text-white/75">
        <span>© {new Date().getFullYear()} Aryan Basnet</span>
        <button type="button" onClick={() => scrollToTarget(null)} className="back-top focus-ring" aria-label="Back to top" data-testid="footer-back-to-top">
          <ArrowUp size={18} />
        </button>
      </div>
    </div>
  </footer>
);
