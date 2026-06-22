const STEPS = [
  {
    num: "01",
    title: "Job Request Received",
    description:
      "Customer contacts by text, phone, or web form. AI responds immediately, 24/7.",
  },
  {
    num: "02",
    title: "Job Qualified",
    description:
      "Agents ask the right questions: service type, location, urgency, scope. Pricing logic and coverage rules applied automatically.",
  },
  {
    num: "03",
    title: "Dispatched or Scheduled",
    description:
      "Emergencies trigger on-call protocol. Routine jobs scheduled to technician availability. All details sync to CRM.",
  },
  {
    num: "04",
    title: "Followed Up Automatically",
    description:
      "Reminders sent, confirmations collected, unresolved inquiries followed up with no team involvement.",
  },
];

export function UseCasesHowItWorks() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-light">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-white">
            From First Contact to Closed Job
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-[720px]">
          {STEPS.map((step) => (
            <div key={step.num} className="flex gap-6 border-b border-border py-7 first:border-t last:border-b-0">
              <span className="flex-shrink-0 font-mono text-xs tracking-[0.1em] text-muted/60 pt-1">
                {step.num}
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
