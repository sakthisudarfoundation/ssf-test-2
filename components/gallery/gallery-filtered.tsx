"use client";

import { useState } from "react";
import { galleryImages, galleryCategories } from "@/data/gallery";
import { Lightbox } from "@/components/shared/lightbox";
import { cn } from "@/lib/utils";

export function GalleryFiltered() {
  const [active, setActive] = useState<string>("All");
  const filtered =
    active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-semibold border transition-colors",
              active === cat
                ? "bg-deep text-white border-deep"
                : "bg-white text-ink-soft border-line hover:border-emerald hover:text-emerald"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
      <Lightbox images={filtered} />
    </div>
  );
}
