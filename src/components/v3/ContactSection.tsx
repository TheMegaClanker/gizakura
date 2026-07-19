"use client";

import { motion } from "motion/react";
import { SakuraField } from "@/components/v3/SakuraField";
import { site } from "@/data/site";

const pink = {
  label: "#c98a94",
  heading: "#f2c8cf",
  body: "#d9a8b0",
  link: "#f0d0d5",
} as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="pattern-diagonal-dark absolute inset-0 opacity-90" aria-hidden />
      <SakuraField density="light" className="opacity-45" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p
          className="text-[0.7rem] uppercase tracking-[0.22em]"
          style={{ color: pink.label }}
        >
          004 — Contact
        </p>
        <motion.h2
          className="font-display mt-4 max-w-xl text-3xl leading-tight md:text-5xl"
          style={{ color: pink.heading }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {site.contactHeading}
        </motion.h2>
        <motion.p
          className="mt-5 max-w-md text-base leading-relaxed md:text-lg"
          style={{ color: pink.body }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06, duration: 0.45 }}
        >
          {site.contactLine}
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.45 }}
        >
          <p
            className="text-[0.65rem] uppercase tracking-[0.16em]"
            style={{ color: pink.label }}
          >
            Email
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block text-xl transition-colors md:text-2xl hover:brightness-110"
            style={{ color: pink.link }}
          >
            {site.email}
          </a>
        </motion.div>

        <a
          href="#top"
          className="mt-16 inline-block text-sm transition-opacity hover:opacity-100"
          style={{ color: pink.body, opacity: 0.85 }}
        >
          Back to top ↑
        </a>
      </div>
    </section>
  );
}
