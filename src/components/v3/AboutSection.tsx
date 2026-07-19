"use client";

import { motion } from "motion/react";
import { SakuraField } from "@/components/v3/SakuraField";
import { site } from "@/data/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--bg-dark)] text-[var(--fg-on-dark)]"
    >
      <div className="pattern-diagonal-dark absolute inset-0" aria-hidden />
      <SakuraField density="light" className="opacity-35" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <p
          className="text-[0.7rem] uppercase tracking-[0.22em]"
          style={{ color: "var(--muted-on-dark)" }}
        >
          001 — About
        </p>

        <motion.h2
          className="font-display mt-6 max-w-2xl text-3xl leading-tight md:mt-8 md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.55 }}
        >
          {site.aboutHeading}
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-14">
          {site.aboutParagraphs.map((para, i) => (
            <motion.p
              key={i}
              className={`text-base leading-[1.75] md:text-[1.05rem] ${i === 0 ? "md:col-span-2 max-w-3xl" : ""}`}
              style={{ color: "var(--muted-on-dark)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: 0.06 * i, duration: 0.45 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
