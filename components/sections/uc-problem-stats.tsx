import { NumberTicker } from "@/components/magicui/number-ticker";

const STATS = [
  { value: 68, suffix: "%", label: "of inbound calls go unanswered during peak hours" },
  { value: 78, suffix: "%", label: "of homeowners book the first company that responds" },
  { value: 5, suffix: " min", label: "before an unanswered inquiry moves to a competitor" },
  { value: 90, suffix: "%", label: "of jobs require at least one manual scheduling step" },
];

export function UseCasesProblemStats() {
  return (
    <section className="border-y border-border bg-surface px-6 py-20">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-light">
            The Problem
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,3.6vw,2.3rem)] font-extrabold tracking-tight text-white">
            Every Missed Call Is a Missed Job
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="font-display text-3xl font-extrabold tracking-tight text-white">
                <NumberTicker value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
