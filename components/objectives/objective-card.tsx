"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ObjectiveGroup } from "@/types";
import { staggerItem } from "@/components/shared/reveal";

const colorMap: Record<string, string> = {
  deep: "from-deep to-deep-light",
  emerald: "from-emerald to-emerald-light",
  gold: "from-gold to-gold-light",
};

export function ObjectiveCard({ group }: { group: ObjectiveGroup }) {
  const Icon = (Icons as any)[group.icon] ?? Icons.Sparkles;

  return (
    <motion.div
      variants={staggerItem}
      className="group relative bg-white border border-line rounded-xl2 p-8 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-deep/10 transition-all duration-400"
    >
      <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-emerald scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorMap[group.color]} text-white flex items-center justify-center mb-5`}>
        <Icon size={26} />
      </div>
      <h3 className="font-display font-semibold text-xl mb-1">{group.title}</h3>
      {group.tamil && <div className="font-tamil text-sm text-ink-soft mb-3">{group.tamil}</div>}
      <ul className="flex flex-col gap-1.5 mt-3">
        {group.items.map((item, i) => (
          <li
            key={item}
            className="text-sm text-ink-soft pl-5 relative py-1.5 border-t border-dashed border-line first:border-t-0"
          >
            <span className="absolute left-0 top-2.5 text-gold text-[10px]">&#10022;</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
