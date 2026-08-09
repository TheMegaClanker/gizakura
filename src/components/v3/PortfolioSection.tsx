"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FlowButton } from "@/components/ui/flow-button";
import { useMotionSafe } from "@/lib/motion-safe";
import { site } from "@/data/site";

export function PortfolioSection() {
  const { inView } = useMotionSafe();

  return (
    <section
      id="portfolio"
      className="relative scroll-mt-[var(--nav-height)] overflow-hidden bg-[var(--bg-portfolio)]"
    >
      <div className="pattern-diagonal absolute inset-0 opacity-70" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <p className="type-label section-label-light">003 — Portfolio</p>
        <h2 className="type-headline mt-4">Our Products</h2>
        <p className="measure-prose mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {site.portfolioIntro}
        </p>

        <motion.article
          className="mt-12 overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-card)]"
          {...inView({ opacity: 0, y: 24 })}
        >
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <p className="type-label-xs text-faint">Live product</p>
                <h3 className="type-headline mt-4 text-3xl md:text-4xl">
                  {site.productName}
                </h3>
                <p className="measure-prose mt-5 max-w-md text-base leading-relaxed text-muted">
                  {site.productBlurb}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {site.productTags.map((tag) => (
                    <li key={tag} className="tag-chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <FlowButton
                  href={site.productUrl}
                  external
                  text={`Visit ${site.productName}`}
                  aria-label={`Visit ${site.productName} (opens in new tab)`}
                />
              </div>
            </div>

            <div className="relative min-h-[240px] bg-[var(--bg-dark)] lg:min-h-[360px]">
              <div className="pattern-diagonal-dark absolute inset-0 opacity-80" aria-hidden />
              <div className="relative flex h-full min-h-[240px] flex-col items-center justify-center gap-5 p-10 lg:min-h-[360px]">
                <Image
                  src={site.productLogo}
                  alt={`${site.productName} logo`}
                  width={312}
                  height={380}
                  className="h-auto w-52 object-contain md:w-64 lg:w-72"
                />
                <p className="type-label-xs text-muted-on-dark">
                  {site.productUrl.replace(/^https?:\/\/(www\.)?/, "")}
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
