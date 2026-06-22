import { Flame, Droplets, Zap, Leaf, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SCENARIOS = [
  {
    icon: Flame,
    trade: "HVAC",
    title: "After Hours Emergency Call",
    trigger: "A homeowner's system fails late at night.",
    flow: "AI answers, confirms emergency, captures address and equipment details, triggers on-call dispatch.",
    outcome: "Emergency job secured without after hours staffing.",
  },
  {
    icon: Droplets,
    trade: "Plumbing",
    title: "Burst Pipe Emergency",
    trigger: "Customer reports a burst pipe.",
    flow: "AI triages urgency, collects address and shutoff valve status, routes to nearest on-call plumber within seconds.",
    outcome: "Response time cut from hours to minutes.",
  },
  {
    icon: Zap,
    trade: "Electrical",
    title: "Panel Upgrade Estimate Request",
    trigger: "Homeowner requests a quote.",
    flow: "AI qualifies by asking about panel size, home age, permit requirements, and schedules an estimator visit.",
    outcome: "Estimator arrives with prequalified job details, higher close rate.",
  },
  {
    icon: Leaf,
    trade: "HVAC",
    title: "Seasonal Maintenance Campaign",
    trigger: "Company runs a fall tune-up outreach.",
    flow: "AI handles every reply, books appointments without staff involvement.",
    outcome: "Seasonal revenue captured at scale, calendar filled automatically.",
  },
  {
    icon: Users,
    trade: "All Trades",
    title: "Lapsed Customer Reengagement",
    trigger: "Contractor uploads a list of inactive customers.",
    flow: "AI runs personalized outreach, converts responses into scheduled appointments.",
    outcome: "Dormant customers converted to active revenue.",
  },
];

export function UseCasesScenarios() {
  return (
    <section className="border-y border-border bg-surface px-6 py-28">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-light">
            In Practice
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-white">
            Real Scenarios, Real Outcomes
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {SCENARIOS.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.title} className={s.trade === "All Trades" ? "md:col-span-2" : ""}>
                <CardContent className="p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/[0.03]">
                      <Icon size={18} className="text-accent-light" strokeWidth={1.8} />
                    </div>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
                      {s.trade}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-bold text-white">{s.title}</h3>

                  <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                    <div>
                      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted/60">
                        Trigger
                      </dt>
                      <dd className="mt-1 text-muted">{s.trigger}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted/60">
                        AI Workflow
                      </dt>
                      <dd className="mt-1 text-muted">{s.flow}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-accent-light">
                        Outcome
                      </dt>
                      <dd className="mt-1 text-white">{s.outcome}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
