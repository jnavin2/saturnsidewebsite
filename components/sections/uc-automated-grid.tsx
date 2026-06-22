import { PhoneIncoming, ListChecks, Route, CalendarClock, Repeat, Database } from "lucide-react";

const ITEMS = [
  { icon: PhoneIncoming, label: "Inbound job intake" },
  { icon: ListChecks, label: "Job qualification" },
  { icon: Route, label: "Dispatch routing" },
  { icon: CalendarClock, label: "Appointment scheduling" },
  { icon: Repeat, label: "Follow-up sequences" },
  { icon: Database, label: "CRM data entry" },
];

export function UseCasesAutomatedGrid() {
  return (
    <section className="border-y border-border bg-surface px-6 py-28">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-light">
            Fully Automated
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-white">
            What Gets Automated
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-5 py-9 text-center transition-colors hover:border-border-hover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white/[0.03]">
                  <Icon size={20} className="text-accent-light" strokeWidth={1.8} />
                </div>
                <p className="font-display text-sm font-semibold text-white">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
