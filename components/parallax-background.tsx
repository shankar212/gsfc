"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useEffect, useState } from "react";

// Fixed trees for SSR hydration stability
const forestTrees = [
  { x: -10, y: 190, s: 0.8 }, { x: 25, y: 220, s: 1.1 }, { x: 50, y: 180, s: 0.9 },
  { x: 80, y: 205, s: 0.7 }, { x: 110, y: 175, s: 1.2 }, { x: 140, y: 215, s: 0.8 },
  { x: 175, y: 185, s: 1.0 }, { x: 200, y: 230, s: 0.9 }, { x: 235, y: 195, s: 1.1 },
  { x: 270, y: 170, s: 0.8 }, { x: 300, y: 210, s: 1.2 }, { x: 335, y: 190, s: 0.7 },
  { x: 360, y: 225, s: 1.0 }, { x: 395, y: 185, s: 0.9 }, { x: 420, y: 165, s: 1.1 },
  { x: 450, y: 205, s: 0.8 }, { x: 485, y: 240, s: 1.3 }, { x: 515, y: 195, s: 0.9 },
  { x: 545, y: 175, s: 0.7 }, { x: 580, y: 215, s: 1.1 }, { x: 610, y: 185, s: 1.0 },
  { x: 640, y: 230, s: 0.8 }, { x: 675, y: 190, s: 1.2 }, { x: 705, y: 160, s: 0.9 },
  { x: 740, y: 210, s: 1.1 }, { x: 770, y: 245, s: 0.7 }, { x: 800, y: 180, s: 1.0 },
  { x: 835, y: 205, s: 1.3 }, { x: 865, y: 170, s: 0.8 }, { x: 895, y: 220, s: 1.1 },
  { x: 930, y: 195, s: 0.9 }, { x: 960, y: 185, s: 1.2 }, { x: 990, y: 235, s: 0.7 },
  { x: 1025, y: 175, s: 1.0 }, { x: 1060, y: 215, s: 0.8 }, { x: 1090, y: 240, s: 1.1 },
  { x: 1125, y: 190, s: 0.9 }, { x: 1155, y: 165, s: 1.2 }, { x: 1185, y: 210, s: 0.8 },
  { x: 1215, y: 180, s: 1.0 }
];

const MountainSVG = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1200 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mountainGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#102e21" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#08140f" stopOpacity="0.0"/>
      </linearGradient>
    </defs>
    <path d="M0,400 L0,200 L150,80 L350,220 L550,20 L800,260 L1000,110 L1200,230 L1200,400 Z" fill="url(#mountainGrad)" />
  </svg>
);

const DistantForestSVG = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1200 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,300 L0,220 Q200,160 400,210 T800,190 T1200,230 L1200,300 Z" fill="#0c1f16" opacity="0.6" />
    <g fill="#0c1f16" opacity="0.6">
      {forestTrees.map((t, i) => (
        <path key={`df-${i}`} transform={`translate(${t.x}, ${t.y - 30}) scale(${t.s * 0.6})`} d="M20,0 L40,35 L30,35 L50,80 L40,80 L60,140 L0,140 L20,80 L10,80 L30,35 L20,35 Z" />
      ))}
    </g>
  </svg>
);

const ForegroundForestSVG = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1200 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,300 L0,250 Q250,210 500,260 T1000,230 L1200,260 L1200,300 Z" fill="#040b08" />
    <g fill="#040b08">
      {forestTrees.map((t, i) => (
        <path key={`ff-${i}`} transform={`translate(${t.x}, ${t.y}) scale(${t.s})`} d="M20,0 L40,35 L30,35 L50,80 L40,80 L60,140 L0,140 L20,80 L10,80 L30,35 L20,35 Z" />
      ))}
    </g>
  </svg>
);

const LakeSVG = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lakeGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4deea7" stopOpacity="0.15"/>
        <stop offset="30%" stopColor="#1a754b" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#08140f" stopOpacity="0.9"/>
      </linearGradient>
      <filter id="ripple" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.015 0.15" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="B" />
      </filter>
    </defs>
    <rect x="0" y="0" width="1200" height="200" fill="url(#lakeGrad)" filter="url(#ripple)" />
    {/* Specular highlights */}
    <ellipse cx="600" cy="50" rx="400" ry="8" fill="#a3ffd0" opacity="0.15" filter="blur(6px)" />
    <ellipse cx="600" cy="80" rx="200" ry="4" fill="#a3ffd0" opacity="0.1" filter="blur(4px)" />
  </svg>
);

function Firefly({ i, scrollYProgress }: { i: number; scrollYProgress: any }) {
  const yOffset = -50 - (i * 80);
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, yOffset]), { stiffness: 40, damping: 20 });
  const xOffset = i % 2 === 0 ? 150 : -150;
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, xOffset]), { stiffness: 40, damping: 20 });
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]), { stiffness: 50 });

  return (
    <motion.div
      className="absolute rounded-full bg-gold/50 blur-[2px] will-change-transform"
      style={{
        left: `${(i * 5.7) % 100}%`,
        top: `${30 + (i * 3.3) % 60}%`,
        width: 3 + (i % 4) * 2,
        height: 3 + (i % 4) * 2,
        y,
        x,
        scale
      }}
      animate={{ opacity: [0.1, 0.9, 0.1] }}
      transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function GlowingOrb({ i, scrollYProgress }: { i: number; scrollYProgress: any }) {
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -400 - i * 150]), { stiffness: 30, damping: 25 });
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]));
  
  return (
    <motion.div
      className={`absolute rounded-full blur-[80px] will-change-transform ${i % 2 === 0 ? 'bg-emerald-400/10' : 'bg-gold/10'}`}
      style={{
        left: `${(i * 17) % 90}%`,
        top: `${10 + (i * 13) % 80}%`,
        width: 200 + (i % 5) * 60,
        height: 200 + (i % 5) * 60,
        y,
        scale
      }}
    />
  );
}

function ScenicParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Parallax calculations mapped 0 to 1 scaling across the entire page depth!
  const mountainY = useSpring(useTransform(scrollYProgress, [0, 1], [0, isMobile ? -80 : -180]), { stiffness: 60, damping: 20 });
  const distantForestY = useSpring(useTransform(scrollYProgress, [0, 1], [0, isMobile ? -140 : -260]), { stiffness: 65, damping: 20 });
  const lakeY = useSpring(useTransform(scrollYProgress, [0, 1], [0, isMobile ? -220 : -420]), { stiffness: 70, damping: 20 });
  const foregroundY = useSpring(useTransform(scrollYProgress, [0, 1], [0, isMobile ? -300 : -600]), { stiffness: 75, damping: 20 });

  const moonY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]));
  
  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      {/* Background ambient orbs scattered down the page */}
      {[...Array(6)].map((_, i) => (
        <GlowingOrb key={`orb-${i}`} i={i} scrollYProgress={scrollYProgress} />
      ))}

      {/* Magical Moon / Giant Light Source */}
      <motion.div 
        className="absolute left-[30%] top-[5%] h-[500px] w-[500px] rounded-full bg-emerald-200/5 blur-[140px] will-change-transform" 
        style={{ y: moonY }} 
      />

      {/* Parallax Layers */}
      <motion.div className="absolute inset-x-0 bottom-[-5vh] h-[55vh] will-change-transform" style={{ y: mountainY }}>
        <MountainSVG className="h-full w-full object-fill opacity-70" />
      </motion.div>

      <motion.div className="absolute inset-x-0 bottom-[-15vh] h-[45vh] will-change-transform" style={{ y: distantForestY }}>
        <DistantForestSVG className="h-full w-full object-fill" />
      </motion.div>

      <motion.div className="absolute inset-x-0 bottom-[-30vh] h-[50vh] will-change-transform" style={{ y: lakeY }}>
        <LakeSVG className="h-full w-full object-fill" />
      </motion.div>

      <motion.div className="absolute inset-x-0 bottom-[-60vh] h-[75vh] will-change-transform" style={{ y: foregroundY }}>
        <ForegroundForestSVG className="h-full w-full object-fill" />
      </motion.div>

      {/* Heavy dispersion of fantasy fireflies tracking the entire page length */}
      {[...Array(35)].map((_, i) => (
        <Firefly key={`firefly-${i}`} i={i} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}

export function ParallaxBackground() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return <ScenicParallaxBackground />;
}
