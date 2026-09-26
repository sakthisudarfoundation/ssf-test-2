"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export function PartnerLogos() {
  if (site.partners.length === 0) return null;

  return (
    <section className="py-16 border-y border-line bg-card overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 mb-8">
        <p className="text-center text-xs uppercase tracking-widest text-ink-soft font-semibold">
          Working alongside
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-16 pr-16 shrink-0"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...site.partners, ...site.partners].map((p, i) => (
            <span key={i} className="text-ink-soft/70 font-display font-semibold text-lg whitespace-nowrap">
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
