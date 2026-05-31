"use client"
export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <div className="font-display text-2xl font-semibold tracking-tight">
            <span className="text-gradient-static">◢</span> Mohit
            <span className="text-muted-foreground">.dev</span>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            Building digital experiences that matter.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm md:grid-cols-3">
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </a>
          <a
            href="#work"
            className="text-muted-foreground hover:text-foreground"
          >
            Work
          </a>
          <a
            href="#experience"
            className="text-muted-foreground hover:text-foreground"
          >
            Experience
          </a>
          <a
            href="#stack"
            className="text-muted-foreground hover:text-foreground"
          >
            Stack
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Resume ↓
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-between border-t border-white/5 pt-6 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
        <span>© {new Date().getFullYear()} Mohit.dev</span>
        <span>Crafted with care · v1.1</span>
        <span>Created in Next.js</span>
      </div>
    </footer>
  )
}
