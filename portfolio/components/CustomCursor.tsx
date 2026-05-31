"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(pointer: coarse)").matches) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setHover(!!t.closest("a,button,[data-cursor='hover']"))
    }
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", over)
    document.documentElement.style.cursor = "none"
    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", over)
      document.documentElement.style.cursor = ""
    }
  }, [x, y])

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-9999 hidden md:block"
        style={{ x: sx, y: sy }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background] duration-200"
          style={{
            width: hover ? 44 : 12,
            height: hover ? 44 : 12,
            background: hover
              ? "oklch(0.7 0.24 295 / 0.25)"
              : "oklch(0.78 0.18 235)",
            border: hover ? "1px solid oklch(0.78 0.18 235 / 0.8)" : "none",
            boxShadow: "0 0 24px oklch(0.7 0.24 295 / 0.6)",
          }}
        />
      </motion.div>
    </>
  )
}
