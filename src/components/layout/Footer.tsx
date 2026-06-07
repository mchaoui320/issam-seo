import Link from "next/link";
import { Network } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col footer__brand">
            <Link className="logo" href="/">
              <span className="logo__mark logo__mark--footer">
                <Network aria-hidden="true" />
              </span>
              <span className="logo__txt">
                <span className="logo__name">Med Issam Chaoui</span>
                <span className="logo__sub">Consultant SEO · GEO</span>
              </span>
            </Link>
            <p>
              Future Search Intelligence pour structurer la visibilité organique sur Google, les moteurs de réponse et les marchés locaux.
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
            <h4>Système</h4>
            <ul>
              <li><Link href="/#methode">Méthode</Link></li>
              <li><Link href="/#outils">Outils</Link></li>
              <li><Link href="/livrables-seo">Livrables</Link></li>
              <li><Link href="/consultant-seo-marseille">Marseille</Link></li>
              <li><Link href="/consultant-seo-paris">Paris</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:issam@issam-chaoui.fr">issam@issam-chaoui.fr</a></li>
              <li><Link href="/#contact">Demander un diagnostic SEO</Link></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Med Issam Chaoui · Consultant SEO &amp; GEO</span>
          <span>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite">Confidentialité</Link>
            <Link href="/cookies">Cookies</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
