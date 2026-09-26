import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ValuesGrid } from "@/components/about/values-grid";
import { site } from "@/data/site";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sakthi Sudar Foundation is a public charitable trust working across education, healthcare, social welfare, environment and Tamil heritage.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-gradient-to-b from-deep-dark to-deep text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-gold-light mb-4">
              <span className="w-5 h-0.5 bg-gold" /> About Us
            </div>
            <h1 className="font-display font-semibold text-4xl md:text-5xl max-w-2xl mb-5">
              {site.name}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              {site.shortDescription} {site.legalNote}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          <ValuesGrid />
        </div>
      </section>

      <section className="py-24 bg-card border-t border-line">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionHeading eyebrow="Our Journey" title="Organizational history." />
          <Reveal className="flex flex-col items-center text-center gap-3 bg-white border border-dashed border-line rounded-xl2 py-16 px-6 max-w-3xl">
            <Clock className="text-ink-soft/60" size={32} />
            <p className="font-display text-xl text-ink">Organizational history coming soon</p>
            <p className="text-sm text-ink-soft max-w-md">
              A timeline of the trust&rsquo;s founding and milestones will be added here once
              the details are confirmed.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
