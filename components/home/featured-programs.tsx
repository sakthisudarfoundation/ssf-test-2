"use client";

import Link from "next/link";
import { programs } from "@/data/programs";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealStagger, staggerItem } from "@/components/shared/reveal";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FeaturedPrograms() {
  return (
    <section className="py-24 md:py-28">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          eyebrow="Programs"
          title="Where the work happens."
          description="Our programs map directly to the trust's stated objectives."
        />
        <RevealStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <motion.div key={p.slug} variants={staggerItem}>
              <Link
                href={`/programs#${p.slug}`}
                className="group block rounded-xl2 overflow-hidden border border-line bg-white hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-deep/10 transition-all duration-400"
              >
                <div className="h-40 relative">
                  <ImageWithFallback
                    src={p.image ?? "/images/programs/placeholder.jpg"}
                    alt={p.title}
                    fill
                    className="object-cover"
                    fallbackLabel="Photo coming soon"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${p.color} opacity-40 pointer-events-none`} />
                  <span className="absolute bottom-4 left-4 bg-white/90 text-deep text-xs font-bold px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                  <ArrowUpRight
                    className="absolute top-4 right-4 text-white/0 group-hover:text-white/90 transition-colors"
                    size={20}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-soft">{p.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
