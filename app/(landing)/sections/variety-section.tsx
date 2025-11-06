import Image from "next/image";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

import GlassPanel from "../components/glass-panel";
import SectionHeading from "../components/section-heading";

async function getContentData() {
  try {
    // Read directly from file system for reliable build-time and runtime data
    const dataPath = path.join(process.cwd(), "app/admin/data/content.json");
    const fileContents = await fs.readFile(dataPath, "utf8");
    const data = JSON.parse(fileContents);
    return {
      varieties: data.varieties || [],
      sectionCopy: data.sectionCopies?.varieties || {
        eyebrow: "Varietas",
        title: "Varietas Unggulan",
        description: "Pilih varietas favorit dengan preset filter siap pakai dan lihat status stok terbaru.",
      },
    };
  } catch (error) {
    console.error("Failed to fetch varieties:", error);
    return {
      varieties: [],
      sectionCopy: {
        eyebrow: "Varietas",
        title: "Varietas Unggulan",
        description: "Pilih varietas favorit dengan preset filter siap pakai dan lihat status stok terbaru.",
      },
    };
  }
}

export default async function VarietySection() {
  const { varieties, sectionCopy } = await getContentData();
  const varietyHighlights = varieties;

  return (
    <section id="varietas" className="flex flex-col gap-10">
      <SectionHeading {...sectionCopy} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {varietyHighlights.map((variety: any) => (
          <GlassPanel
            key={variety.id}
            className="flex flex-col border-white/40 bg-white/25 p-6"
          >
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={variety.media}
                  alt={`Foto varietas ${variety.name}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 260px, (min-width: 1024px) 31vw, (min-width: 640px) 45vw, 90vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-slate-900">{variety.name}</h3>
                <p className="text-sm text-slate-600">{variety.description}</p>
              </div>
              <Link
                href={`/katalog${variety.preset}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Buka preset filter
                <span aria-hidden>→</span>
              </Link>
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
