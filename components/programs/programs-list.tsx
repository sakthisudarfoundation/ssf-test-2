"use client";

import { motion } from "framer-motion";
import { programs } from "@/data/programs";
import { RevealStagger, staggerItem } from "@/components/shared/reveal";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

export function ProgramsList() {
  return (
    <RevealStagger className="grid md:grid-cols-2 gap-8" stagger={0.08}>
      {programs.map((p) => (
        <motion.div
          key={p.slug}
          id={p.slug}
          variants={staggerItem}
          className="scroll-mt-28 rounded-xl2 overflow-hidden border border-line bg-white hover:shadow-xl transition-shadow duration-400"
        >
          <div className="h-48 relative">
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
          </div>
          <div className="p-7">
            <h3 className="font-display font-semibold text-2xl mb-3">{p.title}</h3>
            <p className="text-ink-soft mb-2">{p.description}</p>
            {p.impact.length === 0 && (
              <p className="text-xs text-ink-soft/70 italic mt-3 border-t border-line pt-3">
                Impact statistics coming soon
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </RevealStagger>
  );
}
