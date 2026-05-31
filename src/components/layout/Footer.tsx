"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--border)", padding: "64px 0 32px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40, marginBottom: 48 }}>

          {/* Brand — sans nom */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 9,
                background: "var(--green)", display: "flex",
                alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 16px rgba(0,232,122,0.3)",
              }}>
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none">
                  <polyline points="2,14 7,8 11,11 18,4" stroke="#080C0A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14,4 18,4 18,8" stroke="#080C0A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--green)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Consultant SEO & GEO
              </div>
            </div>
            <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 8 }}>
              Marseille / Paris / Remote
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.08em" }}>
              DISPONIBLE POUR DE NOUVEAUX PROJETS
            </p>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 16 }}>Services</div>
            {["Audit SEO", "SEO local", "Stratégie de contenu", "SEO technique", "Netlinking", "GEO / IA Search"].map((s) => (
              <div key={s} style={{ marginBottom: 8 }}>
                <Link
                  href={`/${s.toLowerCase().replace(/ /g, "-").replace(/\//g, "-")}`}
                  style={{ fontSize: 14, color: "var(--ink-soft)", transition: "color 0.15s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--green)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-soft)"; }}
                >
                  {s}
                </Link>
              </div>
            ))}
          </div>

          {/* Local */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 16 }}>Local</div>
            {[
              { label: "Consultant SEO Marseille", href: "/consultant-seo-marseille" },
              { label: "Consultant SEO Paris",     href: "/consultant-seo-paris" },
              { label: "SEO local Marseille",      href: "/seo-local" },
              { label: "SEO local Paris",          href: "/seo-local" },
            ].map((l) => (
              <div key={l.label} style={{ marginBottom: 8 }}>
                <Link
                  href={l.href}
                  style={{ fontSize: 14, color: "var(--ink-soft)", transition: "color 0.15s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--cyan)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-soft)"; }}
                >
                  {l.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Ressources */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 16 }}>Ressources</div>
            {[
              { label: "Blog SEO",   href: "/blog" },
              { label: "Tarifs",     href: "/tarifs" },
              { label: "Cas clients",href: "/etudes-de-cas" },
              { label: "À propos",   href: "/a-propos" },
              { label: "Contact",    href: "/contact" },
            ].map((l) => (
              <div key={l.label} style={{ marginBottom: 8 }}>
                <Link
                  href={l.href}
                  style={{ fontSize: 14, color: "var(--ink-soft)", transition: "color 0.15s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-soft)"; }}
                >
                  {l.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)" }}>
            © 2025 Consultant SEO & GEO · Marseille & Paris
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {[
              { label: "Mentions légales",  href: "/mentions-legales" },
              { label: "Confidentialité",   href: "/politique-confidentialite" },
              { label: "Cookies",           href: "/cookies" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", transition: "color 0.15s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-soft)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
