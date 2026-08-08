"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { useActiveSection, type ActiveSection } from "@/lib/use-active-section";
import { site } from "@/data/site";

const links: { href: string; label: string; section: ActiveSection }[] = [
  { href: "/#about", label: "About", section: "about" },
  { href: "/#team", label: "Team", section: "team" },
  { href: "/#portfolio", label: "Work", section: "portfolio" },
  { href: "/#contact", label: "Contact", section: "contact" },
];

export function V3Nav() {
  const activeSection = useActiveSection();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="nav-shell pattern-diagonal border-b border-[var(--border)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:gap-4 sm:px-4 md:px-10 md:py-3">
          <Link
            href="/"
            className="tap-target -ml-1 flex cursor-pointer items-center gap-2 sm:-ml-2 md:-ml-3 md:gap-2.5"
            aria-label={`${site.name} home`}
          >
            <Image
              src="/brand/gizakura-logo.svg"
              alt=""
              width={32}
              height={32}
              className="h-7 w-7 shrink-0 md:h-8 md:w-8"
              priority
            />
            <span className="type-brand-nav hidden font-display font-normal sm:inline">
              {site.name}
            </span>
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-0 sm:gap-0.5 md:gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={activeSection === link.section ? "page" : undefined}
                className={cn(
                  "nav-link type-label-nav",
                  activeSection === link.section && "nav-link-active",
                )}
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
