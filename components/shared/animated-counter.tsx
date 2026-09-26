"use client";

import { useCountUp } from "@/hooks/use-count-up";
import { formatNumber } from "@/lib/utils";

export function AnimatedCounter({
  target,
  label,
  suffix = "",
  size = "default",
}: {
  target: number;
  label: string;
  suffix?: string;
  size?: "default" | "lg";
}) {
  const { ref, value } = useCountUp(target);
  return (
    <div ref={ref} className="text-center">
      <div
        className={
          size === "lg"
            ? "font-display font-semibold text-4xl md:text-5xl text-gold-light"
            : "font-display font-semibold text-3xl md:text-4xl text-deep"
        }
      >
        {formatNumber(value)}
        {suffix}
      </div>
      <div className="text-xs md:text-sm text-ink-soft mt-1">{label}</div>
    </div>
  );
}
