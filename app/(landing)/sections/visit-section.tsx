import Link from "next/link";

import GlassPanel from "../components/glass-panel";
import SectionHeading from "../components/section-heading";
import WhatsAppButton from "../components/whatsapp-button";
import { sectionCopies, visitInfo } from "../data/landing-content";

export default function VisitSection() {
  const copy = sectionCopies.visit;

  return (
    <section id="kunjungan" className="flex flex-col gap-10">
      <SectionHeading {...copy} />
      <GlassPanel className="border-white/30 bg-white/20 p-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] md:items-center">
          <div className="flex flex-col gap-4">
            <p className="text-base text-slate-600">
              {visitInfo.address}
              <br />
              {visitInfo.schedule}
            </p>
            <div className="flex flex-wrap gap-3">
              <WhatsAppButton label="Jadwalkan via WhatsApp" />
              <Link
                href={visitInfo.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-200 hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Lihat peta
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-3xl border border-white/30">
            <iframe
              title="Peta Asyifa Koi Farm"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4152388980856!2d106.745!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNyJTIDEwNsKwNDQnNDIuMCJF!5e0!3m2!1sen!2sid!4v1700000000000"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}
