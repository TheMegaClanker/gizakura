"use client";

import { motion } from "motion/react";
import { SakuraField } from "@/components/v3/SakuraField";
import { site, team } from "@/data/site";

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden"
      style={{ background: "var(--bg-team)" }}
    >
      <div className="pattern-diagonal absolute inset-0 opacity-55" aria-hidden />
      <SakuraField density="light" className="opacity-12" />

      <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <p
          className="text-[0.7rem] uppercase tracking-[0.22em]"
          style={{ color: "var(--faint)" }}
        >
          002 — Team
        </p>
        <h2 className="font-display mt-4 text-3xl md:text-5xl">The Founders</h2>
        <p
          className="mt-4 max-w-xl text-base leading-relaxed md:text-lg"
          style={{ color: "var(--muted)" }}
        >
          {site.teamIntro}
        </p>

        <div className="mt-14 flex flex-col gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.article
              key={member.id}
              id={member.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{
                duration: 0.5,
                delay: Math.min(i * 0.04, 0.12),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden border border-[var(--border)]"
              style={{ background: "var(--bg-card)" }}
            >
              <div className="grid lg:grid-cols-[minmax(200px,280px)_1fr]">
                <div
                  className="relative border-b border-[var(--border)] p-6 lg:border-b-0 lg:border-r lg:p-8"
                  style={{ background: "var(--bg-soft)" }}
                >
                  <p
                    className="font-display text-4xl tabular-nums md:text-5xl"
                    style={{ color: "var(--accent)", opacity: 0.9 }}
                  >
                    {member.index}
                  </p>
                  {/* Photo — set member.photoUrl in site.ts when ready */}
                  <div
                    className="relative mt-5 aspect-square w-full max-w-[180px] overflow-hidden rounded-full border border-[var(--border)]"
                    style={{ background: "var(--bg-team)" }}
                  >
                    {member.photoUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        className="h-full w-full object-cover object-center"
                      />
                    ) : (
                      <>
                        <div className="pattern-waves absolute inset-0 opacity-60" aria-hidden />
                        <span
                          className="absolute inset-0 flex items-center justify-center text-[0.65rem] uppercase tracking-[0.16em]"
                          style={{ color: "var(--faint)" }}
                        >
                          Photo
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="font-display mt-5 text-2xl tracking-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                    {member.role}
                  </p>
                  <p
                    className="mt-3 text-sm tracking-wide md:text-base"
                    style={{ color: "var(--muted)" }}
                  >
                    {member.location}
                  </p>
                  <a
                    href={member.resumuraiUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-block text-sm underline underline-offset-4 transition-colors hover:text-[var(--accent)]"
                    style={{ color: "var(--muted)" }}
                  >
                    View on Resumurai ↗
                  </a>
                </div>

                <div className="flex flex-col gap-8 p-6 md:p-10 lg:p-12">
                  <div>
                    <p
                      className="text-[0.7rem] uppercase tracking-[0.16em]"
                      style={{ color: "var(--faint)" }}
                    >
                      Where things are
                    </p>
                    <p className="mt-3 text-base leading-relaxed md:text-lg">
                      {member.chapter}
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-[0.7rem] uppercase tracking-[0.16em]"
                      style={{ color: "var(--faint)" }}
                    >
                      About
                    </p>
                    <p
                      className="mt-3 max-w-2xl whitespace-pre-line text-base leading-[1.75] md:text-[1.05rem]"
                      style={{ color: "var(--muted)" }}
                    >
                      {member.about}
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-[0.7rem] uppercase tracking-[0.16em]"
                      style={{ color: "var(--faint)" }}
                    >
                      Passions
                    </p>
                    <ul className="mt-4 flex flex-col gap-3">
                      {member.passions.map((passion) => (
                        <li
                          key={passion}
                          className="flex gap-3 text-base leading-relaxed"
                        >
                          <span
                            className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: "var(--accent)" }}
                            aria-hidden
                          />
                          <span style={{ color: "var(--muted)" }}>{passion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
