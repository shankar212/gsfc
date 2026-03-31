"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function AnimatedSection({ id, className, children }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={`snap-section ${className ?? ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
