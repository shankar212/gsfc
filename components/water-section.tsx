import Image from "next/image";
import { Waves } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { waterActivities } from "@/lib/content";

export function WaterSection() {
  return (
    <AnimatedSection className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            tag="Water Activities"
            title="Swimming pool and waterside zones that add drama, calm, and luxury to every frame."
            description="Create glamorous poolside visuals, tranquil reflective scenes, and premium event moments with water-facing settings designed to stand out in both films and celebrations."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {waterActivities.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10">
                <div className="relative h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="inline-flex rounded-full border border-gold/20 bg-gold/10 p-3 text-gold">
                    <Waves size={18} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
