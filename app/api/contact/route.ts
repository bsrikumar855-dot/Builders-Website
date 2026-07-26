import { NextResponse } from "next/server";

// Simple in-memory store for rate limiting (lasts as long as the server process is alive)
const rateLimitStore = new Map<string, number[]>();

const LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 3; // Max 3 submissions per IP per 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitStore.get(ip) || [];
  
  // Filter out timestamps older than the window
  const activeTimestamps = timestamps.filter(t => now - t < LIMIT_WINDOW_MS);
  
  if (activeTimestamps.length >= MAX_REQUESTS) {
    return true;
  }
  
  // Add current timestamp and update store
  activeTimestamps.push(now);
  rateLimitStore.set(ip, activeTimestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "127.0.0.1";
    
    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again after 10 minutes." },
        { status: 429 }
      );
    }

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

    // Log the submission (simulating database or email service integration)
    console.log("[/api/contact] New submission logged:", {
      formType: body.formType ?? "contact",
      name: body.name,
      phone: body.phone,
      email: body.email,
      service: body.service,
      message: body.message ?? body.description,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/contact] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
