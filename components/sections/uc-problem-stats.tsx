"use client";

import { motion } from "framer-motion";
import { NumberTicker } from "@/components/magicui/number-ticker";

const STATS = [
  { value: 68, suffix: "%", label: "of calls don't get answered when you're busy" },
  { value: 78, suffix: "%", label: "of customers pick whoever calls back first" },
  { value: 5, suffix: " min", label: "before they call someone else instead" },
  { value: 90, suffix: "%", label: "of jobs need someone to schedule them by hand" },
];

export function UseCasesProblemStats() {
  return (
    <section className="border-y border-border bg-surface px-6 py-20">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[560px] text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-light">
            The Problem
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,3.6vw,2.3rem)] font-extrabold tracking-tight text-white">
            Every Missed Call Is A Missed Job
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="font-display text-3xl font-extrabold tracking-tight text-white">
                <NumberTicker value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
