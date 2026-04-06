"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

import { useIsMobile } from "@/hooks/use-is-mobile";

function MobileParallaxBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {/* Lightweight CSS-only animations for buttery smooth mobile graphics (0 CPU hooks) */}
      <div className="absolute inset-x-0 top-[-6rem] h-[16rem] bg-[radial-gradient(circle,rgba(88,180,112,0.18),transparent_62%)] blur-[40px] animate-parallax-drift-slow" />
      
      <div className="site-parallax-orb left-[-4rem] top-[18%] h-44 w-44 bg-emerald-400/16 opacity-30 animate-parallax-float" />
      <div className="site-parallax-orb right-[-4rem] top-[42%] h-36 w-36 bg-gold/10 opacity-20 animate-parallax-float-delayed" />
      
      <div className="site-parallax-particle left-[20%] top-[30%] h-3 w-3 animate-parallax-float" />
      <div className="site-parallax-particle left-[80%] top-[50%] h-4 w-4 animate-parallax-float-delayed" />
      <div className="site-parallax-particle left-[40%] top-[70%] h-2 w-2 animate-parallax-rise" />

      <div className="site-forest-layer site-forest-back animate-parallax-rise" />
      <div className="site-lake-glow animate-lake-glimmer" />
      
      <div className="site-parallax-foliage site-foliage-left left-[-2rem] bottom-[-2rem] animate-forest-sway-left" />
      <div className="site-parallax-foliage site-foliage-right right-[-2rem] bottom-[-3rem] animate-forest-sway-right" />
    </div>
  );
}

function DesktopParallaxBackground() {
  const { scrollY } = useScroll();

  const orbOneY = useSpring(useTransform(scrollY, [0, 3000], [0, -320]), { stiffness: 72, damping: 26, mass: 0.55 });
  const orbTwoY = useSpring(useTransform(scrollY, [0, 3000], [0, 240]), { stiffness: 72, damping: 26, mass: 0.55 });
  const orbThreeY = useSpring(useTransform(scrollY, [0, 3000], [0, -200]), { stiffness: 72, damping: 26, mass: 0.55 });
  const bandY = useSpring(useTransform(scrollY, [0, 3000], [0, -170]), { stiffness: 68, damping: 24, mass: 0.6 });
  const gridY = useSpring(useTransform(scrollY, [0, 3000], [0, -120]), { stiffness: 68, damping: 24, mass: 0.6 });
  const leftFoliageY = useSpring(useTransform(scrollY, [0, 3000], [0, -260]), { stiffness: 64, damping: 24, mass: 0.62 });
  const rightFoliageY = useSpring(useTransform(scrollY, [0, 3000], [0, 180]), { stiffness: 64, damping: 24, mass: 0.62 });
  const canopyY = useSpring(useTransform(scrollY, [0, 3000], [0, -140]), { stiffness: 68, damping: 24, mass: 0.6 });
  const lakeY = useSpring(useTransform(scrollY, [0, 3000], [0, 120]), { stiffness: 70, damping: 24, mass: 0.58 });
  const forestBackY = useSpring(useTransform(scrollY, [0, 3000], [0, -70]), { stiffness: 66, damping: 24, mass: 0.6 });
  const forestFrontY = useSpring(useTransform(scrollY, [0, 3000], [0, 95]), { stiffness: 66, damping: 24, mass: 0.6 });
  const bandMirrorY = useTransform(bandY, (value) => value * -0.7);
  const lakeRippleY = useTransform(lakeY, (value) => value * 0.65);

  const particles = [
    { left: "16%", top: "22%", size: 14, range: -180 },
    { left: "29%", top: "54%", size: 10, range: 160 },
    { left: "48%", top: "30%", size: 12, range: -140 },
    { left: "72%", top: "48%", size: 16, range: 220 },
    { left: "84%", top: "20%", size: 9, range: -120 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <motion.div className="site-parallax-grid" style={{ y: gridY }} />
      <motion.div
        className="absolute inset-x-0 top-[-8rem] h-[22rem] bg-[radial-gradient(circle,rgba(88,180,112,0.22),transparent_62%)] blur-[110px]"
        style={{ y: canopyY }}
      />
      <motion.div
        className="site-parallax-orb left-[-8rem] top-[12%] h-72 w-72 bg-emerald-400/20"
        style={{ y: orbOneY }}
      />
      <motion.div
        className="site-parallax-orb right-[-10rem] top-[28%] h-96 w-96 bg-gold/14"
        style={{ y: orbTwoY }}
      />
      <motion.div
        className="site-parallax-orb left-[34%] top-[62%] h-80 w-80 bg-emerald-300/14"
        style={{ y: orbThreeY }}
      />
      <motion.div className="site-parallax-band top-[18%] left-[-10%] w-[65vw]" style={{ y: bandY, rotate: -8 }} />
      <motion.div className="site-parallax-band bottom-[14%] right-[-12%] w-[58vw]" style={{ y: bandMirrorY, rotate: 12 }} />
      <motion.div className="site-forest-layer site-forest-back" style={{ y: forestBackY }} />
      <motion.div className="site-lake-glow" style={{ y: lakeY }} />
      <motion.div className="site-lake-ripple" style={{ y: lakeRippleY }} />
      <motion.div className="site-parallax-foliage site-foliage-left left-[-5rem] bottom-[-8rem]" style={{ y: leftFoliageY }} />
      <motion.div className="site-parallax-foliage site-foliage-right right-[-5rem] bottom-[-10rem]" style={{ y: rightFoliageY }} />
      <motion.div className="site-forest-layer site-forest-front" style={{ y: forestFrontY }} />
      {particles.map((particle, index) => {
        const particleY = useTransform(scrollY, [0, 3000], [0, particle.range]);

        return (
          <motion.div
            key={index}
            className="site-parallax-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              y: particleY,
            }}
          />
        );
      })}
    </div>
  );
}

export function ParallaxBackground() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  if (reduceMotion) {
    return null;
  }

  return isMobile ? <MobileParallaxBackground /> : <DesktopParallaxBackground />;
}
