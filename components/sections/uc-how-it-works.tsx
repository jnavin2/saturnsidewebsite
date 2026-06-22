"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Someone Reaches Out",
    description: "A customer texts, calls, or fills out a form. Our AI answers right away, day or night.",
  },
  {
    num: "02",
    title: "We Learn What They Need",
    description: "The AI asks easy questions. What's wrong? Where are they? How soon do they need help?",
  },
  {
    num: "03",
    title: "We Send Help Or Book A Time",
    description: "Emergencies get help right away. Regular jobs get put on the calendar. Everything saves itself.",
  },
  {
    num: "04",
    title: "We Follow Up For You",
    description: "Reminders go out and questions get answered. No one on your team has to do it by hand.",
  },
];

export function UseCasesHowItWorks() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[560px] text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-light">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-white">
            From First Call To Finished Job
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 max-w-[720px]">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex gap-6 border-b border-border py-7 first:border-t last:border-b-0"
            >
              <span className="flex-shrink-0 font-mono text-xs tracking-[0.1em] text-muted/60 pt-1">
                {step.num}
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
