"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const categories = ["Teaching", "Healthcare Support", "Documentation", "Event Support", "Environment Drives", "Tamil Research"];

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-white border border-line rounded-xl2 p-8 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center py-10"
          >
            <CheckCircle2 className="text-emerald mb-4" size={48} />
            <h3 className="font-display font-semibold text-xl mb-2">Application received</h3>
            <p className="text-sm text-ink-soft max-w-xs">
              We&rsquo;ll reach out within 3 working days with next steps for your chosen area.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <h3 className="font-display font-semibold text-xl mb-1">Volunteer Application</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink-soft block mb-1.5">Full Name</label>
                <input required type="text" placeholder="Your name" className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald" />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-soft block mb-1.5">Phone Number</label>
                <input required type="tel" placeholder="+91" className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink-soft block mb-1.5">Email</label>
                <input required type="email" placeholder="you@email.com" className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald" />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-soft block mb-1.5">City</label>
                <input required type="text" placeholder="Your city" className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-soft block mb-1.5">Area of Interest</label>
              <select className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald">
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-soft block mb-1.5">Message (optional)</label>
              <textarea rows={3} placeholder="Tell us a little about yourself" className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald" />
            </div>
            <Button type="submit" variant="gold" className="w-full justify-center mt-2">
              Submit Application
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
