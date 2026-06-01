import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Netlinking & Maillage Interne — Stratégie de Liens SEO à Marseille & Paris",
  description: "Construisez un profil de liens durable grâce à une stratégie netlinking white-hat et un maillage interne optimisé. Backlinks de qualité, autorité de domaine et PageRank maîtrisé par un consultant SEO freelance.",
};

const offPageTechniques = [
  { title: "Digital PR & relations presse", desc: "Obtention de backlinks éditoriaux depuis des sites d'autorité via des angles journalistiques et des données exclusives." },
  { title: "Guest posting stratégique", desc: "Publication d'articles invités sur des blogs thématiques pertinents, avec des ancres naturelles et un contenu à forte valeur ajoutée." },
  { title: "Broken link building", desc: "Identification de liens cassés sur des sites d'autorité pour proposer votre contenu comme alternative — approche gagnant-gagnant." },
  { title: "Linkable assets", desc: "Création de contenus à fort potentiel de partage : études, infographies, outils gratuits, guides de référence qui attirent les liens naturellement." },
  { title: "Analyse concurrentielle des backlinks", desc: "Étude des profils de liens de vos concurrents pour identifier des opportunités de liens inexploitées dans votre secteur." },
  { title: "Récupération de liens perdus", desc: "Monitoring des backlinks existants et reconquête des liens perdus suite à des erreurs 404, des refontes ou des changements éditoriaux." },
];

const maillageStrategies = [
  { title: "Architecture en silos thématiques", desc: "Organisation hiérarchique du contenu en clusters sémantiques pour concentrer l'autorité sur vos pages piliers et faciliter le crawl." },
  { title: "Topic clusters & pages piliers", desc: "Création d'un réseau de pages satellites liées à une page pilier centrale, renforçant la pertinence thématique globale du site." },
  { title: "Distribution du PageRank", desc: "Répartition stratégique du link juice interne pour orienter la puissance vers vos pages de conversion et vos contenus prioritaires." },
  { title: "Optimisation des ancres internes", desc: "Choix d'ancres descriptives et variées pour guider les moteurs de recherche et les utilisateurs vers les pages cibles." },
  { title: "Cocon sémantique", desc: "Mise en place d'une structure de liens internes basée sur la proximité sémantique, inspirée du modèle du cocon popularisé par Laurent Bourrelly." },
];

const erreursFrequentes = [
  { title: "Acheter des liens en masse", desc: "L'achat de backlinks sur des réseaux de sites (PBN) ou des annuaires de faible qualité expose votre site à des pénalités algorithmiques ou manuelles de Google." },
  { title: "Ignorer la pertinence thématique", desc: "Un lien depuis un site sans rapport avec votre activité apporte peu de valeur et peut être perçu comme artificiel par Google." },
  { title: "Sur-optimiser les ancres", desc: "Utiliser systématiquement des ancres exactes sur vos mots-clés principaux est un signal de manipulation facilement détectable par les algorithmes." },
  { title: "Négliger le maillage interne", desc: "Se concentrer uniquement sur les backlinks en oubliant d'optimiser la structure de liens internes limite la distribution de l'autorité acquise." },
  { title: "Ne pas auditer son profil de liens", desc: "Accumuler des liens toxiques sans monitoring régulier peut dégrader votre autorité de domaine et impacter vos positions." },
  { title: "Liens depuis des pages orphelines", desc: "Créer du contenu sans le relier au reste de votre site empêche Google de le découvrir et de lui transmettre de l'autorité." },
];

export default function NetlinkingPage() {
  return (
    <main style={{ paddingTop: 100 }}>
      {/* Hero */}
      <section style={{ background: "var(--bg)", paddingBottom: 0 }}>
        <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 60, paddingBottom: 60 }}>
          <div className="section-eyebrow">Off-page & On-page SEO</div>
          <h1 className="display-xl" style={{ maxWidth: 820, marginBottom: 24 }}>
            Netlinking & maillage interne : construire un profil de liens durable
          </h1>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 680, lineHeight: 1.75 }}>
            Les liens restent l'un des trois piliers fondamentaux du référencement naturel. Qu'ils soient entrants (backlinks) ou internes (maillage), leur qualité, leur pertinence et leur structure déterminent directement la capacité de votre site à se positionner durablement dans les résultats de Google. En tant que <Link href="/consultant-seo-marseille" style={{ color: "var(--green)", textDecoration: "underline" }}>consultant SEO à Marseille</Link> et <Link href="/consultant-seo-paris" style={{ color: "var(--green)", textDecoration: "underline" }}>Paris</Link>, j'élabore des stratégies de liens white-hat qui renforcent votre autorité de domaine sans compromettre votre site.
          </p>
        </div>
      </section>

      {/* Netlinking vs Maillage */}
      <section style={{ background: "var(--surface)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Comprendre la différence</div>
          <h2 className="display-md" style={{ maxWidth: 700, marginBottom: 24 }}>
            Netlinking et maillage interne : deux leviers complémentaires
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 700, lineHeight: 1.75, marginBottom: 40 }}>
            Le <strong style={{ color: "var(--ink)" }}>netlinking</strong> (ou link building) désigne l'ensemble des actions visant à obtenir des liens entrants depuis d'autres sites web vers le vôtre. C'est un levier de <strong style={{ color: "var(--ink)" }}>SEO off-page</strong> qui influence directement l'autorité de domaine et la confiance que Google accorde à votre site. Plus vos backlinks proviennent de sources fiables et pertinentes, plus votre site gagne en crédibilité aux yeux des moteurs de recherche.
          </p>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 700, lineHeight: 1.75, marginBottom: 40 }}>
            Le <strong style={{ color: "var(--ink)" }}>maillage interne</strong>, en revanche, concerne la structure de liens entre les pages de votre propre site. C'est un levier de <strong style={{ color: "var(--ink)" }}>SEO on-page</strong> que vous contrôlez entièrement. Un maillage interne bien pensé permet de distribuer le PageRank efficacement, de guider les robots d'indexation, et de renforcer la pertinence thématique de vos pages stratégiques — un concept central dans toute <Link href="/strategie-contenu-seo" style={{ color: "var(--green)", textDecoration: "underline" }}>stratégie de contenu SEO</Link>.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="nl-diff-grid">
            <div className="card" style={{ padding: 32, borderColor: "rgba(0,232,122,0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(0,232,122,0.1)", border: "1px solid rgba(0,232,122,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--green)", letterSpacing: "0.06em" }}>OFF</span>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 650, letterSpacing: "-0.025em", color: "var(--ink)" }}>Netlinking</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--green)", letterSpacing: "0.1em", textTransform: "uppercase" }}>SEO off-page</div>
                </div>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {["Liens entrants depuis des sites tiers", "Renforce l'autorité de domaine (DA/DR)", "Signal de confiance pour Google", "Influence le positionnement global", "Nécessite une stratégie proactive et continue"].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", marginTop: 7, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ padding: 32, borderColor: "rgba(0,212,255,0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--cyan)", letterSpacing: "0.06em" }}>ON</span>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 650, letterSpacing: "-0.025em", color: "var(--ink)" }}>Maillage interne</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--cyan)", letterSpacing: "0.1em", textTransform: "uppercase" }}>SEO on-page</div>
                </div>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {["Liens entre vos propres pages", "Distribue le PageRank en interne", "Guide le crawl des robots Google", "Renforce les clusters thématiques", "Levier 100 % sous votre contrôle"].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cyan)", marginTop: 7, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stratégie off-page */}
      <section style={{ background: "var(--bg)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Stratégie off-page</div>
          <h2 className="display-md" style={{ maxWidth: 700, marginBottom: 24 }}>
            Construire un profil de backlinks solide et naturel
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 700, lineHeight: 1.75, marginBottom: 48 }}>
            L'acquisition de liens entrants de qualité est un travail de fond qui exige méthode, créativité et patience. Contrairement aux approches black-hat qui exposent votre site à des pénalités, ma stratégie de link building repose exclusivement sur des techniques white-hat validées par les guidelines de Google. Chaque lien obtenu apporte une réelle valeur éditoriale et renforce durablement votre positionnement dans les SERPs.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 14 }}>
            {offPageTechniques.map((t, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green)", marginBottom: 14 }} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 650, marginBottom: 8, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                  {t.title}
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage interne */}
      <section style={{ background: "var(--bg-soft)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Maillage interne</div>
          <h2 className="display-md" style={{ maxWidth: 700, marginBottom: 24 }}>
            Structurer vos liens internes pour maximiser votre visibilité
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 700, lineHeight: 1.75, marginBottom: 24 }}>
            Le maillage interne est souvent le parent pauvre du SEO, alors qu'il constitue l'un des leviers les plus puissants et les plus rapides à actionner. Une architecture de liens internes bien pensée permet de concentrer l'autorité sur vos pages stratégiques, d'améliorer le crawl budget et de renforcer la compréhension thématique de votre site par Google.
          </p>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 700, lineHeight: 1.75, marginBottom: 48 }}>
            J'applique des méthodologies éprouvées — silos thématiques, cocons sémantiques, topic clusters — adaptées à votre secteur et à vos objectifs business. Cette approche s'intègre naturellement dans une <Link href="/audit-seo" style={{ color: "var(--green)", textDecoration: "underline" }}>analyse SEO complète</Link> de votre site.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
            {maillageStrategies.map((s, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--cyan)", marginBottom: 14 }} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 650, marginBottom: 8, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                  {s.title}
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Erreurs fréquentes */}
      <section style={{ background: "var(--surface)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Erreurs à éviter</div>
          <h2 className="display-md" style={{ maxWidth: 700, marginBottom: 24 }}>
            Les erreurs de netlinking qui peuvent coûter cher
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 700, lineHeight: 1.75, marginBottom: 48 }}>
            En matière de link building, les raccourcis sont rarement payants. Voici les erreurs les plus fréquentes que j'observe lors de mes <Link href="/audit-seo" style={{ color: "var(--green)", textDecoration: "underline" }}>audits SEO</Link> — et qui peuvent compromettre des mois de travail sur votre référencement naturel.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 14 }}>
            {erreursFrequentes.map((e, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,80,80,0.1)", border: "1px solid rgba(255,80,80,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "#ff5050" }}>✕</span>
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 650, marginBottom: 8, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                  {e.title}
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mon approche */}
      <section style={{ background: "var(--bg)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Mon approche</div>
          <h2 className="display-md" style={{ maxWidth: 700, marginBottom: 24 }}>
            Qualité, pertinence et durabilité : ma philosophie du link building
          </h2>
          <div style={{ maxWidth: 700 }}>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 20 }}>
              En tant que <Link href="/consultant-seo-ou-agence" style={{ color: "var(--green)", textDecoration: "underline" }}>consultant SEO indépendant</Link>, j'adopte une approche du netlinking fondée sur trois principes inébranlables : la qualité des sources, la pertinence thématique et la durabilité des résultats. Chaque action est pensée pour construire un profil de liens qui résiste aux mises à jour algorithmiques et qui apporte une réelle valeur à long terme.
            </p>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 20 }}>
              <strong style={{ color: "var(--ink)" }}>Audit du profil de liens existant</strong> — Avant toute action, j'analyse votre profil de backlinks actuel : diversité des domaines référents, qualité des ancres, détection de liens toxiques nécessitant un désaveu (Google Disavow Tool), et identification des opportunités de croissance.
            </p>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 20 }}>
              <strong style={{ color: "var(--ink)" }}>Stratégie sur-mesure</strong> — Je conçois une feuille de route adaptée à votre secteur, votre budget et vos objectifs. Pas de liens génériques achetés en masse : chaque backlink est ciblé, contextualisé et acquis via des méthodes éthiques.
            </p>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 20 }}>
              <strong style={{ color: "var(--ink)" }}>Monitoring continu</strong> — Le suivi régulier des liens acquis, perdus et de l'évolution de votre autorité de domaine garantit un pilotage éclairé de la stratégie. Les outils comme Ahrefs, Majestic et Google Search Console sont au cœur de ce dispositif.
            </p>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 0 }}>
              <strong style={{ color: "var(--ink)" }}>Synergie avec le contenu</strong> — Les meilleurs liens naissent de contenus exceptionnels. C'est pourquoi ma stratégie de netlinking s'articule toujours avec une <Link href="/strategie-contenu-seo" style={{ color: "var(--green)", textDecoration: "underline" }}>stratégie de contenu SEO</Link> cohérente, pour créer des assets qui attirent naturellement les liens.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-soft)", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Prêt à renforcer votre autorité ?</div>
          <h2 className="display-md" style={{ maxWidth: 600, margin: "0 auto 24px" }}>
            Construisons ensemble un profil de liens qui fait la différence
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.75 }}>
            Que vous partiez de zéro ou que vous souhaitiez consolider un profil de backlinks existant, je vous accompagne avec une stratégie de netlinking sur-mesure, transparente et orientée résultats.
          </p>
          <Link href="/contact" className="btn btn-green">
            Discuter de votre stratégie de liens
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
      <style>{`
        @media (max-width: 680px) { .nl-diff-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
