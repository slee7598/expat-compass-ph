import { NextResponse } from "next/server";

const FORM_ID = "9610050";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const res = await fetch(
    `https://api.kit.com/v4/forms/${FORM_ID}/subscribers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": apiKey,
      },
      body: JSON.stringify({ email_address: email }),
    }
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Subscription failed. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
