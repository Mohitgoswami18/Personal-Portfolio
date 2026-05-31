"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef, type ReactNode, type MouseEvent } from "react"

interface Props {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "ghost"
  className?: string
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })

  const handleMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors"
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-foreground/90 shadow-[0_10px_40px_-10px_oklch(0.78_0.18_235/0.6)]"
      : "glass text-foreground hover:bg-white/[0.08]"

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      <span className={`${base} ${styles} ${className}`}>{children}</span>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} data-cursor="hover">
        {inner}
      </a>
    )
  }
  return (
    <button onClick={onClick} data-cursor="hover" className="inline-block">
      {inner}
    </button>
  )
}
