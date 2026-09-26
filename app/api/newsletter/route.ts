import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim();
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.NEWSLETTER_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    return NextResponse.json(
      {
        error:
          "Newsletter signup isn't fully configured yet (RESEND_API_KEY / NEWSLETTER_AUDIENCE_ID missing). Your email was not saved.",
      },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: `Subscription failed: ${text}` }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "We couldn't subscribe you right now. Please try again." },
      { status: 500 }
    );
  }
}
