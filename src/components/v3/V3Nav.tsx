"use client";

import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#team", label: "Team" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
] as const;

export function V3Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="pattern-diagonal border-b border-[var(--border)]"
        style={{
          background: "rgba(249, 233, 229, 0.9)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="/"
            className="font-display text-xl tracking-tight md:text-[1.35rem]"
            style={{ fontWeight: 400 }}
          >
            {site.name}
          </Link>
          <nav className="flex items-center gap-5 md:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.7rem] uppercase tracking-[0.16em] transition-colors hover:text-[var(--fg)]"
                style={{ color: "var(--muted)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
