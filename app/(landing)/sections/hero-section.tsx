import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";

import LiquidCard from "../components/liquid-card";
import WhatsAppButton from "../components/whatsapp-button";

async function getHeroData() {
  try {
    const contentPath = path.join(process.cwd(), "app/admin/data/content.json");
    const content = await readFile(contentPath, "utf-8");
    const data = JSON.parse(content);
    return data.hero || {
      title: "Koi Premium Terbaik",
      description: "Temukan koi unggulan dari bloodline juara dengan pendampingan ahli end-to-end. Data kesehatan lengkap dan garansi kualitas terjamin.",
      stats: [
        { label: "Koi Siap Kirim", value: "120+" },
        { label: "Bloodline Juara", value: "18" },
        { label: "Tingkat Survival", value: "99%" },
      ],
      featureCards: [
        { title: "Tersertifikasi Bloodline Juara", description: "Kemitraan langsung dengan breeder Jepang" },
        { title: "Garansi Kualitas", description: "Data kesehatan lengkap dan jaminan kualitas terbaik" },
        { title: "Pendampingan Ahli", description: "Konsultasi gratis dari expert koi berpengalaman" },
        { title: "Pengiriman Aman", description: "Sistem packing professional ke seluruh Indonesia" },
      ],
    };
  } catch (error) {
    console.error("Error reading hero data:", error);
    return {
      title: "Koi Premium Terbaik",
      description: "Temukan koi unggulan dari bloodline juara dengan pendampingan ahli end-to-end. Data kesehatan lengkap dan garansi kualitas terjamin.",
      stats: [
        { label: "Koi Siap Kirim", value: "120+" },
        { label: "Bloodline Juara", value: "18" },
        { label: "Tingkat Survival", value: "99%" },
      ],
      featureCards: [
        { title: "Tersertifikasi Bloodline Juara", description: "Kemitraan langsung dengan breeder Jepang" },
        { title: "Garansi Kualitas", description: "Data kesehatan lengkap dan jaminan kualitas terbaik" },
        { title: "Pendampingan Ahli", description: "Konsultasi gratis dari expert koi berpengalaman" },
        { title: "Pengiriman Aman", description: "Sistem packing professional ke seluruh Indonesia" },
      ],
    };
  }
}

async function getContactData() {
  try {
    const contentPath = path.join(process.cwd(), "app/admin/data/content.json");
    const content = await readFile(contentPath, "utf-8");
    const data = JSON.parse(content);
    return data.contact || {
      whatsappNumber: "6281934301918",
      whatsappTemplate: "Halo Asyifa Koi Farm, saya tertarik dengan koleksi koi premium. Mohon bantu rekomendasinya.",
    };
  } catch (error) {
    console.error("Error reading contact data:", error);
    return {
      whatsappNumber: "6281934301918",
      whatsappTemplate: "Halo Asyifa Koi Farm, saya tertarik dengan koleksi koi premium. Mohon bantu rekomendasinya.",
    };
  }
}

export default async function HeroSection() {
  const heroData = await getHeroData();
  const contactData = await getContactData();
  const heroStats = heroData.stats || [];
  const featureCards = heroData.featureCards || [];

  // Icon gradients for feature cards
  const cardGradients = [
    "from-orange-500 to-rose-500",
    "from-cyan-500 to-blue-500",
    "from-emerald-500 to-teal-500",
    "from-violet-500 to-purple-500",
  ];

  // Icons for feature cards (SVG path data)
  const cardIcons = [
    "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
  ];

  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-200/50 bg-gradient-to-r from-orange-50/80 to-rose-50/80 px-4 py-2 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-sm font-semibold text-orange-600">
                  Premium Koi Farm
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
                {heroData.title ? (
                  heroData.title.split(' ').map((word: string, i: number, arr: string[]) =>
                    i === arr.length - 1 ? (
                      <span key={i} className="relative inline-block">
                        <span className="relative z-10 bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                          {word}
                        </span>
                        <div className="absolute inset-0 -z-10 translate-y-1 bg-gradient-to-r from-orange-400/30 to-rose-400/30 blur-xl" />
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    )
                  )
                ) : (
                  <>
                    Koi Premium{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                        Terbaik
                      </span>
                      <div className="absolute inset-0 -z-10 translate-y-1 bg-gradient-to-r from-orange-400/30 to-rose-400/30 blur-xl" />
                    </span>
                  </>
                )}
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                {heroData.description || "Temukan koi unggulan dari bloodline juara dengan pendampingan ahli end-to-end. Data kesehatan lengkap dan garansi kualitas terjamin."}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <WhatsAppButton
                label="Konsultasi Gratis"
                whatsappNumber={contactData.whatsappNumber}
                whatsappTemplate={contactData.whatsappTemplate}
              />
              <a
                href="#produk"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/60 px-8 py-4 text-base font-semibold text-slate-700 shadow-[0_8px_24px_0_rgba(15,23,42,0.1)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_0_rgba(234,88,12,0.15)] hover:border-orange-200/60"
              >
                Lihat Koleksi
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Quick Links to Sections */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#produk"
                className="group flex items-center gap-2 rounded-xl border border-orange-200/50 bg-gradient-to-r from-orange-50/60 to-rose-50/60 px-4 py-2 text-sm font-medium text-orange-700 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-orange-100/80 hover:to-rose-100/80"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Produk
              </a>
              <a
                href="#tentang-kami"
                className="group flex items-center gap-2 rounded-xl border border-cyan-200/50 bg-gradient-to-r from-cyan-50/60 to-blue-50/60 px-4 py-2 text-sm font-medium text-cyan-700 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-cyan-100/80 hover:to-blue-100/80"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tentang Kami
              </a>
              <a
                href="#galeri"
                className="group flex items-center gap-2 rounded-xl border border-purple-200/50 bg-gradient-to-r from-purple-50/60 to-pink-50/60 px-4 py-2 text-sm font-medium text-purple-700 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-purple-100/80 hover:to-pink-100/80"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Galeri
              </a>
              <a
                href="#testimoni"
                className="group flex items-center gap-2 rounded-xl border border-rose-200/50 bg-gradient-to-r from-rose-50/60 to-pink-50/60 px-4 py-2 text-sm font-medium text-rose-700 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-rose-100/80 hover:to-pink-100/80"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Testimoni
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {heroStats.map((stat: { label: string; value: string }, index: number) => (
                <LiquidCard key={stat.label} variant="gradient" className="p-6 text-center">
                  <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                  <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </LiquidCard>
              ))}
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-400/20 via-transparent to-cyan-400/20 rounded-3xl blur-3xl" />
            <div className="absolute top-20 right-10 h-64 w-64 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-10 h-48 w-48 bg-gradient-to-br from-orange-400/30 to-rose-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative h-full flex flex-col justify-center gap-6">
              {featureCards.map((card: { title: string; description: string }, index: number) => (
                <LiquidCard
                  key={index}
                  variant="gradient"
                  className={`group p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-float ${
                    index % 2 === 1 ? 'ml-8' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${cardGradients[index]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cardIcons[index]} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </LiquidCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
