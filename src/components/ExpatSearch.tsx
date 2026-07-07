"use client";

import { useState, useRef, FormEvent } from "react";

const SUGGESTIONS = [
  "What visa do I need to retire here?",
  "Which months should I avoid due to typhoons?",
  "How does the bar fine system work?",
  "What are the red flags when dating a Filipina?",
  "Which areas of Mindanao are actually dangerous?",
  "What scams target foreigners most?",
];

function parseFollowUp(text: string): { main: string; followUp: string } {
  const marker = "FOLLOWUP:";
  const idx = text.lastIndexOf(marker);
  if (idx !== -1) {
    return {
      main: text.slice(0, idx).trimEnd(),
      followUp: text.slice(idx + marker.length).trim(),
    };
  }
  return { main: text, followUp: "" };
}

export default function ExpatSearch() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [asked, setAsked] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  async function handleSearch(q: string) {
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

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    handleSearch(query);
  }

  function handleSuggestion(s: string) {
    setQuery(s);
    handleSearch(s);
  }

  return (
    <>
      <style>{`
        .search-section {
          background: #0B1F3A;
          padding: 88px 48px;
          border-top: 1px solid rgba(201,168,76,0.2);
          border-bottom: 1px solid rgba(201,168,76,0.2);
        }
        .search-inner {
          max-width: 760px;
          margin: 0 auto;
        }
        .search-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 16px;
        }
        .search-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #C9A84C;
        }
        .search-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 700;
          color: #F8F6F1;
          line-height: 1.2;
          margin-bottom: 10px;
        }
        .search-sub {
          font-size: 0.92rem;
          font-weight: 300;
          color: rgba(248,246,241,0.82);
          margin-bottom: 36px;
          line-height: 1.6;
        }
        .search-form {
          display: flex;
          gap: 0;
          margin-bottom: 20px;
        }
        .search-input {
          flex: 1;
          padding: 18px 24px;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: #0B1F3A;
          background: #F8F6F1;
          border: none;
          outline: none;
          min-width: 0;
          border-radius: 0;
        }
        .search-input::placeholder {
          color: #9AAABB;
        }
        .search-btn {
          padding: 18px 32px;
          background: #C9A84C;
          color: #0B1F3A;
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .search-btn:hover:not(:disabled) { background: #b8943e; }
        .search-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .search-suggestions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 0;
        }
        .search-pill {
          font-size: 0.75rem;
          font-weight: 400;
          color: rgba(248,246,241,0.78);
          border: 1px solid rgba(248,246,241,0.15);
          padding: 6px 14px;
          cursor: pointer;
          background: transparent;
          font-family: 'Inter', sans-serif;
          transition: color 0.2s, border-color 0.2s;
          text-align: left;
          line-height: 1.4;
        }
        .search-pill:hover {
          color: #F8F6F1;
          border-color: rgba(201,168,76,0.5);
        }

        /* ── ANSWER PANEL ── */
        .answer-panel {
          margin-top: 40px;
          background: #F8F6F1;
          border-left: 3px solid #C9A84C;
          padding: 36px 40px;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .answer-question {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 14px;
        }
        .answer-text {
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.85;
          color: #2A3A4A;
          white-space: pre-wrap;
        }
        .answer-text ul, .answer-text ol {
          margin: 12px 0 12px 20px;
        }
        .answer-text li {
          margin-bottom: 6px;
        }
        .answer-cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background: #C9A84C;
          vertical-align: text-bottom;
          margin-left: 2px;
          animation: blink 0.8s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .answer-followup {
          margin-top: 24px;
          border-top: 1px solid rgba(201,168,76,0.35);
          background: rgba(201,168,76,0.05);
          padding: 16px 20px;
        }
        .answer-followup-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 8px;
        }
        .answer-followup-text {
          font-size: 0.93rem;
          font-weight: 400;
          line-height: 1.72;
          color: #2A3A4A;
        }
        .answer-footer {
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid #E8E4DC;
          font-size: 0.72rem;
          color: #9AAABB;
          font-weight: 400;
        }
        .answer-error {
          margin-top: 40px;
          padding: 24px 32px;
          border-left: 3px solid #C9A84C;
          background: rgba(248,246,241,0.08);
          font-size: 0.9rem;
          color: #F8F6F1;
          font-weight: 300;
        }
        .loading-dots {
          display: flex;
          gap: 6px;
          padding: 36px 40px;
          background: rgba(248,246,241,0.04);
          margin-top: 40px;
          border-left: 3px solid rgba(201,168,76,0.3);
        }
        .loading-dots span {
          width: 7px;
          height: 7px;
          background: #C9A84C;
          border-radius: 50%;
          animation: pulse 1.2s ease-in-out infinite;
        }
        .loading-dots span:nth-child(2) { animation-delay: 0.2s; }
        .loading-dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes pulse {
          0%, 80%, 100% { opacity: 0.25; transform: scale(0.85); }
          40% { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 900px) {
          .search-section { padding: 64px 24px; }
          .search-form { flex-direction: column; }
          .search-btn { padding: 16px 24px; }
          .answer-panel { padding: 28px 24px; }
        }
      `}</style>

      <section className="search-section">
        <div className="search-inner">
          <p className="search-eyebrow">AI Powered Expat Search</p>
          <h2 className="search-heading">
            Ask anything about living<br />in the Philippines.
          </h2>
          <p className="search-sub">
            Visas, housing, healthcare, banking, transport, marriage, cities — ask
            in plain English and get a specific, practical answer.
          </p>

          <form className="search-form" onSubmit={handleSubmit}>
            <input
              className="search-input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. What visa do I need to retire in the Philippines?"
              autoComplete="off"
              spellCheck={false}
            />
            <button
              className="search-btn"
              type="submit"
              disabled={loading || !query.trim()}
            >
              {loading ? "Searching…" : "Search →"}
            </button>
          </form>

          <div className="search-suggestions">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                className="search-pill"
                onClick={() => handleSuggestion(s)}
                type="button"
                disabled={loading}
              >
                {s}
              </button>
            ))}
          </div>

          {loading && !answer && (
            <div className="loading-dots">
              <span /><span /><span />
            </div>
          )}

          {error && (
            <div className="answer-error">{error}</div>
          )}

          {(answer || (loading && answer)) && (() => {
            const { main, followUp } = !loading ? parseFollowUp(answer) : { main: answer, followUp: "" };
            return (
              <div className="answer-panel">
                <p className="answer-question">{asked}</p>
                <div className="answer-text">
                  {main}
                  {loading && <span className="answer-cursor" />}
                </div>
                {!loading && followUp && (
                  <div className="answer-followup">
                    <p className="answer-followup-label">You might also ask</p>
                    <p className="answer-followup-text">{followUp}</p>
                  </div>
                )}
                {!loading && (
                  <p className="answer-footer">
                    Powered by Claude · For informational purposes only · Always verify with official sources
                  </p>
                )}
              </div>
            );
          })()}
        </div>
      </section>
    </>
  );
}
