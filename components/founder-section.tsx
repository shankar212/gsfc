import Image from "next/image";
import { Quote } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { founderMessage } from "@/lib/content";

export function FounderSection() {
  return (
    <AnimatedSection className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/10 p-3 shadow-glow">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src={founderMessage.image}
                alt={founderMessage.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            </div>
          </div>

          <div className="hero-card hover-glow-card rounded-[36px] p-6 sm:p-8">
            <SectionHeading
              tag="Founder Message"
              title="A destination imagined as a living scenic world for shoots, memories, and celebrations."
              description="The heart behind Gulab Singh Film City is not just creating a venue, but crafting an experience that feels magical, scenic, and welcoming for every visitor."
            />
            <div className="mt-8 rounded-[28px] border border-white/10 bg-black/20 p-6">
              <Quote className="text-gold/75" size={34} />
              <p className="mt-5 text-lg leading-9 text-white/84">{founderMessage.quote}</p>
              <div className="mt-8">
                <p className="text-xl font-semibold text-white">{founderMessage.name}</p>
                <p className="text-sm uppercase tracking-[0.24em] text-gold">{founderMessage.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
