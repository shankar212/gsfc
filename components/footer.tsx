import { Facebook, Instagram, Youtube } from "lucide-react";

import { contactInfo, navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-12">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Gulab Singh Film City</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/64">
            A premium destination in Adilabad for cinematic shoots, pre-wedding stories, and visually immersive events.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Quick Links</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/64">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-white/64">
            <p>{contactInfo.phone}</p>
            <p>{contactInfo.address}</p>
          </div>
          <div className="mt-5 flex items-center gap-3 text-white">
            {[Instagram, Facebook, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
