"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Clapperboard, Expand, ImagePlay, Sparkles, Waves } from "lucide-react";
import { useEffect, useState } from "react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { mediaHighlights, mediaVideos } from "@/lib/content";

const mediaFeatures = [
  {
    icon: ImagePlay,
    title: "Reel-ready visuals",
    copy: "Spaces designed to look rich in motion for Instagram reels, promos, and teaser edits.",
  },
  {
    icon: Clapperboard,
    title: "Shoot atmosphere",
    copy: "Fantasy greenery, scenic park views, and outdoor frames that hold cinematic depth on camera.",
  },
  {
    icon: Waves,
    title: "Water and light mood",
    copy: "Reflective edges, dreamy highlights, and evening ambience that elevate every visual story.",
  },
];

export function MediaSection() {
  const [index, setIndex] = useState(0);
  const [activeImage, setActiveImage] = useState<(typeof mediaHighlights)[number] | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % mediaVideos.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const currentVideo = mediaVideos[index];
  const next = () => setIndex((value) => (value + 1) % mediaVideos.length);
  const prev = () => setIndex((value) => (value - 1 + mediaVideos.length) % mediaVideos.length);

  return (
    <AnimatedSection id="media" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <SectionHeading
            tag="Media"
            title="A media-ready destination for reels, stories, and cinematic venue coverage."
            description="Beyond still photography, Gulab Singh Film City is built for moving visuals. Capture dreamy social edits, behind-the-scenes footage, event recaps, and location promos in one immersive environment."
          />

          <div className="hero-card hover-glow-card overflow-hidden rounded-[34px] p-5 sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[22rem] overflow-hidden rounded-[28px] border border-black/10 dark:border-white/10">
                <Image
                  src="/images/image9.jpeg"
                  alt="Fantasy media showcase at Gulab Singh Film City"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/60 dark:bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold backdrop-blur-xl">
                  <Sparkles size={14} />
                  Featured Media
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="max-w-md text-2xl font-semibold text-black dark:text-white">
                    Fantasy frames for scenic promos, pre-wedding reels, and event storytelling.
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {mediaFeatures.map(({ icon: Icon, title, copy }) => (
                  <div key={title} className="rounded-[24px] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/5 dark:bg-white/5 p-5">
                    <div className="inline-flex rounded-2xl border border-gold/20 bg-gold/10 p-3 text-gold">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-black/66 dark:text-white/66">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/5 dark:bg-white/10 p-4 shadow-sm dark:shadow-glow sm:rounded-[34px] sm:p-5">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Video Slides</p>
              <h3 className="mt-2 text-xl font-semibold text-black dark:text-white sm:text-2xl">Moving visuals from across the venue</h3>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/5 dark:bg-white/10 p-3 text-black dark:text-white transition hover:bg-white/15"
                onClick={prev}
                aria-label="Previous video"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/5 dark:bg-white/10 p-3 text-black dark:text-white transition hover:bg-white/15"
                onClick={next}
                aria-label="Next video"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative overflow-hidden rounded-[28px] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVideo.src}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.45 }}
                  className="relative"
                >
                  <div className="aspect-[16/10]">
                    <video
                      src={currentVideo.src}
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                    />
                  </div>
                  <button
                    type="button"
                    className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black dark:text-white backdrop-blur-xl transition hover:bg-black/50"
                    onClick={() => setShowVideoModal(true)}
                  >
                    <Expand size={14} />
                    Full View
                  </button>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5">
                    <p className="text-xl font-semibold text-black dark:text-white">{currentVideo.title}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-1 lg:grid lg:overflow-visible lg:pb-0">
              {mediaVideos.map((video, videoIndex) => (
                <button
                  key={video.src}
                  type="button"
                  onClick={() => setIndex(videoIndex)}
                  className={`min-w-[210px] rounded-[22px] border px-4 py-4 text-left transition lg:min-w-0 ${
                    videoIndex === index
                      ? "border-gold/35 bg-gold/10 text-black dark:text-white"
                      : "border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/5 dark:bg-white/5 text-black/72 dark:text-white/72 hover:bg-white/10"
                  }`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold/90">
                    Clip {videoIndex + 1}
                  </p>
                  <p className="mt-2 text-base font-semibold">{video.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mediaHighlights.map((item) => (
            <article
              key={item.title}
              className="group hover-glow-card overflow-hidden rounded-[30px] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/5 dark:bg-white/10 shadow-md dark:shadow-glass"
            >
              <button
                type="button"
                className="relative h-72 w-full overflow-hidden text-left"
                onClick={() => setActiveImage(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-black dark:text-white backdrop-blur-xl">
                  {item.tag}
                </div>
              </button>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/66 dark:text-white/66">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-white/60 dark:bg-black/90 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-black/10 dark:border-white/10 bg-mist dark:bg-black"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="aspect-video">
                <video
                  src={currentVideo.src}
                  className="h-full w-full object-contain bg-mist dark:bg-black"
                  controls
                  autoPlay
                  playsInline
                />
              </div>
              <div className="absolute left-4 top-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-black/40 px-4 py-2 text-sm font-medium text-black dark:text-white backdrop-blur-xl"
                  onClick={() => setShowVideoModal(false)}
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-white/60 dark:bg-black/90 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-black/10 dark:border-white/10"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[16/10]">
                <Image src={activeImage.image} alt={activeImage.title} fill className="object-contain bg-mist dark:bg-black" sizes="100vw" />
              </div>
              <div className="absolute left-4 top-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-black/40 px-4 py-2 text-sm font-medium text-black dark:text-white backdrop-blur-xl"
                  onClick={() => setActiveImage(null)}
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
