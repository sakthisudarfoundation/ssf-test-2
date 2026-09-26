"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  function validate() {
    const errs: Record<string, string> = {};
    if (!values.name.trim()) errs.name = "Name is required.";
    if (!values.email.trim()) errs.email = "Email is required.";
    else if (!isValidEmail(values.email)) errs.email = "Enter a valid email address.";
    if (!values.message.trim()) errs.message = "Message is required.";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return; // prevent duplicate submissions
    if (!validate()) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center text-center py-10 bg-white border border-line rounded-xl2"
        >
          <CheckCircle2 className="text-emerald mb-3" size={40} />
          <h3 className="font-semibold text-lg mb-1">Message received</h3>
          <p className="text-sm text-ink-soft max-w-xs">
            Thank you. Your message has been received. We will get back to you soon.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-xs font-semibold text-ink-soft block mb-1.5">Name</label>
              <input
                id="name"
                required
                aria-invalid={!!fieldErrors.name}
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
                placeholder="Your name"
                value={values.name}
                onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald"
              />
              {fieldErrors.name && <p id="name-error" className="text-xs text-red-600 mt-1">{fieldErrors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold text-ink-soft block mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                required
                aria-invalid={!!fieldErrors.email}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                placeholder="you@email.com"
                value={values.email}
                onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald"
              />
              {fieldErrors.email && <p id="email-error" className="text-xs text-red-600 mt-1">{fieldErrors.email}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-semibold text-ink-soft block mb-1.5">Message</label>
            <textarea
              id="message"
              required
              rows={4}
              aria-invalid={!!fieldErrors.message}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
              placeholder="How can we help?"
              value={values.message}
              onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
              className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald"
            />
            {fieldErrors.message && <p id="message-error" className="text-xs text-red-600 mt-1">{fieldErrors.message}</p>}
          </div>

          {status === "error" && (
            <div className="flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <Button type="submit" variant="line" disabled={status === "sending"}>
            {status === "sending" ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
