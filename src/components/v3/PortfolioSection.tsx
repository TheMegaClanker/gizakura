"use client";

import { motion } from "motion/react";
import { SakuraField } from "@/components/v3/SakuraField";
import { site } from "@/data/site";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden"
      style={{ background: "var(--bg-portfolio)" }}
    >
      <div className="pattern-diagonal absolute inset-0 opacity-70" aria-hidden />
      <SakuraField density="light" className="opacity-15" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <p
          className="text-[0.7rem] uppercase tracking-[0.22em]"
          style={{ color: "var(--faint)" }}
        >
          003 — Portfolio
        </p>
        <h2 className="font-display mt-4 text-3xl md:text-5xl">Our Products</h2>
        <p
          className="mt-4 max-w-xl text-base leading-relaxed md:text-lg"
          style={{ color: "var(--muted)" }}
        >
          {site.portfolioIntro}
        </p>

        <motion.article
          className="mt-12 overflow-hidden border border-[var(--border)]"
          style={{ background: "var(--bg-card)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.55 }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <p
                  className="text-[0.65rem] uppercase tracking-[0.2em]"
                  style={{ color: "var(--faint)" }}
                >
                  Live product *
                </p>
                <h3 className="font-display mt-4 text-3xl md:text-4xl">
                  {site.productName}
                </h3>
                <p
                  className="mt-5 max-w-md text-base leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {site.productBlurb}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {site.productTags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-[var(--border-strong)] px-3 py-1 text-xs tracking-wide"
                      style={{ color: "var(--muted)" }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <a
                  href={site.productUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-[var(--fg)] px-5 py-2.5 text-sm transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg-card)]"
                >
                  Visit {site.productName} ↗
                </a>
              </div>
            </div>

            <div className="relative min-h-[240px] bg-[var(--bg-dark)] lg:min-h-[360px]">
              <div className="pattern-diagonal-dark absolute inset-0" aria-hidden />
              <div className="relative flex h-full min-h-[240px] flex-col items-center justify-center gap-4 p-10 lg:min-h-[360px]">
                <span
                  className="font-display text-7xl opacity-25 md:text-8xl"
                  style={{ color: "var(--fg-on-dark)" }}
                >
                  Rr
                </span>
                <p
                  className="absolute bottom-6 right-6 text-[0.65rem] uppercase tracking-[0.2em]"
                  style={{ color: "var(--muted-on-dark)" }}
                >
                  resumurai.com
                </p>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.div
          className="mt-6 border border-dashed border-[var(--border-strong)] px-6 py-10 md:px-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.45 }}
        >
          <div className="flex items-start justify-between gap-4">
            <p
              className="text-[0.65rem] uppercase tracking-[0.18em]"
              style={{ color: "var(--faint)" }}
            >
              Coming soon
            </p>
            <p
              className="text-[0.65rem] uppercase tracking-[0.18em]"
              style={{ color: "var(--faint)" }}
            >
              In development
            </p>
          </div>
          <p
            className="font-display mt-6 text-2xl md:text-3xl"
            style={{ color: "var(--faint)" }}
          >
            {site.comingSoonLabel}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
