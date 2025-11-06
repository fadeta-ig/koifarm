import { promises as fs } from "fs";
import path from "path";

import GlassPanel from "../components/glass-panel";
import SectionHeading from "../components/section-heading";

async function getContentData() {
  try {
    const dataPath = path.join(process.cwd(), "app/admin/data/content.json");
    const fileContents = await fs.readFile(dataPath, "utf8");
    const data = JSON.parse(fileContents);
    return {
      farmAdvantages: data.farmAdvantages || [],
      sectionCopy: data.sectionCopies?.advantages || {
        eyebrow: "Keunggulan",
        title: "Keunggulan Farm",
        description: "Dipercaya kolektor karena kualitas air terjaga, protokol kesehatan ketat, dan bloodline tersertifikasi.",
      },
    };
  } catch (error) {
    console.error("Failed to fetch advantages data:", error);
    return {
      farmAdvantages: [],
      sectionCopy: {
        eyebrow: "Keunggulan",
        title: "Keunggulan Farm",
        description: "Dipercaya kolektor karena kualitas air terjaga, protokol kesehatan ketat, dan bloodline tersertifikasi.",
      },
    };
  }
}

export default async function AdvantagesSection() {
  const { farmAdvantages, sectionCopy } = await getContentData();

  return (
    <section id="keunggulan" className="flex flex-col gap-10">
      <SectionHeading {...sectionCopy} />
      <div className="grid gap-6 md:grid-cols-2">
        {farmAdvantages.map((advantage: any) => (
          <GlassPanel key={advantage.title} className="border-white/30 bg-white/25 p-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-slate-900">{advantage.title}</h3>
              <p className="text-sm text-slate-600">{advantage.description}</p>
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
