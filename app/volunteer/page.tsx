import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { VolunteerForm } from "@/components/volunteer/volunteer-form";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { volunteerFaq } from "@/data/faq";
import { BookOpen, HeartPulse, Camera, Calendar, Sprout, Languages } from "lucide-react";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Volunteer with Sakthi Sudar Foundation across teaching, healthcare support, documentation, event support, environment drives and Tamil research.",
};

const categories = [
  { icon: BookOpen, label: "Teaching" },
  { icon: HeartPulse, label: "Healthcare Support" },
  { icon: Camera, label: "Documentation" },
  { icon: Calendar, label: "Event Support" },
  { icon: Sprout, label: "Environment Drives" },
  { icon: Languages, label: "Tamil Research" },
];

export default function VolunteerPage() {
  return (
    <>
      <section className="pt-36 pb-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionHeading
            eyebrow="Volunteer"
            title="Bring your time, your skill, your care."
            description="We place volunteers across teaching, healthcare support, event organising and field documentation."
          />
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <Reveal>
              <div className="grid grid-cols-2 gap-4 mb-7">
                {categories.map((c) => (
                  <div key={c.label} className="bg-white border border-line rounded-2xl p-5 flex items-center gap-3 font-semibold text-sm hover:border-emerald hover:-translate-y-0.5 transition-all">
                    <c.icon size={18} className="text-emerald" /> {c.label}
                  </div>
                ))}
              </div>
              <div className="bg-card border border-line rounded-2xl p-6">
                <h4 className="font-semibold mb-2">Requirements</h4>
                <p className="text-sm text-ink-soft">
                  Minimum age 16. Weekend and evening slots available. No prior experience needed for most roles — training provided.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <VolunteerForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-t border-line">
        <div className="max-w-[1180px] mx-auto px-6 max-w-2xl">
          <SectionHeading eyebrow="FAQ" title="Common questions about volunteering." />
          <FaqAccordion items={volunteerFaq} />
        </div>
      </section>
    </>
  );
}
