"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["about", "team", "portfolio", "contact"] as const;

export type ActiveSection = (typeof SECTION_IDS)[number] | null;

/** Highlights whichever main band occupies the upper viewport while scrolling. */
export function useActiveSection(): ActiveSection {
  const [active, setActive] = useState<ActiveSection>(null);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visible[0]?.target.id as ActiveSection | undefined;
        setActive(top ?? null);
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0, 0.15, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}
