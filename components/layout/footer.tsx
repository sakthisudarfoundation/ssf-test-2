import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import { programs } from "@/data/programs";
import { site, isPlaceholder } from "@/data/site";

const socialIcons: Record<string, ComponentType<{ size?: number }>> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
};

export function Footer() {
  const socialEntries = Object.entries(site.social).filter(
    ([, url]) => !isPlaceholder(url)
  );

  return (
    <footer className="bg-deep-dark text-white/75 pt-16 pb-8">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Foundation */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-bold font-display text-lg mb-4">

              {/* Footer Logo */}
              <Image
                src="/images/logo/ssf-footer-logo.png"
                alt="Sakthi Sudar Foundation logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain shrink-0"
              />

              {site.name}
            </div>

            <p className="text-sm text-white/60 max-w-xs">
              {site.shortDescription}
            </p>

            {socialEntries.length > 0 && (
              <div className="flex gap-2.5 mt-5">
                {socialEntries.map(([key, url]) => {
                  const Icon = socialIcons[key];

                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center hover:bg-gold hover:text-[#241A05] transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-2.5 text-sm">
              <Link
                href="/about"
                className="hover:text-gold-light transition-colors"
              >
                About Us
              </Link>

              <Link
                href="/objectives"
                className="hover:text-gold-light transition-colors"
              >
                Objectives
              </Link>

              <Link
                href="/programs"
                className="hover:text-gold-light transition-colors"
              >
                Programs
              </Link>

              <Link
                href="/contact"
                className="hover:text-gold-light transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Programs
            </h4>

            <div className="flex flex-col gap-2.5 text-sm">
              {programs.slice(0, 4).map((p) => (
                <Link
                  key={p.slug}
                  href={`/programs#${p.slug}`}
                  className="hover:text-gold-light transition-colors"
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Newsletter
            </h4>

            <p className="text-sm text-white/60 mb-3">
              Get updates on our work.
            </p>

            <NewsletterForm />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs">
          <span>
            &copy; {new Date().getFullYear()} {site.name}.{" "}
            {site.legalNote}
          </span>

          <span>
            Reg. No. {site.registrationNumber}
          </span>
        </div>
      </div>
    </footer>
  );
}
