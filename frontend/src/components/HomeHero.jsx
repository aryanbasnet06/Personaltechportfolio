import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MaskLines } from "./Motion";
import { scrollToTarget } from "./SmoothScroll";

const fade = (d) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] } });

export const HomeHero = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <section ref={ref} className="hero-wrap relative overflow-hidden" data-testid="home-hero">
      <div className="container-x relative grid gap-14 pt-32 pb-20 md:pt-40 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-28">
        <div className="lg:col-span-7 relative z-10">
          <motion.div {...fade(0)} className="pronoun-pill" data-testid="hero-pronouns">PRONOUNS: HE / HIM</motion.div>
          <MaskLines lines={["Aryan", "Basnet"]} className="display-hero mt-8" lineClassName="[&:nth-child(1)]:pl-0" delay={0.15} testid="hero-name" />
          <motion.h2 {...fade(0.55)} className="tagline mt-8" data-testid="hero-tagline">
            COMPUTERPHILE <span className="text-pink">|</span> SOCIAL ENTREPRENEUR <span className="text-pink">|</span> POLICY RESEARCHER
          </motion.h2>
          <motion.p {...fade(0.7)} className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-soft" data-testid="hero-intro">
            I work at the intersection of <strong className="font-semibold text-ink">technology, education, and social development.</strong>
          </motion.p>
          <motion.div {...fade(0.85)} className="mt-10 flex flex-wrap gap-3">
            <a href="#about-me" onClick={(e) => { e.preventDefault(); scrollToTarget("#about-me"); }} className="btn-primary focus-ring" data-testid="hero-more-about-me">
              More about me <ArrowDown size={16} className="btn-arrow-down" />
            </a>
            <Link to="/projects" className="btn-ghost focus-ring" data-testid="hero-view-projects">
              View projects <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
        <div className="lg:col-span-5 relative" onMouseMove={onMove} onMouseLeave={reset} style={{ perspective: 1200 }}>
          <motion.div style={{ y, rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="portrait-stage mx-auto">
            <div className="portrait-back" style={{ transform: "translateZ(-40px)" }} />
            <div className="portrait-arch" style={{ transform: "translateZ(20px)" }}>
              <img src="/images/opt/aryanbasnet.webp" alt="Portrait of Aryan Basnet" fetchpriority="high" className="h-full w-full object-cover" data-testid="hero-portrait" />
            </div>
            <div className="portrait-badge" style={{ transform: "translateZ(60px)" }}>
              <span className="font-serif text-2xl leading-none text-maroon">Vidhata</span>
              <span className="mt-1 text-xs tracking-[0.18em] text-soft">FOUNDER</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
