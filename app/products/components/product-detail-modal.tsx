"use client";

import { useEffect } from "react";
import Image from "next/image";
import WhatsAppButton from "@/app/(landing)/components/whatsapp-button";

interface ProductDetailModalProps {
  product: {
    id: string;
    name: string;
    description: string;
    media: string;
    price?: string;
    status?: "ready" | "sold";
    size?: string;
    grade?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const formatPrice = (price?: string) => {
    if (!price) return "Hubungi untuk info harga";
    return `Rp ${parseInt(price).toLocaleString("id-ID")}`;
  };

  // Build product URL with ID
  const productUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/products?id=${product.id}`
    : '';

  const whatsappMessage = `Halo Asyifa Koi Farm, saya tertarik dengan ${product.name}.

ID Produk: ${product.id}
Link Produk: ${productUrl}

Bisakah saya mendapatkan informasi lebih detail?`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-900 transition-all hover:bg-white hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Section */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
          <Image
            src={product.media}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 896px, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

          {/* Status Badge */}
          <div className="absolute bottom-4 right-4">
            <div
              className={`rounded-full px-5 py-2.5 backdrop-blur-xl font-bold text-sm ${
                product.status === "sold"
                  ? "bg-red-500/90 text-white border border-red-400/50"
                  : "bg-green-500/90 text-white border border-green-400/50"
              }`}
            >
              {product.status === "sold" ? "SOLD OUT" : "READY STOCK"}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-10">
          {/* Header */}
          <div className="mb-6">
            <h2 className="mb-2 text-4xl font-bold text-slate-900">
              {product.name}
            </h2>
            <p className="text-2xl font-bold text-orange-600">
              {formatPrice(product.price)}
            </p>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="mb-3 text-lg font-semibold text-slate-900">
              Deskripsi
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Specifications */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Spesifikasi
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-rose-50 p-5">
                <p className="mb-1 text-sm font-medium text-slate-600">
                  Grade
                </p>
                <p className="text-lg font-bold text-slate-900">
                  {product.grade || "Show Quality"}
                </p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 p-5">
                <p className="mb-1 text-sm font-medium text-slate-600">
                  Ukuran
                </p>
                <p className="text-lg font-bold text-slate-900">
                  {product.size || "45-60cm"}
                </p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-5">
                <p className="mb-1 text-sm font-medium text-slate-600">
                  Status
                </p>
                <p
                  className={`text-lg font-bold ${
                    product.status === "sold" ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {product.status === "sold" ? "Sold" : "Ready"}
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-6">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Keunggulan
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-600">✓</span>
                <span className="text-slate-700">
                  Tersertifikasi bloodline juara dari breeder Jepang
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-600">✓</span>
                <span className="text-slate-700">
                  Telah melewati karantina 21 hari dengan health check lengkap
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-600">✓</span>
                <span className="text-slate-700">
                  Garansi kualitas dan data kesehatan terlampir
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-green-600">✓</span>
                <span className="text-slate-700">
                  Gratis konsultasi adaptasi kolam dan nutrisi pakan
                </span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            {product.status !== "sold" && (
              <WhatsAppButton
                label="Tanya Ketersediaan"
                variant="primary"
                className="flex-1"
                whatsappTemplate={whatsappMessage}
              />
            )}
            <button
              onClick={onClose}
              className="flex-1 rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
