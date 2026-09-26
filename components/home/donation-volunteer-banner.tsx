"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function DonationVolunteerBanner() {
  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="rounded-[28px] bg-gradient-to-r from-emerald to-emerald-light bg-[length:200%_200%] animate-gradient-move text-white p-10 md:p-14 flex flex-wrap items-center justify-between gap-8">
          <div>
            <h3 className="font-display font-semibold text-2xl md:text-3xl mb-2">
              Ready to be part of this?
            </h3>
            <p className="text-white/85">
              Whether it&rsquo;s a donation or your time &mdash; every contribution changes a life.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/donate">
              <Button variant="gold">Donate</Button>
            </Link>
            <Link href="/volunteer">
              <Button variant="outline" className="border-white/60">
                Volunteer
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
