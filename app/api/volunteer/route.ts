import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: {
    name?: string;
    phone?: string;
    email?: string;
    city?: string;
    interest?: string;
    message?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const {
    name,
    phone,
    email,
    city,
    interest,
    message,
  } = body;

  // Required fields
  if (
    !name?.trim() ||
    !phone?.trim() ||
    !email?.trim() ||
    !city?.trim() ||
    !interest?.trim()
  ) {
    return NextResponse.json(
      {
        error:
          "Please fill in all required fields.",
      },
      { status: 400 }
    );
  }

  // Email validation
  if (!isValidEmail(email)) {
    return NextResponse.json(
      {
        error:
          "Please provide a valid email address.",
      },
      { status: 400 }
    );
  }

  const contactEmail = process.env.CONTACT_EMAIL;

  if (!contactEmail) {
    return NextResponse.json(
      {
        error:
          "Volunteer applications are not configured yet. Your application was not sent.",
      },
      { status: 503 }
    );
  }

  const emailText = `
New Volunteer Application

--------------------------------
Volunteer Details
--------------------------------

Full Name: ${name}
Phone Number: ${phone}
Email: ${email}
City: ${city}
Area of Interest: ${interest}

Message:
${message?.trim() || "No message provided."}

--------------------------------
Submitted through the Sakthi Sudar Foundation website.
--------------------------------
`;

  const result = await sendEmail({
    to: contactEmail,
    subject: `New Volunteer Application from ${name}`,
    text: emailText,
    replyTo: email,
  });

  if (!result.ok) {
    return NextResponse.json(
      {
        error:
          result.error ??
          "Something went wrong while sending the application.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
  });
}