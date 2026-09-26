import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";
import { NewsList } from "@/components/news/news-list";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and updates from Sakthi Sudar Foundation's programs across Tamil Nadu.",
};

export default function NewsPage() {
  return (
    <section className="pt-36 pb-28">
      <div className="max-w-[1180px] mx-auto px-6 max-w-3xl">
        <SectionHeading eyebrow="News" title="Updates from the ground." />
        <NewsList />
      </div>
    </section>
  );
}
