"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const hangingVines = [
  { left: "8%", height: 190, delay: 0, duration: 9 },
  { left: "18%", height: 150, delay: 1.5, duration: 8.4 },
  { left: "82%", height: 180, delay: 2.2, duration: 10 },
  { left: "92%", height: 140, delay: 0.8, duration: 8.8 },
];

const groundFlora = [
  { side: "left", x: "2%", y: "74%", scale: 1 },
  { side: "left", x: "11%", y: "81%", scale: 0.82 },
  { side: "right", x: "88%", y: "76%", scale: 1 },
  { side: "right", x: "78%", y: "83%", scale: 0.76 },
];

const spores = [
  { left: "14%", top: "28%", size: 10, duration: 9 },
  { left: "28%", top: "58%", size: 14, duration: 11 },
  { left: "46%", top: "20%", size: 9, duration: 8.5 },
  { left: "67%", top: "46%", size: 12, duration: 10.5 },
  { left: "84%", top: "32%", size: 8, duration: 7.8 },
];

type FantasyGardenProps = {
  mode?: "hero" | "page";
};

export function FantasyGarden({ mode = "page" }: FantasyGardenProps) {
  const isHero = mode === "hero";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${isHero ? "opacity-100" : "opacity-80"}`}>
      {hangingVines.map((vine, index) => (
        <motion.div
          key={`${mode}-vine-${index}`}
          className="absolute top-0"
          style={{ left: vine.left }}
          animate={{ rotate: [-2, 3, -1.5, -2], x: [0, 6, -4, 0] }}
          transition={{
            duration: vine.duration,
            delay: vine.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flora-stem" style={{ height: vine.height }} />
          <motion.div
            className="absolute left-[-18px] top-[26%]"
            animate={{ rotate: [-24, -12, -22] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: vine.delay }}
          >
            <div className="flora-leaf h-8 w-5" />
          </motion.div>
          <motion.div
            className="absolute left-[2px] top-[52%]"
            animate={{ rotate: [20, 8, 18] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: vine.delay + 0.3 }}
          >
            <div className="flora-leaf h-10 w-6" />
          </motion.div>
        </motion.div>
      ))}

      {groundFlora.map((plant, index) => (
        <motion.div
          key={`${mode}-plant-${index}`}
          className="absolute"
          style={{ left: plant.x, top: plant.y, scale: plant.scale }}
          animate={{ y: [0, -8, 0], rotate: plant.side === "left" ? [-2, 2, -2] : [2, -2, 2] }}
          transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative h-44 w-28">
            <div className="flora-stem left-1/2 top-8 h-28 -translate-x-1/2" />
            <motion.div
              className="absolute left-[10px] top-[72px] text-emerald-200/80"
              animate={{ rotate: [-20, -8, -20], x: [0, -4, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Leaf size={34} strokeWidth={1.5} />
            </motion.div>
            <motion.div
              className="absolute right-[8px] top-[48px] text-emerald-300/80"
              animate={{ rotate: [16, 5, 16], x: [0, 4, 0] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <Leaf size={42} strokeWidth={1.5} />
            </motion.div>
            <motion.div
              className="absolute left-[34px] top-[18px] text-emerald-100/85"
              animate={{ y: [0, -5, 0], rotate: [-6, 8, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <Leaf size={26} strokeWidth={1.5} />
            </motion.div>
            <div className="flora-orb left-[8px] top-[20px] h-16 w-16" />
          </div>
        </motion.div>
      ))}

      {spores.map((spore, index) => (
        <motion.div
          key={`${mode}-spore-${index}`}
          className="flora-orb"
          style={{ left: spore.left, top: spore.top, width: spore.size, height: spore.size }}
          animate={{ y: [0, -18, 0], x: [0, 8, 0], opacity: [0.2, 0.65, 0.2] }}
          transition={{ duration: spore.duration, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
        />
      ))}
    </div>
  );
}
