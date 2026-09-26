import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { DonatePanel } from "@/components/donate/donate-panel";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { donateFaq } from "@/data/faq";
import { ShieldCheck, MapPin, HandCoins } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Donate to Sakthi Sudar Foundation via UPI, bank transfer or QR code, in support of the trust's education, healthcare, environment and welfare work.",
};

const points = [
  {
    icon: ShieldCheck,
    title: "Why support us?",
    text: "Sakthi Sudar Foundation operates as a public charitable trust without a profit motive, working across education, healthcare, social welfare, youth development, Tamil heritage, environment and community development.",
  },
  {
    icon: MapPin,
    title: "How donations help",
    text: "Contributions support the trust's ongoing objectives across these areas. A detailed breakdown will be published here once audited figures are available.",
  },
  {
    icon: HandCoins,
    title: "Transparency",
    text: "We're committed to publishing financial accountability information as it becomes available. Registration details appear below.",
  },
];

export default function DonatePage() {
  return (
    <>
      <section className="pt-36 pb-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionHeading
            eyebrow="Donate"
            title="Support the trust's work."
            description="Choose UPI, bank transfer or QR code below. Every option supports the same charitable objectives."
          />
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <Reveal className="flex flex-col gap-7">
              {points.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-card text-emerald flex items-center justify-center shrink-0">
                    <p.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{p.title}</h4>
                    <p className="text-sm text-ink-soft">{p.text}</p>
                  </div>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.15}>
              <DonatePanel />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-t border-line">
        <div className="max-w-[1180px] mx-auto px-6 max-w-2xl">
          <SectionHeading eyebrow="FAQ" title="Common questions about donating." />
          <FaqAccordion items={donateFaq} />
        </div>
      </section>
    </>
  );
}
