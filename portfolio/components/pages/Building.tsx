"use client";
import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Sparkles, Cpu, BookOpen, GitBranch } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "AI agents with LangChain",
    body: "Tool-using agents, RAG pipelines, and evals.",
    pct: 53,
  },
  {
    icon: Cpu,
    title: "PyTorch from first principles",
    body: "Tensors, autograd, training loops — by hand.",
    pct: 70,
  },
  {
    icon: GitBranch,
    title: "Open source contributions",
    body: "Small, useful PRs to libraries I use daily.",
    pct: 10,
  },
  {
    icon: BookOpen,
    title: "End-to-End Saas Product",
    body: "Designing and Deploying Saas Products for upskilling.",
    pct: 60,
  },
];

export function Building() {
  return (
    <section className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-3 font-mono text-xs tracking-[0.3em] text-electric uppercase">
            05 — Currently Building
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            Always one repo away from{" "}
            <span className="text-gradient-static">something new</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                className="gradient-border group relative overflow-hidden p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-electric/20 to-violet-glow/20 text-electric">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-lg font-semibold">
                      {it.title}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {it.body}
                    </div>
                    <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${it.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-linear-to-r from-electric to-violet-glow"
                      />
                    </div>
                    <div className="mt-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                      Progress · {it.pct}%
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
