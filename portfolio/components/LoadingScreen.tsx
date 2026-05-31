"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [show, setShow] = useState(true)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let p = 0
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 18 + 6)
      setPct(Math.floor(p))
      if (p >= 100) {
        clearInterval(id)
        setTimeout(() => setShow(false), 450)
      }
    }, 120)
    return () => clearInterval(id)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-10000 flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gradient-static font-display text-5xl font-semibold tracking-tight"
          >
            ⌘
          </motion.div>
          <div className="mt-8 h-px w-64 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-linear-to-r from-electric to-violet-glow"
              animate={{ width: `${pct}%` }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            />
          </div>
          <div className="mt-3 font-mono text-xs tracking-widest text-muted-foreground">
            {String(pct).padStart(3, "0")} — INITIALIZING
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
