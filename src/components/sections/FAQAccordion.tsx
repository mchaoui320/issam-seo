"use client";
import { useState, useRef, useEffect } from "react";

const FAQS = [
  { q: "Quelle est la différence entre SEO et GEO ?", a: "Le SEO vise à améliorer le positionnement dans les résultats de recherche Google classiques. Le GEO (Generative Engine Optimization) concerne la visibilité dans les réponses générées par les moteurs d'IA — ChatGPT, Perplexity, Gemini, Copilot. Les deux reposent sur des fondations communes : contenu clair, entités bien définies, autorité et structure." },
  { q: "Combien de temps faut-il pour voir des résultats SEO ?", a: "Les premiers signaux positifs (amélioration de l'indexation, gains de positions sur des requêtes secondaires) sont visibles sous 4 à 8 semaines. Les résultats significatifs sur les requêtes compétitives demandent généralement 3 à 6 mois. Le SEO est un investissement sur la durée, pas un levier d'activation immédiate." },
  { q: "Quels types d'entreprises accompagnez-vous ?", a: "Principalement des PME de services, des professions libérales, des cabinets spécialisés et des e-commerçants. Les missions couvrent aussi bien des sites établis qui veulent structurer leur visibilité que des refontes avec enjeu de migration SEO." },
  { q: "Comment se déroule une mission SEO ?", a: "La mission démarre par un diagnostic complet du site : technique, sémantique, local, GEO et conversion. Vient ensuite une priorisation des actions, puis l'exécution — optimisations techniques, briefs de contenu, maillage, données structurées. Chaque étape produit un livrable clair et documenté." },
  { q: "Quelle est la différence entre un consultant SEO et une agence ?", a: "Un consultant SEO travaille directement sur votre dossier, sans sous-traiter. La communication est directe, le niveau d'expertise appliqué à votre site est constant, et les recommandations sont adaptées à votre contexte spécifique plutôt qu'issues d'un modèle générique." },
  { q: "Proposez-vous des missions ponctuelles ou uniquement des accompagnements sur la durée ?", a: "Les deux sont possibles. Un audit SEO ponctuel avec roadmap peut suffire si vous avez une équipe interne capable d'exécuter. Un accompagnement mensuel est recommandé si vous souhaitez déléguer l'exécution, le suivi et les itérations stratégiques." },
  { q: "Comment est mesurée la performance d'une mission SEO ?", a: "Via Google Search Console (impressions, clics, CTR, positions), GA4 (sessions organiques, conversions, parcours), et un tableau de bord de suivi construit spécifiquement pour chaque mission. Les indicateurs sont définis en début de mission selon les objectifs business." },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" ref={ref}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-head reveal">
          <span className="eyebrow kicker">FAQ</span>
          <h2 className="t-h2">Questions fréquentes</h2>
        </div>
        <div className="faq reveal reveal-d1">
          {FAQS.map((f, i) => (
            <div key={i} className={`faq__item${open === i ? " open" : ""}`}>
              <button className="faq__q" onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
                <span className="faq__icon">+</span>
              </button>
              <div className="faq__a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
