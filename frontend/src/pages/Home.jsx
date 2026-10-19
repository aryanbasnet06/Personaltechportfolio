import { Link } from "react-router-dom";
import { ArrowUpRight, FileText, Play } from "lucide-react";
import { HomeHero } from "../components/HomeHero";
import { Marquee } from "../components/Marquee";
import { Reveal, Eyebrow } from "../components/Motion";
import { ABOUT, EXPLORE, RESUME, TITAN } from "../data/content";

const About = () => (
  <section id="about-me" className="bg-paper py-24 md:py-32" data-testid="about-section">
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

const TitanTeaser = () => (
  <section className="bg-white py-24 md:py-32" data-testid="home-titan-teaser">
    <div className="container-x">
      <Reveal className="titan-teaser group">
        <Link to="/projects#titan-city" className="grid overflow-hidden rounded-[28px] bg-night text-white lg:grid-cols-12 focus-ring" data-testid="home-titan-link">
          <div className="relative aspect-video overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[420px]">
            <img src={TITAN.image} alt="Titan City gameplay: an astronaut on a road in a colourful alien city" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]" />
          </div>
          <div className="flex flex-col justify-between gap-10 p-8 md:p-12 lg:col-span-5">
            <div>
              <Eyebrow light>New project</Eyebrow>
              <h3 className="mt-6 font-serif text-5xl md:text-6xl leading-none">{TITAN.title}</h3>
              <p className="mt-3 text-xs tracking-[0.2em] text-[#f3d9d9]">{TITAN.category.toUpperCase()}</p>
              <p className="mt-6 text-lg leading-relaxed text-white/85">{TITAN.description}</p>
            </div>
            <span className="inline-flex items-center gap-3 text-sm font-medium">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-maroon transition-transform duration-500 group-hover:scale-110"><Play size={16} fill="currentColor" /></span>
              Watch Demo
            </span>
          </div>
        </Link>
      </Reveal>
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
      <TitanTeaser />
      <Explore />
    </main>
  );
}
