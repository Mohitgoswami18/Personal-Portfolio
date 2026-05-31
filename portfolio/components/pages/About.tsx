"use client";
import { Reveal } from "../Reveal";
import { motion } from "framer-motion";

const journey = [
  {
    phase: "01",
    title: "Curious Student",
    body: "Fell in love with logic, math, and the way code turns ideas into reality.",
  },
  {
    phase: "02",
    title: "DSA Enthusiast",
    body: "500+ problems solved across LeetCode, GFG, Code360. Built a graph algorithms library in C++.",
  },
  {
    phase: "03",
    title: "Full Stack Developer",
    body: "Shipping production React + Node apps for real clients, end-to-end.",
  },
  {
    phase: "04",
    title: "AI Explorer",
    body: "Building and Exploring intelligent systems with ML, LangChain, and PyTorch.",
  },
];

const stats = [
  { n: "500+", l: "DSA Problems" },
  { n: "12+", l: "Projects Shipped" },
  { n: "440+", l: "Problem Solving Days" },
  { n: "∞", l: "Curiosity" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-3 font-mono text-xs tracking-[0.3em] text-electric uppercase">
            01 — About
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            An engineer who thinks like a{" "}
            <span className="text-gradient-static">product designer</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I obsess over the small details that make software feel inevitable —
            and over the big ideas that make it worth shipping.
          </p>
        </Reveal>

        {/* Journey timeline */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {journey.map((j, i) => (
            <Reveal key={j.phase} delay={i * 0.08}>
              <div className="gradient-border group relative h-full p-6 transition-transform duration-500 hover:-translate-y-1">
                <div className="font-mono text-xs text-muted-foreground">
                  {j.phase}
                </div>
                <div className="mt-3 font-display text-xl font-semibold">
                  {j.title}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {j.body}
                </div>
                <div className="mt-6 h-px w-10 bg-linear-to-r from-electric to-violet-glow transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="text-gradient-static font-display text-4xl font-semibold md:text-5xl">
                  {s.n}
                </div>
                <div className="mt-1 text-xs tracking-widest text-muted-foreground uppercase">
                  {s.l}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
