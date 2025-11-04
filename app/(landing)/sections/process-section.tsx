import GlassPanel from "../components/glass-panel";
import SectionHeading from "../components/section-heading";
import { purchaseSteps, sectionCopies } from "../data/landing-content";

export default function ProcessSection() {
  const copy = sectionCopies.process;

  return (
    <section id="proses" className="flex flex-col gap-10">
      <SectionHeading {...copy} />
      <div className="grid gap-6 md:grid-cols-2">
        {purchaseSteps.map((step, index) => (
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
