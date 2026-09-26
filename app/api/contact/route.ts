import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email and message are all required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const contactEmail = process.env.CONTACT_EMAIL;
  if (!contactEmail) {
    // Not configured yet — respond clearly rather than pretending it sent.
    return NextResponse.json(
      {
        error:
          "This form isn't fully configured yet (CONTACT_EMAIL is not set). Your message was not sent.",
      },
      { status: 503 }
    );
  }

  const result = await sendEmail({
    to: contactEmail,
    subject: `New contact form message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    replyTo: email,
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error ?? "Something went wrong. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
