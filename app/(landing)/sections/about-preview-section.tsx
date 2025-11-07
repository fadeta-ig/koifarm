import Link from "next/link";
import LiquidCard from "../components/liquid-card";
import { farmAdvantages } from "../data/landing-content";

export default function AboutPreviewSection() {
  // Show only first 4 advantages for preview
  const previewAdvantages = farmAdvantages.slice(0, 4);

  // Icons for each advantage
  const advantageIcons = [
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", // Shield check
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", // Clipboard check
    "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", // Badge check
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", // Users
  ];

  const gradientColors = [
    "from-cyan-500 to-blue-500",
    "from-emerald-500 to-teal-500",
    "from-orange-500 to-rose-500",
    "from-violet-500 to-purple-500",
  ];

  return (
    <section id="tentang-kami" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-32 bg-gradient-to-b from-slate-50/50 to-transparent">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/50 bg-gradient-to-r from-cyan-50/80 to-blue-50/80 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold text-cyan-600">
              Tentang Kami
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Keunggulan{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Asyifa Koi Farm
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Dipercaya kolektor karena komitmen pada kualitas, kesehatan, dan kepuasan pelanggan
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {previewAdvantages.map((advantage, index) => (
            <LiquidCard
              key={advantage.title}
              variant="hover"
              className="group p-8 text-center transition-all duration-500 hover:scale-105"
            >
              <div className="mb-6 flex justify-center">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradientColors[index]} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={advantageIcons[index]}
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                {advantage.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {advantage.description}
              </p>
            </LiquidCard>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <LiquidCard variant="gradient" className="p-8 text-center">
            <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              15+
            </div>
            <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
              Tahun Pengalaman
            </p>
          </LiquidCard>
          <LiquidCard variant="gradient" className="p-8 text-center">
            <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              500+
            </div>
            <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
              Pelanggan Puas
            </p>
          </LiquidCard>
          <LiquidCard variant="gradient" className="p-8 text-center">
            <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
              99%
            </div>
            <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
              Tingkat Survival
            </p>
          </LiquidCard>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_8px_24px_0_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_0_rgba(6,182,212,0.4)]"
          >
            Pelajari Lebih Lanjut
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
