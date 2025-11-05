import Navigation from "./components/navigation";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";
import Liquid3DBackground from "./components/liquid-3d-background";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen text-slate-900">
      <Liquid3DBackground />
      <div className="relative flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <HeroSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
