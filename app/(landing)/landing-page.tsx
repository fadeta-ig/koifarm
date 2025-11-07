import Navigation from "./components/navigation";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";
import ProductsPreviewSection from "./sections/products-preview-section";
import AboutPreviewSection from "./sections/about-preview-section";
import GalleryPreviewSection from "./sections/gallery-preview-section";
import TestimonialsPreviewSection from "./sections/testimonials-preview-section";
import Liquid3DBackground from "./components/liquid-3d-background";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen text-slate-900 scroll-smooth">
      <Liquid3DBackground />
      <div className="relative flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <HeroSection />
          <ProductsPreviewSection />
          <AboutPreviewSection />
          <GalleryPreviewSection />
          <TestimonialsPreviewSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
