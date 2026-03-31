"use client";

import { motion } from "framer-motion";

type TreeBranchProps = {
  className?: string;
};

export function TreeBranch({ className = "" }: TreeBranchProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute left-0 top-0 z-[3] hidden h-[32rem] w-[34rem] xl:block ${className}`}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    >
      <motion.div
        className="branch-shadow absolute inset-0"
        animate={{ rotate: [-1.5, 1.2, -1.5], y: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "0% 0%" }}
      >
        <svg viewBox="0 0 540 520" className="h-full w-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="branchWood" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(25, 13, 7, 0.95)" />
              <stop offset="50%" stopColor="rgba(61, 37, 18, 0.88)" />
              <stop offset="100%" stopColor="rgba(113, 80, 42, 0.72)" />
            </linearGradient>
            <radialGradient id="branchLeaf" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(170,255,186,0.95)" />
              <stop offset="55%" stopColor="rgba(87,185,99,0.72)" />
              <stop offset="100%" stopColor="rgba(39,88,47,0.05)" />
            </radialGradient>
            <filter id="branchGlow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M-20 34 C92 92, 170 138, 242 186 S390 288, 546 258"
            fill="none"
            stroke="url(#branchWood)"
            strokeWidth="22"
            strokeLinecap="round"
          />
          <path
            d="M150 114 C178 94, 210 70, 238 34"
            fill="none"
            stroke="url(#branchWood)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M212 180 C248 176, 292 158, 330 120"
            fill="none"
            stroke="url(#branchWood)"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M256 202 C282 222, 306 258, 316 304"
            fill="none"
            stroke="url(#branchWood)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M344 242 C386 238, 428 218, 468 176"
            fill="none"
            stroke="url(#branchWood)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {[
            { x: 170, y: 104, rx: 28, ry: 14, rotate: -28 },
            { x: 208, y: 82, rx: 24, ry: 12, rotate: -10 },
            { x: 246, y: 44, rx: 30, ry: 14, rotate: 18 },
            { x: 292, y: 154, rx: 28, ry: 13, rotate: -18 },
            { x: 330, y: 128, rx: 24, ry: 12, rotate: 8 },
            { x: 316, y: 282, rx: 26, ry: 12, rotate: 48 },
            { x: 452, y: 178, rx: 30, ry: 14, rotate: -12 },
            { x: 414, y: 210, rx: 26, ry: 12, rotate: 22 },
          ].map((leaf, index) => (
            <motion.g
              key={index}
              animate={{ rotate: [leaf.rotate, leaf.rotate + 6, leaf.rotate - 4, leaf.rotate] }}
              transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ originX: `${leaf.x}px`, originY: `${leaf.y}px` }}
            >
              <ellipse
                cx={leaf.x}
                cy={leaf.y}
                rx={leaf.rx}
                ry={leaf.ry}
                fill="url(#branchLeaf)"
                filter="url(#branchGlow)"
              />
            </motion.g>
          ))}

          {[
            { x: 180, y: 94, r: 22 },
            { x: 318, y: 140, r: 18 },
            { x: 430, y: 188, r: 24 },
          ].map((orb, index) => (
            <circle
              key={index}
              cx={orb.x}
              cy={orb.y}
              r={orb.r}
              fill="rgba(137,255,173,0.12)"
              filter="url(#branchGlow)"
            />
          ))}
        </svg>
      </motion.div>
    </motion.div>
  );
}
