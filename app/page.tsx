import { Hero } from "@/components/home/hero";
import { ImpactDashboard } from "@/components/home/impact-dashboard";
import { FeaturedPrograms } from "@/components/home/featured-programs";
import { EventsSection } from "@/components/home/events-section";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { PartnerLogos } from "@/components/home/partner-logos";
import { DonationVolunteerBanner } from "@/components/home/donation-volunteer-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactDashboard />
      <FeaturedPrograms />
      <EventsSection />
      <GalleryPreview />
      <PartnerLogos />
      <DonationVolunteerBanner />
    </>
  );
}
