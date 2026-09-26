"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const categories = [
  "Teaching",
  "Healthcare Support",
  "Documentation",
  "Event Support",
  "Environment Drives",
  "Tamil Research",
];

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    interest: categories[0],
    message: "",
  });

  function updateField(
    field: keyof typeof form,
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(
          data.error ||
            "We couldn't submit your application. Please try again."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong while submitting your application. Please try again."
      );
    } finally {
      setSending(false);
    }
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
            <CheckCircle2
              className="text-emerald mb-4"
              size={48}
            />

            <h3 className="font-display font-semibold text-xl mb-2">
              Application received
            </h3>

            <p className="text-sm text-ink-soft max-w-xs">
              We&rsquo;ll reach out within 3 working days with next
              steps for your chosen area.
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
            <h3 className="font-display font-semibold text-xl mb-1">
              Volunteer Application
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink-soft block mb-1.5">
                  Full Name
                </label>

                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    updateField("name", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-ink-soft block mb-1.5">
                  Phone Number
                </label>

                <input
                  required
                  type="tel"
                  placeholder="+91"
                  value={form.phone}
                  onChange={(e) =>
                    updateField("phone", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink-soft block mb-1.5">
                  Email
                </label>

                <input
                  required
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) =>
                    updateField("email", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-ink-soft block mb-1.5">
                  City
                </label>

                <input
                  required
                  type="text"
                  placeholder="Your city"
                  value={form.city}
                  onChange={(e) =>
                    updateField("city", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-ink-soft block mb-1.5">
                Area of Interest
              </label>

              <select
                value={form.interest}
                onChange={(e) =>
                  updateField("interest", e.target.value)
                }
                className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-ink-soft block mb-1.5">
                Message (optional)
              </label>

              <textarea
                rows={3}
                placeholder="Tell us a little about yourself"
                value={form.message}
                onChange={(e) =>
                  updateField("message", e.target.value)
                }
                className="w-full px-4 py-3 border border-line rounded-lg bg-bg text-sm focus:outline-none focus:border-emerald"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <Button
              type="submit"
              variant="gold"
              className="w-full justify-center mt-2"
              disabled={sending}
            >
              {sending
                ? "Submitting..."
                : "Submit Application"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
