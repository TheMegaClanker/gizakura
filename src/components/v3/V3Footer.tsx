import Link from "next/link";
import { site } from "@/data/site";

export function V3Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--bg-dark)] text-[var(--fg-on-dark)]">
      <div className="pattern-diagonal-dark absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p
            className="mt-3 max-w-sm text-sm leading-relaxed"
            style={{ color: "var(--muted-on-dark)" }}
          >
            {site.tagline}.
          </p>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-14">
          <div>
            <p
              className="text-[0.65rem] uppercase tracking-[0.18em]"
              style={{ color: "var(--muted-on-dark)" }}
            >
              Email
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block text-sm transition-opacity hover:opacity-80"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p
              className="text-[0.65rem] uppercase tracking-[0.18em]"
              style={{ color: "var(--muted-on-dark)" }}
            >
              LinkedIn
            </p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm transition-opacity hover:opacity-80"
            >
              Company page
            </a>
          </div>
          <div>
            <p
              className="text-[0.65rem] uppercase tracking-[0.18em]"
              style={{ color: "var(--muted-on-dark)" }}
            >
              Legal
            </p>
            <div className="mt-2 flex flex-col gap-1.5 text-sm">
              <Link href="/privacy" className="transition-opacity hover:opacity-80">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-opacity hover:opacity-80">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative border-t border-[var(--border-on-dark)] px-6 py-4 text-center text-xs md:px-10"
        style={{ color: "var(--muted-on-dark)" }}
      >
        © {new Date().getFullYear()} {site.name}. All rights reserved.
        {" · "}
        <Link href="/privacy" className="underline underline-offset-2 hover:opacity-80">
          Privacy
        </Link>
        {" · "}
        <Link href="/terms" className="underline underline-offset-2 hover:opacity-80">
          Terms
        </Link>
      </div>
    </footer>
  );
}
