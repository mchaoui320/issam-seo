import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-accent-primary/10 bg-[var(--bg)] py-12">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg font-bold text-accent-primary">Issam Chaoui</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Consultant SEO Freelance pour Marseille et Paris
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/audit-seo" className="hover:text-accent-primary">
                  Audit SEO
                </Link>
              </li>
              <li>
                <Link href="/seo-local" className="hover:text-accent-primary">
                  SEO Local
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-accent-primary">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-accent-primary">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone}`} className="hover:text-accent-primary">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-primary"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-accent-primary/10 pt-8 flex flex-col gap-4 text-center text-sm text-gray-600 dark:text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2024 Issam Chaoui. Tous droits réservés.</p>
          <div className="flex justify-center gap-6">
            <Link href="/mentions-legales" className="hover:text-accent-primary">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-accent-primary">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
