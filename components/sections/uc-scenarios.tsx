"use client";

import { motion } from "framer-motion";
import { Flame, Droplets, Zap, Leaf, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Spotlight } from "@/components/magicui/spotlight";

const SCENARIOS = [
  {
    icon: Flame,
    trade: "HVAC",
    title: "After Hours Emergency",
    trigger: "An AC breaks late at night.",
    flow: "Our AI answers, checks it's an emergency, gets the address, and calls the on-call worker.",
    outcome: "You get the job without paying someone to work all night.",
  },
  {
    icon: Droplets,
    trade: "Plumbing",
    title: "Burst Pipe Emergency",
    trigger: "A pipe bursts at someone's house.",
    flow: "Our AI checks how bad it is, gets the address, and sends the closest plumber in seconds.",
    outcome: "Help arrives in minutes instead of hours.",
  },
  {
    icon: Zap,
    trade: "Electrical",
    title: "Quote Request",
    trigger: "Someone asks for a price on a panel upgrade.",
    flow: "Our AI asks simple questions and books a visit with your estimator.",
    outcome: "Your estimator shows up ready, and more jobs get booked.",
  },
  {
    icon: Leaf,
    trade: "HVAC",
    title: "Fall Tune-Up Push",
    trigger: "You send out a fall tune-up offer.",
    flow: "Our AI answers every reply and books the appointments for you.",
    outcome: "Your calendar fills up without anyone lifting a finger.",
  },
  {
    icon: Users,
    trade: "All Trades",
    title: "Win Back Old Customers",
    trigger: "You upload a list of old customers.",
    flow: "Our AI reaches out to each one and books a new appointment when they reply.",
    outcome: "Old customers come back and start paying again.",
  },
];

export function UseCasesScenarios() {
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
            In Practice
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-white">
            See It In Action
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {SCENARIOS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className={s.trade === "All Trades" ? "md:col-span-2" : ""}
              >
                <Card className="relative overflow-hidden group/spotlight h-full">
                  <Spotlight />
                  <CardContent className="relative z-10 p-7">
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
                          What Happens
                        </dt>
                        <dd className="mt-1 text-muted">{s.trigger}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted/60">
                          What The AI Does
                        </dt>
                        <dd className="mt-1 text-muted">{s.flow}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-accent-light">
                          What You Get
                        </dt>
                        <dd className="mt-1 text-white">{s.outcome}</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
