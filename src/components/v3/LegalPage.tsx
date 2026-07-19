import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { V3Nav } from "@/components/v3/V3Nav";
import { V3Footer } from "@/components/v3/V3Footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <V3Nav />
      <main
        className="relative min-h-[70vh] px-6 pb-20 pt-28 md:px-10 md:pt-32"
        style={{ background: "var(--bg-team)" }}
      >
        <div className="pattern-diagonal absolute inset-0 opacity-40" aria-hidden />
        <article className="relative mx-auto max-w-2xl">
          <Link
            href="/"
            className="text-sm transition-colors hover:text-[var(--fg)]"
            style={{ color: "var(--muted)" }}
          >
            ← Back to {site.name}
          </Link>
          <h1 className="font-display mt-8 text-3xl md:text-4xl">{title}</h1>
          <p
            className="mt-3 text-xs uppercase tracking-[0.16em]"
            style={{ color: "var(--faint)" }}
          >
            Last updated {updated}
          </p>
          <div
            className="mt-10 space-y-5 text-base leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {children}
          </div>
        </article>
      </main>
      <V3Footer />
    </>
  );
}
