"use client";

import { useState, useRef, FormEvent } from "react";

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [asked, setAsked] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  async function runSearch(q: string) {
    const trimmed = q.trim();
    if (!trimmed || loading) return;

    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();

    setLoading(true);
    setAnswer("");
    setError("");
    setAsked(trimmed);

    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmed }),
        signal: abortRef.current.signal,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Search failed. Please try again.");
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setAnswer(accumulated);
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name !== "AbortError") {
        setError(err.message || "Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    runSearch(query);
  }

  return (
    <div className="hs-wrap">
      <p className="hs-label">AI Powered Expat Search</p>
      <form className="hs-form" onSubmit={onSubmit}>
        <input
          className="hs-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything about expat life in the Philippines…"
          autoComplete="off"
          spellCheck={false}
        />
        <button
          className="hs-btn"
          type="submit"
          disabled={loading || !query.trim()}
        >
          {loading ? "…" : "Search →"}
        </button>
      </form>

      {loading && !answer && (
        <div className="hs-dots">
          <span /><span /><span />
        </div>
      )}

      {error && <p className="hs-error">{error}</p>}

      {(answer || (loading && answer)) && (
        <div className="hs-answer">
          <p className="hs-answer-q">{asked}</p>
          <div className="hs-answer-text">
            {answer}
            {loading && <span className="hs-cursor" />}
          </div>
          {!loading && (
            <p className="hs-answer-foot">
              Powered by Claude · For informational purposes only
            </p>
          )}
        </div>
      )}
    </div>
  );
}
