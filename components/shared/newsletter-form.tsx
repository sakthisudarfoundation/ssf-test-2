"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "We couldn't subscribe you right now. Please try again.");
        return;
      }
      setStatus("success");
      setMessage("Thank you for subscribing. You'll receive updates from Sakthi Sudar Foundation.");
    } catch {
      setStatus("error");
      setMessage("We couldn't subscribe you right now. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-start gap-2 text-sm text-emerald-light">
        <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
        <span>{message}</span>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          className="flex-1 min-w-0 px-3.5 py-2.5 rounded-lg border border-white/20 bg-white/5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-gold"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-3.5 py-2.5 rounded-lg bg-gold text-[#241A05] hover:bg-gold-light transition-colors disabled:opacity-60"
          aria-label="Subscribe"
        >
          {status === "sending" ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
        </button>
      </form>
      <p className="text-[11px] text-white/40 mt-2">
        We only use your email for occasional updates. No spam, unsubscribe anytime.
      </p>
      {status === "error" && <p className="text-xs text-red-300 mt-2">{message}</p>}
    </div>
  );
}
