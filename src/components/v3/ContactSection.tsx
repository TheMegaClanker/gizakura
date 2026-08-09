"use client";

import { motion } from "motion/react";
import { EditorialTextLink } from "@/components/ui/editorial-button";
import { GlassPanel } from "@/components/ui/liquid-glass";
import { useMotionSafe } from "@/lib/motion-safe";
import { site } from "@/data/site";

export function ContactSection() {
  const { inView } = useMotionSafe();

  return (
    <section
      id="contact"
      className="relative scroll-mt-[var(--nav-height)] overflow-hidden bg-[var(--bg-dark)]"
    >
      <div className="pattern-diagonal-dark absolute inset-0 opacity-90" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <GlassPanel
          tone="dark"
          radius="2xl"
          interactive
          className="border border-[var(--border-on-dark)] p-8 md:p-12"
        >
          <p className="type-label section-label-dark">004 — Contact</p>
          <motion.h2
            className="type-headline mt-4 max-w-xl text-[var(--contact-heading)]"
            {...inView({ opacity: 0, y: 18 })}
          >
            {site.contactHeading}
          </motion.h2>
          <motion.p
            className="measure-prose mt-5 max-w-md text-base leading-relaxed text-[var(--contact-body)] md:text-lg"
            {...inView({ opacity: 0, y: 14 }, 0.06)}
          >
            {site.contactLine}
          </motion.p>

          <motion.div
            className="mt-12 max-w-sm border border-[var(--border-on-dark)] bg-[var(--bg-card)] p-6 text-[var(--fg)] md:p-8"
            {...inView({ opacity: 0, y: 12 }, 0.1)}
          >
            <p
              className="type-label-sm text-faint"
              style={{ letterSpacing: "0.16em" }}
            >
              Email
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-safe -ml-3 mt-2 inline-flex min-h-11 items-center text-xl text-[var(--fg)] underline decoration-[var(--border-strong)] underline-offset-4 hover:decoration-[var(--fg)] md:text-2xl"
            >
              {site.email}
            </a>
          </motion.div>

          <EditorialTextLink
            href="#top"
            muted
            className="-ml-3 mt-12 text-[var(--contact-body)]"
          >
            Back to top ↑
          </EditorialTextLink>
        </GlassPanel>
      </div>
    </section>
  );
}
