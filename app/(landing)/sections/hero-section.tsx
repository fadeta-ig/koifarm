import Image from "next/image";
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
      mediaSrc: "/uploads/placeholder.jpg",
      mediaAlt: "Foto close-up koi berwarna oranye putih berenang",
      badge: "Tersertifikasi Bloodline Juara",
      badgeSubtext: "Kemitraan langsung dengan breeder Jepang",
      title: "Koi Premium Terbaik",
      description: "Temukan koi unggulan dari bloodline juara dengan pendampingan ahli end-to-end. Data kesehatan lengkap dan garansi kualitas terjamin.",
      stats: [
        { label: "Koi Siap Kirim", value: "120+" },
        { label: "Bloodline Juara", value: "18" },
        { label: "Tingkat Survival", value: "99%" },
      ],
    };
  } catch (error) {
    console.error("Error reading hero data:", error);
    return {
      mediaSrc: "/uploads/placeholder.jpg",
      mediaAlt: "Foto close-up koi berwarna oranye putih berenang",
      badge: "Tersertifikasi Bloodline Juara",
      badgeSubtext: "Kemitraan langsung dengan breeder Jepang",
      title: "Koi Premium Terbaik",
      description: "Temukan koi unggulan dari bloodline juara dengan pendampingan ahli end-to-end. Data kesehatan lengkap dan garansi kualitas terjamin.",
      stats: [
        { label: "Koi Siap Kirim", value: "120+" },
        { label: "Bloodline Juara", value: "18" },
        { label: "Tingkat Survival", value: "99%" },
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
              <Link
                href="/products"
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
              </Link>
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

          {/* Right Image */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-400/20 via-transparent to-cyan-400/20 rounded-3xl blur-3xl" />

            <LiquidCard variant="gradient" className="relative h-full p-6 transform-3d hover:scale-[1.02] transition-transform duration-500">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={heroData.mediaSrc}
                  alt={heroData.mediaAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/40 bg-white/80 px-6 py-4 backdrop-blur-xl">
                    <p className="text-sm font-semibold text-slate-900">
                      {heroData.badge}
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      {heroData.badgeSubtext}
                    </p>
                  </div>
                </div>
              </div>
            </LiquidCard>
          </div>
        </div>
      </div>
    </section>
  );
}
