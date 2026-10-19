import { useEffect, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>_#";

export const Decode = ({ text, delay = 0, speed = 28 }) => {
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let frame = 0;
    let id;
    const scramble = () => text.split("").map((c, i) => (c === " " || i < frame ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])).join("");
    setOut(scramble());
    const start = setTimeout(() => {
      id = setInterval(() => {
        frame += 1;
        setOut(scramble());
        if (frame > text.length) clearInterval(id);
      }, speed);
    }, delay);
    return () => { clearTimeout(start); clearInterval(id); };
  }, [text, delay, speed]);

  return (
    <span aria-label={text}>
      <span aria-hidden="true">{out}</span>
    </span>
  );
};
