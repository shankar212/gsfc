"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const floatingLeaves = [
  { left: "10%", duration: 15, delay: 0, size: 18, opacity: 0.34 },
  { left: "24%", duration: 17, delay: 4, size: 22, opacity: 0.28 },
  { left: "43%", duration: 14, delay: 1.5, size: 16, opacity: 0.32 },
  { left: "63%", duration: 18, delay: 3, size: 20, opacity: 0.26 },
  { left: "82%", duration: 16, delay: 6, size: 18, opacity: 0.3 },
  { left: "6%", duration: 19, delay: 2.4, size: 14, opacity: 0.24 },
  { left: "56%", duration: 13, delay: 5.5, size: 15, opacity: 0.26 },
  { left: "91%", duration: 20, delay: 1.1, size: 17, opacity: 0.22 },
];

export function FloatingLeaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {floatingLeaves.map((leaf, index) => (
        <motion.div
          key={index}
          className="absolute -top-12 text-emerald-100/70"
          style={{ left: leaf.left, opacity: leaf.opacity }}
          initial={{ y: -40, rotate: -12 }}
          animate={{
            y: ["0vh", "36vh", "72vh", "108vh"],
            x: [0, 16, -22, 12],
            rotate: [-12, 14, -18, 10],
            scale: [0.92, 1.06, 0.96, 1],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Leaf size={leaf.size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}
