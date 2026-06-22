"use client";

import { motion } from "framer-motion";
import { PhoneIncoming, ListChecks, Route, CalendarClock, Repeat, Database } from "lucide-react";

const ITEMS = [
  { icon: PhoneIncoming, label: "Answering new calls" },
  { icon: ListChecks, label: "Asking the right questions" },
  { icon: Route, label: "Sending the right worker" },
  { icon: CalendarClock, label: "Booking appointments" },
  { icon: Repeat, label: "Sending reminders" },
  { icon: Database, label: "Saving customer info" },
];

export function UseCasesAutomatedGrid() {
  return (
    <section className="border-y border-border bg-surface px-6 py-28">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[560px] text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-light">
            Done For You
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-white">
            What We Handle For You
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-5 py-9 text-center transition-colors hover:border-border-hover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white/[0.03]">
                  <Icon size={20} className="text-accent-light" strokeWidth={1.8} />
                </div>
                <p className="font-display text-sm font-semibold text-white">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
