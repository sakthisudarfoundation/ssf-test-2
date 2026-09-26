"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { formatNumber } from "@/lib/utils";

export function DonationProgress({
  raised,
  goal,
  label,
}: {
  raised: number;
  goal: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const pct = Math.min((raised / goal) * 100, 100);

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between text-sm mb-2">
        <span className="font-semibold text-ink">{label}</span>
        <span className="text-ink-soft">
          ₹{formatNumber(raised)} of ₹{formatNumber(goal)}
        </span>
      </div>
      <div className="h-3 w-full bg-card rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-emerald to-gold"
        />
      </div>
    </div>
  );
}
