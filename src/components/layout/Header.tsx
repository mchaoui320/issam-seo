"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glass bar */}
      <div className="glass border-b border-[var(--glass-border)] shadow-[var(--shadow-xs)]">
        <Container>
          <div className="flex items-center justify-between h-16">

            {/* Logo — mark SEO focused */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
            >
              <span className="w-7 h-7 rounded-lg bg-[var(--accent)] flex items-center justify-center shadow-[0_2px_8px_rgba(79,70,229,0.4)]">
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white">
                  <path d="M10 2L2 7l8 5 8-5-8-5zM2 13l8 5 8-5M2 10l8 5 8-5"/>
                </svg>
              </span>
              <span className="font-display font-black text-[15px] text-[var(--fg-primary)] tracking-tight">
                consultant<span className="text-[var(--accent)]">seo</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium text-[var(--fg-secondary)] rounded-full",
                    "hover:text-[var(--fg-primary)] hover:bg-[var(--fg-primary)]/5",
                    "transition-all duration-150"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button size="sm" href="/contact" className="hidden sm:inline-flex">
                Prendre RDV
              </Button>
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden p-2 rounded-full hover:bg-[var(--fg-primary)]/5 transition-colors"
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="glass border-b border-[var(--glass-border)] md:hidden">
          <Container>
            <nav className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] rounded-xl hover:bg-[var(--fg-primary)]/5 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-[var(--glass-border)]">
                <Button href="/contact" className="w-full justify-center">
                  Prendre RDV
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
