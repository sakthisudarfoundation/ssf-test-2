import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactMap } from "@/components/contact/contact-map";
import { contact } from "@/data/contact";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sakthi Sudar Foundation — office address, phone, email and office hours.",
};

const items = [
  { icon: MapPin, label: "Address", value: contact.address },
  { icon: Phone, label: "Phone", value: contact.phone },
  { icon: Mail, label: "Email", value: contact.email },
  { icon: Clock, label: "Office Hours", value: contact.officeHours },
];

export default function ContactPage() {
  return (
    <section className="pt-36 pb-28">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading eyebrow="Contact" title="Come visit, or write to us." />
        <div className="grid md:grid-cols-2 gap-14">
          <Reveal>
            <ContactMap />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5 mb-8">
              {items.map((it) => (
                <div key={it.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-card text-deep flex items-center justify-center shrink-0">
                    <it.icon size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{it.label}</div>
                    <p className="text-sm text-ink-soft mt-0.5">{it.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
