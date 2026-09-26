import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { GalleryFiltered } from "@/components/gallery/gallery-filtered";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from the field across Sakthi Sudar Foundation's education, healthcare, environment and welfare programs.",
};

export default function GalleryPage() {
  return (
    <section className="pt-36 pb-28">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the field."
          description="Filter by category, or click any photo to view it larger."
        />
        <GalleryFiltered />
      </div>
    </section>
  );
}
