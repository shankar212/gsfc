"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Clapperboard, PartyPopper } from "lucide-react";
import { useRef } from "react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { useIsMobile } from "@/hooks/use-is-mobile";

const highlights = [
  {
    title: "Film Shooting Destination",
    description: "Versatile outdoor landscapes designed to feel expansive on screen.",
    icon: Clapperboard,
  },
  {
    title: "Scenic Beauty",
    description: "Greens, water, and textured natural backdrops for cinematic depth.",
    icon: Camera,
  },
  {
    title: "Event Hosting",
    description: "A visual-first venue for celebrations, launches, and intimate gatherings.",
    icon: PartyPopper,
  },
];

export function AboutSection() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const collageY = useTransform(scrollYProgress, [0, 1], [isMobile ? 0 : 50, isMobile ? 0 : -35]);
  const sidebarY = useTransform(scrollYProgress, [0, 1], [isMobile ? 0 : 20, isMobile ? 0 : -20]);

  return (
    <AnimatedSection id="about" className="relative py-24 sm:py-28">
      <div ref={ref} className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div style={{ y: collageY }}>
            <SectionHeading
              tag="About"
              title="A scenic film city crafted for stories, celebrations, and unforgettable frames."
              description="Gulab Singh Film City in Adilabad blends cinematic landscapes, open-air sets, lush gardens, and premium event-ready spaces into one destination built for visual impact."
            />
            <div className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-3 shadow-glow">
              <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                <div className="relative min-h-[22rem] overflow-hidden rounded-[26px]">
                  <Image
                    src="/images/image11.jpeg"
                    alt="Scenic beauty of Gulab Singh Film City"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="grid gap-3">
                  <div className="relative min-h-[10.5rem] overflow-hidden rounded-[22px]">
                    <Image
                      src="/images/image2.jpeg"
                      alt="Outdoor locations at Gulab Singh Film City"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 20vw"
                    />
                  </div>
                  <div className="relative min-h-[10.5rem] overflow-hidden rounded-[22px]">
                    <Image
                      src="/images/image4.jpeg"
                      alt="Photo shoot corner at Gulab Singh Film City"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 20vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="grid gap-4" style={{ y: sidebarY }}>
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="soft-card p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-gold/25 bg-gold/10 p-3 text-gold">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/68">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
