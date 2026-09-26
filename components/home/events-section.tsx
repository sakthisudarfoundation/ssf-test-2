import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { events } from "@/data/events";
import { Calendar, MapPin, CalendarX } from "lucide-react";

export function EventsSection() {
  return (
    <section className="py-24 md:py-28 bg-card border-y border-line">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading eyebrow="Upcoming Events" title="Join us on the ground." />
        {events.length === 0 ? (
          <Reveal className="flex flex-col items-center text-center gap-3 bg-white border border-dashed border-line rounded-xl2 py-14 px-6">
            <CalendarX className="text-ink-soft/60" size={30} />
            <p className="font-display text-lg text-ink">No upcoming events announced yet</p>
            <p className="text-sm text-ink-soft max-w-md">
              Check back soon, or follow our News page for the latest updates.
            </p>
          </Reveal>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((e) => (
              <div
                key={e.title}
                className="bg-white border border-line rounded-xl2 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-emerald text-xs font-bold uppercase tracking-wide mb-3">
                  <Calendar size={14} /> {e.date}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{e.title}</h3>
                <div className="flex items-center gap-2 text-sm text-ink-soft">
                  <MapPin size={14} /> {e.place}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
