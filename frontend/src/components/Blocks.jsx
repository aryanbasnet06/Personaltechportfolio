import { Reveal, MaskLines, Eyebrow } from "./Motion";

export const PageIntro = ({ eyebrow, lines, lead, testid }) => (
  <section className="container-x pt-36 pb-16 md:pt-44 md:pb-24" data-testid={testid}>
    <Reveal y={12}><Eyebrow>{eyebrow}</Eyebrow></Reveal>
    <MaskLines lines={lines} className="display-xl mt-6 max-w-5xl" />
    {lead && <Reveal delay={0.3} className="mt-8 max-w-2xl text-lg leading-relaxed text-soft">{lead}</Reveal>}
  </section>
);

export const Frame = ({ src, alt, ratio = "aspect-[4/3]", fit = "object-cover", className = "", pad = false }) => (
  <div className={`frame ${ratio} ${pad ? "bg-paper p-8 md:p-12" : ""} ${className}`}>
    <img src={src} alt={alt} loading="lazy" decoding="async" className={`h-full w-full ${fit} frame-img`} />
  </div>
);

export const FeatureRow = ({ title, items, testid }) => (
  <div data-testid={testid}>
    {title && <Reveal><h3 className="display-md mb-10">{title}</h3></Reveal>}
    <div className={`grid gap-px overflow-hidden rounded-[22px] border border-line bg-line sm:grid-cols-2 ${items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {items.map(([h, p], i) => (
        <Reveal key={h} delay={i * 0.08} className="feature-cell">
          <span className="text-xs font-medium tracking-[0.2em] text-brown-ink">0{i + 1}</span>
          <h4 className="mt-6 font-serif text-2xl leading-tight text-ink">{h}</h4>
          {p && <p className="mt-3 text-[15px] leading-relaxed text-soft">{p}</p>}
        </Reveal>
      ))}
    </div>
  </div>
);

export const Gallery = ({ title, items, testid, cols = "md:grid-cols-3" }) => (
  <div data-testid={testid}>
    {title && <Reveal><h3 className="display-md mb-10">{title}</h3></Reveal>}
    <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${cols}`}>
      {items.map(([src, alt], i) => (
        <Reveal key={src} delay={i * 0.08}>
          <Frame src={src} alt={alt} ratio="aspect-[4/3]" />
        </Reveal>
      ))}
    </div>
  </div>
);

export const Section = ({ tone = "white", className = "", children, testid, id }) => (
  <section id={id} className={`${tone === "grey" ? "bg-paper" : "bg-cream"} py-20 md:py-28 ${className}`} data-testid={testid}>
    <div className="container-x">{children}</div>
  </section>
);
