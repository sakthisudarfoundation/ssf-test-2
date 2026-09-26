"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/types";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";

export function Lightbox({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
    },
    [images.length]
  );
  const prev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
    },
    [images.length]
  );

  // Keyboard support: Escape closes, arrow keys navigate
  useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, next, prev]);

  function onSwipe(_: unknown, info: PanInfo) {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(i)}
            className="group relative h-56 md:h-64 rounded-2xl overflow-hidden bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <ImageWithFallback
              src={img.image}
              alt={img.caption}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              fallbackLabel="Photo coming soon"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
            <span className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium drop-shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {img.caption}
            </span>
            <span className="absolute top-3 left-3 bg-white/90 text-deep text-[10px] font-bold px-2.5 py-1 rounded-full">
              {img.category}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 text-white/80 hover:text-white"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <button
              onClick={prev}
              className="absolute left-4 md:left-10 text-white/80 hover:text-white hidden sm:block"
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
            <motion.div
              key={images[activeIndex].id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={onSwipe}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl h-[60vh] rounded-2xl overflow-hidden bg-card flex items-end p-8"
            >
              <ImageWithFallback
                src={images[activeIndex].image}
                alt={images[activeIndex].caption}
                fill
                className="object-cover"
                fallbackLabel="Photo coming soon"
              />
              <div className="relative z-10 bg-gradient-to-t from-black/70 to-transparent -m-8 p-8 w-full">
                <span className="bg-white/90 text-deep text-xs font-bold px-3 py-1 rounded-full">
                  {images[activeIndex].category}
                </span>
                <p className="text-white text-lg font-medium mt-4">
                  {images[activeIndex].caption}
                </p>
              </div>
            </motion.div>
            <button
              onClick={next}
              className="absolute right-4 md:right-10 text-white/80 hover:text-white hidden sm:block"
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
            <div className="absolute bottom-6 flex gap-4 sm:hidden">
              <button onClick={prev} className="text-white/80" aria-label="Previous"><ChevronLeft size={28} /></button>
              <button onClick={next} className="text-white/80" aria-label="Next"><ChevronRight size={28} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
