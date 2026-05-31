"use client"

import { motion, useScroll, useTransform } from "framer-motion"

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
]

export function Nav() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [0, 1])

  return (
    <>
      {/* Top brand bar */}
      <div className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight"
          data-cursor="hover"
        >
          <span className="text-gradient-static">◢</span> Mohit
          <span className="text-muted-foreground">.dev</span>
        </a>
        <a
          href="#contact"
          data-cursor="hover"
          className="glass hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-medium md:inline-flex"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for work
        </a>
      </div>

      {/* Floating pill nav appears on scroll */}
      <motion.nav
        style={{ opacity }}
        className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
      >
        <ul className="glass-strong shadow-elevated flex items-center gap-1 rounded-full p-1.5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-cursor="hover"
                className="rounded-full px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  )
}
