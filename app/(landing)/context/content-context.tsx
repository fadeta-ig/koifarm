"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface ContactData {
  address: string;
  schedule: string;
  whatsappNumber: string;
  whatsappTemplate: string;
  latitude: string;
  longitude: string;
  mapUrl: string;
}

interface ContentData {
  navigationLinks: NavLink[];
  contact: ContactData;
}

interface ContentContextType {
  content: ContentData | null;
  loading: boolean;
  error: string | null;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const DEFAULT_CONTENT: ContentData = {
  navigationLinks: [
    { label: "Beranda", href: "/" },
    { label: "Produk", href: "/products" },
    { label: "Tentang", href: "/about" },
    { label: "Galeri", href: "/gallery" },
    { label: "Testimoni", href: "/testimonials" },
    { label: "Kontak", href: "/contact" },
  ],
  contact: {
    address: "Butun, Kec. Gandusari, Kabupaten Blitar, Jawa Timur",
    schedule: "Senin - Sabtu, 09:00 - 16:00",
    whatsappNumber: "6281934301918",
    whatsappTemplate: "Halo Asyifa Koi Farm, saya tertarik dengan koleksi koi premium.",
    latitude: "-8.059619",
    longitude: "112.313774",
    mapUrl: "https://www.google.com/maps?q=-8.059619,112.313774",
  },
};

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentData | null>(DEFAULT_CONTENT);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchContent = async () => {
      try {
        const response = await fetch("/api/content");

        if (!response.ok) {
          throw new Error("Failed to fetch content");
        }

        const data = await response.json();

        if (isMounted) {
          setContent({
            navigationLinks: data.navigationLinks || DEFAULT_CONTENT.navigationLinks,
            contact: data.contact || DEFAULT_CONTENT.contact,
          });
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Error fetching content:", err);
          setError(err instanceof Error ? err.message : "Unknown error");
          // Keep default content on error
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading, error }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);

  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }

  return context;
}
