import { Link } from "react-router-dom";
import { ArrowUpRight, FileText } from "lucide-react";
import { HomeHero } from "../components/HomeHero";
import { Marquee } from "../components/Marquee";
import { Reveal, Eyebrow } from "../components/Motion";
import { ABOUT, EXPLORE, RESUME } from "../data/content";

const About = () => (
  <section id="about-me" className="bg-paper py-24 md:py-32 border-t border-line" data-testid="about-section">
    <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-5">
        <div className="about-frame">
          <img src="/images/opt/AryanBasnet_founder_final.webp" alt="Aryan Basnet, Founder of Vidhata" loading="lazy" className="h-full w-full object-cover" data-testid="about-image" />
        </div>
      </Reveal>
      <div className="lg:col-span-7 lg:pt-6">
        <Reveal><Eyebrow>About Me</Eyebrow></Reveal>
        <Reveal delay={0.05}><h2 className="display-lg mt-6">ABOUT ME</h2></Reveal>
        <div className="mt-8 space-y-6 max-w-[62ch]">
          {ABOUT.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08} as="p" className="text-[17px] leading-[1.8] text-soft">{p}</Reveal>
          ))}
        </div>
        <Reveal delay={0.25}>
          <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn-primary focus-ring mt-10" data-testid="about-resume-button">
            <FileText size={16} /> Check out my resume
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);

const Explore = () => (
  <section className="bg-paper py-24 md:py-32" data-testid="home-explore">
    <div className="container-x">
      <Reveal><Eyebrow>Explore</Eyebrow></Reveal>
      <ul className="mt-10 border-t border-line">
        {EXPLORE.map((e, i) => (
          <Reveal as="li" key={e.to} delay={i * 0.05}>
            <Link to={e.to} className="explore-row group focus-ring" data-testid={`explore-link-${e.to.slice(1)}`}>
              <span className="text-xs tabular-nums tracking-[0.2em] text-brown-ink">0{i + 1}</span>
              <span className="explore-thumb"><img src={e.image} alt="" loading="lazy" className="h-full w-full object-cover" /></span>
              <span className="flex-1 min-w-0">
                <span className="block font-serif text-3xl md:text-5xl leading-tight text-ink transition-colors duration-300 group-hover:text-maroon">{e.label}</span>
                <span className="mt-1 block text-sm text-soft">{e.note}</span>
              </span>
              <ArrowUpRight className="shrink-0 text-maroon transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" size={28} strokeWidth={1.5} />
            </Link>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default function Home() {
  return (
    <main data-testid="page-home">
      <HomeHero />
      <Marquee />
      <About />
      <Explore />
    </main>
  );
}
