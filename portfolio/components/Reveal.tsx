"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p"
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: Props) {
  const variants: Variants = {
    hidden: { opacity: 0, y, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}

export function RevealText({
  text,
  className,
  stagger = 0.02,
  delay = 0,
}: {
  text: string
  className?: string
  stagger?: number
  delay?: number
}) {
  const words = text.split(" ")
  return (
    <span className={className} aria-label={text}>
      {words.map((w, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {w.split("").map((c, ci) => (
            <motion.span
              key={ci}
              aria-hidden
              initial={{ y: "110%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: delay + (wi * 4 + ci) * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {c}
            </motion.span>
          ))}
          {wi < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  )
}
