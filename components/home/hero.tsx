"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeartHandshake, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KolamPattern } from "@/components/shared/kolam-svg";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-deep-dark">
      {/* Real hero photograph — drop a file at /public/images/hero/trust-community.jpg
          to replace the placeholder shown below. */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/images/hero/trust-community.jpg"
          alt="Community service by Sakthi Sudar Foundation"
          fill
          priority
          className="object-cover"
          fallbackLabel="Hero photograph coming soon"
        />
        {/* Dark gradient overlay so text always stays readable over any photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-dark/85 via-deep-dark/70 to-deep-dark/90" />
      </div>

      <KolamPattern
        cols={14}
        rows={14}
        spacing={48}
        size={700}
        opacity={0.1}
        className="absolute inset-0 m-auto w-full h-full max-w-[700px] max-h-[700px] pointer-events-none"
      />

      <div className="relative z-10 max-w-[1180px] mx-auto px-6 pt-28 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-gold-light mb-5"
        >
          <span className="w-5 h-0.5 bg-gold inline-block" />
          {site.name} &middot; Tamil Nadu
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display font-semibold text-white leading-[1.08] text-4xl sm:text-5xl lg:text-7xl max-w-3xl mb-6"
        >
          Where <em className="italic text-gold-light">service</em> meets
          <br /> every open hand.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.7 }}
          className="text-white/80 text-lg max-w-xl mb-10"
        >
          {site.shortDescription} {site.legalNote}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <Link href="/donate">
            <Button variant="gold" size="lg">
              <HeartHandshake size={18} /> Donate Now
            </Button>
          </Link>
          <Link href="/volunteer">
            <Button variant="outline" size="lg">
              <Users size={18} /> Become a Volunteer
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn More <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
