export function encodeWhatsAppMessage(message: string): string {
  return encodeURIComponent(message);
}

export function buildWhatsAppLink(number: string, template: string): string {
  return `https://wa.me/${number}?text=${encodeWhatsAppMessage(template)}`;
}
