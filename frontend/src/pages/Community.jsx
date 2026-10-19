import { ArrowUpRight } from "lucide-react";
import { PageIntro, Section, Frame } from "../components/Blocks";
import { Reveal, Eyebrow } from "../components/Motion";
import { COMMUNITY, img } from "../data/content";

const TONES = {
  pink: "bg-[#ecdcdc] text-ink",
  maroon: "bg-maroon text-white",
  grey: "bg-mist text-ink",
  deep: "bg-deep text-white",
};

const Vidhata = () => (
  <Section testid="community-vidhata">
    <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <Reveal className="flex items-center gap-5">
          <img src={img("vidhata-logo")} alt="Vidhata logo" className="h-16 w-16 rounded-2xl border border-line bg-white object-contain p-1.5" />
          <h2 className="display-md">Vidhata, my Non-Profit Organization</h2>
        </Reveal>
        <div className="mt-10 space-y-6 max-w-[64ch]">
          {COMMUNITY.vidhata.map((p, i) => (
            <Reveal key={i} as="p" delay={i * 0.06} className={`leading-[1.8] text-soft ${i === 0 ? "dropcap text-[17px]" : "text-[17px]"}`}>{p}</Reveal>
          ))}
        </div>
      </div>
      <Reveal className="lg:col-span-5 lg:sticky lg:top-28 self-start" delay={0.1}>
        <Frame src={img("vidhata")} alt="Vidhata session with students" ratio="aspect-[4/5]" />
      </Reveal>
    </div>
  </Section>
);

const Impact = () => (
  <Section tone="grey" testid="community-impact">
    <Reveal><h2 className="display-lg max-w-3xl">Vidhata’s Impact in Numbers</h2></Reveal>
    <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-5">
      {COMMUNITY.impact.map((c, i) => (
        <Reveal key={c.label} delay={i * 0.07} className={`impact-card ${TONES[c.tone]} ${c.span} ${i === 1 || i === 4 ? "col-span-2" : ""}`} data-testid={`impact-${i}`}>
          <span className="font-serif text-5xl md:text-7xl leading-none tracking-tight">{c.n}</span>
          <span className="mt-6 text-sm font-medium tracking-[0.12em] uppercase opacity-90">{c.label}</span>
        </Reveal>
      ))}
    </div>
  </Section>
);

const Recognition = () => (
  <Section testid="community-recognition">
    <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
      <Reveal className="lg:col-span-5">
        <Eyebrow>Recognition</Eyebrow>
        <p className="mt-6 font-serif text-2xl md:text-3xl leading-snug text-ink">
          My work also earned me an <strong className="text-maroon font-medium">official nomination</strong> as one of the <strong className="text-maroon font-medium">Glocal Teen Hero Nepal 2024</strong> an honor awarded to 20 exceptional teenagers across Nepal for outstanding leadership, social impact, and community-driven innovation.
        </p>
        <a href="https://glocalteenhero.com/aryan-basnet/" target="_blank" rel="noopener noreferrer" className="btn-primary focus-ring mt-10" data-testid="glocal-feature-link">
          Read my feature <ArrowUpRight size={16} />
        </a>
      </Reveal>
      <div className="lg:col-span-7 grid grid-cols-5 gap-4">
        <Reveal className="col-span-3"><Frame src={img("glocal-award")} alt="Glocal Teen Hero Nepal 2024 award" ratio="aspect-[4/5]" /></Reveal>
        <Reveal className="col-span-2 self-end" delay={0.1}><Frame src={img("Glocal_logo")} alt="Glocal Teen Hero logo" ratio="aspect-square" fit="object-contain" pad /></Reveal>
      </div>
    </div>
  </Section>
);

const PhotoSet = ({ title, subtitle, items, testid, offset }) => (
  <div data-testid={testid}>
    <Reveal>
      <h3 className="display-md">{title}</h3>
      <p className="mt-3 text-soft">{subtitle}</p>
    </Reveal>
    <div className={`mt-10 grid grid-cols-2 gap-4 ${offset ? "lg:mt-24" : ""}`}>
      {items.map((s, i) => (
        <Reveal key={s} delay={i * 0.06} className={i % 2 ? "translate-y-6" : ""}>
          <Frame src={img(s)} alt={`${title} photo ${i + 1}`} ratio="aspect-square" />
        </Reveal>
      ))}
    </div>
  </div>
);

export default function Community() {
  return (
    <main data-testid="page-community">
      <PageIntro eyebrow="Community Involvement" lines={["Social Impact", "Initiatives"]} testid="community-intro" />
      <Vidhata />
      <Impact />
      <Recognition />
      <Section tone="grey" testid="community-stories">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-14 pb-6">
          <PhotoSet title="Our Success Stories" subtitle="Outcomes shaped by consistent effort, applied learning, and progress" items={COMMUNITY.stories} testid="stories-grid" />
          <PhotoSet title="Our Training Cohorts" subtitle="In Collaboration With Rural Self Employment Training Institutes" items={COMMUNITY.cohorts} testid="cohorts-grid" />
        </div>
      </Section>
    </main>
  );
}
