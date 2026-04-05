import { ExternalLink, PlayCircle, Youtube } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { youtubeInfo } from "@/lib/content";

export function YoutubeSection() {
  return (
    <AnimatedSection id="youtube" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-4 shadow-glow sm:rounded-[36px] sm:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                tag="YouTube"
                title="Watch Gulab Singh Film City in motion on our YouTube channel."
                description="Explore our latest venue visuals, scenic reels, event clips, and fantasy outdoor moments through our official YouTube presence."
              />

              <div className="mt-8 grid gap-4">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <div className="inline-flex rounded-2xl border border-red-400/20 bg-red-500/10 p-3 text-red-300">
                    <Youtube size={20} />
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-gold">Official Channel</p>
                  <p className="mt-2 text-lg font-semibold text-white">{youtubeInfo.channelLabel}</p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={youtubeInfo.channelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="glow-button w-full sm:w-auto"
                  >
                    Visit Channel
                  </a>
                  <a
                    href={youtubeInfo.watchUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ghost-button w-full sm:w-auto"
                  >
                    Watch On YouTube
                  </a>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/10">
              <div className="aspect-video">
                <iframe
                  src={youtubeInfo.videoUrl}
                  title="Gulab Singh Film City YouTube video"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-gold">Featured Video</p>
                  <p className="mt-1 text-base font-semibold text-white sm:text-lg">Latest YouTube showcase</p>
                </div>
                <a
                  href={youtubeInfo.watchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-black/45"
                >
                  <PlayCircle size={16} />
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
