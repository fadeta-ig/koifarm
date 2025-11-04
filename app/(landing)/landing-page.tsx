import Navigation from "./components/navigation";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";
import VarietySection from "./sections/variety-section";
import AdvantagesSection from "./sections/advantages-section";
import ProcessSection from "./sections/process-section";
import TestimonialsSection from "./sections/testimonials-section";
import GallerySection from "./sections/gallery-section";
import VisitSection from "./sections/visit-section";

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col gap-12 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.12),_transparent_65%)] px-4 pb-16 pt-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-32 -z-10 h-[640px] bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(234,88,12,0.12),_rgba(59,130,246,0.08),_transparent_65%)] blur-3xl" aria-hidden />
      <Navigation />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <HeroSection />
        <VarietySection />
        <AdvantagesSection />
        <ProcessSection />
        <TestimonialsSection />
        <GallerySection />
        <VisitSection />
      </main>
      <Footer />
    </div>
  );
}
