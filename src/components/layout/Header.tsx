"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "SEO Marseille", href: "/consultant-seo-marseille" },
  { label: "SEO Paris",     href: "/consultant-seo-paris" },
  { label: "Services",      href: "/#services" },
  { label: "GEO / IA",      href: "/geo-referencement-ia" },
  { label: "Cas clients",   href: "/etudes-de-cas" },
  { label: "Blog",          href: "/blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        style={{
          position: "sticky", top: 0, zIndex: 50,
          transition: "all 0.35s ease",
          background: scrolled ? "rgba(8,12,10,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: "var(--green)", display: "flex",
              alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 20px rgba(0,232,122,0.4)",
            }}>
              <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
                <polyline points="2,14 7,8 11,11 18,4" stroke="#080C0A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="14,4 18,4 18,8" stroke="#080C0A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13, color: "var(--ink)", letterSpacing: "0.04em", lineHeight: 1.1 }}>
                CONSULTANT
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--green)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 1 }}>
                SEO · GEO
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="hidden md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/contact" className="btn btn-green hidden sm:inline-flex" style={{ padding: "9px 20px", fontSize: 13 }}>
              Demander un diagnostic
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
              style={{ padding: 8, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", cursor: "pointer", color: "var(--ink)", display: "flex" }}
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed", inset: 0, zIndex: 49,
              background: "var(--bg-soft)",
              display: "flex", flexDirection: "column",
              padding: "88px 32px 40px",
            }}
          >
            {/* Décor */}
            <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,232,122,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

            <nav style={{ display: "flex", flexDirection: "column", gap: 0, flex: 1 }}>
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.4, ease: [0.22,1,0.36,1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "18px 0",
                      fontFamily: "var(--font-display)", fontSize: 32,
                      fontWeight: 650, color: "var(--ink)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      letterSpacing: "-0.025em",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--green)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--ink)"; }}
                  >
                    {l.label}
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-green" style={{ textAlign: "center", justifyContent: "center", marginTop: 32 }}>
              Demander un diagnostic
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
