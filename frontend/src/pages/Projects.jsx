import { ArrowUpRight, Youtube } from "lucide-react";
import { PageIntro, Section, Frame, FeatureRow } from "../components/Blocks";
import { Reveal, Eyebrow } from "../components/Motion";
import { YouTubeEmbed } from "../components/YouTubeEmbed";
import { PROJECTS, TITAN } from "../data/content";

const Titan = () => (
  <section id="titan-city" className="bg-night text-white py-20 md:py-28 relative overflow-hidden" data-testid="project-titan-city">
    <div className="starfield" aria-hidden="true" />
    <div className="container-x relative">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Reveal><Eyebrow light>Featured · {TITAN.category}</Eyebrow></Reveal>
          <Reveal delay={0.05}><h2 className="mt-6 font-serif text-6xl sm:text-7xl lg:text-8xl leading-[0.92] tracking-tight" data-testid="titan-title">{TITAN.title}</h2></Reveal>
        </div>
        <Reveal className="lg:col-span-5" delay={0.12}>
          <p className="text-lg leading-relaxed text-white/85" data-testid="titan-description">{TITAN.description}</p>
        </Reveal>
      </div>
      <Reveal className="mt-12 md:mt-16" delay={0.1}>
        <div className="titan-screen">
          <YouTubeEmbed id={TITAN.videoId} title="Titan City – game demonstration" thumb={TITAN.image} testid="titan-video" />
        </div>
      </Reveal>
      <Reveal className="mt-8 flex flex-wrap items-center gap-4" delay={0.15}>
        <a href={TITAN.videoUrl} target="_blank" rel="noopener noreferrer" className="btn-light focus-ring" data-testid="titan-watch-demo">
          <Youtube size={17} /> Watch Demo on YouTube
        </a>
        <span className="chip-dark">Educational Game</span>
        <span className="chip-dark">EdTech</span>
      </Reveal>
    </div>
  </section>
);

const Project = ({ p, index }) => (
  <>
    <Section tone={index % 2 ? "white" : "grey"} id={p.id} testid={`project-${p.id}`}>
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className={`${p.portrait ? "lg:col-span-5" : "lg:col-span-6"} ${p.reverse ? "" : "lg:order-2"}`}>
          <div className="project-visual">
            <Frame src={p.image} alt={p.alt} ratio={p.portrait ? "aspect-[4/5]" : "aspect-[16/10]"} fit={p.portrait ? "object-contain" : "object-cover"} className={p.portrait ? "bg-white" : ""} />
          </div>
        </Reveal>
        <div className={`${p.portrait ? "lg:col-span-7" : "lg:col-span-6"} ${p.reverse ? "" : "lg:order-1"}`}>
          <Reveal><Eyebrow>{`0${index + 2} — ${p.tag}`}</Eyebrow></Reveal>
          <Reveal delay={0.05}><h2 className={`mt-6 ${p.title.length > 60 ? "display-md" : "display-lg"}`}>{p.title}</h2></Reveal>
          <Reveal as="p" delay={0.1} className="mt-6 text-[17px] leading-[1.8] text-soft max-w-[64ch]">{p.text}</Reveal>
          <Reveal delay={0.15}>
            <a href={p.cta.href} target="_blank" rel="noopener noreferrer" className="btn-primary focus-ring mt-9" data-testid={`project-${p.id}-cta`}>
              {p.cta.label} <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
    <Section tone={index % 2 ? "white" : "grey"} className="!pt-0">
      <FeatureRow title={p.featuresTitle} items={p.features} testid={`project-${p.id}-features`} />
      {p.demo && (
        <div className="mt-20" data-testid="channel-demo">
          <Reveal><h3 className="display-md mb-10">Video Demonstration</h3></Reveal>
          <Reveal><YouTubeEmbed id={p.demo.id} title={p.demo.title} thumb={p.demo.thumb} testid="channel-video" /></Reveal>
        </div>
      )}
    </Section>
  </>
);

export default function Projects() {
  return (
    <main data-testid="page-projects">
      <PageIntro eyebrow="Projects" lines={["Projects"]} testid="projects-intro" />
      <Titan />
      {PROJECTS.map((p, i) => <Project key={p.id} p={p} index={i} />)}
    </main>
  );
}
