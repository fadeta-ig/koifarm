"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "../(landing)/components/navigation";
import Footer from "../(landing)/components/footer";
import Liquid3DBackground from "../(landing)/components/liquid-3d-background";
import LiquidCard from "../(landing)/components/liquid-card";
import { galleryItems } from "../(landing)/data/landing-content";

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const filters = ["All", "Ready", "Reserved", "Sold"];

  const filteredItems =
    selectedFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.tag === selectedFilter);

  return (
    <div className="relative min-h-screen text-slate-900">
      <Liquid3DBackground />
      <div className="relative flex min-h-screen flex-col">
        <Navigation />

        <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Page Header */}
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200/50 bg-gradient-to-r from-purple-50/80 to-pink-50/80 px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-semibold text-purple-600">
                  Galeri Kolam
                </span>
              </div>
              <h1 className="mb-6 text-5xl font-bold text-slate-900 lg:text-6xl">
                Dokumentasi{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Koi Kami
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-slate-600">
                Lihat koleksi foto dan video koi premium dari berbagai varietas dan ukuran
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="mb-12 flex justify-center">
              <div className="inline-flex gap-2 rounded-2xl border border-white/40 bg-white/60 p-2 backdrop-blur-xl">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                      selectedFilter === filter
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        : "text-slate-700 hover:bg-white/50"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, index) => (
                <LiquidCard
                  key={item.title}
                  variant="hover"
                  className="group overflow-hidden p-0"
                >
                  <div className="relative aspect-square overflow-hidden">
                    {item.media.type === "image" ? (
                      <Image
                        src={item.media.src}
                        alt={item.media.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    ) : (
                      <video
                        src={item.media.src}
                        poster={item.media.poster}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div
                        className={`rounded-full border border-white/40 px-4 py-2 backdrop-blur-xl ${
                          item.tag === "Ready"
                            ? "bg-green-500/80 text-white"
                            : item.tag === "Reserved"
                              ? "bg-orange-500/80 text-white"
                              : "bg-slate-500/80 text-white"
                        }`}
                      >
                        <span className="text-xs font-bold">{item.tag}</span>
                      </div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-300 group-hover:translate-y-0">
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      {item.media.type === "video" && (
                        <p className="mt-1 text-sm text-white/80">
                          Video Preview
                        </p>
                      )}
                    </div>
                  </div>
                </LiquidCard>
              ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <LiquidCard variant="gradient" className="p-16 text-center">
                <div className="mx-auto max-w-md">
                  <div className="mb-4 text-6xl">🐟</div>
                  <h3 className="mb-2 text-2xl font-bold text-slate-900">
                    Tidak Ada Hasil
                  </h3>
                  <p className="text-slate-600">
                    Tidak ada koi dengan status {selectedFilter} saat ini
                  </p>
                </div>
              </LiquidCard>
            )}

            {/* Info Section */}
            <LiquidCard variant="gradient" className="mt-16 p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Ingin Melihat Lebih Detail?
              </h2>
              <p className="mb-2 text-lg text-slate-600">
                Kami dapat mengirimkan video close-up dan dokumentasi lengkap setiap koi
              </p>
              <p className="text-sm text-slate-500">
                Update stok terbaru tersedia setiap hari di WhatsApp
              </p>
            </LiquidCard>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
