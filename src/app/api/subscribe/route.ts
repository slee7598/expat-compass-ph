import { NextResponse } from "next/server";

const FORM_ID = "9610050";

export async function POST(request: Request) {
  let email: string;
  try {
    const body = await request.json();
    email = body.email;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    console.error("[subscribe] KIT_API_KEY is not set");
    return NextResponse.json(
      { error: "Server configuration error: missing API key" },
      { status: 500 }
    );
  }

  const headers = {
    "Content-Type": "application/json",
    "X-Kit-Api-Key": apiKey,
  };

  console.log(`[subscribe] Subscribing ${email} via Kit v4`);

  // Step 1 — create/upsert the subscriber
  let res1: Response;
  try {
    res1 = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers,
      body: JSON.stringify({ email_address: email }),
    });
  } catch (err) {
    console.error("[subscribe] Network error (step 1):", err);
    return NextResponse.json(
      { error: "Could not reach subscription service. Please try again." },
      { status: 502 }
    );
  }

  const d1 = await res1.json().catch(() => ({}));
  if (!res1.ok) {
    console.error("[subscribe] Kit step 1 error:", res1.status, JSON.stringify(d1));
    return NextResponse.json(
      { error: "Subscription failed. Please try again." },
      { status: 500 }
    );
  }

  // Step 2 — add subscriber to form 9610050 (Clare) to trigger welcome automation
  let res2: Response;
  try {
    res2 = await fetch(`https://api.kit.com/v4/forms/${FORM_ID}/subscribers`, {
      method: "POST",
      headers,
      body: JSON.stringify({ email_address: email }),
    });
  } catch (err) {
    console.error("[subscribe] Network error (step 2):", err);
    return NextResponse.json(
      { error: "Could not reach subscription service. Please try again." },
      { status: 502 }
    );
  }

  const d2 = await res2.json().catch(() => ({}));
  if (!res2.ok) {
    console.error("[subscribe] Kit step 2 error:", res2.status, JSON.stringify(d2));
    return NextResponse.json(
      { error: "Subscription failed. Please try again." },
      { status: 500 }
    );
  }

  console.log("[subscribe] Success:", JSON.stringify(d2));
  return NextResponse.json({ success: true });
}
