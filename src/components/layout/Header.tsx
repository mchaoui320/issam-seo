"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Network, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const nav = [
  { label: "SEO + GEO", href: "/#seo-geo" },
  { label: "Méthode", href: "/#methode" },
  { label: "Services", href: "/#services" },
  { label: "Outils", href: "/#outils" },
  { label: "Preuves", href: "/#preuve" },
];

export function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setStuck(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`hdr${stuck ? " is-stuck" : ""}`}>
      <div className="container hdr__inner">
        <Link className="logo" href="/" aria-label="Accueil Med Issam Chaoui">
          <span className="logo__mark">
            <Network aria-hidden="true" />
          </span>
          <span className="logo__txt">
            <span className="logo__name">Med Issam Chaoui</span>
            <span className="logo__sub">Consultant SEO · GEO</span>
          </span>
        </Link>

        <nav className="hdr__nav" aria-label="Navigation principale">
          {nav.map((item) => (
            <Link className="hdr__link" href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hdr__actions">
          <MagneticButton className="hdr__cta-desktop" href="/#contact" size="md">
            Diagnostic SEO
          </MagneticButton>
          <button
            aria-expanded={open}
            aria-label="Ouvrir le menu"
            className="hdr__burger"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="hdr__mobile container">
          <nav aria-label="Navigation mobile">
            {nav.map((item) => (
              <Link
                className="hdr__link"
                href={item.href}
                key={item.label}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <MagneticButton href="/#contact" size="md">
              Demander un diagnostic SEO
            </MagneticButton>
          </nav>
        </div>
      )}
    </header>
  );
}
