"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { isActive, navItems } from "@/lib/content/nav";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const iconButton =
  "flex h-10 w-10 items-center justify-center rounded-full bg-subtle text-ink transition duration-150 ease-spring hover:scale-110 hover:bg-accent hover:text-white";

function Wordmark() {
  return (
    <span className="text-[19px] font-bold tracking-[0.01em]">
      <span className="text-accent">{site.wordmark.lead}</span>
      {site.wordmark.rest}
    </span>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-full px-4 py-2 whitespace-nowrap transition-colors",
        active ? "bg-subtle font-bold text-ink" : "text-sub hover:text-accent",
      )}
    >
      {label}
    </Link>
  );
}

export function Topbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 font-nav backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-6 py-4 sm:px-12 sm:py-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          <Logo width={26} title={`${site.name} logo`} />
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-2 text-[15px] font-medium lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              active={isActive(item, pathname)}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className={cn(iconButton, "hidden sm:flex")}
          >
            <FacebookIcon />
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className={cn(iconButton, "hidden sm:flex")}
          >
            <InstagramIcon />
          </a>
          <ThemeToggle className={iconButton} />
          <Link
            href="/donate"
            className="rounded-full bg-tile px-5 py-2.5 text-[15px] font-semibold text-tile-ink transition duration-150 ease-spring hover:scale-105 hover:bg-accent sm:px-6 sm:py-[11px]"
          >
            Donate
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(iconButton, "lg:hidden")}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          aria-label="Primary"
          className="border-t border-line px-6 py-3 text-[16px] font-medium lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const active = isActive(item, pathname);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-xl px-3 py-3 transition-colors",
                      active ? "bg-subtle font-bold text-ink" : "text-sub hover:text-accent",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" aria-hidden>
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
      )}
    </svg>
  );
}
