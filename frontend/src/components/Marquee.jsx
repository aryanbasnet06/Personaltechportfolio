import { Fragment } from "react";
import { MARQUEE } from "../data/content";

export const Marquee = () => {
  const row = (
    <div className="marquee-row" aria-hidden="true">
      {MARQUEE.map((w) => (
        <Fragment key={w}>
          <span className="marquee-word">{w}</span>
          <span className="marquee-dot">✦</span>
        </Fragment>
      ))}
    </div>
  );
  return (
    <div className="marquee border-y border-line bg-cream py-7 md:py-9" data-testid="home-marquee">
      <span className="sr-only">{MARQUEE.join(", ")}</span>
      <div className="marquee-track">{row}{row}</div>
    </div>
  );
};
