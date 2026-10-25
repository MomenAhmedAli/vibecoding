import type { CSSProperties } from "react";

const bars = [
  { l: "3%", w: "9%", t: "18%", h: "12%", d: "0s", c: "var(--ink)" },
  { l: "14%", w: "5%", t: "62%", h: "10%", d: "0.4s", c: "var(--glitch-a)" },
  { l: "24%", w: "14%", t: "38%", h: "8%", d: "1.1s", c: "var(--accent)" },
  { l: "41%", w: "7%", t: "70%", h: "14%", d: "0.7s", c: "var(--glitch-b)" },
  { l: "52%", w: "18%", t: "12%", h: "9%", d: "1.8s", c: "var(--glitch-a)" },
  { l: "63%", w: "6%", t: "55%", h: "12%", d: "2.2s", c: "var(--ink)" },
  { l: "74%", w: "11%", t: "28%", h: "10%", d: "0.2s", c: "var(--accent)" },
  { l: "86%", w: "8%", t: "66%", h: "9%", d: "1.4s", c: "var(--glitch-b)" },
  { l: "93%", w: "4%", t: "10%", h: "14%", d: "2.6s", c: "var(--glitch-a)" },
  { l: "34%", w: "10%", t: "84%", h: "6%", d: "2.9s", c: "var(--ink)" },
];

export default function GlitchBand() {
  return (
    <div aria-hidden className="glitch-band relative my-4 h-14 md:my-6 md:h-16">
      {bars.map((b, i) => (
        <span
          key={i}
          className="glitch-bar"
          style={
            {
              left: b.l,
              width: b.w,
              top: b.t,
              height: b.h,
              background: b.c,
              animationDelay: b.d,
            } as CSSProperties
          }
        />
      ))}
      <span className="scanline" />
      <div className="relative flex h-full items-center justify-between px-3 text-xs text-[var(--soft)]">
        <span className="hidden sm:block">static</span>
        <span
          className="glitch mx-auto sm:mx-0"
          data-text="lost the signal, found the idea"
        >
          lost the signal, found the idea
        </span>
        <span className="hidden sm:block">noise</span>
      </div>
    </div>
  );
}
