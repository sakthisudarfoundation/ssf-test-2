import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProgramsList } from "@/components/programs/programs-list";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Six flagship programs run by Sakthi Sudar Foundation across education, healthcare, environment, social welfare, Tamil heritage and youth development.",
};

export default function ProgramsPage() {
  return (
    <section className="pt-36 pb-28">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          eyebrow="Programs"
          title="Six programs, one purpose."
          description="Each program below runs year-round with its own team, budget and published impact numbers."
        />
        <ProgramsList />
      </div>
    </section>
  );
}
