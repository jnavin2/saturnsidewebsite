import { Target, Headphones, BarChart3, Workflow, PenLine, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";

const SERVICES = [
  {
    icon: Target,
    title: "AI Lead Generation and Nurturing",
    description:
      "Automated prospecting, lead scoring, personalized outreach, CRM sync, and rep notifications. Cold pipelines turn warm without new sales hires.",
  },
  {
    icon: Headphones,
    title: "Intelligent Customer Support",
    description:
      "AI agents triage tier-1 tickets, draft responses, route complex issues to humans, and learn from resolutions over time.",
  },
  {
    icon: BarChart3,
    title: "Data and Reporting Automation",
    description:
      "Replace hours of spreadsheet work with live dashboards, automated data pipelines, and scheduled reports delivered to your inbox.",
  },
  {
    icon: Workflow,
    title: "Workflow Orchestration",
    description:
      "Connect CRM, ERP, email, Slack, and databases with intelligent automations that trigger actions across tools with no human in the loop.",
  },
  {
    icon: PenLine,
    title: "AI Content and Outreach",
    description:
      "Personalized content, email campaigns, and follow-up sequences generated and scheduled automatically in your brand voice, at scale.",
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description:
      "Bespoke agents trained on your data, operating inside your systems, capable of reasoning through complex multi-step tasks.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-light">
            What We Build
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-white">
            Six Systems. One Operating Layer.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="group relative">
                <BorderBeam />
                <CardContent className="relative p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white/[0.03] transition-colors group-hover:border-accent/40">
                    <Icon size={20} className="text-accent-light" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-[1.02rem] font-bold leading-snug text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
