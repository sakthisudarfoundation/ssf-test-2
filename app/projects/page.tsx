import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { DonationProgress } from "@/components/shared/donation-progress";
import { Reveal } from "@/components/shared/reveal";
import { projects } from "@/data/projects";
import { FolderOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Active Projects",
  description: "Current fundraising projects at Sakthi Sudar Foundation and their progress toward each goal.",
};

export default function ProjectsPage() {
  return (
    <section className="pt-36 pb-28">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Active fundraising projects."
          description="These specific projects are currently raising funds. You can choose to direct your donation to any of them."
        />
        {projects.length === 0 ? (
          <Reveal className="flex flex-col items-center text-center gap-3 bg-card border border-dashed border-line rounded-xl2 py-16 px-6 max-w-3xl">
            <FolderOpen className="text-ink-soft/60" size={32} />
            <p className="font-display text-xl text-ink">No active projects announced yet</p>
            <p className="text-sm text-ink-soft max-w-md">
              Check back soon, or see our general Donate page to support the trust&rsquo;s work overall.
            </p>
          </Reveal>
        ) : (
          <div className="flex flex-col gap-8 max-w-3xl">
            {projects.map((p) => (
              <Reveal key={p.title} className="bg-white border border-line rounded-xl2 p-7">
                <DonationProgress raised={p.raised} goal={p.goal} label={p.title} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
