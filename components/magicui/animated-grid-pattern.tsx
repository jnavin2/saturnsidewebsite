"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
}

function genRandomPos(cols: number, rows: number) {
  return [Math.floor(Math.random() * cols), Math.floor(Math.random() * rows)];
}

export function AnimatedGridPattern({
  width = 44,
  height = 44,
  numSquares = 60,
  className = "",
  maxOpacity = 0.4,
  duration = 3.5,
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [squares, setSquares] = useState<{ id: number; pos: number[] }[]>([]);

  useEffect(() => {
    function resize() {
      if (containerRef.current) {
        setDims({
          w: containerRef.current.clientWidth,
          h: containerRef.current.clientHeight,
        });
      }
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (!dims.w || !dims.h) return;
    const cols = Math.ceil(dims.w / width);
    const rows = Math.ceil(dims.h / height);
    setSquares(
      Array.from({ length: numSquares }, (_, i) => ({
        id: i,
        pos: genRandomPos(cols, rows),
      }))
    );
  }, [dims, numSquares, width, height]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(480px_circle_at_center,white,transparent)] ${className}`}
    >
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse">
            <path
              d={`M${width} 0 L0 0 0 ${height}`}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
        {squares.map(({ id: sid, pos: [x, y] }) => (
          <motion.rect
            key={sid}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="rgba(167,139,250,0.45)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, maxOpacity, 0] }}
            transition={{
              duration,
              repeat: Infinity,
              delay: (sid % 10) * 0.35,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
