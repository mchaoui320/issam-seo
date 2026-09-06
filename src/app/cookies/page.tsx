import { pageMetadata } from "@/lib/seo";
export const metadata = {
  ...pageMetadata(
    "Cookies",
    "Informations sur les traceurs et outils de mesure dans cette version du site.",
    "/cookies",
  ),
  robots: { index: false, follow: true },
};
export default function Page() {
  return (
    <div className="wrap">
      <section className="page-hero">
        <span className="eyebrow">VIE PRIVÉE</span>
        <h1>Cookies & traceurs</h1>
        <p className="lead">
          Cette version n’intègre pas de traceur publicitaire ni de script de
          mesure d’audience.
        </p>
      </section>
      <div className="legal-content">
        <h2>Fonctionnement actuel</h2>
        <p>
          Les outils interactifs utilisent un état temporaire dans votre
          navigateur. Ils ne déposent pas de cookie pour mémoriser vos saisies.
          Les polices sont servies par le site et aucun lecteur ou calendrier
          tiers n’est intégré.
        </p>
        <h2>Services externes</h2>
        <p>
          Les liens vers des ressources officielles et l’ouverture de votre
          messagerie vous dirigent vers d’autres services, dont les règles de
          confidentialité s’appliquent indépendamment.
        </p>
        <h2>Évolutions</h2>
        <p>
          Si des outils de suivi sont ajoutés, cette information devra être
          actualisée et le mécanisme de consentement adapté avant leur
          activation.
        </p>
      </div>
    </div>
  );
}
