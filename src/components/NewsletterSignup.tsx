"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setEmail("");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="nl-wrap">
      <p className="nl-eyebrow">Free newsletter</p>
      <h2 className="nl-heading">
        The Expat Compass dispatch — straight to your inbox.
      </h2>
      <p className="nl-sub">
        Visa updates, cost-of-living data, and honest expat advice from someone
        who actually lives here. No fluff, no spam.
      </p>

      {status === "success" ? (
        <div className="nl-success">
          <span className="nl-check">✓</span>
          <span>You&rsquo;re in. Check your inbox to confirm.</span>
        </div>
      ) : (
        <form className="nl-form" onSubmit={handleSubmit}>
          <input
            className="nl-input"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
          />
          <button
            className="nl-btn"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="nl-error">{errorMsg}</p>
      )}

      <p className="nl-note">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
