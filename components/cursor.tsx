"use client";

import { useEffect, useRef } from "react";

/**
 * Custom chrome-silver cursor: an instant dot plus a ring that eases
 * behind it. Disabled on touch devices since there's no real cursor there.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.classList.add("custom-cursor-active");

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let raf: number;

    function handleMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
    }

    function handleDown() {
      document.body.classList.add("cursor-clicking");
    }
    function handleUp() {
      document.body.classList.remove("cursor-clicking");
    }

    function loop() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(loop);
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        document.body.classList.add("cursor-hovering");
      }
    }
    function handleOut(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        document.body.classList.remove("cursor-hovering");
      }
    }

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    raf = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} id="cursor-dot" />
      <div ref={ringRef} id="cursor-ring" />
    </>
  );
}
