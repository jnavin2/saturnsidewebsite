"use client";

import { motion } from "framer-motion";
import { Target, Headphones, BarChart3, Workflow, PenLine, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Spotlight } from "@/components/magicui/spotlight";

const SERVICES = [
  {
    icon: Target,
    title: "Find New Customers",
    description:
      "Our AI finds people who might want to buy from you. It reaches out and stays in touch until they're ready.",
  },
  {
    icon: Headphones,
    title: "Help Customers Fast",
    description:
      "Our AI answers customer questions right away, day or night. Hard questions get sent to a real person.",
  },
  {
    icon: BarChart3,
    title: "See Your Numbers Easily",
    description:
      "No more messy spreadsheets. Get simple, easy-to-read reports sent to your email by themselves.",
  },
  {
    icon: Workflow,
    title: "Connect All Your Tools",
    description:
      "We connect your apps so they talk to each other. Work gets done without anyone asking.",
  },
  {
    icon: PenLine,
    title: "Write And Send Messages",
    description:
      "Our AI writes emails and messages that sound just like you. It sends them at the right time.",
  },
  {
    icon: Bot,
    title: "Built Just For You",
    description:
      "We build special AI helpers made only for your business. They can handle tricky jobs on their own.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[640px] text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-light">
            What We Build
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-white">
            Six Ways We Help Your Business
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <Card className="group relative overflow-hidden group/spotlight">
                  <Spotlight />
                  <BorderBeam />
                  <CardContent className="relative z-10 p-7">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
