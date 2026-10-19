export const Logo = ({ className = "h-10 w-10", inverted = false }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <rect x="1" y="1" width="62" height="62" rx="18" fill={inverted ? "#ffffff" : "#7a0c0c"} />
    <text x="32" y="42" textAnchor="middle" fontFamily="Newsreader, Georgia, serif" fontSize="28" fontWeight="500" letterSpacing="-1" fill={inverted ? "#6b0000" : "#ffffff"}>
      AB
    </text>
    <rect x="18" y="48" width="28" height="2" rx="1" fill={inverted ? "#ad7158" : "#c29b9b"} />
  </svg>
);
