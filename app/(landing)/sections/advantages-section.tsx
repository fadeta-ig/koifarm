import GlassPanel from "../components/glass-panel";
import SectionHeading from "../components/section-heading";
import { farmAdvantages, sectionCopies } from "../data/landing-content";

export default function AdvantagesSection() {
  const copy = sectionCopies.advantages;

  return (
    <section id="keunggulan" className="flex flex-col gap-10">
      <SectionHeading {...copy} />
      <div className="grid gap-6 md:grid-cols-2">
        {farmAdvantages.map((advantage) => (
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
