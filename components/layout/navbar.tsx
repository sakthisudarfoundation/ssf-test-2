"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HeartHandshake } from "lucide-react";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/objectives", label: "Objectives" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

// Routes whose hero section sits on a dark background. Every other route
// is light from the very top, so its navbar must never use the transparent
// white-text style -- that mismatch was the source of the invisible-text bug.
const DARK_HERO_ROUTES = ["/", "/about"];

export function Navbar() {
  const { direction, scrolled } = useScrollDirection();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const hasDarkHero = DARK_HERO_ROUTES.includes(pathname);
  // "Transparent mode" (white text, see-through background) is only valid
  // while we're both (a) on a route that actually has a dark hero and
  // (b) still within that hero, i.e. not yet scrolled past it.
  const transparent = hasDarkHero && !scrolled;

  return (
    <motion.header
      animate={{ y: direction === "down" && scrolled ? -100 : 0 }}
      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out border-b",
        transparent
          ? "bg-transparent border-transparent py-4"
          : "bg-white/80 backdrop-blur-xl border-line shadow-[0_4px_24px_-8px_rgba(18,49,92,0.12)] py-2"
      )}
    >
      <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 font-bold text-lg font-display transition-colors duration-500",
            transparent ? "text-white" : "text-[#111827]"
          )}
        >
          <Image
  src="/images/logo/ssf-logo.png"
  alt="Sakthi Sudar Foundation logo"
  width={40}
  height={40}
  className="w-10 h-10 object-contain shrink-0"
/>
          Sakthi Sudar Foundation
        </Link>

        <nav className="hidden lg:flex gap-8 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "transition-colors duration-500 hover:text-gold",
                transparent ? "text-white/90" : "text-[#111827]/80"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/donate">
            {/* Donate button carries its own gold background + dark text
                at all times, so contrast never depends on navbar state. */}
            <Button variant="gold" size="sm">
              <HeartHandshake size={16} /> Donate
            </Button>
          </Link>
        </div>

        <button
          className={cn(
            "lg:hidden transition-colors duration-500",
            transparent ? "text-white" : "text-[#111827]"
          )}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            // The mobile dropdown always renders on its own solid surface,
            // regardless of navbar transparency above -- it's never see-through,
            // so its text color is fixed and always readable.
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-line overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[#111827] font-medium text-sm"
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/donate" onClick={() => setOpen(false)}>
                <Button variant="gold" className="w-full justify-center">
                  Donate
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
