import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { Services } from "@/components/sections/services";
import { WhySaturnside } from "@/components/sections/why-saturnside";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <WhySaturnside />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
