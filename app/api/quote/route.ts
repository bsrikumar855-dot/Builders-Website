import { NextResponse } from "next/server";

// Simple in-memory rate limiter (resets on server restart)
const rateLimitStore = new Map<string, number[]>();
const LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 3; // 3 submissions per IP per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitStore.get(ip) || []).filter(
    (t) => now - t < LIMIT_WINDOW_MS
  );
  if (timestamps.length >= MAX_REQUESTS) return true;
  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again after 10 minutes." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check
    const honeypot = body.website ?? body.url ?? "";
    if (honeypot.length > 0) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    // Validate required fields
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: "Missing required fields: name and phone are required." },
        { status: 422 }
      );
    }

    // Log quote request (replace with email/CRM integration as needed)
    console.log("[/api/quote] New quote request:", {
      brand: body.brand ?? "shreekumar",
      name: body.name,
      phone: body.phone,
      email: body.email ?? null,
      address: body.address ?? null,
      propertyType: body.propertyType ?? null,
      service: body.service ?? null,
      timeline: body.timeline ?? null,
      budget: body.budget ?? null,
      description: body.description ?? null,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/quote] Error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please call us directly." },
      { status: 500 }
    );
  }
}
