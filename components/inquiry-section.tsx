"use client";

import { FormEvent, useState } from "react";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

export function InquirySection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();

    window.setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <AnimatedSection id="inquiry" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(19,59,43,0.32))] p-4 shadow-glow sm:gap-10 sm:rounded-[36px] sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="min-w-0">
            <SectionHeading
              tag="Inquiry"
              title="Plan your next shoot or event at Gulab Singh Film City."
              description="Share your event type, preferred use, and contact details. This form shows a success alert on submit so the front-end experience is complete without backend wiring."
            />
          </div>

          <div className="glass-panel min-w-0 rounded-[24px] p-4 sm:rounded-[30px] sm:p-6 lg:p-8">
            {submitted && (
              <div className="mb-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                Inquiry submitted successfully. We&apos;ll be in touch soon.
              </div>
            )}
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <input
                required
                type="text"
                placeholder="Name"
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-gold/40"
              />
              <input
                required
                type="tel"
                placeholder="Phone"
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-gold/40"
              />
              <select
                required
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white outline-none transition focus:border-gold/40"
                defaultValue=""
              >
                <option value="" disabled>
                  Select event type
                </option>
                <option>Film Shooting</option>
                <option>Pre-wedding Shoot</option>
                <option>Event & Function</option>
                <option>Rental Inquiry</option>
              </select>
              <textarea
                required
                placeholder="Message"
                rows={5}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-gold/40"
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-gold px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.01] sm:w-auto"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
