import { Contact } from "@/components/site/Contact";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Contact : parlons de votre projet SEO, GEO ou data",
  "Décrivez votre site, vos objectifs et votre besoin en audit SEO, référencement IA ou analytics à Med Issam Chaoui.",
  "/contact",
);
export default function Page() {
  return (
    <div className="wrap contact-layout">
      <section className="page-hero">
        <span className="eyebrow">UN PREMIER ÉCHANGE</span>
        <h1>
          Votre ambition.
          <br />
          Notre point
          <br />
          de départ.
        </h1>
        <p className="lead">
          Un site à faire grandir, une visibilité à reconstruire ou des données
          à clarifier ? Racontez-moi.
        </p>
        <a className="contact-email" href="mailto:issam@issam-chaoui.fr">
          issam@issam-chaoui.fr ↗
        </a>
        <p className="mono muted">MARSEILLE · PARIS · À DISTANCE</p>
      </section>
      <Contact />
    </div>
  );
}
