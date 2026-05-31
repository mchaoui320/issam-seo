"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Quelle différence entre SEO et GEO ?",
    a: "Le SEO vise à positionner vos pages dans les résultats classiques de Google. Le GEO — Generative Engine Optimization — structure votre contenu pour être compris et cité par les moteurs IA comme ChatGPT, Perplexity ou Gemini. Ce ne sont pas deux disciplines opposées : un bon SEO est souvent la base d'un bon GEO.",
  },
  {
    q: "Combien de temps faut-il pour avoir des résultats SEO ?",
    a: "Les premiers signaux apparaissent généralement entre 30 et 90 jours selon l'état de départ du site. Des améliorations techniques peuvent avoir un impact rapide. Les gains de positions sur des mots-clés concurrentiels prennent 4 à 8 mois. La méthode repose sur une priorisation des actions à fort impact business.",
  },
  {
    q: "Faut-il créer une page pour Marseille et une page pour Paris ?",
    a: "Oui, si vous ciblez les deux marchés. Une page par ville permet de cibler les requêtes géolocalisées, d'adapter le discours au marché local, et de structurer le maillage interne autour de ces hubs. La clé est de créer du contenu vraiment différencié entre les deux pages, pas du contenu dupliqué.",
  },
  {
    q: "Un consultant SEO freelance est-il mieux qu'une agence ?",
    a: "C'est une question de contexte. Un consultant freelance offre un interlocuteur unique, plus de réactivité et souvent moins d'overhead. Une agence apporte une équipe spécialisée et plus de capacité d'exécution. Pour une PME qui cherche une stratégie claire et un pilotage direct, le freelance est souvent le choix le plus efficace.",
  },
  {
    q: "Combien coûte un accompagnement SEO ?",
    a: "Les tarifs varient selon la complexité du site, les objectifs et le niveau d'accompagnement souhaité. Un audit complet démarre autour de 800 à 2 500 €. Un accompagnement mensuel se situe généralement entre 800 et 3 000 € par mois. La page tarifs détaille les formules disponibles.",
  },
  {
    q: "Est-ce que le SEO local fonctionne encore ?",
    a: "Oui, et il est de plus en plus important. Les recherches avec intention locale représentent une part croissante des requêtes Google. Le pack local (cartes), les pages locales et Google Business Profile restent des leviers très efficaces pour capter une demande de proximité.",
  },
  {
    q: "Peut-on travailler ensemble à distance ?",
    a: "Absolument. Med Issam Chaoui travaille à distance avec des clients à Marseille, Paris et partout en France. Les échanges se font par email, visio et outils de suivi partagés. La proximité géographique n'est pas nécessaire pour piloter une mission SEO efficacement.",
  },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "var(--bg-soft)", padding: "100px 0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 56 }}
        >
          <div className="section-eyebrow">FAQ</div>
          <h2 className="display-lg">Questions fréquentes</h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 760 }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="card"
              style={{
                overflow: "hidden", cursor: "pointer",
                borderColor: open === i ? "rgba(0,232,122,0.3)" : "var(--border)",
                transition: "border-color 0.25s ease",
              }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px" }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600,
                  letterSpacing: "-0.02em", paddingRight: 16, lineHeight: 1.3, color: "var(--ink)",
                }}>
                  {faq.q}
                </span>
                <div style={{
                  width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
                  background: open === i ? "var(--green)" : "var(--surface-2)",
                  border: open === i ? "none" : "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.25s, border 0.25s",
                  boxShadow: open === i ? "0 0 12px rgba(0,232,122,0.4)" : "none",
                }}>
                  {open === i
                    ? <Minus size={13} color="#080C0A" />
                    : <Plus size={13} color="var(--green)" />
                  }
                </div>
              </div>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ padding: "0 24px 20px", fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.75, borderTop: "1px solid var(--border)" }}>
                      <div style={{ paddingTop: 16 }}>{faq.a}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
