"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Wraps next/image with a graceful fallback: if the image file at `src`
 * doesn't exist (or fails to load), shows a labeled placeholder instead
 * of a broken image icon. Drop a real file at the given path and it
 * will start rendering automatically — no code changes needed.
 */
export function ImageWithFallback({
  fallbackLabel = "Photo coming soon",
  className,
  alt,
  ...props
}: ImageProps & { fallbackLabel?: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-card text-ink-soft/70 w-full h-full min-h-[120px]",
          className
        )}
      >
        <ImageOff size={26} strokeWidth={1.5} />
        <span className="text-xs font-medium">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
