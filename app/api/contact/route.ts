import { NextResponse } from "next/server";

// TODO: Replace this stub with your email provider integration.
// Recommended options:
//   - Resend (resend.com) — simple Node SDK
//   - SendGrid (@sendgrid/mail)
//   - Nodemailer with Gmail / SMTP
//
// Example with Resend:
//   import { Resend } from "resend";
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({ from: "...", to: "...", subject: "...", html: "..." });

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Reject honeypot (website / url field must be empty)
    const honeypot = body.website ?? body.url ?? "";
    if (honeypot.length > 0) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    // Validate required fields
    if (!body.name || !body.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
    }

    // ---------------------------------------------------------
    // TODO: Send email notification here
    // ---------------------------------------------------------
    console.log("[/api/contact] New submission:", {
      formType: body.formType ?? "contact",
      name: body.name,
      phone: body.phone,
      email: body.email,
      service: body.service,
      message: body.message ?? body.description,
      timestamp: new Date().toISOString(),
    });
    // ---------------------------------------------------------

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/contact] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
