"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-[68px]">
      <AnimatedGridPattern />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-chrome-glow/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-content px-6 py-24 text-center">
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-accent-light animate-pulse-glow" />
          </span>
          Smart AI For Your Business
        </div>

        <h1 className="mx-auto max-w-[820px] font-display text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-[1.05] tracking-tight text-white animate-fade-up">
          AI Helpers That{" "}
          <span className="bg-gradient-to-br from-accent-light to-accent bg-clip-text text-transparent">
            Work For Your Business
          </span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-[600px] text-balance text-lg leading-relaxed text-muted animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          We build smart AI tools made just for you. They start working in 2 days.
          You don&apos;t need to hire anyone new.
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <a href="https://saturnside.com">
            <Button size="lg">
              Book a Free Call
              <ArrowRight size={16} />
            </Button>
          </a>
          <a href="#services">
            <Button size="lg" variant="secondary">
              See How It Works
              <ChevronDown size={16} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
