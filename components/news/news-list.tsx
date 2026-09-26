"use client";

import { news } from "@/data/news";
import { RevealStagger, staggerItem } from "@/components/shared/reveal";
import { motion } from "framer-motion";
import { Calendar, Newspaper } from "lucide-react";

export function NewsList() {
  if (news.length === 0) {
    return (
      <div className="flex flex-col items-center text-center gap-3 bg-card border border-dashed border-line rounded-xl2 py-16 px-6">
        <Newspaper className="text-ink-soft/60" size={32} />
        <p className="font-display text-xl text-ink">No announcements yet</p>
        <p className="text-sm text-ink-soft max-w-md">
          Check back here for updates from the trust&rsquo;s programs.
        </p>
      </div>
    );
  }

  return (
    <RevealStagger className="flex flex-col gap-6" stagger={0.08}>
      {news.map((n) => (
        <motion.article
          key={n.slug}
          variants={staggerItem}
          className="bg-white border border-line rounded-xl2 p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center gap-3 text-xs text-ink-soft mb-3">
            <span className="bg-card text-emerald font-bold px-2.5 py-1 rounded-full">{n.category}</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {new Date(n.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
          <h3 className="font-display font-semibold text-xl mb-2">{n.title}</h3>
          <p className="text-ink-soft text-sm">{n.excerpt}</p>
        </motion.article>
      ))}
    </RevealStagger>
  );
}
