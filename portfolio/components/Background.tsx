"use client"

import { useEffect, useRef } from "react"

/** Layered cinematic background: mesh gradient, grid, particles. */
export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    type P = {
      x: number
      y: number
      vx: number
      vy: number
      r: number
      a: number
    }
    let particles: P[] = []

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(80, Math.floor((w * h) / 18000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.6 + 0.4,
        a: Math.random() * 0.5 + 0.2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `oklch(0.85 0.15 250 / ${p.a})`
        ctx.fill()
      }
      // connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < 14000) {
            const alpha = (1 - d2 / 14000) * 0.18
            ctx.strokeStyle = `oklch(0.72 0.19 265 / ${alpha})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Mesh gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      {/* Animated blobs */}
      <div className="animate-blob absolute -top-40 -left-40 h-130 w-130 rounded-full bg-electric/20 blur-[120px]" />
      <div className="animate-blob absolute top-1/3 -right-40 h-150 w-150 rounded-full bg-violet-glow/20 blur-[140px] [animation-delay:-6s]" />
      <div className="animate-blob absolute bottom-0 left-1/3 h-125 w-125 rounded-full bg-primary/15 blur-[120px] [animation-delay:-12s]" />
      {/* Grid */}
      <div className="grid-bg absolute inset-0 opacity-60" />
      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.08_0.01_265/0.7)_100%)]" />
    </div>
  )
}
