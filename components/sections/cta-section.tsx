import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/magicui/particles";

export function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      <Particles quantity={50} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.12] blur-[130px]" />

      <div className="relative mx-auto max-w-[640px] text-center">
        <h2 className="font-display text-[clamp(1.9rem,4.2vw,2.8rem)] font-extrabold tracking-tight text-white">
          Ready to Put Your Business on Autopilot?
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] text-balance text-base leading-relaxed text-muted">
          Book a free 30-minute strategy call. No pitch, no pressure — just a look at what's
          possible for your business.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4">
          <a href="https://saturnside.com">
            <Button size="lg">
              Book a Strategy Call
              <ArrowRight size={16} />
            </Button>
          </a>
          <p className="flex items-center gap-2 text-sm text-muted">
            <MessageSquare size={14} />
            Or text <span className="font-semibold text-white">SATURN</span> to{" "}
            <span className="font-semibold text-white">(904) 621-6677</span>
          </p>
        </div>
      </div>
    </section>
  );
}
