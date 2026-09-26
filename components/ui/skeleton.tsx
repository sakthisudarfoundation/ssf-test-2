import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-gradient-to-r from-card via-line to-card bg-[length:200%_100%]",
        className
      )}
    />
  );
}
