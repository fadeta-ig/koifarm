"use client";

import Image from "next/image";
import Navigation from "../(landing)/components/navigation";
import Footer from "../(landing)/components/footer";
import Liquid3DBackground from "../(landing)/components/liquid-3d-background";
import LiquidCard from "../(landing)/components/liquid-card";
import WhatsAppButton from "../(landing)/components/whatsapp-button";
import { varietyHighlights } from "../(landing)/data/landing-content";

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen text-slate-900">
      <Liquid3DBackground />
      <div className="relative flex min-h-screen flex-col">
        <Navigation />

        <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Page Header */}
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200/50 bg-gradient-to-r from-orange-50/80 to-rose-50/80 px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-semibold text-orange-600">
                  Varietas Premium
                </span>
              </div>
              <h1 className="mb-6 text-5xl font-bold text-slate-900 lg:text-6xl">
                Koleksi Koi{" "}
                <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                  Unggulan
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-slate-600">
                Pilih varietas favorit dengan grade show quality dan bloodline tersertifikasi
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {varietyHighlights.map((variety, index) => (
                <LiquidCard
                  key={variety.name}
                  variant="hover"
                  className="group overflow-hidden p-0"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={variety.media}
                      alt={variety.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />

                    {/* Floating Label */}
                    <div className="absolute top-4 right-4">
                      <div className="rounded-full border border-white/40 bg-white/80 px-4 py-2 backdrop-blur-xl">
                        <span className="text-xs font-semibold text-slate-900">
                          Show Quality
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="mb-3 text-2xl font-bold text-slate-900">
                      {variety.name}
                    </h3>
                    <p className="mb-6 text-slate-600 leading-relaxed">
                      {variety.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6 grid grid-cols-3 gap-3">
                      <div className="rounded-xl bg-gradient-to-br from-orange-50 to-rose-50 p-3 text-center">
                        <p className="text-xs font-medium text-slate-600">Grade</p>
                        <p className="text-sm font-bold text-slate-900">Show</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 p-3 text-center">
                        <p className="text-xs font-medium text-slate-600">Ukuran</p>
                        <p className="text-sm font-bold text-slate-900">45-60cm</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-3 text-center">
                        <p className="text-xs font-medium text-slate-600">Status</p>
                        <p className="text-sm font-bold text-green-600">Ready</p>
                      </div>
                    </div>

                    <WhatsAppButton
                      label="Tanya Ketersediaan"
                      variant="secondary"
                    />
                  </div>
                </LiquidCard>
              ))}
            </div>

            {/* CTA Section */}
            <LiquidCard variant="gradient" className="mt-16 p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Tidak Menemukan yang Anda Cari?
              </h2>
              <p className="mb-8 text-lg text-slate-600">
                Tim kami siap membantu menemukan koi impian Anda dengan spesifikasi khusus
              </p>
              <WhatsAppButton label="Konsultasi Personal" />
            </LiquidCard>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
