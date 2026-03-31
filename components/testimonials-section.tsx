"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const next = () => setIndex((value) => (value + 1) % testimonials.length);
  const prev = () => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length);

  return (
    <AnimatedSection className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            tag="Testimonials"
            title="Clients remember the atmosphere as much as the event itself."
            description="A rotating carousel of experiences from productions, couples, and planners who chose Gulab Singh Film City for its visuals and flexibility."
          />

          <motion.div
            whileHover={{ y: -8 }}
            className="hover-glow-card relative overflow-hidden rounded-[34px] border border-white/10 bg-white/10 p-6 shadow-glow sm:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(90,255,150,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(212,175,104,0.14),transparent_30%)]" />
            <Quote className="text-gold/70" size={38} />
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="mt-6"
              >
                <p className="text-xl leading-9 text-white/88">{testimonials[index].quote}</p>
                <div className="mt-8">
                  <p className="text-lg font-semibold text-white">{testimonials[index].name}</p>
                  <p className="text-sm text-gold">{testimonials[index].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                className="rounded-full border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/15"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="rounded-full border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/15"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
