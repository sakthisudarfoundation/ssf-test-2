"use client";

import { motion } from "framer-motion";
import { Compass, Target, Scale } from "lucide-react";
import { RevealStagger, staggerItem } from "@/components/shared/reveal";

const values = [
  { icon: Compass, title: "Our Vision", text: "A Tamil Nadu where no child is denied learning, no illness goes untreated for want of money, and no elder is left without care.", color: "from-deep to-deep-light" },
  { icon: Target, title: "Our Mission", text: "To deliver education, healthcare and social welfare directly to underserved communities, while protecting Tamil language, culture and the natural environment.", color: "from-emerald to-emerald-light" },
  { icon: Scale, title: "Our Values", text: "Seva without discrimination, complete financial transparency, and respect for the culture we serve.", color: "from-gold to-gold-light" },
];

export function ValuesGrid() {
  return (
    <RevealStagger className="grid md:grid-cols-3 gap-6 mb-24">
      {values.map((v) => (
        <motion.div
          key={v.title}
          variants={staggerItem}
          className="bg-white border border-line rounded-xl2 p-8 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
        >
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.color} text-white flex items-center justify-center mb-5`}>
            <v.icon size={26} />
          </div>
          <h3 className="font-display font-semibold text-xl mb-2">{v.title}</h3>
          <p className="text-sm text-ink-soft">{v.text}</p>
        </motion.div>
      ))}
    </RevealStagger>
  );
}
