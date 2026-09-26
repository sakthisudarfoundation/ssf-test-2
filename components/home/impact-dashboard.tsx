import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { BarChart3 } from "lucide-react";

/**
 * Impact statistics are intentionally not shown until real, reportable
 * figures are available — see the project README for where to add them
 * once audited numbers exist (this avoids ever displaying invented data).
 */
export function ImpactDashboard() {
  return (
    <section className="py-24 md:py-28 bg-card border-y border-line">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          eyebrow="Impact Dashboard"
          title="Where your support goes."
          description="A transparent look at how our programs are performing, published as soon as verified figures are available."
        />
        <Reveal className="flex flex-col items-center text-center gap-3 bg-white border border-dashed border-line rounded-xl2 py-16 px-6">
          <BarChart3 className="text-ink-soft/60" size={32} />
          <p className="font-display text-xl text-ink">Impact statistics coming soon</p>
          <p className="text-sm text-ink-soft max-w-md">
            We publish figures only once they&rsquo;re verified. Check back here once our
            first audited impact report is released.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
