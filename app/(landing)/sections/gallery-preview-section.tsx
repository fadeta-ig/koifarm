"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LiquidCard from "../components/liquid-card";
import LazyVideo from "../components/lazy-video";

interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  accent: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  mediaPoster?: string;
  mediaAlt: string;
}

export default function GalleryPreviewSection() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      const response = await fetch("/api/admin/gallery");
      if (response.ok) {
        const data = await response.json();
        // Only show first 6 items for preview
        setGalleryItems(data.slice(0, 6));
      }
    } catch (error) {
      console.error("Error fetching gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="galeri" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200/50 bg-gradient-to-r from-purple-50/80 to-pink-50/80 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold text-purple-600">
              Galeri Kolam
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Dokumentasi{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Koi Kami
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Lihat koleksi foto dan video koi premium dari berbagai varietas dan ukuran
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent"></div>
              <p className="mt-4 text-slate-600">Memuat galeri...</p>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        {!loading && galleryItems.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <LiquidCard
                key={item.id}
                variant="hover"
                className="group overflow-hidden p-0 transition-all duration-500 hover:scale-105"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {item.mediaType === "image" ? (
                    <Image
                      src={item.mediaSrc}
                      alt={item.mediaAlt}
                      fill
                      className="object-contain bg-gradient-to-br from-slate-50 to-slate-100 transition-transform duration-700 group-hover:scale-110"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <LazyVideo
                      src={item.mediaSrc}
                      poster={item.mediaPoster}
                      className="h-full w-full object-contain bg-gradient-to-br from-slate-50 to-slate-100 transition-transform duration-700 group-hover:scale-110"
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
                    {item.mediaType === "video" && (
                      <p className="mt-1 text-sm text-white/80">
                        Video Preview
                      </p>
                    )}
                  </div>
                </div>
              </LiquidCard>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && galleryItems.length === 0 && (
          <LiquidCard variant="gradient" className="p-16 text-center">
            <div className="mx-auto max-w-md">
              <div className="mb-4 text-6xl">🐟</div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900">
                Galeri Segera Hadir
              </h3>
              <p className="text-slate-600">
                Dokumentasi koleksi koi kami akan segera ditampilkan di sini
              </p>
            </div>
          </LiquidCard>
        )}

        {/* CTA Button */}
        {!loading && galleryItems.length > 0 && (
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-[0_8px_24px_0_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_0_rgba(168,85,247,0.4)]"
            >
              Lihat Semua Galeri
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
        )}
      </div>
    </section>
  );
}
