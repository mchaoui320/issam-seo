"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, ScanLine } from "lucide-react";
const nav = [
  ["Expertises", "/seo"],
  ["GEO & IA", "/geo"],
  ["Data web", "/data-web"],
  ["Le Lab", "/outils-seo"],
  ["Ressources", "/blog"],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="site-header">
      <div className="wrap nav-row">
        <Link href="/" className="brand" aria-label="Issam Chaoui, accueil">
          <span className="brand-mark">
            <ScanLine size={23} />
          </span>
          <span>
            issam<span className="green">.</span>
            <small>SEO · GEO · DATA</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={path === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button small nav-contact">
          Parlons de votre projet <ArrowUpRight size={15} />
        </Link>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navigation mobile"
        >
          {[...nav, ["Contact", "/contact"], ["À propos", "/a-propos"]].map(
            ([l, h]) => (
              <Link key={h} href={h} onClick={() => setOpen(false)}>
                {l}
                <ArrowUpRight size={17} />
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
