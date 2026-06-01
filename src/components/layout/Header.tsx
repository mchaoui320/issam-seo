"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const LOGO_SVG = `<circle cx="7" cy="6" r="2.4"/><circle cx="17.5" cy="6" r="2.4"/><circle cx="12" cy="18" r="2.4"/><path d="M8.8 7.4 11 16M15.7 7.5 13 16M9 6h6.5"/>`;

const NAV = [
  { label: "SEO", href: "/#seo-geo" },
  { label: "GEO", href: "/#seo-geo" },
  { label: "Méthode", href: "/#methode" },
  { label: "Services", href: "/#services" },
  { label: "Cas clients", href: "/#preuve" },
];

export function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onS = () => setStuck(window.scrollY > 12);
    onS();
    window.addEventListener("scroll", onS, { passive: true });
    return () => window.removeEventListener("scroll", onS);
  }, []);

  return (
    <header className={`hdr${stuck ? " is-stuck" : ""}`}>
      <div className="container hdr__inner">
        <Link className="logo" href="/">
          <span className="logo__mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              dangerouslySetInnerHTML={{ __html: LOGO_SVG }} style={{ width: 21, height: 21 }} />
          </span>
          <span className="logo__txt">
            <span className="logo__name">Med Issam Chaoui</span>
            <br />
            <span className="logo__sub">Consultant SEO · GEO</span>
          </span>
        </Link>
        <nav className="hdr__nav">
          {NAV.map((n) => (
            <Link key={n.label} className="hdr__link" href={n.href}>{n.label}</Link>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link className="btn btn--primary hdr__cta-desktop" href="#contact">
            Réserver un diagnostic
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
          <button className="btn btn--ghost hdr__burger" aria-label="Menu" onClick={() => setOpen((o) => !o)} style={{ padding: 11 }}>
            {open
              ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20, margin: 0 }}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20, margin: 0 }}><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>
            }
          </button>
        </div>
      </div>
      {open && (
        <div className="container" style={{ paddingBottom: 18 }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV.map((n) => (
              <Link key={n.label} className="hdr__link" href={n.href} onClick={() => setOpen(false)} style={{ padding: "12px 14px" }}>{n.label}</Link>
            ))}
            <Link className="btn btn--primary" href="#contact" style={{ marginTop: 8, justifyContent: "center" }} onClick={() => setOpen(false)}>
              Réserver un diagnostic
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
