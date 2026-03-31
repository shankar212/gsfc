"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorAura() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const smoothX = useSpring(x, { damping: 30, stiffness: 140, mass: 0.3 });
  const smoothY = useSpring(y, { damping: 30, stiffness: 140, mass: 0.3 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 120);
      y.set(event.clientY - 120);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(91,255,150,0.18),rgba(212,175,104,0.08),transparent_72%)] blur-3xl lg:block"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
