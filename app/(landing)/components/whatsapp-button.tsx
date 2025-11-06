"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { buildWhatsAppLink } from "../lib/whatsapp";

type WhatsAppVariant = "primary" | "secondary";

interface WhatsAppButtonProps {
  label: string;
  variant?: WhatsAppVariant;
  className?: string;
  whatsappNumber?: string;
  whatsappTemplate?: string;
}

const VARIANT_STYLES: Record<WhatsAppVariant, string> = {
  primary:
    "bg-orange-500 text-white shadow-[0_18px_45px_-18px_rgba(234,88,12,0.65)] hover:shadow-[0_22px_55px_-18px_rgba(234,88,12,0.75)]",
  secondary:
    "bg-white/80 text-orange-600 ring-1 ring-orange-200 hover:ring-orange-300",
};

export default function WhatsAppButton({
  label,
  variant = "primary",
  className = "",
  whatsappNumber,
  whatsappTemplate,
}: WhatsAppButtonProps) {
  const [defaultContact, setDefaultContact] = useState({
    whatsappNumber: "6281934301918",
    whatsappTemplate: "Halo Asyifa Koi Farm, saya tertarik dengan koleksi koi premium. Mohon bantu rekomendasinya.",
  });

  useEffect(() => {
    // Fetch default contact data from API if not provided via props
    if (!whatsappNumber || !whatsappTemplate) {
      fetch("/api/content")
        .then((res) => res.json())
        .then((data) => {
          if (data.contact) {
            setDefaultContact({
              whatsappNumber: data.contact.whatsappNumber,
              whatsappTemplate: data.contact.whatsappTemplate,
            });
          }
        })
        .catch((error) => console.error("Error fetching contact data:", error));
    }
  }, [whatsappNumber, whatsappTemplate]);

  const baseStyle =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[transform,box-shadow] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

  const finalNumber = whatsappNumber || defaultContact.whatsappNumber;
  const finalTemplate = whatsappTemplate || defaultContact.whatsappTemplate;

  return (
    <Link
      href={buildWhatsAppLink(finalNumber, finalTemplate)}
      className={`${baseStyle} ${VARIANT_STYLES[variant]} ${className}`}
      aria-label="Hubungi Asyifa Koi Farm via WhatsApp"
    >
      <span aria-hidden>💬</span>
      {label}
    </Link>
  );
}
