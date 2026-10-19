import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 28, className = "", as = "div", ...rest }) => {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  if (reduce) return <Tag className={className} {...rest}>{children}</Tag>;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const MaskLines = ({ lines, className = "", lineClassName = "", delay = 0.1, as = "h1", testid }) => {
  const reduce = useReducedMotion();
  const Tag = as;
  return (
    <Tag className={className} data-testid={testid}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${lineClassName}`}
            initial={reduce ? false : { y: "108%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease: EASE, delay: delay + i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export const Eyebrow = ({ children, className = "", light = false }) => (
  <span className={`eyebrow ${light ? "text-[#f3d9d9]" : "text-maroon"} ${className}`}>
    <span className={`h-px w-8 ${light ? "bg-[#f3d9d9]" : "bg-maroon"}`} />
    {children}
  </span>
);
