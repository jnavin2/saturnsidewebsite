"use client";

import { useEffect, useRef } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  color?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseOpacity: number;
  life: number;
}

export function Particles({ className = "", quantity = 70, color = "228,228,231" }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particlesRef.current = Array.from({ length: quantity }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(Math.random() * 0.3 + 0.08),
        size: Math.random() * 1.3 + 0.4,
        baseOpacity: Math.random() * 0.4 + 0.1,
        life: Math.random(),
      }));
    }

    function tick() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life += 0.0025;
        if (p.life > 1) {
          p.life = 0;
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 10;
        }
        const fade = p.life < 0.15 ? p.life / 0.15 : p.life > 0.8 ? (1 - p.life) / 0.2 : 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${p.baseOpacity * fade})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    }

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [quantity, color]);

  return <canvas ref={canvasRef} className={`pointer-events-none absolute inset-0 ${className}`} />;
}
