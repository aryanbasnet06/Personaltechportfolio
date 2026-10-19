import { PageIntro, Frame } from "../components/Blocks";
import { Reveal } from "../components/Motion";
import { WORK } from "../data/content";

const Entry = ({ w, index }) => (
  <article className="work-entry" data-testid={`work-${w.id}`}>
    {w.group && (
      <Reveal className="col-span-full mb-4"><h2 className="display-lg">{w.group}</h2></Reveal>
    )}
    <div className="grid gap-10 border-t border-line pt-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-4">
        <Reveal className="lg:sticky lg:top-28">
          <span className="text-xs tabular-nums tracking-[0.2em] text-brown-ink">0{index + 1}</span>
          <h3 className="mt-4 font-serif text-2xl md:text-3xl leading-snug text-ink">{w.title}</h3>
          <div className="mt-8 max-w-[260px]">
            <Frame src={w.image} alt={w.alt} ratio={w.photo ? "aspect-[4/3]" : "aspect-square"} fit={w.photo ? "object-cover" : "object-contain"} pad={!w.photo} />
          </div>
        </Reveal>
      </div>
      <div className="lg:col-span-8">
        <Reveal as="p" className="font-serif text-xl md:text-2xl leading-relaxed text-ink">{w.text}</Reveal>
        <ul className="mt-10 space-y-4">
          {w.bullets.map((b, i) => (
            <Reveal as="li" key={i} delay={i * 0.04} className="work-bullet">{b}</Reveal>
          ))}
        </ul>
        {w.photos && (
          <div className="mt-12 grid grid-cols-2 gap-4">
            {w.photos.map(([src, alt], i) => (
              <Reveal key={src} delay={i * 0.06}><Frame src={src} alt={alt} ratio="aspect-[4/3]" /></Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  </article>
);

export default function Work() {
  return (
    <main data-testid="page-work">
      <PageIntro eyebrow="Work Experience" lines={["Work", "Experience"]} testid="work-intro" />
      <section className="bg-cream pb-28">
        <div className="container-x space-y-24">
          {WORK.map((w, i) => <Entry key={w.id} w={w} index={i} />)}
        </div>
      </section>
    </main>
  );
}
