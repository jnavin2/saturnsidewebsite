import { ShieldCheck, Sparkles, Timer, Target, Boxes, ServerCog } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Your data never leaves your environment",
    detail: "compliance-ready for healthcare, finance, legal, and real estate",
  },
  {
    icon: Sparkles,
    title: "Custom systems, not templates",
    detail: "bespoke agents trained on your data with no shortcuts",
  },
  {
    icon: Timer,
    title: "Live in 48 hours, not months",
    detail: "strategy, build, integration, and launch happen in days",
  },
  {
    icon: Target,
    title: "Outcome-focused, always",
    detail: "every deployment ties to a measurable result",
  },
  {
    icon: Boxes,
    title: "Built for your existing stack",
    detail: "integrates with CRM, ERP, Slack, databases, and more",
  },
  {
    icon: ServerCog,
    title: "Enterprise-grade reliability",
    detail: "error handling, fallback logic, and 24/7 monitoring built in",
  },
];

export function WhySaturnside() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-content">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-light">
            Why SaturnSide
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-white">
            Built Different, On Purpose
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-2">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-white/[0.03]">
                  <Icon size={17} className="text-accent-light" strokeWidth={1.8} />
                </div>
                <p className="text-[0.95rem] leading-relaxed text-muted">
                  <span className="font-medium text-white">{feature.title}</span> —{" "}
                  {feature.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
