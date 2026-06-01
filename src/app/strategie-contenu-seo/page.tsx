import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stratégie de Contenu SEO — Du Mapping d'Intentions à la Conversion",
  description: "Élaborez une stratégie de contenu SEO performante : intent mapping, clusters sémantiques, briefs de contenu, EEAT et optimisation on-page. Consultant SEO freelance à Marseille et Paris.",
};

const methodologySteps = [
  { step: "01", title: "Intent mapping", desc: "Cartographie exhaustive des intentions de recherche de votre audience cible. Chaque requête est classifiée par type d'intention (informationnelle, navigationnelle, transactionnelle, commerciale) pour aligner votre contenu avec les attentes réelles des utilisateurs et les critères de pertinence de Google." },
  { step: "02", title: "Clusters sémantiques", desc: "Regroupement des mots-clés en clusters thématiques cohérents. Cette organisation en cocon sémantique permet de couvrir un sujet en profondeur, de renforcer la pertinence topicale de votre site et de structurer votre maillage interne autour de pages piliers." },
  { step: "03", title: "Briefs de contenu", desc: "Rédaction de briefs détaillés pour chaque page : structure Hn, mots-clés primaires et secondaires, questions PAA à couvrir, longueur cible, sources à citer, liens internes à intégrer. Le brief garantit un contenu aligné sur l'intention de recherche et les standards EEAT." },
  { step: "04", title: "Production & rédaction SEO", desc: "Création de contenus originaux, documentés et engageants. Chaque texte est rédigé pour répondre précisément à l'intention de l'utilisateur, avec une structure claire, des données factuelles et un style adapté à votre audience — humain d'abord, optimisé ensuite." },
  { step: "05", title: "Optimisation & itération", desc: "Suivi des performances (positions, trafic, CTR, taux de rebond), identification des contenus à mettre à jour, consolidation des pages cannibalisées et ajustement continu de la stratégie éditoriale en fonction des résultats mesurés." },
];

const onPageElements = [
  { title: "Balises title optimisées", desc: "Chaque page reçoit un title unique, descriptif et intégrant le mot-clé principal dans les 60 premiers caractères — le premier signal de pertinence pour Google et le premier point de contact avec l'utilisateur dans les SERPs." },
  { title: "Meta descriptions convaincantes", desc: "Rédaction de meta descriptions qui maximisent le taux de clic (CTR) en combinant le mot-clé cible, une proposition de valeur claire et un appel à l'action incitant au clic." },
  { title: "Structure de headings (Hn)", desc: "Hiérarchie de titres logique et sémantique : un H1 unique par page, des H2 pour les sections principales, des H3 pour les sous-thèmes. Cette structure facilite la compréhension du contenu par Google et améliore l'accessibilité." },
  { title: "Maillage interne contextuel", desc: "Intégration de liens internes pertinents dans le corps du texte, avec des ancres descriptives qui renforcent la pertinence thématique et distribuent le PageRank vers vos pages stratégiques." },
  { title: "Optimisation pour les featured snippets", desc: "Structuration du contenu (listes, tableaux, définitions, étapes numérotées) pour maximiser vos chances d'apparaître en position zéro et capter un trafic qualifié supplémentaire." },
  { title: "Données structurées (Schema.org)", desc: "Implémentation de balisage structuré (FAQ, HowTo, Article, BreadcrumbList) pour enrichir vos résultats de recherche et améliorer votre visibilité dans les SERPs." },
];

const contentTypes = [
  { title: "Pages piliers", desc: "Contenus longs et exhaustifs (2000+ mots) qui couvrent un sujet en profondeur et servent de hub central pour un cluster thématique. Elles concentrent l'autorité et attirent naturellement les backlinks.", color: "var(--green)" },
  { title: "Articles de blog", desc: "Contenus ciblés répondant à des questions spécifiques de votre audience. Ils alimentent vos clusters sémantiques, captent du trafic longue traîne et démontrent votre expertise sur des sujets précis.", color: "var(--cyan)" },
  { title: "Landing pages SEO", desc: "Pages de conversion optimisées pour des requêtes transactionnelles ou commerciales. Elles combinent persuasion, preuve sociale et optimisation technique pour transformer le trafic organique en leads qualifiés.", color: "var(--green)" },
  { title: "Pages FAQ", desc: "Contenus structurés en questions-réponses qui ciblent les requêtes PAA (People Also Ask), améliorent l'expérience utilisateur et permettent l'affichage de rich snippets FAQ dans les résultats de recherche.", color: "var(--cyan)" },
  { title: "Guides et ressources", desc: "Contenus premium à forte valeur ajoutée (guides complets, études de cas, comparatifs) qui positionnent votre marque comme référence dans votre secteur et génèrent des backlinks naturels.", color: "var(--green)" },
  { title: "Glossaires et définitions", desc: "Pages optimisées pour les requêtes informationnelles de type « qu'est-ce que… » ou « définition de… ». Elles captent du trafic top-of-funnel et renforcent la couverture sémantique de votre site.", color: "var(--cyan)" },
];

const eeatSignals = [
  { letter: "E", label: "Experience", desc: "Démontrer une expérience directe du sujet traité : témoignages, études de cas, captures d'écran, résultats concrets qui prouvent que l'auteur a une connaissance pratique et vécue." },
  { letter: "E", label: "Expertise", desc: "Mettre en avant l'expertise de l'auteur : biographie, certifications, publications, interventions dans le secteur. Le contenu doit refléter une maîtrise approfondie du sujet." },
  { letter: "A", label: "Authoritativeness", desc: "Construire l'autorité via des mentions, des citations par d'autres sites de référence, des backlinks de qualité et une présence reconnue dans votre domaine d'expertise." },
  { letter: "T", label: "Trustworthiness", desc: "Instaurer la confiance : sources citées, données vérifiables, mentions légales claires, HTTPS, avis clients authentiques et transparence sur l'auteur et l'entreprise." },
];

export default function StrategieContenuSeoPage() {
  return (
    <main style={{ paddingTop: 100 }}>
      {/* Hero */}
      <section style={{ background: "var(--bg)", paddingBottom: 0 }}>
        <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 60, paddingBottom: 60 }}>
          <div className="section-eyebrow">Content Marketing & SEO</div>
          <h1 className="display-xl" style={{ maxWidth: 820, marginBottom: 24 }}>
            Stratégie de contenu SEO : du mapping d'intentions à la conversion
          </h1>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 680, lineHeight: 1.75 }}>
            Un bon contenu ne se limite pas à écrire des textes. C'est un système complet — de la recherche d'intentions à la mesure des résultats — conçu pour attirer un trafic qualifié, démontrer votre expertise et convertir vos visiteurs en clients. En tant que <Link href="/consultant-seo-marseille" style={{ color: "var(--green)", textDecoration: "underline" }}>consultant SEO à Marseille</Link> et <Link href="/consultant-seo-paris" style={{ color: "var(--green)", textDecoration: "underline" }}>Paris</Link>, je conçois des stratégies de contenu qui génèrent des résultats mesurables et durables.
          </p>
        </div>
      </section>

      {/* Qu'est-ce qu'une stratégie de contenu SEO */}
      <section style={{ background: "var(--surface)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Définition</div>
          <h2 className="display-md" style={{ maxWidth: 700, marginBottom: 24 }}>
            Qu'est-ce qu'une stratégie de contenu SEO ?
          </h2>
          <div style={{ maxWidth: 700 }}>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 20 }}>
              Une <strong style={{ color: "var(--ink)" }}>stratégie de contenu SEO</strong> est un plan éditorial structuré qui définit quels contenus créer, pour quelles requêtes, dans quel ordre et avec quels objectifs. Elle va bien au-delà de la simple rédaction web : c'est une approche systémique qui aligne la production de contenu avec les intentions de recherche de votre audience cible et vos objectifs business.
            </p>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 20 }}>
              Contrairement au content marketing traditionnel, la stratégie de contenu SEO place le <strong style={{ color: "var(--ink)" }}>search intent</strong> au centre de chaque décision. Chaque page est conçue pour répondre à une intention de recherche spécifique, s'intégrer dans un écosystème de contenus cohérent et contribuer à la croissance organique de votre site.
            </p>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 20 }}>
              Cette démarche s'appuie sur des données concrètes : volumes de recherche, difficulté de positionnement, analyse de la SERP, intentions transactionnelles vs informationnelles, et potentiel de conversion. Elle s'articule avec votre <Link href="/netlinking" style={{ color: "var(--green)", textDecoration: "underline" }}>stratégie de netlinking</Link> pour maximiser l'impact de chaque contenu publié.
            </p>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.75 }}>
              Le résultat ? Un calendrier éditorial priorisé, des briefs de contenu détaillés, une production alignée sur vos objectifs et un processus d'optimisation continue qui garantit des résultats dans la durée.
            </p>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section style={{ background: "var(--bg)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Méthodologie</div>
          <h2 className="display-md" style={{ maxWidth: 700, marginBottom: 24 }}>
            De l'intention de recherche à la page publiée
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 700, lineHeight: 1.75, marginBottom: 48 }}>
            Ma méthodologie en cinq étapes transforme la donnée brute de recherche en contenus performants. Chaque étape est documentée, mesurable et itérative — pour une stratégie qui s'améliore dans le temps.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {methodologySteps.map((s) => (
              <div key={s.step} className="card" style={{ padding: 32, display: "flex", gap: 24, alignItems: "flex-start" }} className-wrapper="method-card">
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 800, color: "var(--green)", opacity: 0.3, flexShrink: 0, lineHeight: 1, minWidth: 44 }}>
                  {s.step}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 650, marginBottom: 10, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                    {s.title}
                  </div>
                  <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimisation on-page */}
      <section style={{ background: "var(--bg-soft)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Optimisation on-page</div>
          <h2 className="display-md" style={{ maxWidth: 700, marginBottom: 24 }}>
            Optimiser chaque page pour les moteurs et les humains
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 700, lineHeight: 1.75, marginBottom: 48 }}>
            L'optimisation on-page est le pont entre un bon contenu et un contenu qui se positionne. Elle couvre l'ensemble des signaux techniques et éditoriaux qui permettent à Google de comprendre, d'indexer et de classer vos pages. Chaque élément est optimisé dans le cadre d'un <Link href="/audit-seo" style={{ color: "var(--green)", textDecoration: "underline" }}>audit SEO approfondi</Link>.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 14 }}>
            {onPageElements.map((el, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green)", marginBottom: 14 }} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 650, marginBottom: 8, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                  {el.title}
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65 }}>{el.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EEAT */}
      <section style={{ background: "var(--surface)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>EEAT & qualité</div>
          <h2 className="display-md" style={{ maxWidth: 700, marginBottom: 24 }}>
            EEAT : les signaux de qualité qui font la différence
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 700, lineHeight: 1.75, marginBottom: 48 }}>
            Depuis les mises à jour Helpful Content et les Quality Rater Guidelines de Google, les signaux EEAT (Experience, Expertise, Authoritativeness, Trustworthiness) sont devenus centraux dans l'évaluation de la qualité d'un contenu. Les intégrer dans votre stratégie éditoriale n'est plus une option — c'est une nécessité.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
            {eeatSignals.map((signal, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(0,232,122,0.1)", border: "1px solid rgba(0,232,122,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 16, fontWeight: 800, color: "var(--green)" }}>{signal.letter}</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 650, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                    {signal.label}
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65 }}>{signal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de contenus */}
      <section style={{ background: "var(--bg)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Types de contenus</div>
          <h2 className="display-md" style={{ maxWidth: 700, marginBottom: 24 }}>
            Les formats de contenu qui performent en SEO
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 700, lineHeight: 1.75, marginBottom: 48 }}>
            Tous les contenus ne se valent pas. Selon votre secteur, votre audience et vos objectifs, certains formats seront plus efficaces que d'autres. Voici les types de contenus que je recommande et produis le plus fréquemment dans le cadre de mes missions de <Link href="/consultant-seo-ou-agence" style={{ color: "var(--green)", textDecoration: "underline" }}>consulting SEO</Link>.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
            {contentTypes.map((ct, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: ct.color, marginBottom: 14 }} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 650, marginBottom: 8, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                  {ct.title}
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65 }}>{ct.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-soft)", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Passez à l'action</div>
          <h2 className="display-md" style={{ maxWidth: 600, margin: "0 auto 24px" }}>
            Construisons votre stratégie de contenu SEO sur-mesure
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.75 }}>
            Du mapping d'intentions à la production de contenus optimisés, je vous accompagne pour transformer votre site en machine à trafic organique qualifié. Chaque contenu est conçu pour attirer, engager et convertir.
          </p>
          <Link href="/contact" className="btn btn-green">
            Élaborer votre stratégie de contenu
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
