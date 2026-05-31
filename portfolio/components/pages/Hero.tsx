"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useRef } from "react";
import { MagneticButton } from "../MagneticButton";
import { RevealText } from "../Reveal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-dvh flex-col items-center justify-center px-6 pt-32 text-center"
    >
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_10px_oklch(0.78_0.18_235)]" />
          Full Stack Developer • AI Enthusiast
        </motion.div>

        <h1 className="font-display text-5xl leading-[1.02] font-semibold tracking-tight md:text-7xl lg:text-[5.5rem]">
          <RevealText text="Building digital" />
          <br />
          <span className="text-gradient">
            <RevealText text="experiences that matter." delay={0.25} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mx-auto mt-7 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          Crafting modern web applications, intelligent solutions, and
          meaningful digital experiences through clean code and thoughtful
          design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#work" variant="primary">
            Explore My Work <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Let's Work Together
          </MagneticButton>
        </motion.div>

        {/* Floating tech chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="pointer-events-none absolute top-10 -left-10 hidden md:block"
        >
          <div className="animate-float glass rounded-2xl px-4 py-3 font-mono text-xs">
            <div className="text-muted-foreground">// stack</div>
            <div className="text-electric">React · TS · Node</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="pointer-events-none absolute top-32 -right-6 hidden md:block"
        >
          <div className="animate-float glass rounded-2xl px-4 py-3 font-mono text-xs [animation-delay:-2s]">
            <div className="text-muted-foreground">// solved</div>
            <div className="text-violet-glow">500+ DSA</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          Scroll
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <ArrowDown className="h-3.5 w-3.5" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
