interface BorderBeamProps {
  className?: string;
  duration?: number;
}

/**
 * Rotating gradient ring clipped to a card's border via padding + mask.
 * Pure CSS animation — no canvas, no JS — so it can't desync or leak listeners.
 */
export function BorderBeam({ className = "", duration = 5 }: BorderBeamProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${className}`}
      style={{
        padding: 1,
        background:
          "conic-gradient(from 0deg, transparent 0%, rgba(228,228,231,0.9) 12%, transparent 28%)",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        animation: `border-spin ${duration}s linear infinite`,
      }}
    />
  );
}
