import Link from "next/link";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="wordmark">
              <strong>MIC</strong> SIGNAL
            </Link>
            <p>
              Devenir la réponse,
              <br />
              partout où l’on vous cherche.
            </p>
            <span className="mono muted">SEO · GEO/LLM · LOCAL · DATA</span>
          </div>
          {[
            {
              title: "EXPERTISES",
              links: [
                ["SEO & référencement", "/seo"],
                ["GEO & moteurs IA", "/geo"],
                ["Data & analytics", "/data-web"],
                ["Audit SEO", "/audit-seo"],
                ["SEO local", "/seo-local"],
                ["Glossaire SEO & IA", "/glossaire"],
              ],
            },
            {
              title: "EXPLORER",
              links: [
                ["MIC Lab interactif", "/outils-seo"],
                ["Audit visibilité IA", "/audit-visibilite-ia"],
                ["Analyse concurrentielle", "/analyse-concurrentielle-seo-geo"],
                ["SEO local multi-villes", "/strategie-seo-local-multi-villes"],
                ["Guides & ressources", "/blog"],
                ["Méthode", "/methode-seo"],
                ["Livrables", "/livrables-seo"],
                ["Cas pratiques", "/etudes-de-cas"],
              ],
            },
            {
              title: "ÉCHANGEONS",
              links: [
                ["À propos", "/a-propos"],
                ["Tarifs & accompagnement", "/tarifs"],
                ["Contact", "/contact"],
                ["Consultant à Marseille", "/consultant-seo-marseille"],
                ["Consultant pour Paris", "/consultant-seo-paris"],
                ["Consultant à Lyon", "/consultant-seo/lyon"],
              ],
            },
          ].map((c) => (
            <div key={c.title}>
              <h2 className="mono">{c.title}</h2>
              {c.links.map(([l, h]) => (
                <Link key={h} href={h}>
                  {l}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Med Issam Chaoui</span>
          <div>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite">Confidentialité</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
          <span className="mono">
            <i className="status-dot" /> Pensé pour le web ouvert
          </span>
        </div>
      </div>
    </footer>
  );
}
