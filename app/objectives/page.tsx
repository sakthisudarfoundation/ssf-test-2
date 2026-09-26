import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { ObjectivesGrid } from "@/components/objectives/objectives-grid";

export const metadata: Metadata = {
  title: "Our Objectives",
  description:
    "The full charitable mandate of Sakthi Sudar Foundation, grouped across education, healthcare, social welfare, youth development, Tamil heritage, environment and community development.",
};

export default function ObjectivesPage() {
  return (
    <section className="pt-36 pb-28">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          eyebrow="Our Objectives"
          title="Everything we're chartered to do."
          description="Our trust deed spans a wide mandate — grouped below into the areas where our work is most active today."
        />
        <ObjectivesGrid />
      </div>
    </section>
  );
}
