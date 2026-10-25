import type { CSSProperties } from "react";
import Navbar from "@/components/Navbar";
import GlitchBand from "@/components/GlitchBand";

const profile = {
  first: "Momen",
  full: "Momen Ahmed",
  role: "Creative developer & interface designer", // edit me
  brief:
    "I design and build digital products that feel clear, quick and human, from the first sketch to the shipped code.",
  mantra: ["Keep going,", "you’re close."],
  left: "Think",
  right: "Build",
  stages: ["Empathize", "Define", "Ideate", "Prototype", "Test"],
};

// stagger helper for the load sequence
const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export default function Home() {
  return (
    <main className="relative isolate flex min-h-svh flex-col overflow-hidden">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 -z-10" />

      <Navbar name={profile.full} />

      <section className="flex flex-1 flex-col px-5 pb-5 pt-6 md:px-10 md:pb-8">
        {/* top: role (left) / design thinking (middle) */}
        <div className="grid gap-5 md:grid-cols-3">
          <p className="role reveal" style={d(0.1)}>
            {profile.role}
          </p>

          <div className="reveal md:text-center" style={d(0.2)}>
            <p className="note">Design thinking</p>
            <ol className="stages md:justify-center">
              {profile.stages.map((s, i) => (
                <li key={s} className="stage" style={d(i * 1.5)}>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <div className="hidden md:block" />
        </div>

        {/* middle: headline + brief under, right */}
        <div className="flex flex-1 flex-col items-center justify-center py-8">
          <h1 className="hero-title f-display" aria-label={profile.first}>
            {profile.first.split("").map((c, i) => (
              <span key={i} aria-hidden className="letter" style={d(0.25 + i * 0.08)}>
                {c}
              </span>
            ))}
          </h1>
          <div className="mt-3 flex w-full justify-end md:-mt-1">
            <p className="brief reveal" style={d(0.9)}>
              {profile.brief}
            </p>
          </div>
        </div>

        {/* bottom: encouragement / glitch / name */}
        <div className="reveal" style={d(1.0)}>
          <p className="note">A note for whoever needs it</p>
          <p className="mantra f-display">
            {profile.mantra[0]}
            <br />
            {profile.mantra[1]}
          </p>
        </div>

        <GlitchBand />

        <div className="reveal" style={d(1.2)}>
          <p className="note">Made by</p>
          <div className="flex items-baseline justify-between gap-4">
            <span className="side">{profile.left}</span>
            <span className="signature f-display glitch" data-text={profile.full}>
              {profile.full}
            </span>
            <span className="side">{profile.right}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
