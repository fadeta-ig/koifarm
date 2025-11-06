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
      purchaseSteps: data.purchaseSteps || [],
      sectionCopy: data.sectionCopies?.process || {
        eyebrow: "Proses",
        title: "Cara Beli",
        description: "Proses sederhana dari memilih koi sampai tiba di kolam Anda, lengkap dengan update real-time.",
      },
    };
  } catch (error) {
    console.error("Failed to fetch process data:", error);
    return {
      purchaseSteps: [],
      sectionCopy: {
        eyebrow: "Proses",
        title: "Cara Beli",
        description: "Proses sederhana dari memilih koi sampai tiba di kolam Anda, lengkap dengan update real-time.",
      },
    };
  }
}

export default async function ProcessSection() {
  const { purchaseSteps, sectionCopy } = await getContentData();

  return (
    <section id="proses" className="flex flex-col gap-10">
      <SectionHeading {...sectionCopy} />
      <div className="grid gap-6 md:grid-cols-2">
        {purchaseSteps.map((step: any, index: number) => (
          <GlassPanel key={step.title} className="border-white/30 bg-white/25 p-7">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-sky-500 text-sm font-semibold text-white shadow-lg">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.detail}</p>
              </div>
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
