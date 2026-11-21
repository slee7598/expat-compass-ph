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
    console.error("[subscribe] KIT_API_KEY is not set in environment variables");
    return NextResponse.json(
      { error: "Server configuration error: missing API key" },
      { status: 500 }
    );
  }

  console.log(`[subscribe] Subscribing ${email} to Kit form ${FORM_ID}`);

  // Kit v4 API — POST /v4/forms/{id}/subscribers with Bearer auth
  const kitUrl = `https://api.kit.com/v4/forms/${FORM_ID}/subscribers`;

  let res: Response;
  try {
    res = await fetch(kitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ email_address: email }),
    });
  } catch (err) {
    console.error("[subscribe] Network error calling Kit API:", err);
    return NextResponse.json(
      { error: "Could not reach subscription service. Please try again." },
      { status: 502 }
    );
  }

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    console.error("[subscribe] Kit API error:", res.status, JSON.stringify(data));
    return NextResponse.json(
      { error: "Subscription failed. Please try again." },
      { status: 500 }
    );
  }

  console.log("[subscribe] Success:", JSON.stringify(data));
  return NextResponse.json({ success: true });
}
