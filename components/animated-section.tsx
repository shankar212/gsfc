"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function AnimatedSection({ id, className, children }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const orbOneY = useTransform(scrollYProgress, [0, 1], [90, -80]);
  const orbTwoY = useTransform(scrollYProgress, [0, 1], [-40, 120]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const streakX = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  const contentY = useTransform(scrollYProgress, [0, 0.4, 1], [70, 0, -24]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.18, 1, 1, 0.82]);
  const contentScale = useTransform(scrollYProgress, [0, 0.35, 1], [0.965, 1, 0.985]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`snap-section relative overflow-hidden ${className ?? ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div className="parallax-grid" style={{ y: gridY }} />
      <motion.div
        className="parallax-orb left-[-4rem] top-[18%] h-44 w-44 bg-emerald-400/10"
        style={{ y: orbOneY }}
      />
      <motion.div
        className="parallax-orb right-[-3rem] top-[56%] h-36 w-36 bg-gold/10"
        style={{ y: orbTwoY }}
      />
      <motion.div className="parallax-streak left-[8%] top-[24%] w-44" style={{ x: streakX }} />
      <motion.div style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}>
        {children}
      </motion.div>
    </motion.section>
  );
}
