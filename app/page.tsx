import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CursorAura } from "@/components/cursor-aura";
import { FantasyGarden } from "@/components/fantasy-garden";
import { Footer } from "@/components/footer";
import { FounderSection } from "@/components/founder-section";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { InquirySection } from "@/components/inquiry-section";
import { LocationsSection } from "@/components/locations-section";
import { MediaSection } from "@/components/media-section";
import { Navbar } from "@/components/navbar";
import { NatureBackdrop } from "@/components/nature-backdrop";
import { ParallaxBackground } from "@/components/parallax-background";
import { ShootEventsSection } from "@/components/shoot-events-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { VideoSection } from "@/components/video-section";
import { WaterSection } from "@/components/water-section";
import { YoutubeSection } from "@/components/youtube-section";

export default function Home() {
  return (
    <main className="relative isolate overflow-x-hidden">
      <ParallaxBackground />
      <CursorAura />
      <Navbar />
      <HeroSection />
      <div className="relative bg-[radial-gradient(circle_at_top,rgba(212,175,104,0.18),transparent_32%)]">
        <NatureBackdrop />
        <FantasyGarden />
        <AboutSection />
        <FounderSection />
        <LocationsSection />
        <GallerySection />
        <MediaSection />
        <ShootEventsSection />
        <YoutubeSection />
        <VideoSection />
        <WaterSection />
        <ServicesSection />
        <InquirySection />
        <TestimonialsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
