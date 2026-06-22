"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Timer, Target, Boxes, ServerCog } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Your information stays safe",
    detail: "We never send your data anywhere else. Safe for doctors, banks, and other careful businesses.",
  },
  {
    icon: Sparkles,
    title: "Made just for you",
    detail: "We don't use copy-paste designs. Every AI helper is built only for your business.",
  },
  {
    icon: Timer,
    title: "Ready in 2 days",
    detail: "Most companies take months. We get your AI helper working in just 2 days.",
  },
  {
    icon: Target,
    title: "Real results, always",
    detail: "Everything we build helps your business in a way you can see and measure.",
  },
  {
    icon: Boxes,
    title: "Works with what you have",
    detail: "Our AI works with the tools you already use, like email, your CRM, and Slack.",
  },
  {
    icon: ServerCog,
    title: "Always watching, always working",
    detail: "We check on your AI day and night. If something breaks, we fix it fast.",
  },
];

export function WhySaturnside() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[640px] text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-light">
            Why SaturnSide
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-white">
            Why Businesses Pick Us
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-2">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-white/[0.03]">
                  <Icon size={17} className="text-accent-light" strokeWidth={1.8} />
                </div>
                <p className="text-[0.95rem] leading-relaxed text-muted">
                  <span className="font-medium text-white">{feature.title}.</span>{" "}
                  {feature.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
