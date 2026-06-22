"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-content items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 font-display text-[1.05rem] font-bold text-white">
          <SaturnMark />
          SaturnSide AI
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="https://saturnside.com">Book a Strategy Call</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a href="https://saturnside.com" className="mt-2">
              <Button className="w-full">Book a Strategy Call</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function SaturnMark() {
  return (
    <svg viewBox="0 0 22 22" className="h-[22px] w-[22px] overflow-visible" fill="none">
      <circle cx="11" cy="11" r="10" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <circle cx="11" cy="11" r="5.5" stroke="#a78bfa" strokeWidth="1.8" />
      <g transform="translate(11,11)">
        <g className="origin-[0px_0px] animate-[spin_3.2s_linear_infinite]">
          <circle cx="10" cy="0" r="1.8" fill="#a78bfa" />
        </g>
      </g>
    </svg>
  );
}
