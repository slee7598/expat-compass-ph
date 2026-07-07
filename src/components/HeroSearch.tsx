"use client";

import { useState, useRef, FormEvent } from "react";
import { renderMarkdown } from "@/lib/renderMarkdown";

const EXAMPLE_QUESTIONS = [
  "What does a tourist visa extension really cost at the BI office?",
  "Is my Schwab account safe if I move to the Philippines?",
  "What is the difference between K-1 and CR-1 visa in 2026?",
  "Does Medicare cover me in the Philippines?",
  "Can I live comfortably in Cebu on $1,500 a month?",
  "What is tampo and how do I handle it?",
  "How do I open a bank account as a foreigner in Cebu?",
  "What is the SRRV minimum deposit in 2026?",
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

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [asked, setAsked] = useState("");
  const [history, setHistory] = useState<Array<{ question: string; answer: string }>>([]);
  const [followUpQuery, setFollowUpQuery] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  async function runSearch(q: string, hist: Array<{ question: string; answer: string }> = []) {
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
        body: JSON.stringify({ query: trimmed, history: hist }),
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
    setHistory([]);
    setFollowUpQuery("");
    runSearch(query, []);
  }

  function onPillClick(q: string) {
    setQuery(q);
    setHistory([]);
    setFollowUpQuery("");
    runSearch(q, []);
  }

  function onFollowUpSubmit(e: FormEvent) {
    e.preventDefault();
    const q = followUpQuery.trim();
    if (!q || loading) return;
    const newHistory = answer
      ? [...history, { question: asked, answer: parseFollowUp(answer).main }]
      : history;
    setHistory(newHistory);
    setFollowUpQuery("");
    runSearch(q, newHistory);
  }

  const parsedAnswer = !loading && answer
    ? parseFollowUp(answer)
    : { main: answer, followUp: "" };

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

      {!answer && !loading && (
        <div className="hs-pills-wrap">
          <p className="hs-pills-label">Try asking:</p>
          <div className="hs-pills">
            {EXAMPLE_QUESTIONS.map((q) => (
              <button
                key={q}
                className="hs-pill"
                type="button"
                onClick={() => onPillClick(q)}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {loading && !answer && (
        <div className="hs-dots">
          <span /><span /><span />
        </div>
      )}

      {error && <p className="hs-error">{error}</p>}

      {(answer || (loading && answer)) && (
        <div className="hs-answer">
          {history.length > 0 && !loading && (
            <p className="hs-conv-badge">
              Continuing · {history.length} {history.length === 1 ? "exchange" : "exchanges"}
            </p>
          )}
          <p className="hs-answer-q">{asked}</p>
          {loading ? (
            <div className="hs-answer-text">
              {answer}
              <span className="hs-cursor" />
            </div>
          ) : (
            <div
              className="hs-answer-text hs-answer-text-md"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(parsedAnswer.main) }}
            />
          )}
          {!loading && parsedAnswer.followUp && (
            <div className="hs-followup">
              <p className="hs-followup-label">You might also ask</p>
              <p className="hs-followup-text">{parsedAnswer.followUp}</p>
            </div>
          )}
          {!loading && (
            <p className="hs-answer-foot">
              Powered by Claude · For informational purposes only
            </p>
          )}
        </div>
      )}

      {answer && !loading && (
        <div className="hs-followup-panel">
          <p className="hs-followup-panel-label">Follow Up</p>
          <form className="hs-followup-panel-form" onSubmit={onFollowUpSubmit}>
            <input
              className="hs-followup-panel-input"
              type="text"
              value={followUpQuery}
              onChange={(e) => setFollowUpQuery(e.target.value)}
              placeholder="Type your follow-up question…"
              autoComplete="off"
              spellCheck={false}
            />
            <button
              className="hs-followup-panel-btn"
              type="submit"
              disabled={!followUpQuery.trim()}
            >
              Ask →
            </button>
          </form>
          {history.length > 0 && (
            <p className="hs-followup-panel-note">
              Claude has context from {history.length} previous {history.length === 1 ? "exchange" : "exchanges"}.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
