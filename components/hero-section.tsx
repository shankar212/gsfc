"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { FantasyGarden } from "@/components/fantasy-garden";
import { FloatingLeaves } from "@/components/floating-leaves";
import { NatureBackdrop } from "@/components/nature-backdrop";
import { TreeBranch } from "@/components/tree-branch";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { contactInfo } from "@/lib/content";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const targetRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const disableHeavyMotion = reduceMotion || isMobile;

  const videoRawY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 160]);
  const contentRawY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -44]);
  const sideRawY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -72]);

  const haloX = useTransform(mouseX, [-0.5, 0.5], [disableHeavyMotion ? 0 : -30, disableHeavyMotion ? 0 : 30]);
  const haloY = useTransform(mouseY, [-0.5, 0.5], [disableHeavyMotion ? 0 : -20, disableHeavyMotion ? 0 : 20]);
  const panelX = useTransform(mouseX, [-0.5, 0.5], [disableHeavyMotion ? 0 : -16, disableHeavyMotion ? 0 : 16]);
  const panelY = useTransform(mouseY, [-0.5, 0.5], [disableHeavyMotion ? 0 : -12, disableHeavyMotion ? 0 : 12]);
  const secondaryHaloX = useTransform(haloX, (value) => value * -0.7);
  const secondaryHaloY = useTransform(haloY, (value) => value * -0.6);
  const videoY = useSpring(videoRawY, { stiffness: 82, damping: 24, mass: 0.6 });
  const contentY = useSpring(contentRawY, { stiffness: 88, damping: 24, mass: 0.56 });
  const sideY = useSpring(sideRawY, { stiffness: 88, damping: 24, mass: 0.56 });
  const panelOffsetY = useTransform(() => panelY.get() + sideY.get());
  const mistY = useSpring(useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -110]), { stiffness: 78, damping: 22, mass: 0.6 });
  const branchY = useSpring(useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -56]), { stiffness: 82, damping: 24, mass: 0.58 });

  const radialGlow = useMotionTemplate`radial-gradient(circle at ${useTransform(mouseX, [-0.5, 0.5], [35, 65])}% ${useTransform(mouseY, [-0.5, 0.5], [30, 60])}%, rgba(75, 255, 145, 0.18), transparent 32%)`;

  useEffect(() => {
    if (disableHeavyMotion) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX / window.innerWidth - 0.5);
      mouseY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [disableHeavyMotion, mouseX, mouseY]);

  return (
    <section ref={targetRef} id="home" className="snap-section relative min-h-screen overflow-hidden">
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
      <div className="absolute inset-0 bg-white/50 dark:bg-hero-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,104,0.16),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,5,0.15),rgba(2,8,5,0.66))]" />
      {!disableHeavyMotion && <motion.div className="absolute inset-0 opacity-90" style={{ backgroundImage: radialGlow }} />}
      {!disableHeavyMotion && (
        <>
          <motion.div
            className="absolute left-[10%] top-[14%] h-48 w-48 rounded-full bg-emerald-300/18 blur-[100px]"
            style={{ x: haloX, y: haloY }}
          />
          <motion.div
            className="absolute bottom-[10%] right-[18%] h-56 w-56 rounded-full bg-gold/14 blur-[120px]"
            style={{ x: secondaryHaloX, y: secondaryHaloY }}
          />
          <motion.div
            className="absolute inset-x-[12%] top-[16%] h-56 rounded-full bg-[radial-gradient(circle,rgba(130,255,186,0.14),transparent_68%)] blur-[90px]"
            style={{ y: mistY }}
          />
        </>
      )}
      <div className="ambient-line hidden sm:block left-[8%] top-[18%] w-[18rem]" />
      <div className="ambient-line hidden sm:block right-[8%] top-[72%] w-[22rem]" />
      {!disableHeavyMotion && (
        <>
          <motion.div style={{ y: branchY }} className="absolute inset-0 opacity-75 sm:opacity-100">
            <TreeBranch className="top-[4%] sm:top-[2%]" />
          </motion.div>
          <div className="absolute inset-0 opacity-75 sm:opacity-100">
            <NatureBackdrop variant="hero" />
          </div>
          <div className="absolute inset-0 opacity-65 sm:opacity-100">
            <FantasyGarden mode="hero" />
          </div>
          <div className="absolute inset-0 opacity-70 sm:opacity-100">
            <FloatingLeaves />
          </div>
        </>
      )}

      <motion.div
        className="section-shell relative z-[4] flex min-h-screen items-center py-24 sm:py-28"
        style={{ y: contentY }}
      >
        <div className="w-full max-w-4xl">
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
            className="mt-5 max-w-4xl text-[2.9rem] font-semibold leading-[0.98] text-black dark:text-white sm:mt-6 sm:text-6xl lg:text-8xl"
          >
            Gulab Singh Film City
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-4 inline-flex max-w-full flex-wrap items-center gap-2.5 rounded-[22px] border border-emerald-200/15 bg-emerald-300/10 px-4 py-2 text-xs text-emerald-50/90 backdrop-blur-xl sm:mt-5 sm:rounded-full sm:gap-3 sm:text-sm"
          >
            <Sparkles size={16} className="text-gold" />
            <span className="max-w-full text-left sm:whitespace-normal">
              Fantasy greenery, cinematic waterlines, and living outdoor frames
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base leading-7 text-black/80 dark:text-white/80 sm:mt-6 sm:text-xl sm:leading-8"
          >
            A Perfect Destination for Shoots & Events
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24 }}
            className="mt-5 max-w-xl rounded-[22px] border border-emerald-200/10 bg-emerald-950/18 px-4 py-4 backdrop-blur-xl sm:mt-6 sm:rounded-[26px] sm:px-5"
          >
            <p className="text-sm leading-6 text-black/68 dark:text-white/68 sm:leading-7">
              Enter a magical world of scenic park views, fantasy greenery, reflective water edges, and premium open-air spaces crafted for shoots, celebrations, and unforgettable moments.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          >
            <a href="#locations" className="glow-button w-full sm:w-auto">
              Explore Locations
            </a>
            <a href="#inquiry" className="ghost-button w-full sm:w-auto">
              Book Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 grid max-w-3xl gap-3 sm:mt-14 sm:gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {[
              ["Film Shoots", "Outdoor cinematic locations"],
              ["Pre-weddings", "Scenic frames with atmosphere"],
              ["Events", "Premium venue with visual impact"],
            ].map(([title, copy]) => (
              <motion.div
                key={title}
                whileHover={{ y: -8, scale: 1.02 }}
                className="hero-card hover-glow-card rounded-[22px] p-4"
              >
                <p className="text-sm font-semibold text-black dark:text-white">{title}</p>
                <p className="mt-2 text-sm text-black/65 dark:text-white/65">{copy}</p>
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
            <div className="rounded-[28px] border border-emerald-100/10 bg-white/60 dark:bg-black/25 p-6">
              <p className="text-xs uppercase tracking-[0.34em] text-gold">Visual Signature</p>
              <h3 className="mt-4 text-2xl font-semibold text-black dark:text-white">
                A dreamlike backdrop where greenery, light, and water move like a scene.
              </h3>
              <p className="mt-4 text-sm leading-7 text-black/68 dark:text-white/68">
                Layered foliage glow, cinematic depth, and premium outdoor textures help every frame feel richer before the camera even rolls.
              </p>
              <div className="mt-6 grid gap-3">
                {["Living gardens", "Reflective water edges", "Golden-hour fantasy mood"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/5 dark:bg-white/5 px-4 py-3 text-sm text-black/84 dark:text-white/84"
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
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sm text-black/78 dark:text-white/78 sm:flex"
      >
        <span>Scroll</span>
        <ChevronDown className="animate-float" size={18} />
      </motion.a>
    </section>
  );
}
