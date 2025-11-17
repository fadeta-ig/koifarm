"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "../(landing)/components/navigation";
import Footer from "../(landing)/components/footer";
import Liquid3DBackground from "../(landing)/components/liquid-3d-background";
import LiquidCard from "../(landing)/components/liquid-card";
import LazyVideo from "../(landing)/components/lazy-video";
import WhatsAppFloatingButton from "../(landing)/components/whatsapp-floating-button";
import { ContentProvider } from "../(landing)/context/content-context";

interface GalleryItem {
  id: string;
  title: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  mediaPoster?: string;
  mediaAlt: string;
}

export default function GalleryPage() {
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
        setGalleryItems(data);
      }
    } catch (error) {
      console.error("Error fetching gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContentProvider>
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

            {/* Gallery Grid */}
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <div className="text-center">
                  <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent"></div>
                  <p className="mt-4 text-slate-600">Memuat galeri...</p>
                </div>
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {galleryItems.map((item, index) => (
                  <LiquidCard
                    key={item.id}
                    variant="hover"
                    className="group overflow-hidden p-0"
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
                    Tidak Ada Hasil
                  </h3>
                  <p className="text-slate-600">
                    Belum ada galeri koi yang ditambahkan
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

      <WhatsAppFloatingButton />
    </div>
    </ContentProvider>
  );
}
