import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { TeamGrid } from "@/components/team/team-grid";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the trustees and programme directors of Sakthi Sudar Foundation.",
};

export default function TeamPage() {
  return (
    <section className="pt-36 pb-28">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind the work."
          description="A small team of trustees and programme directors, most of whom still work directly in the field."
        />
        <TeamGrid />
      </div>
    </section>
  );
}
