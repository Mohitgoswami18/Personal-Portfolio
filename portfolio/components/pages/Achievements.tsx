"use client";
import { Reveal } from "../Reveal";
import { Award, Trophy, GraduationCap, Flame } from "lucide-react";

const milestones = [
  {
    icon: GraduationCap,
    title: "Computer Science",
    body: "Persuing B.Tech in CSE(AIML) — focus on algorithms, systems, and AI.",
    tag: "Education",
  },
  {
    icon: Award,
    title: "HackerRank Python",
    body: "Certified problem solver — Python.",
    tag: "Certification",
  },
  {
    icon: Award,
    title: "Code360 DSA",
    body: "Data Structures & Algorithms certification.",
    tag: "Certification",
  },
  {
    icon: Trophy,
    title: "500+ DSA Problems",
    body: "Across LeetCode, GFG, Code360.",
    tag: "Achievement",
  },
  {
    icon: Flame,
    title: "1700+ Rating",
    body: "Consistent daily problem-solving participation.",
    tag: "Problem Solving",
  },
  {
    icon: Trophy,
    title: "Hackathon Participant",
    body: "Built and shipped under 36 hours.",
    tag: "Event",
  },
];

export function Achievements() {
  return (
    <section className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-3 font-mono text-xs tracking-[0.3em] text-electric uppercase">
            06 — Roadmap
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            Milestones on a road I'm still{" "}
            <span className="text-gradient-static">walking</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.05}>
              <div className="group gradient-border h-full p-6 transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-electric/20 to-violet-glow/20 text-electric">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    {m.tag}
                  </span>
                </div>
                <div className="mt-5 font-display text-xl font-semibold">
                  {m.title}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {m.body}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
