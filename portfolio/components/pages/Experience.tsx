"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../Reveal";

const items = [
  {
    when: "2026 — Present",
    role: "Frontend / Full Stack Developer",
    place: "Client Project",
    body: "Collaborating on production-ready web applications. Building responsive UIs, reusable React components, integrating REST APIs, and supporting deployment.",
    tags: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
  },
  {
    when: "2025 — 2026",
    role: "Full Stack Builder",
    place: "Independent Projects",
    body: "Designed and shipped multiple end-to-end SaaS applications — auth, dashboards, APIs, and scalable architecture.",
    tags: ["Next.js", "React.js", "Express", "MongoDB", "web Sockets"],
  },
  {
    when: "2024 — 2025",
    role: "DSA & Open Source",
    place: "Self-Directed",
    body: "Solved 500+ DSA problems across platforms. Open-sourced a C++ graph algorithms library and contributed to community repos.",
    tags: ["C++", "Algorithms", "Open Source", "Critical Thinking"],
  },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-3 font-mono text-xs tracking-[0.3em] text-electric uppercase">
            03 — Experience
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            A short, focused{" "}
            <span className="text-gradient-static">track record</span>.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-20 pl-10 md:pl-16">
          {/* Track */}
          <div className="absolute top-0 left-3 h-full w-px bg-border md:left-6" />
          <motion.div
            style={{ height }}
            className="absolute top-0 left-3 w-px bg-linear-to-b from-electric via-violet-glow to-transparent md:left-6"
          />

          <div className="space-y-14">
            {items.map((it, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative">
                  <div className="absolute top-2 -left-9.25 h-3 w-3 rounded-full bg-electric shadow-[0_0_16px_oklch(0.78_0.18_235)] md:-left-13.75" />
                  <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                    {it.when}
                  </div>
                  <div className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                    {it.role}
                    <span className="text-muted-foreground"> · {it.place}</span>
                  </div>
                  <p className="mt-3 max-w-2xl text-muted-foreground">
                    {it.body}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {it.tags.map((t) => (
                      <span
                        key={t}
                        className="glass rounded-full px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
