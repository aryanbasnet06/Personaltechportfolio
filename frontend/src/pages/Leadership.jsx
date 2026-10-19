import { PageIntro, Section, Frame, FeatureRow, Gallery } from "../components/Blocks";
import { Reveal, Eyebrow } from "../components/Motion";
import { LEADERSHIP } from "../data/content";

const Role = ({ r, id, reverse, tone }) => (
  <>
    <Section tone={tone} testid={`leadership-${id}`}>
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
          <Reveal><Eyebrow>{r.tag}</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg mt-6">
              {r.title[0]}
              <span className="mt-3 block font-serif text-2xl md:text-3xl italic text-maroon">{r.title[1]}</span>
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5 max-w-[62ch]">
            {(r.paras || [r.text]).map((p, i) => <Reveal as="p" key={i} delay={0.1 + i * 0.05} className="text-[17px] leading-[1.8] text-soft">{p}</Reveal>)}
          </div>
        </div>
        <Reveal className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`} delay={0.1}>
          <Frame src={r.image} alt={r.title.join(", ")} ratio="aspect-[4/3]" />
        </Reveal>
      </div>
    </Section>
    <Section tone={tone === "grey" ? "white" : "grey"}>
      <FeatureRow title="Roles & Responsibilities" items={r.roles} testid={`leadership-${id}-roles`} />
    </Section>
    <Section tone={tone}>
      <Gallery title={r.galleryTitle} items={r.gallery} testid={`leadership-${id}-gallery`} />
    </Section>
  </>
);

export default function Leadership() {
  return (
    <main data-testid="page-leadership">
      <PageIntro eyebrow="Leadership" lines={["Student", "Leadership"]} testid="leadership-intro" />
      <Role r={LEADERSHIP.quiz} id="quiz" tone="white" />
      <Role r={LEADERSHIP.club} id="club" tone="grey" reverse />
    </main>
  );
}
