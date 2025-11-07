import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://asyifakoifarm.example"),
  title: {
    default: "Asyifa Koi Farm | Katalog Koi Premium",
    template: "%s | Asyifa Koi Farm",
  },
  description:
    "Katalog koi premium dari Asyifa Koi Farm dengan filter lengkap, pemeriksaan kesehatan, dan konsultasi ahli.",
  keywords: [
    "koi",
    "katalog koi",
    "koi farm",
    "jual koi",
    "Asyifa Koi Farm",
  ],
  openGraph: {
    title: "Asyifa Koi Farm | Katalog Koi Premium",
    description:
      "Jelajahi koleksi koi kualitas show, temukan varietas favorit, dan hubungi tim kami melalui WhatsApp.",
    type: "website",
    locale: "id_ID",
    url: "https://asyifakoifarm.example",
    siteName: "Asyifa Koi Farm",
    images: [
      {
        url: "/images/hero-koi.svg",
        width: 1200,
        height: 630,
        alt: "Koi berwarna merah putih berenang di kolam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asyifa Koi Farm | Katalog Koi Premium",
    description:
      "Koi pilihan dengan detail lengkap, siap direservasi melalui WhatsApp.",
    images: ["/images/hero-koi.svg"],
  },
  alternates: {
    canonical: "https://asyifakoifarm.example",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-white antialiased text-slate-900 font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
