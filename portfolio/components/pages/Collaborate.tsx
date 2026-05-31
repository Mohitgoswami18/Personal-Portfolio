"use client";
import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";
import { ArrowRight } from "lucide-react";

const opps = [
  "Internships",
  "Freelance Work",
  "Startup Opportunities",
  "Open Source Collaboration",
  "Product Development",
];

export function Collaborate() {
  return (
    <section className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="gradient-border relative overflow-hidden p-10 md:p-16">
          <div className="animate-pulse-glow pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-glow/30 blur-[100px]" />
          <div className="relative">
            <Reveal>
              <div className="font-mono text-xs tracking-[0.3em] text-electric uppercase">
                07 — Collaborate
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
                Let's build something{" "}
                <span className="text-gradient-static">amazing</span> together.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                I enjoy collaborating on ambitious ideas, innovative products,
                startup projects, open-source initiatives, and impactful
                software solutions.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2">
                {opps.map((o) => (
                  <span
                    key={o}
                    className="glass rounded-full px-4 py-2 text-sm text-muted-foreground"
                  >
                    {o}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10">
                <MagneticButton href="#contact" variant="primary">
                  Start a Conversation <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
