"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/70 py-3 shadow-glass backdrop-blur-2xl" : "bg-transparent py-5"
      }`}
    >
      <nav className="section-shell flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-gold/35 bg-[linear-gradient(135deg,rgba(39,51,38,0.96),rgba(22,29,22,0.96))] text-[1rem] font-bold tracking-[0.32em] text-gold shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
            <span className="translate-x-[0.12rem]">GS</span>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Film City</p>
            <p className="text-base font-semibold text-white">Gulab Singh</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-white/78 transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a href="#inquiry" className="glow-button">
            Book Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-white/15 bg-white/10 p-3 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="section-shell mt-3 lg:hidden"
          >
            <div className="glass-panel rounded-[28px] p-5">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-white/85"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#inquiry"
                  className="glow-button mt-2"
                  onClick={() => setOpen(false)}
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
