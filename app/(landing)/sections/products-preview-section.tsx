"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LiquidCard from "../components/liquid-card";

interface Variety {
  id: string;
  name: string;
  description: string;
  media: string;
}

export default function ProductsPreviewSection() {
  const [varieties, setVarieties] = useState<Variety[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVarieties();
  }, []);

  const fetchVarieties = async () => {
    try {
      const res = await fetch("/api/admin/varieties");
      const data = await res.json();
      // Only show first 3 items for preview
      setVarieties(data.slice(0, 3));
    } catch (error) {
      console.error("Error fetching varieties:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="produk" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200/50 bg-gradient-to-r from-orange-50/80 to-rose-50/80 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold text-orange-600">
              Varietas Premium
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Koleksi Koi{" "}
            <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
              Unggulan
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Pilih varietas favorit dengan grade show quality dan bloodline tersertifikasi
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
          </div>
        )}

        {/* Product Grid */}
        {!loading && varieties.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {varieties.map((variety) => (
              <LiquidCard
                key={variety.id}
                variant="hover"
                className="group overflow-hidden p-0 transition-all duration-500 hover:scale-105"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={variety.media}
                    alt={variety.name}
                    fill
                    className="object-contain bg-gradient-to-br from-slate-50 to-slate-100 transition-transform duration-700 group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

                  {/* Floating Label */}
                  <div className="absolute top-4 right-4">
                    <div className="rounded-full border border-white/40 bg-white/80 px-4 py-2 backdrop-blur-xl">
                      <span className="text-xs font-semibold text-slate-900">
                        Show Quality
                      </span>
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {variety.name}
                    </h3>
                    <p className="text-sm text-white/90 line-clamp-2">
                      {variety.description}
                    </p>
                  </div>
                </div>
              </LiquidCard>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && varieties.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-slate-600">
              Koleksi varietas akan segera hadir.
            </p>
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 to-rose-600 px-8 py-4 text-base font-semibold text-white shadow-[0_8px_24px_0_rgba(234,88,12,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_0_rgba(234,88,12,0.4)]"
          >
            Lihat Semua Produk
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
