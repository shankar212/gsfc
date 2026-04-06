import { PlayCircle } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { contactInfo } from "@/lib/content";

export function VideoSection() {
  return (
    <AnimatedSection className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[36px] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/5 dark:bg-white/10 p-5 shadow-sm dark:shadow-glow md:p-8">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              tag="Video"
              title="Explore Our Film City"
              description="A cinematic walkthrough that helps clients experience the scale, natural textures, and premium mood of the destination before they arrive."
            />
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/10 px-5 py-3 text-sm text-black/80 dark:text-white/80">
              <PlayCircle className="text-gold" size={18} />
              Visual-first venue preview
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-black/10 dark:border-white/10">
            <div className="aspect-video">
              <iframe
                src={contactInfo.videoUrl}
                title="Explore Our Film City"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
