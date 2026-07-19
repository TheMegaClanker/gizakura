"use client";

import { motion } from "motion/react";
import { SakuraField } from "@/components/v3/SakuraField";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-24 pt-32 md:px-10 md:pb-28 md:pt-36"
      style={{ background: "var(--bg-hero)" }}
    >
      <div className="pattern-diagonal absolute inset-0 opacity-80" aria-hidden />
      <SakuraField density="hero" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="h-px w-8"
            style={{ background: "var(--border-strong)" }}
            aria-hidden
          />
          <p
            className="text-[0.7rem] uppercase tracking-[0.22em]"
            style={{ color: "var(--muted)" }}
          >
            {site.tagline}
          </p>
        </motion.div>

        <motion.h1
          className="font-display mt-8 text-[clamp(4.25rem,16vw,9.5rem)] leading-[0.9] tracking-tight"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {site.name}
        </motion.h1>

        <motion.p
          className="mt-8 max-w-lg text-base leading-relaxed md:mt-10 md:text-lg"
          style={{ color: "var(--muted)" }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
        >
          {site.heroLine}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-6 md:mt-12"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.5 }}
        >
          <a
            href="#portfolio"
            className="text-sm font-medium underline underline-offset-4 decoration-[var(--border-strong)] transition-colors hover:decoration-[var(--fg)]"
          >
            View our work
          </a>
          <a
            href="#team"
            className="text-sm transition-colors hover:text-[var(--fg)]"
            style={{ color: "var(--muted)" }}
          >
            Meet the team →
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <span className="h-8 w-px bg-[var(--border-strong)]" aria-hidden />
        <span
          className="text-[0.6rem] uppercase tracking-[0.2em]"
          style={{ color: "var(--faint)" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
