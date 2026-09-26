/**
 * Thin wrapper around Resend so the API routes stay provider-agnostic.
 * If RESEND_API_KEY isn't set, sendEmail() returns a clear "not
 * configured" result instead of throwing — so the site still builds
 * and runs, and the API responds helpfully rather than crashing.
 */

export interface SendEmailResult {
  ok: boolean;
  configured: boolean;
  error?: string;
}

export async function sendEmail(params: {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      ok: false,
      configured: false,
      error: "Email sending is not configured yet (RESEND_API_KEY missing).",
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Sakthi Sudar Foundation Website <onboarding@resend.dev>",
        to: [params.to],
        subject: params.subject,
        text: params.text,
        reply_to: params.replyTo,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      return { ok: false, configured: true, error: `Resend error: ${body}` };
    }
    return { ok: true, configured: true };
  } catch (err) {
    return {
      ok: false,
      configured: true,
      error: err instanceof Error ? err.message : "Unknown email error",
    };
  }
}
