import { HeroHome } from "@/components/sections/HeroHome";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { ProblemCards } from "@/components/sections/ProblemCards";
import { SeoGeoComparison } from "@/components/sections/SeoGeoComparison";
import { DiagnosticStrategique } from "@/components/sections/DiagnosticStrategique";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ExpertisesGrid } from "@/components/sections/ExpertisesGrid";
import { SeoCommandRoomMethod } from "@/components/sections/SeoCommandRoomMethod";
import { ProcessusCollaboration } from "@/components/sections/ProcessusCollaboration";
import { OutilsSection } from "@/components/sections/OutilsSection";
import { LivrablesSection } from "@/components/sections/LivrablesSection";
import { PourQui } from "@/components/sections/PourQui";
import { GeoContent } from "@/components/sections/GeoContent";
import { LocalMarkets } from "@/components/sections/LocalMarkets";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroHome />
      <ProofStrip />
      <ProblemCards />
      <SeoGeoComparison />
      <DiagnosticStrategique />
      <ServicesGrid />
      <ExpertisesGrid />
      <SeoCommandRoomMethod />
      <ProcessusCollaboration />
      <OutilsSection />
      <LivrablesSection />
      <PourQui />
      <GeoContent />
      <LocalMarkets />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
