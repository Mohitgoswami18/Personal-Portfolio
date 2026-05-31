"use client";
import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Vyom from "../../assets/vyom.png";
import algosprint from "../../assets/algosprint.png";
import vocalify from "../../assets/vocalify.png";
import mmAI from "../../assets/mmAI.png";
import mindease from "../../assets/mindease.png";
import chatbot from "../../assets/chatbot.png";
import leet from "../../assets/leet.png";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type Project = {
  index: string;
  name: string;
  tag: string;
  story: string;
  problem: string;
  tech: string[];
  features: string[];
  result: string;
  accent: string;
  preview: StaticImageData;
  live: string;
  github: string;
};

const projects: Project[] = [
  {
    index: "01",
    name: "Vyom",
    tag: "AI · SaaS (currently Building)",
    story:
      "AI-powered platform for resume analysis, internship matching, career intelligence, and application automation",
    problem:
      "Finding relevant internships and evaluating job fit is time-consuming and inefficient.",
    tech: ["Next.js", "LangChain", "OpenAI", "MongoDB", "Playwrite"],
    features: [
      "resume parsing and analysis",
      "AI-graded rubrics",
      "Progress analytics",
      "application automation",
    ],
    result:
      "Reduced internship discovery time through AI-powered opportunity matching and automation.",
    accent: "from-electric/40 to-violet-glow/30",
    preview: Vyom,
    live: "https://vyom-nolimits.vercel.app",
    github: "https://github.com/Mohitgoswami18/Vyom.git",
  },
  {
    index: "02",
    name: "AlgoSprint",
    tag: "EdTech SaaS",
    story:
      "Competitive programming platform that transforms coding contests into engaging multiplayer battles with real-time collaboration and gamified progression.",
    problem:
      "Traditional coding platforms often lack engagement, collaboration, and a rewarding competitive experience.",
    tech: ["React.js", "WebSockets", "Express.js", "MongoDB", "Shadcn UI"],
    features: [
      "Real-time coding battles",
      "Collaborative compiler",
      "Dynamic leaderboard system",
      "Performace tracking and analytics",
    ],
    result:
      "Built a gamified coding arena featuring live coding battles, collaborative problem-solving, and progression-based rewards. ",
    accent: "from-electric/40 to-violet-glow/30",
    preview: algosprint,
    live: "https://algo-sprint.vercel.app",
    github: "https://github.com/Mohitgoswami18/AlgoSprint.git",
  },
  {
    index: "03",
    name: "Vocalify",
    tag: "AI · SaaS",
    story:
      "Next-generation AI voice intelligence platform that transforms raw audio into deep behavioral and communicational insights",
    problem:
      "Valuable insights hidden within conversations, meetings, and voice recordings are often inaccessible, requiring significant manual effort to analyze and interpret.",
    tech: [
      "React.js",
      "FastAPI",
      "Whisper",
      "pytorch",
      "AI Pipeline",
      "microservices",
      "MongoDB",
    ],
    features: [
      "Detailed voice metrics",
      "Progress tracker",
      "Real time environment",
      "Transcript generation",
    ],
    result:
      "Engineered an AI-powered voice intelligence engine that analyzes spoken content, and delivers comprehensive insights in real time.",
    accent: "from-electric/40 to-violet-glow/30",
    preview: vocalify,
    live: "https://vocalifyai.vercel.app",
    github: "https://github.com/Mohitgoswami18/Vocalify.git",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-3 font-mono text-xs tracking-[0.3em] text-electric uppercase">
            02 — Selected Work
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            Things I've built that I'm{" "}
            <span className="text-gradient-static">proud of</span>.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-24">
          {projects.map((p, i) => (
            <ProjectCard key={p.index} project={p} flip={i % 2 === 1} />
          ))}
        </div>
        <MiniProjects />
      </div>
    </section>
  );
}

type Mini = {
  name: string;
  tag: string;
  blurb: string;
  emoji: StaticImageData | string;
  accent: string;
  href: string;
  repo: string;
};

const miniProjects: Mini[] = [
  {
    name: "LeetVision",
    tag: "Web Extension",
    blurb:
      "Transforms LeetCode into an intelligent learning environment through automated complexity evaluation, code insights, and interactive algorithm explanations.",
    emoji: leet,
    accent: "from-sky-400/30 to-electric/20",
    href: "#",
    repo: "https://github.com/Mohitgoswami18/LeetVision.git",
  },
  {
    name: "MoneyMentorAI ",
    tag: "Hackathon Project",
    blurb: "An AI-powered financial advisor and stock market analyzer.",
    emoji: mmAI,
    accent: "from-emerald-400/30 to-violet-glow/20",
    href: "https://money-mentor-ai-wheat.vercel.app/",
    repo: "https://github.com/Mohitgoswami18/MoneyMentorAI.git",
  },
  {
    name: "MindEase-Frontend",
    tag: "SIH Project",
    blurb:
      "A platform that bridges students with mentors and college counselors, fostering accessible emotional support, guidance, and community-driven well-being.",
    emoji: mindease,
    accent: "from-violet-glow/30 to-primary/20",
    href: "https://mind-ease-frontend-six.vercel.app/",
    repo: "https://github.com/Mohitgoswami18/MindEase-Frontend.git",
  },
  {
    name: "404-ChatBot",
    tag: "Chat bot",
    blurb:
      "AI-powered conversational platform designed to provide human-like interactions, instant assistance, and personalized user experiences at scale.",
    emoji: chatbot,
    accent: "from-rose-400/30 to-amber-400/20",
    href: "https://404-chat-bot.vercel.app/",
    repo: "https://github.com/Mohitgoswami18/404-ChatBot.git",
  },
  {
    name: "Graph Library",
    tag: "library",
    blurb:
      "A high-performance graph algorithms library providing efficient implementations of fundamental graph data structures.",
    emoji: "◐",
    accent: "from-electric/30 to-violet-glow/20",
    href: "#",
    repo: "https://github.com/Mohitgoswami18/Graph-Library.git",
  },
  {
    name: "Heart-Disease-Prediction-ML-Model",
    tag: "AI/ML model",
    blurb:
      "An AI-powered healthcare analytics platform that predicts cardiovascular disease risk using patient health metrics and machine learning-driven predictive modeling.",
    emoji: "d",
    accent: "from-fuchsia-400/30 to-violet-glow/20",
    href: "#",
    repo: "https://github.com/Mohitgoswami18/Heart-Disease-Prediction-ML-Model.git",
  },
  {
    name: "PDF-Explainer",
    tag: "RAG Tool",
    blurb:
      "An AI-powered document intelligence platform that transforms complex PDFs into concise summaries, contextual explanations, and actionable insights through advanced natural language understanding.",
    emoji: "📄",
    accent: "from-amber-400/30 to-electric/20",
    href: "#",
    repo: "https://github.com/Mohitgoswami18/PDF-Explainer.git",
  },
];

function MiniProjects() {
  return (
    <div className="relative mt-32">
      <div className="mx-auto mb-10 flex max-w-6xl items-end justify-between px-6 md:px-10">
        <Reveal>
          <div>
            <div className="mb-3 font-mono text-xs tracking-[0.3em] text-electric uppercase">
              02.5 — The Lab
            </div>
            <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Side quests &{" "}
              <span className="text-gradient-static">small bets</span>.
            </h3>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Weekend experiments, tools I built for myself, and ideas that
              didn't need to be big to be worth shipping.
            </p>
          </div>
        </Reveal>
        <div className="hidden font-mono text-[11px] tracking-widest text-muted-foreground uppercase md:flex md:items-center md:gap-2">
          <span>drag</span>
          <span className="h-px w-10 bg-border" />
          <span>→</span>
        </div>
      </div>

      <div className="">
        <motion.div
          drag="x"
          dragConstraints={{ left: -1800, right: 0 }}
          dragElastic={0.08}
          className="flex cursor-grab gap-5 px-6 active:cursor-grabbing md:px-10"
          data-cursor="hover"
        >
          {miniProjects.map((m, i) => (
            <MiniCard key={m.name} m={m} i={i} />
          ))}
          <div className="w-6 shrink-0" />
        </motion.div>
      </div>
    </div>
  );
}

function MiniCard({ m, i }: { m: Mini; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative w-[260px] shrink-0 md:w-[300px]"
    >
      <div className="gradient-border relative aspect-[4/5] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${m.accent}`} />
        <div className="grid-bg absolute inset-0 opacity-40" />

        <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          / {String(i + 1).padStart(2, "0")}
        </div>
        <div className="glass absolute top-4 right-4 rounded-full px-2.5 py-1 font-mono text-[10px] tracking-widest text-foreground/80 uppercase">
          {m.tag}
        </div>

        <div className="absolute inset-0 flex pt-[4rem] px-4">
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 2, -2, 0] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="font-display text-7xl text-foreground/90 md:text-8xl"
          >
            {typeof m.emoji === "object" && "src" in m.emoji ? (
              <div className="flex items-center justify-center text-center">
                <Image
                  src={m.emoji}
                  alt={m.name}
                  className="h-full w-full rounded"
                />
              </div>
            ) : (
              m.emoji
            )}
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="glass rounded-2xl p-4">
            <div className="font-display text-lg font-semibold tracking-tight">
              {m.name}
            </div>
            <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
              {m.blurb}
            </p>
            <div className="mt-3 flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase">
              <a
                href={m.href}
                className="inline-flex items-center gap-1 text-foreground transition-transform group-hover:translate-x-0.5"
              >
                Visit <ArrowUpRight className="h-3 w-3" />
              </a>
              <span className="h-3 w-px bg-border" />
              <a
                href={m.repo}
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
              >
                <FaGithub className="h-3 w-3" /> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <Reveal>
      <div
        className={`grid items-center gap-10 md:grid-cols-2 ${
          flip ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Preview */}
        <div className="align-items-center flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.02, rotate: flip ? -0.4 : 0.4 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="gradient-border relative aspect-7/4 overflow-hidden"
            data-cursor="hover"
          >
            <div
              className={`absolute inset-0 bg-linear-to-br ${project.accent}`}
            />
            <div className="grid-bg absolute inset-0 opacity-50" />
            <div className="absolute inset-x-6 top-6 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-[10px] text-muted-foreground">
                {project.name.toLowerCase().replace(/\s+/g, "-")}.app
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-full w-full p-4"
              >
                <div className="">
                  {" "}
                  <Image
                    src={project.preview}
                    alt={project.name}
                    className="mt-10 rounded-xl"
                  />{" "}
                </div>
              </motion.div>
            </div>
            <div className="absolute right-0 bottom-0 left-0 h-32 bg-linear-to-t from-background/60 to-transparent" />
          </motion.div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href={project.live}
              target="_blank"
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Live demo <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={project.github}
              target="_blank"
              data-cursor="hover"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium transition-transform hover:-translate-y-0.5"
            >
              <FaGithub className="h-3.5 w-3.5" /> Code
            </a>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <span>{project.index}</span>
            <span className="h-px w-8 bg-border" />
            <span className="text-electric">{project.tag}</span>
          </div>
          <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {project.name}
          </h3>
          <p className="mt-4 text-muted-foreground">{project.story}</p>

          <div className="mt-6 space-y-3 text-sm">
            <Detail label="Problem" value={project.problem} />
            <Detail label="Outcome" value={project.result} />
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <span className="h-1 w-1 rounded-full bg-electric" /> {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="glass rounded-full px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-20 shrink-0 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        {label}
      </div>
      <div className="text-foreground/90">{value}</div>
    </div>
  );
}
