import { Tools } from "@/components/site/Tools";
import { VisibilityWorkbench } from "@/components/site/VisibilityWorkbench";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "MIC Lab — outils SEO, GEO, LLM et SEO local",
  "Construisez un panel de prompts LLM, comparez vos concurrents, préparez une page locale et contrôlez les robots IA. Outils gratuits et transparents.",
  "/outils-seo",
);
export default function Page() {
  return (
    <>
      <div className="wrap">
        <section className="page-hero lab-hero">
          <span className="eyebrow">MIC LAB / VISIBILITY WORKBENCH</span>
          <h1>
            Mesurer les signaux.<br />Décider du prochain mouvement.
          </h1>
          <p className="lead">
            Quatre outils originaux pour structurer une recherche LLM, lire un
            écart concurrentiel, préparer une page locale utile et contrôler
            l’accès des robots IA. Rien n’est envoyé à un serveur.
          </p>
          <div className="lab-hero__facts">
            <span><strong>04</strong> protocoles</span>
            <span><strong>00</strong> donnée inventée</span>
            <span><strong>100%</strong> navigateur</span>
          </div>
        </section>
      </div>
      <div className="wrap workbench-wrap">
        <VisibilityWorkbench />
      </div>
      <section className="classic-tools">
        <div className="wrap">
          <div className="classic-tools__intro">
            <span className="atlas-label">UTILITAIRES / EXÉCUTION</span>
            <h2>Les outils rapides restent disponibles.</h2>
            <p>Aperçu SERP, simulation de valeur, liens UTM et checklist des fondamentaux.</p>
          </div>
          <Tools />
        </div>
      </section>
      <section className="lab-principles">
        <div className="wrap">
          <span className="atlas-label">MÉTHODE / CE QUE LE LAB REFUSE</span>
          <div className="lab-principles__grid">
            <article><strong>01</strong><h2>Pas de faux crawl</h2><p>Un champ URL ne devient pas magiquement un audit. Chaque donnée affichée indique son origine et sa formule.</p></article>
            <article><strong>02</strong><h2>Pas de score oracle</h2><p>Un pourcentage sert à comparer un état renseigné, pas à prédire un classement Google ou une citation IA.</p></article>
            <article><strong>03</strong><h2>Pas de page locale vide</h2><p>Sans réalité de terrain, zone réellement servie ou preuve distincte, la page reste un gabarit faible.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
