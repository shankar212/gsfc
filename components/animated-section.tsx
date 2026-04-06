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

  const orbOneY = useTransform(scrollYProgress, [0, 1], [50, -40]);
  const orbTwoY = useTransform(scrollYProgress, [0, 1], [-24, 64]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const streakX = useTransform(scrollYProgress, [0, 1], [-18, 36]);
  const contentY = useTransform(scrollYProgress, [0, 0.25, 1], [24, 0, -10]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.08, 1], [0.78, 1, 1]);
  const contentScale = useTransform(scrollYProgress, [0, 0.2, 1], [0.99, 1, 1]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`snap-section relative overflow-hidden ${className ?? ""}`}
      initial={{ opacity: 0.88, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.42, ease: "easeOut" }}
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
