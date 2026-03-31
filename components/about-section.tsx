import { Camera, Clapperboard, PartyPopper } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

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
  return (
    <AnimatedSection id="about" className="relative py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              tag="About"
              title="A scenic film city crafted for stories, celebrations, and unforgettable frames."
              description="Gulab Singh Film City in Adilabad blends cinematic landscapes, open-air sets, lush gardens, and premium event-ready spaces into one destination built for visual impact."
            />
          </div>
          <div className="grid gap-4">
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
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
