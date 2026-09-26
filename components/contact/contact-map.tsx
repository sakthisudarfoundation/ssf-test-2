"use client";

import { MapPin } from "lucide-react";
import { contact } from "@/data/contact";

export function ContactMap() {
  const { lat, lng } = contact.mapLocation;

  if (lat === null || lng === null || Number.isNaN(lat) || Number.isNaN(lng)) {
    return (
      <div className="rounded-xl2 bg-card min-h-[320px] h-full relative overflow-hidden flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-ink-soft text-center px-6">
          <MapPin size={36} />
          <span className="text-sm">Location map coming soon</span>
          <span className="text-xs text-ink-soft/70 max-w-xs">
            Set MAP_LATITUDE / MAP_LONGITUDE (or edit data/contact.ts) to show the
            interactive map here.
          </span>
        </div>
      </div>
    );
  }

  const src = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className="rounded-xl2 min-h-[320px] h-full overflow-hidden border border-line">
      <iframe
        src={src}
        className="w-full h-full min-h-[320px] border-0"
        loading="lazy"
        title="Sakthi Sudar Foundation location"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
