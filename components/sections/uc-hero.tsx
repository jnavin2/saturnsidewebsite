"use client";

import { motion } from "framer-motion";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export function UseCasesHero() {
  return (
    <section className="relative overflow-hidden pt-[68px]">
      <AnimatedGridPattern numSquares={40} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.12] blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mx-auto max-w-content px-6 py-24 text-center"
      >
        <h1 className="mx-auto max-w-[760px] font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-extrabold leading-[1.08] tracking-tight text-white">
          AI Helpers For Home Service Companies
        </h1>
        <p className="mt-4 font-mono text-sm uppercase tracking-[0.14em] text-accent-light">
          HVAC · Plumbing · Electrical
        </p>
        <p className="mx-auto mt-6 max-w-[600px] text-balance text-lg leading-relaxed text-muted">
          We help you answer phones, send out workers, and fill your schedule.
          All without hiring more people.
        </p>
      </motion.div>
    </section>
  );
}
