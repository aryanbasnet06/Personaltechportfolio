import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MaskLines } from "./Motion";
import { Decode } from "./Decode";
import { scrollToTarget } from "./SmoothScroll";
import { RESUME } from "../data/content";

const EASE = [0.22, 1, 0.36, 1];
const fade = (d) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: EASE } });
const ROLES = ["COMPUTERPHILE", "SOCIAL ENTREPRENEUR", "POLICY RESEARCHER"];

const Badge = () => (
  <div className="hero-badge" aria-hidden="true">
    <svg viewBox="0 0 120 120" className="hero-badge-ring">
      <defs><path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
      <text><textPath href="#badge-circle" textLength="272" lengthAdjust="spacing">POLICY RESEARCHER · COMPUTERPHILE · SOCIAL ENTREPRENEUR ·</textPath></text>
    </svg>
    <span className="hero-badge-core" />
  </div>
);

const Portrait = () => {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 18 });
  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  return (
    <div className="relative" onMouseMove={onMove} onMouseLeave={() => { mx.set(0); my.set(0); }} style={{ perspective: 1200 }}>
      <motion.p {...fade(0.3)} className="mono-label mb-5 text-right" data-testid="hero-fig-caption">FIG. 01 — ARYAN BASNET</motion.p>
      <motion.div style={{ rotateX: rx, rotateY: ry }} initial={{ opacity: 0, rotate: 0, y: 30 }} animate={{ opacity: 1, rotate: -2, y: 0 }} transition={{ duration: 1.3, ease: EASE, delay: 0.25 }} className="photo-card">
        <span className="photo-corner tl" /><span className="photo-corner tr" /><span className="photo-corner bl" /><span className="photo-corner br" />
        <span className="absolute inset-0 overflow-hidden">
          <img src="/images/opt/aryanbasnet.webp" alt="Portrait of Aryan Basnet" fetchpriority="high" className="h-full w-full object-cover" data-testid="hero-portrait" />
        </span>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: EASE, delay: 0.9 }} className="absolute -bottom-10 -left-4 sm:-left-10 lg:-left-14">
        <Badge />
      </motion.div>
    </div>
  );
};

export const HomeHero = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);

  return (
    <section ref={ref} className="hero-wrap relative overflow-hidden" data-testid="home-hero">
      <div className="hero-lines" aria-hidden="true" />
      <div className="container-x relative grid gap-20 pt-28 pb-24 md:pt-32 lg:min-h-[100svh] lg:grid-cols-12 lg:items-center lg:gap-10 lg:pt-24 lg:pb-12">
        <div className="lg:col-span-7 relative z-10">
          <motion.div {...fade(0)} className="mono-label flex items-center gap-3" data-testid="hero-pronouns">
            <span className="diamond" /> <Decode text="PRONOUNS: HE / HIM" delay={150} />
          </motion.div>
          <MaskLines lines={["Aryan", "Basnet"]} className="display-hero mt-6" delay={0.15} testid="hero-name" />
          <motion.h2 {...fade(0.5)} className="tagline mt-8" data-testid="hero-tagline">
            {ROLES.map((r, i) => (
              <span key={r} className="block whitespace-nowrap sm:inline">
                {i > 0 && <span className="tagline-sep text-maroon">|</span>}
                <Decode text={r} delay={700 + i * 260} />
              </span>
            ))}
            <span className="cursor-blink" aria-hidden="true" />
          </motion.h2>
          <motion.p {...fade(0.7)} className="hero-intro mt-5 max-w-2xl" data-testid="hero-intro">
            I work at the intersection of <em className="text-maroon">technology, education, and social development.</em>
          </motion.p>
          <motion.div {...fade(0.85)} className="mt-8 flex flex-wrap gap-4">
            <a href="#about-me" onClick={(e) => { e.preventDefault(); scrollToTarget("#about-me"); }} className="btn-dark focus-ring" data-testid="hero-more-about-me">
              More about me <ArrowDown size={17} className="btn-arrow-down" />
            </a>
            <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn-outline focus-ring" data-testid="hero-resume-button">
              Check out my resume <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>
        <motion.div style={{ y }} className="lg:col-span-5 relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <Portrait />
        </motion.div>
      </div>
    </section>
  );
};
