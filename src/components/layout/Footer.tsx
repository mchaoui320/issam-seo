import Link from "next/link";

const LOGO_SVG = `<circle cx="7" cy="6" r="2.4"/><circle cx="17.5" cy="6" r="2.4"/><circle cx="12" cy="18" r="2.4"/><path d="M8.8 7.4 11 16M15.7 7.5 13 16M9 6h6.5"/>`;

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <div className="logo" style={{ marginBottom: 16 }}>
              <span className="logo__mark" style={{ background: "var(--paper-2)", color: "var(--ink)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: LOGO_SVG }} style={{ width: 21, height: 21 }} />
              </span>
              <span className="logo__txt">
                <span className="logo__name" style={{ color: "var(--paper)" }}>Med Issam Chaoui</span>
                <br />
                <span className="logo__sub" style={{ color: "rgba(248,251,255,0.5)" }}>Consultant SEO · GEO</span>
              </span>
            </div>
            <p style={{ color: "rgba(248,251,255,0.6)", fontSize: 14.5, maxWidth: "32ch", margin: 0 }}>
              Le SEO comme architecture d&apos;acquisition. Accompagnement des entreprises à Marseille, Paris et à distance.
            </p>
          </div>
          <div className="footer__col">
            <h4>Expertise</h4>
            <ul>
              <li><Link href="/audit-seo">Audit SEO</Link></li>
              <li><Link href="/seo-local">SEO local</Link></li>
              <li><Link href="/strategie-contenu-seo">Stratégie de contenu</Link></li>
              <li><Link href="/seo-technique">SEO technique</Link></li>
              <li><Link href="/geo-referencement-ia">GEO · Référencement IA</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Cabinet</h4>
            <ul>
              <li><Link href="/methode-seo">Méthode</Link></li>
              <li><Link href="/livrables-seo">Livrables</Link></li>
              <li><Link href="/outils-seo">Outils</Link></li>
              <li><Link href="/consultant-seo-marseille">Marseille</Link></li>
              <li><Link href="/consultant-seo-paris">Paris</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:issam@issam-chaoui.fr">issam@issam-chaoui.fr</a></li>
              <li><Link href="#contact">Réserver un diagnostic</Link></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Med Issam Chaoui · Consultant SEO &amp; GEO</span>
          <span style={{ display: "flex", gap: 22 }}>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite">Confidentialité</Link>
            <Link href="/cookies">Cookies</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
