import { PageIntro, Section, Frame, Gallery } from "../components/Blocks";
import { Reveal, MaskLines, Eyebrow } from "../components/Motion";
import { FESTIVALS } from "../data/content";

const Festival = ({ f, index }) => (
  <article id={f.id} data-testid={`festival-${f.id}`}>
    <section className="bg-cream pt-24 pb-16 md:pt-32">
      <div className="container-x grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Reveal><Eyebrow>{`0${index + 1} — ${f.subtitle}`}</Eyebrow></Reveal>
          <MaskLines as="h2" lines={[f.title]} className="display-xl mt-6" />
        </div>
        <Reveal className="lg:col-span-5 text-lg leading-relaxed text-soft" delay={0.15}>{f.intro}</Reveal>
      </div>
    </section>
    <Section tone="grey">
      <div className={`grid gap-12 lg:grid-cols-12 lg:gap-16 ${f.reverse ? "" : ""}`}>
        <Reveal className={`lg:col-span-5 ${f.reverse ? "lg:order-2" : ""}`}>
          <Frame src={f.image} alt={`${f.title} celebration`} ratio="aspect-[4/5]" />
        </Reveal>
        <div className={`lg:col-span-7 ${f.reverse ? "lg:order-1" : ""}`}>
          <Reveal><h3 className="display-md">{f.heading}</h3></Reveal>
          <div className="mt-8 space-y-6 max-w-[64ch]">
            {f.paras.map((p, i) => <Reveal as="p" key={i} delay={i * 0.06} className="text-[17px] leading-[1.8] text-soft">{p}</Reveal>)}
          </div>
        </div>
      </div>
    </Section>
    <Section>
      <Reveal><h3 className="display-md mb-10">{f.essenceTitle}</h3></Reveal>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {f.essence.map((e, i) => (
          <Reveal key={e} delay={i * 0.07} className="essence-card">
            <span className="text-xs tracking-[0.2em] text-brown-ink">0{i + 1}</span>
            <h4 className="font-serif text-xl md:text-2xl leading-tight">{e}</h4>
          </Reveal>
        ))}
      </div>
    </Section>
    <Section tone="grey">
      <Gallery title={f.photosTitle} items={f.photos.map((p, i) => [p, `${f.title} photo ${i + 1}`])} cols="md:grid-cols-2" />
    </Section>
  </article>
);

export default function Art() {
  return (
    <main data-testid="page-art">
      <PageIntro eyebrow="Art & Culture" lines={["My Culture", "& Inspiration"]} testid="art-intro" />
      {FESTIVALS.map((f, i) => <Festival key={f.id} f={f} index={i} />)}
    </main>
  );
}
