"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { GlassPanel } from "@/components/ui/liquid-glass";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { cn } from "@/lib/cn";
import { useCanHover } from "@/lib/use-can-hover";
import { useMotionSafe } from "@/lib/motion-safe";
import { site, team, type TeamMember } from "@/data/site";

const EXPAND_MS = "350ms";
const EXPAND_EASE = "var(--ease-editorial)";

/** Break long bios into readable paragraphs (UI UX Pro Max: line length + rhythm). */
function aboutParagraphs(text: string): string[] {
  const blocks = text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  if (blocks.length > 1) return blocks;

  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g)?.map((s) => s.trim()) ?? [text];
  if (sentences.length <= 2) return [text.trim()];

  const chunks: string[] = [];
  for (let i = 0; i < sentences.length; i += 2) {
    chunks.push(sentences.slice(i, i + 2).join(" ").trim());
  }
  return chunks;
}

type TeamCardProps = {
  member: TeamMember;
  canHover: boolean;
};

function TeamCard({ member, canHover }: TeamCardProps) {
  const { reduceMotion } = useMotionSafe();
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [suppressHover, setSuppressHover] = useState(false);
  const expanded = reduceMotion || pinned || (hovered && !suppressHover);
  const aboutId = `${member.id}-about`;
  const paragraphs = aboutParagraphs(member.about);

  const toggleAbout = () => {
    if (expanded) {
      setPinned(false);
      setSuppressHover(true);
    } else {
      setPinned(true);
      setSuppressHover(false);
    }
  };

  return (
    <GlassPanel
      tone="light"
      radius="xl"
      interactive
      data-active={expanded ? "true" : undefined}
      className="team-card-panel group/card h-full overflow-hidden border border-[var(--border)]"
    >
      <article
        id={member.id}
        className="grid min-w-0 grid-cols-1 md:grid-cols-[auto_1fr]"
        onMouseEnter={() => canHover && setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setSuppressHover(false);
        }}
      >
        <div className="team-card-sidebar flex flex-col items-center gap-4 border-b border-[var(--border)] p-5 md:border-b-0 md:border-r md:p-6">
          <div className="team-card-photo-wrap">
            <div className="team-card-photo-frame relative size-[9.5rem] shrink-0 overflow-hidden rounded-lg border bg-[var(--bg-team)] sm:size-40 lg:size-44">
              {member.photoUrl ? (
                <Image
                  src={member.photoUrl}
                  alt={`Portrait of ${member.name}`}
                  width={352}
                  height={352}
                  loading="lazy"
                  sizes="(max-width: 640px) 152px, 176px"
                  className="team-card-photo h-full w-full object-cover object-center"
                />
              ) : (
                <>
                  <div className="pattern-waves absolute inset-0 opacity-60" aria-hidden />
                  <span className="type-label-sm text-faint absolute inset-0 flex items-center justify-center tracking-[0.16em]">
                    Photo
                  </span>
                </>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color-mix(in_srgb,var(--bg-dark)_88%,transparent)] to-transparent px-2.5 pb-2 pt-8">
                <p className="team-card-index tabular-nums leading-none">{member.index}</p>
              </div>
            </div>
          </div>

          <a
            href={member.resumuraiUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${member.name} on Resumurai (opens in new tab)`}
            className="team-card-cta link-muted tap-target inline-flex text-center text-sm underline-offset-4 hover:underline"
          >
            View on Resumurai ↗
          </a>
        </div>

        <div className="flex min-w-0 flex-col p-5 md:p-6 lg:p-7">
          <header className="team-card-header border-b border-[var(--border)] pb-4 md:pb-5">
            <h3 className="type-title">{member.name}</h3>
            <p className="type-body-lg mt-2.5 font-semibold leading-snug text-[var(--fg)]">
              {member.role}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{member.location}</p>
          </header>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-6">
            <div>
              <p className="team-card-field-label">Where things are</p>
              <p className="team-card-meta mt-2">{member.chapter}</p>
            </div>
            <div>
              <p className="team-card-field-label">Passions</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {member.passions.map((passion) => (
                  <li key={passion} className="tag-chip">
                    {passion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-t border-[var(--border)] px-5 pb-5 pt-1 md:col-span-2 md:px-6 md:pb-6 lg:px-7 lg:pb-7">
          <button
            type="button"
            className={cn(
              "team-card-about-trigger",
              reduceMotion && "pointer-events-none cursor-default",
            )}
            aria-expanded={expanded}
            aria-controls={aboutId}
            onClick={toggleAbout}
            disabled={reduceMotion}
          >
            <span className="team-card-field-label">About</span>
            {!reduceMotion && (
              <span className="flex items-center gap-2 text-sm text-muted">
                <span>{expanded ? "Close" : "Read bio"}</span>
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 transition-transform",
                    expanded && "rotate-180",
                  )}
                  style={{
                    transitionDuration: EXPAND_MS,
                    transitionTimingFunction: EXPAND_EASE,
                  }}
                  aria-hidden
                />
              </span>
            )}
          </button>

          <div
            id={aboutId}
            aria-hidden={!expanded}
            className={cn(
              "grid transition-[grid-template-rows]",
              expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              reduceMotion && "grid-rows-[1fr]",
            )}
            style={{
              transitionDuration: EXPAND_MS,
              transitionTimingFunction: EXPAND_EASE,
            }}
          >
            <div className="overflow-hidden">
              <div
                className={cn(
                  "team-card-read-panel mx-auto mt-3 max-w-prose transition-opacity",
                  expanded ? "opacity-100" : "opacity-0",
                  reduceMotion && "opacity-100",
                )}
                style={{
                  transitionDuration: EXPAND_MS,
                  transitionTimingFunction: EXPAND_EASE,
                }}
              >
                <div className="team-card-prose text-safe">
                  {paragraphs.map((paragraph, i) => (
                    <p key={`${member.id}-about-${i}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </GlassPanel>
  );
}

export function TeamSection() {
  const canHover = useCanHover();

  return (
    <section
      id="team"
      className="relative scroll-mt-[var(--nav-height)] bg-[var(--bg-team)]"
    >
      <div className="pattern-diagonal absolute inset-0 opacity-55" aria-hidden />

      <div className="relative mx-auto max-w-[88rem] px-5 py-14 md:px-8 md:py-20 lg:px-10">
        <p className="type-label section-label-light">002 — Team</p>
        <h2 className="type-headline mt-4">The Founders</h2>
        <p className="measure-prose mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {site.teamIntro}
        </p>

        <div className="mt-10 overflow-visible px-1 md:mt-12 md:px-2">
          <ParallaxScroll
            items={team.map((member) => (
              <TeamCard key={member.id} member={member} canHover={canHover} />
            ))}
          />
        </div>
      </div>
    </section>
  );
}
