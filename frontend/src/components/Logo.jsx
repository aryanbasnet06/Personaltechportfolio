export const Logo = ({ className = "h-10 w-10", inverted = false }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <rect width="64" height="64" rx="6" fill={inverted ? "#ffffff" : "#7a0c0c"} />
    <path d="M19 48 L32 15 L45 48" fill="none" stroke={inverted ? "#6b0000" : "#ffffff"} strokeWidth="5.5" strokeLinecap="square" strokeLinejoin="miter" />
  </svg>
);

export const LogoLockup = () => (
  <span className="logo-lockup">
    <Logo className="h-9 w-9" />
    <span className="font-serif text-[22px] leading-none tracking-tight text-ink">Aryan Basnet</span>
  </span>
);
