"use client";

import { motion } from "framer-motion";
import { Camera, Clapperboard, Landmark, Sparkles } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

const serviceCards = [
  {
    title: "Film Shooting",
    copy: "Expansive outdoor spaces and scenic setups that adapt beautifully to cinematic production needs.",
    icon: Clapperboard,
  },
  {
    title: "Pre-wedding Shoots",
    copy: "Romantic natural backdrops, golden-hour views, and elegant corners for unforgettable couple stories.",
    icon: Camera,
  },
  {
    title: "Events & Functions",
    copy: "A venue that feels elevated, photogenic, and immersive for celebrations and curated experiences.",
    icon: Sparkles,
  },
  {
    title: "Rentals",
    copy: "Flexible location access for creators, organizers, and brands looking for premium outdoor visuals.",
    icon: Landmark,
  },
];

export function ServicesSection() {
  return (
    <AnimatedSection id="services" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          tag="Services"
          title="Premium experiences built for shoots, stories, and standout events."
          description="Whether you are planning a feature scene, a romantic visual story, or a high-impact gathering, the venue is designed to deliver atmosphere, flexibility, and strong visuals."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map(({ icon: Icon, title, copy }) => (
            <motion.div
              key={title}
              whileHover={{ y: -10, scale: 1.01 }}
              className="soft-card hover-glow-card relative overflow-hidden p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(90,255,150,0.12),transparent_36%)] opacity-0 transition duration-500 hover:opacity-100" />
              <div className="inline-flex rounded-2xl border border-gold/20 bg-gold/10 p-3 text-gold">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
