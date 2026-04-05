"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxBackground() {
  const { scrollY } = useScroll();

  const orbOneY = useTransform(scrollY, [0, 3000], [0, -320]);
  const orbTwoY = useTransform(scrollY, [0, 3000], [0, 240]);
  const orbThreeY = useTransform(scrollY, [0, 3000], [0, -200]);
  const bandY = useTransform(scrollY, [0, 3000], [0, -170]);
  const gridY = useTransform(scrollY, [0, 3000], [0, -120]);
  const leftFoliageY = useTransform(scrollY, [0, 3000], [0, -260]);
  const rightFoliageY = useTransform(scrollY, [0, 3000], [0, 180]);
  const canopyY = useTransform(scrollY, [0, 3000], [0, -140]);

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
      <motion.div
        className="site-parallax-band top-[18%] left-[-10%] w-[65vw]"
        style={{ y: bandY, rotate: -8 }}
      />
      <motion.div
        className="site-parallax-band bottom-[14%] right-[-12%] w-[58vw]"
        style={{ y: useTransform(bandY, (value) => value * -0.7), rotate: 12 }}
      />
      <motion.div className="site-parallax-foliage site-foliage-left left-[-5rem] bottom-[-8rem]" style={{ y: leftFoliageY }} />
      <motion.div className="site-parallax-foliage site-foliage-right right-[-5rem] bottom-[-10rem]" style={{ y: rightFoliageY }} />
      {[
        { left: "16%", top: "22%", size: 14, range: -180 },
        { left: "29%", top: "54%", size: 10, range: 160 },
        { left: "48%", top: "30%", size: 12, range: -140 },
        { left: "72%", top: "48%", size: 16, range: 220 },
        { left: "84%", top: "20%", size: 9, range: -120 },
      ].map((particle, index) => (
        <motion.div
          key={index}
          className="site-parallax-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            y: useTransform(scrollY, [0, 3000], [0, particle.range]),
          }}
        />
      ))}
    </div>
  );
}
