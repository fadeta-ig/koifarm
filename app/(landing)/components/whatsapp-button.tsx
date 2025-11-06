import Link from "next/link";

import { WHATSAPP_NUMBER, WHATSAPP_TEMPLATE } from "../data/landing-content";
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
  const baseStyle =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[transform,box-shadow] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

  const finalNumber = whatsappNumber || WHATSAPP_NUMBER;
  const finalTemplate = whatsappTemplate || WHATSAPP_TEMPLATE;

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
