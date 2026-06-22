"use client";

import { useEffect, useRef } from "react";

/**
 * Aceternity-style spotlight: a radial glow that follows the cursor.
 * Wrap the target section with `relative group/spotlight` and drop
 * this in as the first child. The listener attaches to the parent
 * because this overlay itself is pointer-events-none.
 */
export function Spotlight({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    function handleMove(e: MouseEvent) {
      const rect = parent!.getBoundingClientRect();
      el!.style.setProperty("--x", `${e.clientX - rect.left}px`);
      el!.style.setProperty("--y", `${e.clientY - rect.top}px`);
    }

    parent.addEventListener("mousemove", handleMove);
    return () => parent.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100 ${className}`}
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(139,92,246,0.15), transparent 70%)",
      }}
    />
  );
}
