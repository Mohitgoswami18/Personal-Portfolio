"use client";
import { Reveal } from "../Reveal";
import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages",
    items: ["C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "Shadcn UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Next.js API", "REST APIs", "FastAPI"],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose", "MySQL", "Postgres SQL"],
  },
  {
    title: "AI / ML",
    items: ["NumPy", "Pandas", "Matplotlib", "PyTorch", "LangChain"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"],
  },
];

const marquee = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "PyTorch",
  "LangChain",
  "C++",
  "Git",
  "Vercel",
];

export function Stack() {
  return (
    <section id="stack" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-3 font-mono text-xs tracking-[0.3em] text-electric uppercase">
            04 — Toolkit
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            The stack I reach for,{" "}
            <span className="text-gradient-static">daily</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="gradient-border h-full p-6"
              >
                <div className="font-mono text-xs tracking-widest text-electric uppercase">
                  {g.title}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      data-cursor="hover"
                      className="glass rounded-xl px-3 py-2 text-sm transition-all hover:bg-white/8 hover:text-electric"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-background to-transparent" />
        <div className="animate-marquee flex w-max gap-12 py-2 font-display text-3xl font-semibold tracking-tight text-muted-foreground/40 md:text-5xl">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              {t}
              <span className="text-electric">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
