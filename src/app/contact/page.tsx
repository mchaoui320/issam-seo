import { Contact } from "@/components/site/Contact";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Contact : parlons de votre projet",
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
        {/* Aucune adresse en clair tant que le domaine n'est pas arbitré :
            une adresse publiée est moissonnée en quelques jours et ne se
            reprend pas. Le formulaire est le seul point d'entrée. */}
        <p className="mono muted">MARSEILLE · PARIS · À DISTANCE</p>
      </section>
      <Contact />
    </div>
  );
}
