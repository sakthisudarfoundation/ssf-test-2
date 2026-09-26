import Link from "next/link";
import { galleryImages } from "@/data/gallery";
import { SectionHeading } from "@/components/shared/section-heading";
import { Lightbox } from "@/components/shared/lightbox";
import { Button } from "@/components/ui/button";

export function GalleryPreview() {
  return (
    <section className="py-24 md:py-28">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-4">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments from the field."
            description="A glimpse into the everyday work across our programs."
          />
          <Link href="/gallery" className="mb-14">
            <Button variant="line">View Full Gallery</Button>
          </Link>
        </div>
        <Lightbox images={galleryImages.slice(0, 6)} />
      </div>
    </section>
  );
}
