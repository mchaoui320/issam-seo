import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO — Référencement dans les moteurs IA : ChatGPT, Perplexity, Gemini, Claude",
  description:
    "Le GEO (Generative Engine Optimization) : comment apparaître dans les réponses de ChatGPT, Perplexity, Gemini, Claude, Bing Copilot et Google AI Overviews. Entités, structure, preuves, autorité.",
};

const TOC = [
  { id: "definition",  label: "Qu'est-ce que le GEO ?" },
  { id: "moteurs",     label: "Les moteurs génératifs" },
  { id: "differences", label: "GEO vs SEO" },
  { id: "entites",     label: "Entités et reconnaissance" },
  { id: "structure",   label: "Structurer pour être extrait" },
  { id: "preuves",     label: "Preuves et crédibilité" },
  { id: "schema",      label: "Données structurées GEO" },
  { id: "autorite",    label: "Autorité de marque externe" },
  { id: "mesure",      label: "Mesurer sa présence GEO" },
  { id: "methode",     label: "Méthode d'accompagnement" },
];

export default function GeoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="section" style={{ paddingBottom: "clamp(48px,6vw,80px)" }}>
          <div className="container">
            <span className="eyebrow kicker" style={{ marginBottom: 20, display: "inline-block" }}>
              Référencement génératif
            </span>
            <h1 className="t-h1" style={{ maxWidth: "22ch", marginBottom: 24 }}>
              GEO — Être cité par les <span className="t-italic">moteurs IA</span>.
            </h1>
            <p className="t-lead" style={{ maxWidth: "58ch", marginBottom: 24 }}>
              ChatGPT, Perplexity, Gemini, Claude, Bing Copilot, Google AI Overviews&nbsp;:
              ces moteurs génératifs répondent directement aux questions des utilisateurs, sans
              toujours renvoyer vers un site. Être cité dans leurs réponses est un enjeu de
              visibilité croissant — distinct du SEO, mais bâti sur les mêmes fondations.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/#contact" className="btn btn--primary">
                Demander un diagnostic GEO
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#definition" className="btn btn--ghost">Lire le guide</a>
            </div>
          </div>
        </section>

        {/* Layout TOC + contenu */}
        <section className="section section--sand" style={{ paddingTop: "clamp(48px,6vw,80px)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "clamp(32px,5vw,80px)", alignItems: "start" }}>

              {/* TOC */}
              <aside style={{ position: "sticky", top: 90 }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 12 }}>Sommaire</p>
                <nav className="seo-toc">
                  {TOC.map((t) => <a key={t.id} href={`#${t.id}`}>{t.label}</a>)}
                </nav>
              </aside>

              {/* Contenu */}
              <article className="prose">

                <h2 id="definition">Qu&rsquo;est-ce que le GEO ?</h2>
                <p>
                  Le GEO (<em>Generative Engine Optimization</em>) désigne l&rsquo;ensemble des pratiques
                  visant à optimiser la visibilité d&rsquo;un site, d&rsquo;une marque ou d&rsquo;un contenu
                  dans les réponses générées par les moteurs d&rsquo;intelligence artificielle.
                </p>
                <p>
                  Contrairement au SEO, qui vise un classement dans les résultats d&rsquo;un moteur de
                  recherche, le GEO vise à être <strong>sélectionné comme source</strong> par un LLM
                  (<em>Large Language Model</em>) pour répondre à une question. La page n&rsquo;est pas
                  forcément affichée&nbsp;: c&rsquo;est un extrait, une reformulation ou une citation
                  qui apparaît dans la réponse du moteur.
                </p>
                <p>
                  Le GEO ne remplace pas le SEO. Un site invisible sur Google ne sera pas davantage cité
                  par un moteur IA. En revanche, un site solide en SEO peut renforcer sa présence dans
                  les réponses génératives en travaillant spécifiquement la clarté, la structure et
                  la crédibilité de ses contenus.
                </p>

                <h2 id="moteurs">Les moteurs génératifs en 2026</h2>
                <p>
                  Chaque moteur génératif a ses propres sources, sa propre logique de sélection et
                  ses propres critères de citation. Les comprendre est indispensable pour adapter
                  une stratégie GEO.
                </p>

                <h3>ChatGPT Search (OpenAI)</h3>
                <p>
                  ChatGPT intègre une fonctionnalité de recherche web (ChatGPT Search) qui permet au
                  modèle de consulter des sources récentes. Les pages citées sont celles qui répondent
                  le plus directement à la requête, avec une structure claire et une information
                  vérifiable. OpenAI crawle le web via GPTBot — désactiver ce crawler dans
                  le <code>robots.txt</code> exclut le site des sources potentielles.
                </p>

                <h3>Perplexity</h3>
                <p>
                  Perplexity est un moteur de réponse qui cite ses sources de manière explicite.
                  Il favorise les contenus récents, bien structurés, avec des données factuelles précises.
                  Les sites bien référencés sur Google ont tendance à être davantage cités par Perplexity,
                  qui utilise en partie les mêmes signaux d&rsquo;autorité que Google.
                </p>

                <h3>Gemini (Google)</h3>
                <p>
                  Gemini est directement intégré à l&rsquo;écosystème Google. Les Google AI Overviews
                  (anciennement SGE) affichent des réponses générées en tête de SERP pour certaines
                  requêtes. Les sources sélectionnées sont principalement des pages déjà bien positionnées
                  sur Google, avec des données structurées et un contenu extractible.
                </p>

                <h3>Claude (Anthropic)</h3>
                <p>
                  Claude est un assistant IA d&rsquo;Anthropic. Dans ses versions avec accès à la
                  recherche web, Claude sélectionne des sources en privilégiant la clarté, la précision
                  et la fiabilité de l&rsquo;information. Anthropic utilise le crawler ClaudeBot pour
                  indexer le web. Un contenu bien structuré, factuel et signé par un auteur identifiable
                  a plus de chances d&rsquo;être sélectionné.
                </p>

                <h3>Bing Copilot (Microsoft)</h3>
                <p>
                  Bing Copilot est intégré au moteur de recherche Bing et à l&rsquo;écosystème Microsoft.
                  Il s&rsquo;appuie sur l&rsquo;index Bing, ce qui signifie qu&rsquo;une présence sur
                  Bing (via Bing Webmaster Tools) est un prérequis. Les pages bien indexées sur Bing,
                  avec des données structurées et un contenu récent, sont privilégiées.
                </p>

                <h3>Google AI Overviews</h3>
                <p>
                  Les AI Overviews apparaissent en tête des SERP Google pour les requêtes informationelles
                  et commerciales complexes. Google sélectionne ses sources parmi les pages déjà classées
                  dans le top 10 — être bien positionné en SEO classique est donc un prérequis pour
                  apparaître dans les AI Overviews.
                </p>

                <h2 id="differences">GEO vs SEO : les différences clés</h2>

                <div className="seo-grid-2" style={{ marginTop: 16, marginBottom: 32 }}>
                  {[
                    { titre: "Objectif", seo: "Classement dans les résultats de recherche (position 1 à 10)", geo: "Citation dans une réponse générée par un LLM" },
                    { titre: "Mesure", seo: "Positions, clics, CTR (Google Search Console)", geo: "Mentions dans les réponses, taux de citation (difficile à mesurer automatiquement)" },
                    { titre: "Format valorisé", seo: "Pages longues, autorité de domaine, mots-clés", geo: "Réponses courtes, extractibles, factuelles" },
                    { titre: "Signal principal", seo: "Backlinks, contenu, technique", geo: "Clarté, structure, crédibilité, entités nommées" },
                    { titre: "Indexation", seo: "Googlebot", geo: "GPTBot (OpenAI), ClaudeBot (Anthropic), Bingbot, Googlebot" },
                    { titre: "Relation", seo: "Indépendant du GEO (mais prérequis)", geo: "S'appuie sur les fondations SEO" },
                  ].map((row) => (
                    <div key={row.titre} className="seo-card">
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--clay)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>{row.titre}</p>
                      <p style={{ marginBottom: 8 }}><strong>SEO&nbsp;:</strong> {row.seo}</p>
                      <p style={{ marginBottom: 0 }}><strong>GEO&nbsp;:</strong> {row.geo}</p>
                    </div>
                  ))}
                </div>

                <h2 id="entites">Entités et reconnaissance</h2>
                <p>
                  Les LLM fonctionnent par entités&nbsp;: personnes, organisations, lieux, services, concepts.
                  Un site qui identifie clairement ses entités et les connecte à des entités reconnues a
                  plus de chances d&rsquo;être compris et cité.
                </p>

                <h3>Définir ses entités</h3>
                <p>
                  Une entité bien définie possède&nbsp;: un nom stable et cohérent sur tous les supports,
                  une description précise de son activité, une zone géographique identifiable, des services
                  clairement nommés, et des relations documentées avec d&rsquo;autres entités (secteur,
                  clients, partenaires, certifications).
                </p>

                <h3>Cohérence entre supports</h3>
                <p>
                  Le nom, l&rsquo;activité et la description d&rsquo;une entité doivent être cohérents entre
                  le site, le profil LinkedIn, les annuaires professionnels, les articles de presse et
                  les données structurées. Les incohérences fragilisent la reconnaissance de l&rsquo;entité
                  par les modèles.
                </p>

                <h3>Connaissance du modèle</h3>
                <p>
                  Les LLM ont été entraînés sur des données jusqu&rsquo;à une certaine date (cutoff date).
                  Une entité peu présente sur le web avant cette date sera peu reconnue. Les mentions dans
                  des publications à fort trafic, dans Wikipedia, dans des annuaires sectoriels ou dans
                  des articles de presse augmentent la reconnaissance.
                </p>

                <h2 id="structure">Structurer le contenu pour être extrait</h2>
                <p>
                  Les LLM extraient des passages précis pour composer leurs réponses. Un contenu structuré
                  en réponses courtes et autonomes est plus facilement utilisable qu&rsquo;un texte dense
                  et non structuré.
                </p>

                <h3>Réponses directes en tête de section</h3>
                <p>
                  La meilleure pratique GEO est de placer la réponse directe à une question au début
                  d&rsquo;un paragraphe, avant les détails et les nuances. Ce format "answer-first"
                  est directement extractible par un LLM.
                </p>

                <h3>Questions-réponses et FAQ</h3>
                <p>
                  Les sections FAQ sont particulièrement bien traitées par les moteurs génératifs.
                  Chaque question doit recevoir une réponse autonome et complète en 2 à 4 phrases.
                  Le format doit être visible à l&rsquo;utilisateur (pas de contenu caché) pour
                  être éligible au schema <code>FAQPage</code>.
                </p>

                <h3>Listes et étapes numérotées</h3>
                <p>
                  Les listes à puces et les étapes numérotées sont facilement extractibles et reformatables
                  par les LLM. Une liste structurée répond en un coup d&rsquo;œil à la question "comment
                  faire X" ou "quels sont les éléments de Y".
                </p>

                <h3>Définitions claires</h3>
                <p>
                  Les pages qui commencent par une définition précise d&rsquo;un concept sont fréquemment
                  citées lorsque le LLM doit expliquer ce concept à l&rsquo;utilisateur. La définition
                  doit être courte, factuelle et utiliser les termes canoniques du domaine.
                </p>

                <h3>Tableaux comparatifs</h3>
                <p>
                  Les tableaux sont des formats très "LLM-friendly" pour des comparaisons. Ils permettent
                  de synthétiser de l&rsquo;information dense en un format parseable rapidement.
                </p>

                <h2 id="preuves">Preuves et crédibilité</h2>
                <p>
                  Un contenu cité par un moteur IA doit être crédible. Les LLM tendent à privilégier
                  des sources qui incluent des preuves vérifiables, des données chiffrées et des
                  signaux d&rsquo;expertise reconnaissables.
                </p>

                <h3>Données chiffrées et sources</h3>
                <p>
                  Inclure des statistiques sourcées, des études de cas chiffrées (avec disclaimer sur
                  les données anonymisées), des comparaisons avant/après mesurables. Les données sans
                  source sont moins crédibles pour un LLM que des données attribuées.
                </p>

                <h3>Auteur identifiable</h3>
                <p>
                  Un contenu signé par un auteur dont l&rsquo;expertise est vérifiable (profil LinkedIn,
                  biographie, publications sectorielles) a plus de chances d&rsquo;être cité. Les LLM
                  intègrent les signaux EEAT (Expertise, Authoritativeness, Trustworthiness) dans
                  leur sélection de sources.
                </p>

                <h3>Mise à jour régulière</h3>
                <p>
                  Les contenus récents sont privilégiés pour les questions dont la réponse évolue dans
                  le temps. Une date de publication et une date de mise à jour visibles rassurent les
                  LLM sur la fraîcheur de l&rsquo;information.
                </p>

                <h3>Exemples concrets et livrables documentés</h3>
                <p>
                  Les cas concrets, les exemples de processus, les livrables décrits en détail sont
                  des preuves d&rsquo;expertise réelle qui augmentent la crédibilité d&rsquo;un contenu
                  aux yeux des modèles génératifs.
                </p>

                <h2 id="schema">Données structurées pour le GEO</h2>
                <p>
                  Les données structurées en JSON-LD aident les moteurs génératifs à identifier les
                  entités et les types de contenu d&rsquo;une page. Elles doivent refléter fidèlement
                  le contenu visible.
                </p>

                <h3>Schemas prioritaires pour le GEO</h3>
                <ul>
                  <li><strong>Organization / Person</strong> — pour définir l&rsquo;entité centrale du site.</li>
                  <li><strong>ProfessionalService / LocalBusiness</strong> — pour les services et la localisation.</li>
                  <li><strong>FAQPage</strong> — pour les sections questions-réponses visibles.</li>
                  <li><strong>Article / BlogPosting</strong> — pour les contenus informationnels avec auteur identifiable.</li>
                  <li><strong>HowTo</strong> — pour les guides étape par étape.</li>
                  <li><strong>Service</strong> — pour décrire précisément chaque service proposé.</li>
                  <li><strong>BreadcrumbList</strong> — pour clarifier la structure du site.</li>
                </ul>

                <h3>Erreurs à éviter</h3>
                <p>
                  Ne jamais ajouter de données structurées sur du contenu non visible (prix fictifs,
                  avis inventés, notes fabriquées). Les moteurs IA, comme Google, pénalisent les
                  données structurées trompeuses.
                </p>

                <h3>Balisage des entités dans le texte</h3>
                <p>
                  Mentionner explicitement les entités dans le corps du texte (nom complet de l&rsquo;organisation,
                  localisation, spécialité) renforce leur reconnaissance, même sans données structurées.
                  La répétition contrôlée des entités dans le contenu aide les LLM à les associer
                  correctement.
                </p>

                <h2 id="autorite">Autorité de marque externe</h2>
                <p>
                  Les LLM s&rsquo;appuient en partie sur ce qui est dit d&rsquo;une entité en dehors de
                  son propre site. Construire une présence externe cohérente est un pilier du GEO.
                </p>

                <h3>Mentions dans des publications sectorielles</h3>
                <p>
                  Être cité dans des articles, interviews, podcasts ou newsletters de référence dans
                  son secteur augmente la probabilité d&rsquo;être reconnu comme une entité experte.
                  Ces mentions alimentent le "knowledge graph" des LLM.
                </p>

                <h3>Profil LinkedIn et présence sociale</h3>
                <p>
                  Un profil LinkedIn complet et actif, avec des publications régulières sur des sujets
                  d&rsquo;expertise, contribue à construire la reconnaissance de l&rsquo;entité.
                  LinkedIn est indexé par tous les moteurs IA majeurs.
                </p>

                <h3>Contributions et guest posts</h3>
                <p>
                  Publier des articles sur des sites tiers reconnus (médias, blogs sectoriels, plateformes
                  d&rsquo;experts) multiplie les sources qui mentionnent et décrivent l&rsquo;entité.
                  Ces mentions externes renforcent la crédibilité et la reconnaissance.
                </p>

                <h3>Citations sans lien (co-citations)</h3>
                <p>
                  Google et les LLM sont capables de détecter des mentions d&rsquo;une marque ou d&rsquo;un
                  site même sans lien HTML. Ces co-citations sont un signal d&rsquo;autorité complémentaire
                  pour le GEO.
                </p>

                <h2 id="mesure">Mesurer sa présence GEO</h2>
                <p>
                  La mesure de la visibilité GEO est moins standardisée que le suivi SEO. Il n&rsquo;existe
                  pas encore d&rsquo;équivalent à la Google Search Console pour les moteurs IA — mais
                  plusieurs approches permettent de suivre sa présence.
                </p>

                <h3>Tests manuels</h3>
                <p>
                  La méthode la plus directe&nbsp;: interroger régulièrement ChatGPT, Perplexity, Gemini,
                  Claude et Bing Copilot avec des questions liées à son activité, son secteur, sa
                  zone géographique. Vérifier si le site ou la marque apparaît dans les réponses
                  ou dans les sources citées.
                </p>

                <h3>Perplexity : sources visibles</h3>
                <p>
                  Perplexity est le moteur le plus transparent sur ses sources. Tester des requêtes
                  pertinentes et noter quels sites sont cités permet d&rsquo;identifier les acteurs
                  bien positionnés en GEO dans son secteur.
                </p>

                <h3>Google Search Console pour les AI Overviews</h3>
                <p>
                  Google Search Console intègre progressivement des données sur les apparitions en
                  AI Overviews. Surveiller les rapports de performance pour identifier les requêtes
                  qui génèrent des impressions via ce format.
                </p>

                <h3>Outils émergents</h3>
                <p>
                  Des outils spécialisés GEO commencent à apparaître (Brandwatch AI, Mention, outils
                  de tracking IA) mais restent immatures en 2026. La combinaison tests manuels +
                  Search Console reste la méthode la plus fiable.
                </p>

                <h2 id="methode">Méthode d&rsquo;accompagnement GEO</h2>
                <p>
                  Une stratégie GEO efficace s&rsquo;articule en six phases, depuis l&rsquo;audit des
                  contenus existants jusqu&rsquo;au suivi de la présence dans les moteurs génératifs.
                </p>

                <div className="seo-grid-2" style={{ marginTop: 24, marginBottom: 32 }}>
                  {[
                    { n: "01", t: "Audit GEO",          d: "État des lieux de la présence actuelle dans ChatGPT, Perplexity, Gemini, Claude, Bing Copilot." },
                    { n: "02", t: "Entités",             d: "Cartographie des entités du site, cohérence entre supports, signaux de reconnaissance." },
                    { n: "03", t: "Structure",           d: "Réécriture des contenus clés en format extractible : réponses directes, FAQ, listes, définitions." },
                    { n: "04", t: "Données structurées", d: "Implémentation des schemas JSON-LD prioritaires (FAQPage, Organization, Service, Person)." },
                    { n: "05", t: "Autorité externe",    d: "Plan de mentions, contributions sectorielles, publications, co-citations." },
                    { n: "06", t: "Suivi",               d: "Tests mensuels sur les moteurs IA, monitoring des AI Overviews, ajustements." },
                  ].map((s) => (
                    <div key={s.n} className="seo-card">
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--clay)", marginBottom: 8 }}>{s.n}</p>
                      <h3>{s.t}</h3>
                      <p>{s.d}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Chaque mission GEO produit des livrables concrets&nbsp;: audit de présence dans les
                  moteurs IA, cartographie des entités, plan de restructuration des contenus, recommandations
                  de données structurées, plan de mentions externes et tableau de bord de suivi.
                </p>

              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section--olive">
          <div className="container center" style={{ maxWidth: 720 }}>
            <span className="eyebrow kicker" style={{ color: "var(--ochre)", justifyContent: "center", display: "inline-flex" }}>Prochaine étape</span>
            <h2 className="t-h1" style={{ color: "var(--ink-inverse)", margin: "18px 0 18px" }}>
              Analyser la présence du site dans les moteurs IA.
            </h2>
            <p className="t-lead" style={{ color: "rgba(255,255,255,0.78)", marginBottom: 32 }}>
              Un audit GEO pour comprendre comment le site est perçu par ChatGPT, Perplexity,
              Gemini et Bing Copilot — et identifier les priorités d&rsquo;optimisation.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/#contact" className="btn btn--onolive btn--lg">
                Demander un audit GEO
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
              </a>
              <a href="/seo" className="btn btn--linkonolive btn--lg">
                Voir la page SEO →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
