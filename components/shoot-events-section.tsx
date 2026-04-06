"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Clapperboard, Expand, PlayCircle, Sparkles, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { shootEventMedia } from "@/lib/content";

export function ShootEventsSection() {
  const [index, setIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"landscape" | "vertical">("vertical");
  const [isMuted, setIsMuted] = useState(true);
  const [activeImage, setActiveImage] = useState<(typeof shootEventMedia.images)[number] | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const currentVideo = shootEventMedia.videos[index];

  const next = () => setIndex((value) => (value + 1) % shootEventMedia.videos.length);
  const prev = () =>
    setIndex((value) => (value - 1 + shootEventMedia.videos.length) % shootEventMedia.videos.length);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted, index]);

  useEffect(() => {
    const frame = frameRef.current;
    const video = videoRef.current;

    if (!frame || !video) {
      return;
    }

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!videoRef.current) {
          return;
        }

        if (entry.isIntersecting) {
          try {
            await videoRef.current.play();
          } catch {
            videoRef.current.muted = true;
            setIsMuted(true);
            await videoRef.current.play().catch(() => undefined);
          }
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.55 }
    );

    observer.observe(frame);

    return () => observer.disconnect();
  }, [index]);

  return (
    <AnimatedSection className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            tag="Shoot Events"
            title="Real shoot and event moments captured directly from the venue."
            description="A dedicated showcase from our own shoot events collection, featuring playable videos and live event photos that help visitors feel the energy of the venue."
          />

          <div className="hero-card hover-glow-card rounded-[32px] p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/10 px-4 py-3 text-sm text-black/85 dark:text-white/85">
                <Sparkles size={16} className="text-gold" />
                Real venue media
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/5 dark:bg-white/10 p-3 text-black dark:text-white transition hover:bg-white/15"
                  onClick={prev}
                  aria-label="Previous shoot event video"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/5 dark:bg-white/10 p-3 text-black dark:text-white transition hover:bg-white/15"
                  onClick={next}
                  aria-label="Next shoot event video"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="overflow-hidden rounded-[32px] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/5 dark:bg-white/10 p-4 shadow-sm dark:shadow-glow">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVideo.src}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  ref={frameRef}
                  className="relative overflow-hidden rounded-[26px] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/25"
                >
                  <div className="absolute inset-x-3 bottom-3 z-10 flex flex-col gap-3 sm:inset-x-auto sm:bottom-4 sm:right-4 sm:max-w-[calc(100%-2rem)]">
                    <div className="inline-flex w-fit rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-black/35 p-1 backdrop-blur-xl">
                      <button
                        type="button"
                        onClick={() => setViewMode("landscape")}
                        className={`rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition sm:px-4 ${
                          viewMode === "landscape" ? "bg-gold text-black" : "text-black/72 dark:text-white/72"
                        }`}
                      >
                        Landscape
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode("vertical")}
                        className={`rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition sm:px-4 ${
                          viewMode === "vertical" ? "bg-gold text-black" : "text-black/72 dark:text-white/72"
                        }`}
                      >
                        Vertical
                      </button>
                    </div>
                    <button
                      type="button"
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-black/35 px-3 py-2 text-xs text-black dark:text-white backdrop-blur-xl transition hover:bg-black/45 sm:px-4"
                      onClick={() => setIsMuted((value) => !value)}
                      aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                      {isMuted ? "Unmute" : "Sound"}
                    </button>
                  </div>
                  <div
                    className={`${
                      viewMode === "vertical"
                        ? "mx-auto aspect-[9/16] max-w-[380px]"
                        : "aspect-video"
                    }`}
                  >
                    <video
                      ref={videoRef}
                      src={currentVideo.src}
                      className="h-full w-full object-cover"
                      controls
                      muted={isMuted}
                      loop
                      playsInline
                      preload="metadata"
                    />
                  </div>
                  <button
                    type="button"
                    className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black dark:text-white backdrop-blur-xl transition hover:bg-black/50"
                    onClick={() => setShowVideoModal(true)}
                  >
                    <Expand size={14} />
                    Full View
                  </button>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 pb-28 sm:pb-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-black/25 px-3 py-2 text-xs uppercase tracking-[0.24em] text-gold backdrop-blur-xl">
                      <PlayCircle size={14} />
                      Playable Video
                    </div>
                    <p className="mt-3 text-xl font-semibold text-black dark:text-white">{currentVideo.title}</p>
                    <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                      Video plays when visible on screen and pauses when scrolled away. Use sound and vertical controls here.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {shootEventMedia.images.map((item) => (
              <article
                key={item.title}
                className="group hover-glow-card overflow-hidden rounded-[28px] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/5 dark:bg-white/10 shadow-md dark:shadow-glass"
              >
                <button
                  type="button"
                  className="relative h-64 w-full overflow-hidden text-left"
                  onClick={() => setActiveImage(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.22em] text-black dark:text-white backdrop-blur-xl">
                    <Clapperboard size={12} className="mr-2 text-gold" />
                    Live Capture
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-lg font-semibold text-black dark:text-white">{item.title}</p>
                  </div>
                </button>
              </article>
            ))}
          </div>
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
              className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-black/10 dark:border-white/10 bg-mist dark:bg-black"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className={viewMode === "vertical" ? "mx-auto aspect-[9/16] max-w-[460px]" : "aspect-video"}>
                <video
                  src={currentVideo.src}
                  className="h-full w-full object-contain bg-mist dark:bg-black"
                  controls
                  autoPlay
                  muted={isMuted}
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
