"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { galleryImages } from "@/lib/content";

export function GallerySection() {
  const [activeImage, setActiveImage] = useState<(typeof galleryImages)[number] | null>(null);

  return (
    <AnimatedSection id="gallery" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          tag="Gallery"
          title="An immersive visual gallery of cinematic landscapes and venue moods."
          description="Hover to explore details, then open the lightbox for a larger view of the atmosphere, textures, and premium frames available across the property."
          align="center"
        />

        <div className="masonry-grid mt-12">
          {galleryImages.map((item) => (
            <button
              key={item.title}
              type="button"
              className={`masonry-item group relative w-full overflow-hidden rounded-[28px] ${item.height}`}
              onClick={() => setActiveImage(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                <p className="text-lg font-semibold text-black dark:text-white">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-white/60 dark:bg-black/85 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-black/10 dark:border-white/10"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[16/10]">
                <Image src={activeImage.image} alt={activeImage.title} fill className="object-cover" sizes="100vw" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <p className="text-2xl font-semibold text-black dark:text-white">{activeImage.title}</p>
              </div>
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full border border-black/10 dark:border-white/20 bg-white/60 dark:bg-black/30 p-3 text-black dark:text-white"
                onClick={() => setActiveImage(null)}
                aria-label="Close gallery preview"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
