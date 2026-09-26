"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/shared/copy-button";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { donation } from "@/data/donation";
import { site, isPlaceholder } from "@/data/site";
import { cn } from "@/lib/utils";

const tabs = ["UPI", "Bank Transfer", "QR Code"] as const;

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center gap-3 text-sm py-2.5 border-b border-dashed border-white/20 last:border-none">
      <span className="text-white/70">{label}</span>
      <span className="flex items-center gap-2">
        <span className={cn("font-semibold", isPlaceholder(value) && "text-white/50 italic font-normal")}>
          {value}
        </span>
        {!isPlaceholder(value) && <CopyButton value={value} />}
      </span>
    </div>
  );
}

export function DonatePanel() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("UPI");

  return (
    <div className="bg-gradient-to-br from-deep to-deep-light rounded-[24px] p-9 text-white">
      <div className="flex gap-2.5 mb-7 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-semibold transition-colors",
              tab === t ? "bg-gold text-[#241A05]" : "bg-white/10 hover:bg-white/20"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {tab === "UPI" && (
            <div className="mb-5">
              <Field label="UPI ID" value={donation.upi.id} />
              {isPlaceholder(donation.upi.id) && (
                <p className="text-xs text-white/50 mt-3">
                  The official UPI ID will appear here once configured in{" "}
                  <code className="bg-white/10 px-1.5 py-0.5 rounded">data/donation.ts</code>.
                </p>
              )}
            </div>
          )}
          {tab === "Bank Transfer" && (
            <div className="mb-5">
              <Field label="Account Name" value={donation.bank.accountName} />
              <Field label="Bank Name" value={donation.bank.bankName} />
              <Field label="Branch" value={donation.bank.branch} />
              <Field label="Account No." value={donation.bank.accountNumber} />
              <Field label="IFSC" value={donation.bank.ifsc} />
            </div>
          )}
          {tab === "QR Code" && (
            <div className="bg-white rounded-2xl p-7 flex flex-col items-center gap-3 mb-5">
              <div className="relative w-40 h-40 rounded-xl overflow-hidden bg-card">
                <ImageWithFallback
                  src={donation.qrImagePath}
                  alt="UPI QR code"
                  fill
                  className="object-contain"
                  fallbackLabel="UPI QR code coming soon"
                />
              </div>
              <p className="text-deep text-xs font-semibold">Scan with any UPI-enabled app</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <p className="text-xs text-white/50 mb-4">
        {donation.taxDeduction.section80GConfirmed
          ? "Donations qualify for tax deduction under Section 80G."
          : `80G tax-deduction status: ${site.eightyG}`}
      </p>

      <Button variant="gold" className="w-full justify-center">
        Proceed to Donate
      </Button>
    </div>
  );
}
