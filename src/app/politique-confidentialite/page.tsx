import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
export const metadata = {
  ...pageMetadata(
    "Confidentialité",
    "Fonctionnement du formulaire et des outils du site concernant vos données.",
    "/politique-confidentialite",
  ),
  robots: { index: false, follow: true },
};
export default function Page() {
  return (
    <div className="wrap">
      <section className="page-hero">
        <span className="eyebrow">VOS DONNÉES</span>
        <h1>Confidentialité</h1>
        <p className="lead">
          Les outils et le formulaire de cette version fonctionnent dans votre
          navigateur. Aucun outil de mesure d’audience ou publicitaire n’est
          activé par l’application.
        </p>
      </section>
      <div className="legal-content">
        <h2>Outils interactifs</h2>
        <p>
          Les textes de l’aperçu Google, les paramètres du simulateur, les liens
          UTM et les réponses à la checklist sont traités localement.
          L’application ne les envoie pas à un service d’analyse et ne les
          conserve pas après le rechargement de la page.
        </p>
        <h2>Prise de contact</h2>
        <p>
          Le formulaire prépare un brouillon. Lorsque vous ouvrez votre
          messagerie puis envoyez le message, les informations sont transmises
          par votre service de messagerie au destinataire indiqué. Vous pouvez
          exercer vos droits en passant par le{" "}
          <Link href="/contact">formulaire de contact</Link>.
        </p>
        <h2>Hébergement et traitement des demandes</h2>
        <p>
          La journalisation technique dépendra de l’hébergeur choisi. Les durées
          de conservation des échanges, les prestataires de messagerie et les
          informations du responsable de traitement doivent être documentés
          avant la mise en ligne commerciale.
        </p>
        <h2>Demande concernant vos données</h2>
        <p>
          Pour toute question concernant un échange par e-mail, contactez
          l’adresse ci-dessus en précisant l’objet de votre demande.
        </p>
      </div>
    </div>
  );
}
