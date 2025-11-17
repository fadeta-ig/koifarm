"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Navigation from "../(landing)/components/navigation";
import Footer from "../(landing)/components/footer";
import Liquid3DBackground from "../(landing)/components/liquid-3d-background";
import LiquidCard from "../(landing)/components/liquid-card";
import WhatsAppButton from "../(landing)/components/whatsapp-button";
import WhatsAppFloatingButton from "../(landing)/components/whatsapp-floating-button";
import ProductDetailModal from "./components/product-detail-modal";

interface Variety {
  id: string;
  name: string;
  description: string;
  media: string;
  price?: string;
  status?: "ready" | "sold";
  size?: string;
  grade?: string;
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const [varieties, setVarieties] = useState<Variety[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Variety | null>(null);

  useEffect(() => {
    fetchVarieties();
  }, []);

  // Auto-open product modal if ID is in URL
  useEffect(() => {
    const productId = searchParams.get('id');
    if (productId && varieties.length > 0) {
      const product = varieties.find(v => v.id === productId);
      if (product) {
        setSelectedProduct(product);
      }
    }
  }, [searchParams, varieties]);

  const fetchVarieties = async () => {
    try {
      const res = await fetch("/api/admin/varieties");
      const data = await res.json();
      setVarieties(data);
    } catch (error) {
      console.error("Error fetching varieties:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price?: string) => {
    if (!price) return "Hubungi untuk info harga";
    return `Rp ${parseInt(price).toLocaleString("id-ID")}`;
  };

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

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
              </div>
            )}

            {/* Empty State */}
            {!loading && varieties.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-slate-600">
                  Belum ada varietas yang tersedia saat ini.
                </p>
                <p className="text-slate-500 mt-2">
                  Silakan hubungi kami untuk informasi lebih lanjut.
                </p>
              </div>
            )}

            {/* Product Grid */}
            {!loading && varieties.length > 0 && (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {varieties.map((variety, index) => {
                  const isSold = variety.status === "sold";

                  // Build product URL with ID
                  const productUrl = typeof window !== 'undefined'
                    ? `${window.location.origin}/products?id=${variety.id}`
                    : '';

                  const whatsappMessage = `Halo Asyifa Koi Farm, saya tertarik dengan ${variety.name}.

ID Produk: ${variety.id}
Link Produk: ${productUrl}

Bisakah saya mendapatkan informasi lebih detail?`;

                  return (
                    <LiquidCard
                      key={variety.id}
                      variant="hover"
                      className="group overflow-hidden p-0"
                    >
                      <div
                        className="relative aspect-[3/2] overflow-hidden cursor-pointer"
                        onClick={() => setSelectedProduct(variety)}
                      >
                        <Image
                          src={variety.media}
                          alt={variety.name}
                          fill
                          className="object-contain bg-gradient-to-br from-slate-50 to-slate-100 transition-transform duration-500 group-hover:scale-110"
                          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <div
                            className={`rounded-full px-4 py-2 backdrop-blur-xl font-bold text-xs ${
                              isSold
                                ? "bg-red-500/90 text-white border border-red-400/50"
                                : "bg-green-500/90 text-white border border-green-400/50"
                            }`}
                          >
                            {isSold ? "SOLD" : "READY"}
                          </div>
                        </div>

                        {/* Floating Label */}
                        <div className="absolute top-4 right-4">
                          <div className="rounded-full border border-white/40 bg-white/80 px-4 py-2 backdrop-blur-xl">
                            <span className="text-xs font-semibold text-slate-900">
                              {variety.grade || "Show Quality"}
                            </span>
                          </div>
                        </div>

                        {/* Click to View Detail */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="rounded-full bg-white/90 backdrop-blur-sm px-6 py-3">
                            <span className="text-sm font-semibold text-slate-900">
                              Lihat Detail
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="mb-3 flex items-start justify-between">
                          <h3 className="text-2xl font-bold text-slate-900">
                            {variety.name}
                          </h3>
                        </div>

                        {/* Price */}
                        <p className="mb-4 text-xl font-bold text-orange-600">
                          {formatPrice(variety.price)}
                        </p>

                        <p className="mb-6 text-slate-600 leading-relaxed line-clamp-2">
                          {variety.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6 grid grid-cols-3 gap-3">
                          <div className="rounded-xl bg-gradient-to-br from-orange-50 to-rose-50 p-3 text-center">
                            <p className="text-xs font-medium text-slate-600">Grade</p>
                            <p className="text-sm font-bold text-slate-900">
                              {variety.grade || "Show"}
                            </p>
                          </div>
                          <div className="rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 p-3 text-center">
                            <p className="text-xs font-medium text-slate-600">Ukuran</p>
                            <p className="text-sm font-bold text-slate-900">
                              {variety.size || "45-60cm"}
                            </p>
                          </div>
                          <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-3 text-center">
                            <p className="text-xs font-medium text-slate-600">Status</p>
                            <p className={`text-sm font-bold ${isSold ? "text-red-600" : "text-green-600"}`}>
                              {isSold ? "Sold" : "Ready"}
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3 sm:flex-row">
                          {!isSold && (
                            <WhatsAppButton
                              label="Tanya Ketersediaan"
                              variant="secondary"
                              className="flex-1"
                              whatsappTemplate={whatsappMessage}
                            />
                          )}
                          <button
                            onClick={() => setSelectedProduct(variety)}
                            className="flex-1 rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200"
                          >
                            Lihat Detail
                          </button>
                        </div>
                      </div>
                    </LiquidCard>
                  );
                })}
              </div>
            )}

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

      <WhatsAppFloatingButton />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-slate-600">Loading...</div></div>}>
      <ProductsContent />
    </Suspense>
  );
}
