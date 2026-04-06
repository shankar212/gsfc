"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function AnimatedSection({ id, className, children }: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const orbOneRaw = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 40, reduceMotion ? 0 : -32]);
  const orbTwoRaw = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -18, reduceMotion ? 0 : 52]);
  const gridRaw = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -22]);
  const streakRaw = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -14, reduceMotion ? 0 : 30]);
  const contentRawY = useTransform(scrollYProgress, [0, 0.25, 1], [reduceMotion ? 0 : 18, 0, reduceMotion ? 0 : -8]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.06, 1], [0.84, 1, 1]);
  const contentScale = useTransform(scrollYProgress, [0, 0.2, 1], [0.995, 1, 1]);

  const orbOneY = useSpring(orbOneRaw, { stiffness: 90, damping: 24, mass: 0.45 });
  const orbTwoY = useSpring(orbTwoRaw, { stiffness: 90, damping: 24, mass: 0.45 });
  const gridY = useSpring(gridRaw, { stiffness: 90, damping: 24, mass: 0.45 });
  const streakX = useSpring(streakRaw, { stiffness: 90, damping: 24, mass: 0.45 });
  const contentY = useSpring(contentRawY, { stiffness: 110, damping: 26, mass: 0.42 });

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
      {!reduceMotion && <motion.div className="parallax-grid" style={{ y: gridY }} />}
      {!reduceMotion && (
        <motion.div
          className="parallax-orb left-[-4rem] top-[18%] h-44 w-44 bg-emerald-400/10"
          style={{ y: orbOneY }}
        />
      )}
      {!reduceMotion && (
        <motion.div
          className="parallax-orb right-[-3rem] top-[56%] h-36 w-36 bg-gold/10"
          style={{ y: orbTwoY }}
        />
      )}
      {!reduceMotion && <motion.div className="parallax-streak left-[8%] top-[24%] w-44" style={{ x: streakX }} />}
      <motion.div style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}>
        {children}
      </motion.div>
    </motion.section>
  );
}
