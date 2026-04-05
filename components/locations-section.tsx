"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPinned } from "lucide-react";
import { useRef } from "react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { locationCards } from "@/lib/content";

export function LocationsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], [45, -30]);

  return (
    <AnimatedSection id="locations" className="py-24 sm:py-28">
      <div ref={ref} className="section-shell">
        <SectionHeading
          tag="Locations"
          title="Scenic spots designed to elevate every production and celebration."
          description="Explore lush gardens, open-air event spaces, outdoor sets, and naturally photogenic corners built for films, wedding stories, and branded shoots."
        />

        <motion.div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4" style={{ y: cardsY }}>
          {locationCards.map((card) => (
            <motion.article
              key={card.title}
              whileHover={{ y: -10 }}
              className="group hover-glow-card overflow-hidden rounded-[30px] border border-white/10 bg-white/10 shadow-glass"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.12]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(90,255,150,0.16),transparent_40%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
              <div className="space-y-4 p-6">
                <div className="inline-flex rounded-full border border-gold/20 bg-gold/10 p-3 text-gold">
                  <MapPinned size={18} />
                </div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="text-sm leading-7 text-white/68">{card.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
