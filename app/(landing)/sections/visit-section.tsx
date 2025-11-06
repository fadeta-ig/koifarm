import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";

import GlassPanel from "../components/glass-panel";
import SectionHeading from "../components/section-heading";
import WhatsAppButton from "../components/whatsapp-button";
import { sectionCopies } from "../data/landing-content";

async function getContactData() {
  try {
    const contentPath = path.join(process.cwd(), "app/admin/data/content.json");
    const content = await readFile(contentPath, "utf-8");
    const data = JSON.parse(content);
    return data.contact || {
      whatsappNumber: "6281934301918",
      whatsappTemplate: "Halo Asyifa Koi Farm, saya tertarik dengan koleksi koi premium. Mohon bantu rekomendasinya.",
      address: "Butun, Kec. Gandusari, Kabupaten Blitar, Jawa Timur",
      schedule: "Kunjungan by appointment, Senin–Sabtu 09.00–16.00 WIB",
      latitude: "-8.059619",
      longitude: "112.313774",
      mapUrl: "https://www.google.com/maps?q=-8.059619,112.313774",
    };
  } catch (error) {
    console.error("Error reading contact data:", error);
    return {
      whatsappNumber: "6281934301918",
      whatsappTemplate: "Halo Asyifa Koi Farm, saya tertarik dengan koleksi koi premium. Mohon bantu rekomendasinya.",
      address: "Butun, Kec. Gandusari, Kabupaten Blitar, Jawa Timur",
      schedule: "Kunjungan by appointment, Senin–Sabtu 09.00–16.00 WIB",
      latitude: "-8.059619",
      longitude: "112.313774",
      mapUrl: "https://www.google.com/maps?q=-8.059619,112.313774",
    };
  }
}

export default async function VisitSection() {
  const copy = sectionCopies.visit;
  const contactData = await getContactData();

  return (
    <section id="kunjungan" className="flex flex-col gap-10">
      <SectionHeading {...copy} />
      <GlassPanel className="border-white/30 bg-white/20 p-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] md:items-center">
          <div className="flex flex-col gap-4">
            <p className="text-base text-slate-600">
              {contactData.address}
              <br />
              {contactData.schedule}
            </p>
            <div className="flex flex-wrap gap-3">
              <WhatsAppButton
                label="Jadwalkan via WhatsApp"
                whatsappNumber={contactData.whatsappNumber}
                whatsappTemplate={contactData.whatsappTemplate}
              />
              <Link
                href={contactData.mapUrl}
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
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d${contactData.longitude}!3d${contactData.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid`}
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
