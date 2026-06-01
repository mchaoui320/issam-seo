import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroHome } from "@/components/sections/HeroHome";
import { ProblemSection } from "@/components/sections/ProblemCards";
import { SeoGeoSection } from "@/components/sections/SeoGeoComparison";
import { ServicesSection } from "@/components/sections/ServicesGrid";
import { SeoCommandRoomMethod } from "@/components/sections/SeoCommandRoomMethod";
import { ToolsSection } from "@/components/sections/OutilsSection";
import { DeliverablesSection } from "@/components/sections/LivrablesSection";
import { CitiesSection } from "@/components/sections/LocalMarkets";
import { ProofSection } from "@/components/sections/ProofStrip";
import { ContactForm } from "@/components/sections/ContactForm";
import { FinalCTA } from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultant SEO & GEO à Marseille et Paris | Audit, stratégie, maillage",
  description:
    "Accompagnement SEO et GEO par Med Issam Chaoui : audit priorisé, stratégie de contenu, maillage interne, SEO local Marseille et Paris, optimisation pour les moteurs IA.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroHome />
        <ProblemSection />
        <SeoGeoSection />
        <ServicesSection />
        <SeoCommandRoomMethod />
        <ToolsSection />
        <DeliverablesSection />
        <CitiesSection />
        <ProofSection />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
