"use client";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Check } from "lucide-react";
import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";

const socials = [
  {
    icon: FaSquareGithub,
    label: "GitHub",
    href: "https://github.com/mohitgoswami18",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohitgoswami18",
  },
  {
    icon: FaSquareXTwitter,
    label: "X / Twitter",
    href: "https://x.com/Mohit_Goswami18",
  },
  { icon: Mail, label: "Email", href: "mailto:mohitgoswami18326@gmail.com" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const errs: Record<string, string> = {};

    if (!form.name.trim()) errs.name = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email please";
    if (form.message.trim().length < 10) errs.message = "Tell me a bit more";

    setErrors(errs);

    if (Object.keys(errs).length) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "8460adf0-a42c-46da-bd0c-a12b6c80fe4d",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSent(false);
        }, 4000);
      } else {
        console.error(data);
        setLoading(false);
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Something went wrong.");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-3 font-mono text-xs tracking-[0.3em] text-electric uppercase">
            08 — Connect
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            Got an idea?{" "}
            <span className="text-gradient-static">Let's talk</span>.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="gradient-border relative p-8 lg:col-span-3"
          >
            {" "}
            <div className="space-y-5">
              {" "}
              <Field
                label="Name"
                value={form.name}
                error={errors.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />{" "}
              <Field
                label="Email"
                value={form.email}
                error={errors.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />{" "}
              <div>
                {" "}
                <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  {" "}
                  Message{" "}
                </label>{" "}
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm transition-colors outline-none focus:border-electric/60 focus:bg-white/5"
                  placeholder="Tell me about your project or idea…"
                />{" "}
                {errors.message && (
                  <div className="mt-1 text-xs text-destructive">
                    {" "}
                    {errors.message}{" "}
                  </div>
                )}{" "}
              </div>{" "}
              <MagneticButton variant="primary">
                {loading ? "Sending..." : "Send Message"}
              </MagneticButton>{" "}
            </div>{" "}
            <AnimatePresence>
              {" "}
              {sent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-background/90 backdrop-blur"
                >
                  {" "}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-electric to-violet-glow"
                  >
                    {" "}
                    <Check className="h-7 w-7 text-background" />{" "}
                  </motion.div>{" "}
                  <div className="mt-4 font-display text-xl font-semibold">
                    {" "}
                    Message sent{" "}
                  </div>{" "}
                  <div className="mt-1 text-sm text-muted-foreground">
                    {" "}
                    I'll get back to you soon.{" "}
                  </div>{" "}
                </motion.div>
              )}{" "}
            </AnimatePresence>{" "}
          </form>

          {/* Socials */}
          <div className="lg:col-span-2">
            <div className="grid gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="group gradient-border flex items-center justify-between p-5 transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/4 text-electric transition-colors group-hover:bg-white/8">
                      <s.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm">{s.label}</span>
                  </div>
                  <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm transition-colors outline-none focus:border-electric/60 focus:bg-white/5"
        placeholder={`Your ${label.toLowerCase()}`}
      />
      {error && <div className="mt-1 text-xs text-destructive">{error}</div>}
    </div>
  );
}
