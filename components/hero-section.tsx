"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useEffect } from "react";

import { FantasyGarden } from "@/components/fantasy-garden";
import { FloatingLeaves } from "@/components/floating-leaves";
import { NatureBackdrop } from "@/components/nature-backdrop";
import { TreeBranch } from "@/components/tree-branch";
import { contactInfo } from "@/lib/content";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();

  const videoY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const sideY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const haloX = useTransform(mouseX, [-0.5, 0.5], [-30, 30]);
  const haloY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);
  const panelX = useTransform(mouseX, [-0.5, 0.5], [-16, 16]);
  const panelY = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);
  const secondaryHaloX = useTransform(haloX, (value) => value * -0.7);
  const secondaryHaloY = useTransform(haloY, (value) => value * -0.6);
  const panelOffsetY = useTransform(() => panelY.get() + sideY.get());

  const radialGlow = useMotionTemplate`radial-gradient(circle at ${useTransform(mouseX, [-0.5, 0.5], [35, 65])}% ${useTransform(mouseY, [-0.5, 0.5], [30, 60])}%, rgba(75, 255, 145, 0.18), transparent 32%)`;

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX / window.innerWidth - 0.5);
      mouseY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="snap-section relative min-h-screen overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: videoY }}>
        <video
          className="absolute inset-0 h-full w-full scale-110 object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={contactInfo.heroVideo} type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,104,0.16),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,5,0.15),rgba(2,8,5,0.66))]" />
      <motion.div className="absolute inset-0 opacity-90" style={{ backgroundImage: radialGlow }} />
      <motion.div
        className="absolute left-[10%] top-[14%] h-48 w-48 rounded-full bg-emerald-300/18 blur-[100px]"
        style={{ x: haloX, y: haloY }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[18%] h-56 w-56 rounded-full bg-gold/14 blur-[120px]"
        style={{ x: secondaryHaloX, y: secondaryHaloY }}
      />
      <div className="ambient-line left-[8%] top-[18%] w-[18rem]" />
      <div className="ambient-line right-[8%] top-[72%] w-[22rem]" />
      <TreeBranch className="top-[2%]" />
      <NatureBackdrop variant="hero" />
      <FantasyGarden mode="hero" />
      <FloatingLeaves />

      <motion.div className="section-shell relative z-[4] flex min-h-screen items-center py-28" style={{ y: contentY }}>
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-tag"
          >
            Adilabad, Telangana
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-8xl"
          >
            Gulab Singh Film City
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-5 inline-flex items-center gap-3 rounded-full border border-emerald-200/15 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-50/90 backdrop-blur-xl"
          >
            <Sparkles size={16} className="text-gold" />
            Fantasy greenery, cinematic waterlines, and living outdoor frames
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl"
          >
            A Perfect Destination for Shoots & Events
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24 }}
            className="mt-6 max-w-xl rounded-[26px] border border-emerald-200/10 bg-emerald-950/18 px-5 py-4 backdrop-blur-xl"
          >
            <p className="text-sm leading-7 text-white/68">
              Enter a magical world of scenic park views, fantasy greenery, reflective water edges, and premium open-air spaces crafted for shoots, celebrations, and unforgettable moments.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#locations"
              className="glow-button"
            >
              Explore Locations
            </a>
            <a href="#inquiry" className="ghost-button">
              Book Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 grid max-w-3xl gap-4 sm:grid-cols-3"
          >
            {[
              ["Film Shoots", "Outdoor cinematic locations"],
              ["Pre-weddings", "Scenic frames with atmosphere"],
              ["Events", "Premium venue with visual impact"],
            ].map(([title, copy]) => (
              <motion.div
                key={title}
                whileHover={{ y: -8, scale: 1.02 }}
                className="hero-card hover-glow-card rounded-[24px] p-4"
              >
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm text-white/65">{copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="relative ml-auto hidden w-full max-w-md xl:block"
          style={{ x: panelX, y: panelOffsetY }}
        >
          <div className="hero-card hover-glow-card rounded-[36px] p-6">
            <div className="rounded-[28px] border border-emerald-100/10 bg-black/25 p-6">
              <p className="text-xs uppercase tracking-[0.34em] text-gold">Visual Signature</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                A dreamlike backdrop where greenery, light, and water move like a scene.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/68">
                Layered foliage glow, cinematic depth, and premium outdoor textures help every frame feel richer before the camera even rolls.
              </p>
              <div className="mt-6 grid gap-3">
                {["Living gardens", "Reflective water edges", "Golden-hour fantasy mood"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/84"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-sm text-white/78"
      >
        <span>Scroll</span>
        <ChevronDown className="animate-float" size={18} />
      </motion.a>
    </section>
  );
}
