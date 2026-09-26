"use client";

import { motion } from "framer-motion";
import { team } from "@/data/team";
import { RevealStagger, staggerItem } from "@/components/shared/reveal";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

export function TeamGrid() {
  return (
    <RevealStagger className="grid md:grid-cols-2 gap-6" stagger={0.08}>
      {team.map((t, i) => (
        <motion.div
          key={`${t.name}-${i}`}
          variants={staggerItem}
          className="bg-white border border-line rounded-xl2 p-7 flex gap-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        >
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-gradient-to-br from-gold to-emerald">
            {t.image && (
              <ImageWithFallback
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
                fallbackLabel=""
              />
            )}
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg">{t.name}</h3>
            <div className="text-emerald text-xs font-bold uppercase tracking-wide mb-2">{t.role}</div>
            <p className="text-sm text-ink-soft">{t.bio}</p>
          </div>
        </motion.div>
      ))}
    </RevealStagger>
  );
}
