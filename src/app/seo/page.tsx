import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO — Référencement naturel : technique, contenu, liens, local",
  description:
    "Guide complet du référencement naturel : SEO on-page, technique, stratégie de contenu, maillage interne, backlinks, SEO local. Tout ce qu'il faut savoir pour construire une visibilité durable sur Google.",
};

const TOC = [
  { id: "definition",  label: "Qu'est-ce que le SEO ?" },
  { id: "onpage",      label: "SEO on-page" },
  { id: "technique",   label: "SEO technique" },
  { id: "contenu",     label: "Stratégie de contenu" },
  { id: "maillage",    label: "Maillage interne" },
  { id: "offpage",     label: "SEO off-page & backlinks" },
  { id: "local",       label: "SEO local" },
  { id: "mesure",      label: "Mesure & pilotage" },
  { id: "methode",     label: "Méthode d'accompagnement" },
];

export default function SeoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="section" style={{ paddingBottom: "clamp(48px,6vw,80px)" }}>
          <div className="container">
            <span className="eyebrow kicker" style={{ marginBottom: 20, display: "inline-block" }}>
              Référencement naturel
            </span>
            <h1 className="t-h1" style={{ maxWidth: "22ch", marginBottom: 24 }}>
              Le SEO comme <span className="t-italic">système</span> d&rsquo;acquisition.
            </h1>
            <p className="t-lead" style={{ maxWidth: "58ch", marginBottom: 40 }}>
              Le référencement naturel ne se limite pas à quelques mots-clés dans une page.
              C&rsquo;est une discipline qui articule technique, sémantique, autorité, architecture
              et conversion pour construire une visibilité durable et mesurable sur Google.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/#contact" className="btn btn--primary">
                Demander un diagnostic SEO
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#onpage" className="btn btn--ghost">Lire le guide</a>
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

                <h2 id="definition">Qu&rsquo;est-ce que le SEO ?</h2>
                <p>
                  Le SEO (<em>Search Engine Optimization</em>) désigne l&rsquo;ensemble des pratiques visant à
                  améliorer la visibilité d&rsquo;un site dans les résultats organiques de Google. Contrairement
                  au SEA (liens sponsorisés), le trafic organique ne génère aucun coût par clic : c&rsquo;est le
                  résultat d&rsquo;un travail structuré sur la durée.
                </p>
                <p>
                  Un bon référencement repose sur trois piliers complémentaires&nbsp;:
                </p>
                <ul>
                  <li><strong>SEO on-page</strong> — optimisation du contenu et des balises de chaque page.</li>
                  <li><strong>SEO technique</strong> — performance, crawl, indexation, données structurées.</li>
                  <li><strong>SEO off-page</strong> — autorité et liens entrants (backlinks).</li>
                </ul>
                <p>
                  À ces piliers s&rsquo;ajoutent des dimensions spécifiques&nbsp;: le <strong>SEO local</strong> pour
                  cibler une zone géographique, la <strong>stratégie de contenu</strong> pour couvrir les intentions
                  de recherche, et le <strong>maillage interne</strong> pour diffuser l&rsquo;autorité entre les pages.
                </p>

                <h2 id="onpage">SEO on-page</h2>
                <p>
                  Le SEO on-page regroupe toutes les optimisations effectuées directement dans les pages du site.
                  L&rsquo;objectif est de signaler clairement à Google — et aux utilisateurs — le sujet, la pertinence
                  et la valeur de chaque page.
                </p>

                <h3>Balise title et méta description</h3>
                <p>
                  La balise <code>&lt;title&gt;</code> est l&rsquo;un des signaux on-page les plus importants.
                  Elle doit intégrer le mot-clé cible de manière naturelle, rester sous 60 caractères et
                  se différencier des autres pages du site. La méta description influence le taux de clic (CTR)
                  dans les résultats Google, mais n&rsquo;est pas un facteur de classement direct.
                </p>

                <h3>Balises Hn et structure de titre</h3>
                <p>
                  Un H1 unique par page, des H2 qui segmentent le contenu en blocs thématiques, des H3 pour
                  les sous-détails. La hiérarchie des titres aide Google à comprendre la structure sémantique
                  du document et facilite la lecture pour les utilisateurs.
                </p>

                <h3>Intention de recherche</h3>
                <p>
                  Chaque page doit correspondre à une intention précise&nbsp;: informationnelle (comprendre un sujet),
                  navigationnelle (trouver un site spécifique), transactionnelle (acheter, prendre contact),
                  ou commerciale (comparer des options). Une page qui ne répond pas à l&rsquo;intention dominante
                  d&rsquo;une requête ne se classera pas, même si elle est techniquement irréprochable.
                </p>

                <h3>Optimisation sémantique</h3>
                <p>
                  Au-delà du mot-clé principal, Google analyse les entités nommées, les cooccurrences lexicales
                  et la richesse sémantique d&rsquo;un contenu. Les outils comme YourTextGuru, Surfer ou 1.fr
                  permettent d&rsquo;identifier les termes attendus pour couvrir un sujet de manière complète.
                </p>

                <h3>Contenu dupliqué et canonicalisation</h3>
                <p>
                  Les pages similaires (variantes d&rsquo;URL, pagination, filtres) créent de la duplication.
                  La balise <code>canonical</code> indique à Google quelle version est la référence. Une mauvaise
                  gestion de la canonicalisation dilue l&rsquo;autorité et peut provoquer des sorties d&rsquo;index.
                </p>

                <h3>Images et attributs alt</h3>
                <p>
                  Les images doivent être compressées, au format moderne (WebP, AVIF), dimensionnées précisément
                  et accompagnées d&rsquo;un attribut <code>alt</code> descriptif. Un fichier image trop lourd
                  dégrade le LCP (Largest Contentful Paint), facteur de ranking direct via les Core Web Vitals.
                </p>

                <h2 id="technique">SEO technique</h2>
                <p>
                  Le SEO technique conditionne la capacité de Google à explorer, comprendre et indexer un site
                  correctement. Un site techniquement défaillant ne peut pas être bien référencé, quelle que
                  soit la qualité de son contenu.
                </p>

                <h3>Crawl et indexation</h3>
                <p>
                  Le Googlebot explore les sites en suivant des liens. L&rsquo;enjeu est de s&rsquo;assurer que
                  les pages importantes sont accessibles, que le budget de crawl n&rsquo;est pas gaspillé sur
                  des pages sans valeur (paramètres d&rsquo;URL, filtres, duplicatas) et que le fichier
                  <code>robots.txt</code> ne bloque pas de ressources critiques.
                </p>

                <h3>Core Web Vitals</h3>
                <p>Depuis 2021, Google intègre les Core Web Vitals comme signal de classement. Les trois métriques :</p>
                <ul>
                  <li><strong>LCP</strong> (Largest Contentful Paint) — affichage du plus grand élément visible. Objectif : sous 2,5 s.</li>
                  <li><strong>INP</strong> (Interaction to Next Paint) — réactivité aux interactions. Objectif : sous 200 ms.</li>
                  <li><strong>CLS</strong> (Cumulative Layout Shift) — stabilité visuelle. Objectif : sous 0,1.</li>
                </ul>

                <h3>Données structurées (Schema.org)</h3>
                <p>
                  Les données structurées en JSON-LD permettent à Google de mieux interpréter le contenu&nbsp;:
                  type d&rsquo;entité, FAQ, avis, prix, événements, organisation. Elles peuvent générer des
                  rich snippets dans les SERP et renforcer la visibilité dans les résultats enrichis.
                </p>

                <h3>Architecture d&rsquo;URL et structure du site</h3>
                <p>
                  Des URL courtes, descriptives et cohérentes facilitent la compréhension par Google.
                  Une structure en silos thématiques (pages piliers + pages de support) concentre
                  l&rsquo;autorité sur les pages stratégiques.
                </p>

                <h3>HTTPS, redirections et erreurs</h3>
                <p>
                  Toutes les pages doivent être servies en HTTPS. Les redirections 301 doivent être
                  propres, sans chaîne. Les erreurs 404 sur des pages qui recevaient des backlinks
                  doivent être redirigées vers une alternative pertinente.
                </p>

                <h3>Mobile-first et vitesse</h3>
                <p>
                  Google indexe en priorité la version mobile des sites. Un design responsive, des
                  polices lisibles sur petits écrans et une vitesse de chargement optimisée sur
                  réseau mobile sont indispensables.
                </p>

                <h2 id="contenu">Stratégie de contenu SEO</h2>
                <p>
                  Le contenu est le carburant du SEO. Mais publier du contenu ne suffit pas&nbsp;: chaque page
                  doit cibler une intention précise, appartenir à un cluster cohérent et être capable de
                  convertir le trafic généré.
                </p>

                <h3>Clusters sémantiques et pages piliers</h3>
                <p>
                  Un cluster sémantique regroupe une page pilier (large, exhaustive, thème parent) et des pages
                  de support (ciblées, sous-aspects). Le lien entre elles est assuré par le maillage interne.
                  Cette structure signale à Google la profondeur d&rsquo;expertise sur un sujet.
                </p>

                <h3>Recherche d&rsquo;intentions (intent mapping)</h3>
                <p>
                  Avant de produire du contenu, il faut cartographier les intentions associées à chaque requête&nbsp;:
                  informationnelle, commerciale, transactionnelle, locale, comparative. La SERP est la meilleure
                  source de vérité pour comprendre ce que Google attend sur une requête donnée.
                </p>

                <h3>EEAT (Experience, Expertise, Authoritativeness, Trustworthiness)</h3>
                <p>
                  Le cadre EEAT des Quality Rater Guidelines évalue la qualité des contenus. Un contenu EEAT-fort
                  montre une expérience terrain réelle, une expertise reconnaissable, une autorité mesurable
                  (liens, citations) et une fiabilité prouvée (sources, transparence, données vérifiables).
                </p>

                <h3>Longue traîne</h3>
                <p>
                  Les requêtes de longue traîne (3 mots et plus) représentent la majorité des recherches.
                  Moins concurrentielles, mieux qualifiées et plus proches de la conversion, elles constituent
                  souvent les premières victoires d&rsquo;une stratégie SEO.
                </p>

                <h3>Refresh et consolidation</h3>
                <p>
                  Les contenus existants se dégradent avec le temps. Mettre à jour les pages qui stagnent
                  ou perdent des positions — nouvelles données, structure améliorée, liens internes renforcés —
                  est souvent plus efficace que créer de nouvelles pages.
                </p>

                <h3>Briefs de contenu actionnables</h3>
                <p>
                  Un brief efficace spécifie&nbsp;: intention cible, mot-clé principal et secondaires, structure
                  H2/H3 recommandée, entités à couvrir, preuves à intégrer, CTA attendu et liens internes
                  à inclure.
                </p>

                <h2 id="maillage">Maillage interne</h2>
                <p>
                  Le maillage interne est l&rsquo;ensemble des liens qui relient les pages d&rsquo;un même site.
                  Il joue un rôle fondamental dans la diffusion de l&rsquo;autorité (PageRank interne),
                  la compréhension de l&rsquo;architecture par Google et la fluidité du parcours utilisateur.
                </p>

                <h3>Architecture en silos</h3>
                <p>
                  Un silo SEO regroupe des pages thématiquement proches sous une page mère (hub). Les liens
                  circulent principalement au sein du silo et de manière contrôlée entre silos. Cette
                  organisation concentre l&rsquo;autorité sur les pages stratégiques.
                </p>

                <h3>Ancres et textes de liens</h3>
                <p>
                  L&rsquo;ancre d&rsquo;un lien interne est un signal sémantique pour Google. Des ancres
                  descriptives et variées renforcent la compréhension du sujet de la page cible.
                  Les ancres génériques ("cliquez ici") ne transmettent aucune information sémantique.
                </p>

                <h3>Profondeur de clic</h3>
                <p>
                  Une page qui demande plus de 3 clics depuis l&rsquo;accueil est considérée comme secondaire
                  par Google. Les pages business importantes doivent être accessibles rapidement depuis
                  la page principale et le menu.
                </p>

                <h3>Pages orphelines</h3>
                <p>
                  Une page sans aucun lien entrant depuis le reste du site est orpheline&nbsp;: Google ne lui
                  accordera que peu d&rsquo;autorité. Un audit de maillage identifie ces pages et les intègre
                  dans le tissu interne du site.
                </p>

                <h3>Liens contextuels</h3>
                <p>
                  Un lien placé dans le corps d&rsquo;un texte, dans un paragraphe pertinent, a plus de poids
                  qu&rsquo;un lien en footer. Les liens contextuels transmettent à la fois du PageRank et
                  de la pertinence sémantique.
                </p>

                <h2 id="offpage">SEO off-page &amp; backlinks</h2>
                <p>
                  Le SEO off-page désigne les signaux extérieurs au site qui influencent son autorité aux yeux
                  de Google. Le principal signal off-page reste le backlink&nbsp;: un lien provenant d&rsquo;un
                  autre site vers le vôtre.
                </p>

                <h3>Qu&rsquo;est-ce qu&rsquo;un backlink de qualité ?</h3>
                <p>
                  Un bon backlink provient d&rsquo;un site ayant lui-même de l&rsquo;autorité, d&rsquo;une
                  thématique proche, d&rsquo;une page indexée et visitée, avec une ancre descriptive et
                  un lien en <code>dofollow</code>. Un lien depuis un site spammy peut nuire au positionnement.
                </p>

                <h3>Domain Rating et Trust Flow</h3>
                <p>
                  Ahrefs (Domain Rating) et Majestic (Trust Flow / Citation Flow) permettent d&rsquo;évaluer
                  la puissance d&rsquo;un domaine référent. Ces métriques sont utiles mais ne remplacent pas
                  une analyse qualitative du profil de liens.
                </p>

                <h3>Stratégies d&rsquo;acquisition de liens</h3>
                <ul>
                  <li><strong>Contenu remarquable</strong> — ressources, études, outils qui génèrent des liens naturellement.</li>
                  <li><strong>Relations presse digitales</strong> — publications sectorielles, contributions d&rsquo;experts, interviews.</li>
                  <li><strong>Partenariats</strong> — échanges thématiquement cohérents avec d&rsquo;autres acteurs du secteur.</li>
                  <li><strong>Citations locales</strong> — annuaires professionnels, chambres de commerce, associations locales.</li>
                  <li><strong>Guest blogging</strong> — articles sur des sites tiers avec lien vers une page cible.</li>
                  <li><strong>Récupération de liens brisés</strong> — identifier des pages liées disparues et proposer une alternative.</li>
                </ul>

                <h3>Profil de liens sain</h3>
                <p>
                  Un profil sain est diversifié en domaines référents, ancres et types de pages sources.
                  Un profil artificiel (ancres sur-optimisées, fermes de liens, acquisition massive) est
                  détecté par les algorithmes Google (Penguin) et peut entraîner une pénalité.
                </p>

                <h3>Désaveu de liens</h3>
                <p>
                  L&rsquo;outil de désaveu de Google Search Console permet de neutraliser des liens toxiques.
                  Il doit être utilisé avec précaution, uniquement en cas de profil véritablement dégradé.
                </p>

                <h2 id="local">SEO local</h2>
                <p>
                  Le SEO local vise à améliorer la visibilité pour des requêtes géolocalisées&nbsp;:
                  "consultant SEO Marseille", "avocat Paris 8e", "restaurant vieux-port". Il repose sur
                  des signaux spécifiques que le SEO classique ne couvre pas entièrement.
                </p>

                <h3>Google Business Profile</h3>
                <p>
                  La fiche Google Business Profile est le signal local le plus direct. Elle doit être
                  complète, vérifiée, régulièrement mise à jour avec des posts et des photos, et correctement
                  catégorisée. Les avis clients influencent directement la position dans le "pack local"
                  (les 3 résultats Maps en tête de SERP).
                </p>

                <h3>Cohérence NAP</h3>
                <p>
                  NAP signifie Name, Address, Phone. La cohérence de ces informations sur l&rsquo;ensemble
                  du web (site, fiche Google, annuaires, réseaux sociaux) est un facteur de confiance essentiel
                  pour Google Local. Toute incohérence affaiblit la visibilité locale.
                </p>

                <h3>Pages locales optimisées</h3>
                <p>
                  Une page dédiée à chaque ville cible est indispensable. Elle doit intégrer le nom de la ville
                  dans le title, le H1 et le contenu, référencer des signaux locaux (quartiers, zones
                  d&rsquo;activité) et se différencier d&rsquo;une simple copie nationale avec le nom de
                  ville remplacé.
                </p>

                <h3>Signaux de proximité</h3>
                <p>
                  Pour les requêtes "near me" ou sans localisation explicite, Google utilise la géolocalisation
                  de l&rsquo;utilisateur. La proximité géographique, la pertinence et la proéminence
                  (autorité, avis, backlinks locaux) sont les trois piliers de l&rsquo;algorithme local.
                </p>

                <h3>Schema LocalBusiness</h3>
                <p>
                  Le schema <code>LocalBusiness</code> (ou <code>ProfessionalService</code>) fournit à Google
                  des informations structurées sur l&rsquo;établissement&nbsp;: adresse, horaires, zone desservie,
                  services. Il renforce les signaux d&rsquo;entité locale.
                </p>

                <h3>Avis et réputation</h3>
                <p>
                  Solliciter activement des avis (sans incitation financière), y répondre systématiquement
                  et gérer les avis négatifs avec professionnalisme améliore à la fois le positionnement
                  local et le taux de clic.
                </p>

                <h2 id="mesure">Mesure &amp; pilotage SEO</h2>
                <p>
                  Un travail SEO sans mesure ne permet pas d&rsquo;identifier ce qui fonctionne, ce qui stagne
                  et ce qui mérite d&rsquo;être priorisé. Les indicateurs doivent être choisis en fonction
                  des objectifs business.
                </p>

                <h3>Google Search Console</h3>
                <p>
                  L&rsquo;outil de référence pour le suivi organique. Impressions, clics, CTR, positions
                  par requête et par page, couverture d&rsquo;index, Core Web Vitals, données structurées.
                  C&rsquo;est la source la plus fiable pour comprendre ce que Google voit du site.
                </p>

                <h3>Google Analytics 4</h3>
                <p>
                  GA4 mesure le comportement des utilisateurs en provenance du trafic organique&nbsp;: pages
                  de destination, taux d&rsquo;engagement, conversions, sessions par canal. La connexion
                  avec Search Console permet de croiser positions et comportement utilisateur.
                </p>

                <h3>Suivi de positions</h3>
                <p>
                  Semrush ou Ahrefs permettent de suivre les positions sur un ensemble de mots-clés cibles,
                  de comparer avec les concurrents et de détecter les variations (gains, pertes, entrées
                  dans le top 10).
                </p>

                <h3>Indicateurs business</h3>
                <p>
                  Les indicateurs qui comptent&nbsp;: nombre de leads générés depuis le canal organique,
                  coût d&rsquo;acquisition par lead SEO, taux de conversion des pages de destination
                  stratégiques et progression des pages locales.
                </p>

                <h2 id="methode">Méthode d&rsquo;accompagnement SEO</h2>
                <p>
                  L&rsquo;accompagnement repose sur une séquence structurée qui va du diagnostic initial
                  à la croissance organique mesurable.
                </p>

                <div className="seo-grid-2" style={{ marginTop: 24, marginBottom: 32 }}>
                  {[
                    { n: "01", t: "Diagnostic",    d: "Analyse complète du site : technique, sémantique, local, autorité, contenu, conversion." },
                    { n: "02", t: "Priorisation",  d: "Classement des actions par impact, effort et proximité business." },
                    { n: "03", t: "Architecture",  d: "Organisation en silos, pages piliers, clusters sémantiques." },
                    { n: "04", t: "Maillage",      d: "Plan de liens internes, ancres, profondeur de clic, pages orphelines." },
                    { n: "05", t: "Exécution",     d: "Optimisations techniques, briefs, contenus, données structurées, tracking." },
                    { n: "06", t: "Suivi",         d: "Tableau de bord, reporting mensuel, ajustements et nouvelles opportunités." },
                  ].map((s) => (
                    <div key={s.n} className="seo-card">
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--clay)", marginBottom: 8 }}>{s.n}</p>
                      <h3>{s.t}</h3>
                      <p>{s.d}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Chaque mission produit des livrables actionnables&nbsp;: audit priorisé, roadmap 30/60/90 jours,
                  plan de maillage, briefs de contenu, recommandations techniques et tableau de bord de suivi.
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
              Identifier les priorités SEO de votre site.
            </h2>
            <p className="t-lead" style={{ color: "rgba(255,255,255,0.78)", marginBottom: 32 }}>
              Un diagnostic pour comprendre la situation, classer les actions et
              définir les premières étapes concrètes.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/#contact" className="btn btn--onolive btn--lg">
                Demander un diagnostic SEO
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
              </a>
              <a href="/geo-referencement-ia" className="btn btn--linkonolive btn--lg">
                Découvrir le GEO →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
