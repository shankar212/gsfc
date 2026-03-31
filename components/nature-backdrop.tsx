"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const leaves = [
  { size: 42, left: "6%", top: "12%", duration: 18, delay: 0, rotate: -18, opacity: 0.18 },
  { size: 54, left: "16%", top: "62%", duration: 24, delay: 2, rotate: 22, opacity: 0.14 },
  { size: 36, left: "34%", top: "18%", duration: 20, delay: 1, rotate: 10, opacity: 0.2 },
  { size: 48, left: "52%", top: "70%", duration: 26, delay: 4, rotate: -28, opacity: 0.16 },
  { size: 58, left: "76%", top: "16%", duration: 22, delay: 3, rotate: 30, opacity: 0.15 },
  { size: 38, left: "88%", top: "58%", duration: 19, delay: 2, rotate: -12, opacity: 0.18 },
  { size: 44, left: "64%", top: "10%", duration: 21, delay: 1.2, rotate: 18, opacity: 0.12 },
  { size: 32, left: "22%", top: "82%", duration: 17, delay: 2.8, rotate: -22, opacity: 0.14 },
];

type NatureBackdropProps = {
  variant?: "hero" | "page";
};

export function NatureBackdrop({ variant = "page" }: NatureBackdropProps) {
  const isHero = variant === "hero";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${isHero ? "" : "opacity-90"}`}>
      <div className="fantasy-grid absolute inset-0 opacity-20" />

      <motion.div
        className="leaf-glow left-[8%] top-[10%] h-36 w-36 bg-emerald-400/25"
        animate={{ scale: [1, 1.15, 1], opacity: [0.22, 0.4, 0.22] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="leaf-glow bottom-[12%] right-[10%] h-52 w-52 bg-gold/20"
        animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute inset-x-0 top-[6%] h-40 bg-[radial-gradient(circle,rgba(120,255,182,0.18),transparent_60%)] blur-3xl"
        animate={{ y: [0, 16, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[16%] left-[22%] h-28 w-28 rounded-full bg-emerald-300/10 blur-[80px]"
        animate={{ scale: [1, 1.35, 1], opacity: [0.12, 0.32, 0.12] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute right-[14%] top-[34%] h-24 w-24 rounded-full bg-emerald-200/10 blur-[60px]"
        animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.1, 0.28, 0.1] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {leaves.map((leaf, index) => (
        <motion.div
          key={`${variant}-${index}`}
          className="absolute text-emerald-200/70"
          style={{ left: leaf.left, top: leaf.top, opacity: leaf.opacity }}
          animate={{
            y: [0, 22, -12, 0],
            x: [0, 12, -8, 0],
            rotate: [leaf.rotate, leaf.rotate + 18, leaf.rotate - 10, leaf.rotate],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: leaf.delay,
          }}
        >
          <div className="rounded-full bg-emerald-300/6 p-3 backdrop-blur-md">
            <Leaf size={leaf.size} strokeWidth={1.35} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
