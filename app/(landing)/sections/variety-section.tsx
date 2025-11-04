import Image from "next/image";
import Link from "next/link";

import GlassPanel from "../components/glass-panel";
import SectionHeading from "../components/section-heading";
import { sectionCopies, varietyHighlights } from "../data/landing-content";

export default function VarietySection() {
  const copy = sectionCopies.varieties;

  return (
    <section id="varietas" className="flex flex-col gap-10">
      <SectionHeading {...copy} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {varietyHighlights.map((variety) => (
          <GlassPanel
            key={variety.name}
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
