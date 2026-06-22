"use client";

import { motion } from "framer-motion";
import { NumberTicker } from "@/components/magicui/number-ticker";

const STATS = [
  { value: 80, suffix: "%", label: "Less work by hand" },
  { value: 3, suffix: "x", label: "More customers every week" },
  { value: 48, suffix: " hrs", label: "Until it's up and running" },
  { value: 60, suffix: "%", label: "Lower costs in 3 months" },
];

export function StatsBar() {
  return (
    <section className="border-y border-border bg-surface px-6 py-14">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-border px-4 py-8 text-center"
          >
            <div className="font-display text-4xl font-extrabold tracking-tight text-white">
              <NumberTicker value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="max-w-[160px] text-sm text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
