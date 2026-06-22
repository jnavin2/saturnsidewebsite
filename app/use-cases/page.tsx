import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { UseCasesHero } from "@/components/sections/uc-hero";
import { UseCasesProblemStats } from "@/components/sections/uc-problem-stats";
import { UseCasesHowItWorks } from "@/components/sections/uc-how-it-works";
import { UseCasesAutomatedGrid } from "@/components/sections/uc-automated-grid";
import { UseCasesComparison } from "@/components/sections/uc-comparison";
import { UseCasesScenarios } from "@/components/sections/uc-scenarios";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Use Cases — SaturnSide AI for Home Service Businesses",
  description:
    "AI workflows for HVAC, plumbing, and electrical contractors — the tools and agents that keep your phones answered, jobs dispatched, and calendar filled.",
};

export default function UseCasesPage() {
  return (
    <>
      <Navbar />
      <main>
        <UseCasesHero />
        <UseCasesProblemStats />
        <UseCasesHowItWorks />
        <UseCasesAutomatedGrid />
        <UseCasesComparison />
        <UseCasesScenarios />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
