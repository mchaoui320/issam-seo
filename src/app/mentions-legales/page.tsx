import Link from "next/link";
import { Figure } from "@/components/site/Figure";
import { standaloneVisuals } from "@/lib/editorial-images";
import { pageMetadata } from "@/lib/seo";
export const metadata = {
  ...pageMetadata(
    "Mentions légales",
    "Informations relatives à l’éditeur et à l’hébergement du site.",
    "/mentions-legales",
  ),
  robots: { index: false, follow: true },
};
export default function Page() {
  return (
    <div className="wrap">
      <section className="page-hero">
        <span className="eyebrow">INFORMATIONS DU SITE</span>
        <h1>Mentions légales</h1>
        <p className="lead">
          Cette page doit être complétée avec les informations administratives
          et d’hébergement confirmées avant la publication commerciale.
        </p>
      </section>
      <Figure image={standaloneVisuals.privacy} />
      <div className="legal-content">
        <h2>Contact éditorial</h2>
        <p>
          Med Issam Chaoui — toute demande passe par le{" "}
          <Link href="/contact">formulaire de contact</Link>.
        </p>
        <h2>Informations à confirmer</h2>
        <p>
          La dénomination et le statut de l’éditeur, son adresse
          professionnelle, les références d’immatriculation applicables, le
          directeur de publication et les coordonnées de l’hébergeur ne sont pas
          renseignés dans les éléments vérifiés du projet.
        </p>
        <h2>Contenus</h2>
        <p>
          Les guides et cas pratiques présentent des méthodes et exemples
          pédagogiques. Ils ne constituent pas une garantie de classement, de
          citation dans un moteur IA ou de chiffre d’affaires.
        </p>
      </div>
    </div>
  );
}
