import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export function UseCasesHero() {
  return (
    <section className="relative overflow-hidden pt-[68px]">
      <AnimatedGridPattern numSquares={40} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.15] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-content px-6 py-24 text-center">
        <h1 className="mx-auto max-w-[760px] font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-extrabold leading-[1.08] tracking-tight text-white">
          AI Workflows for Home Service Businesses
        </h1>
        <p className="mt-4 font-mono text-sm uppercase tracking-[0.14em] text-accent-light">
          HVAC · Plumbing · Electrical Contractors
        </p>
        <p className="mx-auto mt-6 max-w-[600px] text-balance text-lg leading-relaxed text-muted">
          The tools, automations, and AI agents that keep your phones answered, jobs
          dispatched, and calendar filled — without adding headcount.
        </p>
      </div>
    </section>
  );
}
