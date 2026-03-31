import { MapPinned, PhoneCall } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { contactInfo } from "@/lib/content";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              tag="Contact"
              title="Visit the venue, speak with the team, and plan your next booking."
              description="Located in Adilabad, Telangana, Gulab Singh Film City offers a strong visual identity for productions, private events, and outdoor celebrations."
            />

            <div className="mt-8 grid gap-4">
              <div className="soft-card p-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-gold/25 bg-gold/10 p-3 text-gold">
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/45">Phone</p>
                    <p className="mt-2 text-lg font-semibold text-white">{contactInfo.phone}</p>
                  </div>
                </div>
              </div>

              <div className="soft-card p-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-gold/25 bg-gold/10 p-3 text-gold">
                    <MapPinned size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/45">Address</p>
                    <p className="mt-2 text-lg font-semibold text-white">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              <a
                href={contactInfo.directions}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit rounded-full bg-gold px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/10 p-3 shadow-glow">
            <div className="aspect-[5/4] overflow-hidden rounded-[26px]">
              <iframe
                src={contactInfo.mapsEmbed}
                title="Gulab Singh Film City location"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
