import { NumberTicker } from "@/components/magicui/number-ticker";

const STATS = [
  { value: 80, suffix: "%", label: "Less manual task time" },
  { value: 3, suffix: "x", label: "More leads processed weekly" },
  { value: 48, suffix: " hrs", label: "To first live workflow" },
  { value: 60, suffix: "%", label: "Lower operating costs in 90 days" },
];

export function StatsBar() {
  return (
    <section className="border-y border-border bg-surface px-6 py-14">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-border px-4 py-8 text-center"
          >
            <div className="font-display text-4xl font-extrabold tracking-tight text-white">
              <NumberTicker value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="max-w-[160px] text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
