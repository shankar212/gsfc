import { Facebook, Instagram, Youtube } from "lucide-react";

import { contactInfo, navItems, youtubeInfo } from "@/lib/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/40 py-12">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
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
              <a
                href="#"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={youtubeInfo.channelUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {currentYear} Gulab Singh Film City. All rights reserved.</p>
          <p>Designed to showcase scenic shoots, events, and cinematic outdoor experiences.</p>
        </div>
      </div>
    </footer>
  );
}
