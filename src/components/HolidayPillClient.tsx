"use client";

import { useState } from "react";

export interface PillData {
  id: string;
  name: string;
  isOpen: boolean;
  holidayName: string | null;
}

export function HolidayPillClient({ pills }: { pills: PillData[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  function handleClick(pill: PillData) {
    if (pill.isOpen) return;
    setActiveId((prev) => (prev === pill.id ? null : pill.id));
  }

  const activePill = pills.find((p) => p.id === activeId) ?? null;

  return (
    <>
      <style>{`
        .hsg-wrap {
          margin-top: 28px;
        }
        /* 5×2 pill grid on desktop, single stacked column on mobile */
        .hsg-grid {
          display: grid;
          grid-template-columns: repeat(5, auto);
          gap: 5px;
        }
        @media (max-width: 700px) {
          .hsg-grid {
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
          }
          .hsg-pill {
            width: 100%;
            min-width: 0;
            justify-content: flex-start;
            white-space: normal;
          }
        }
        .hsg-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 5px 10px;
          font-family: 'Inter', sans-serif;
          font-size: 0.63rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          white-space: nowrap;
          border: 1px solid;
          line-height: 1;
          transition: background 0.14s, border-color 0.14s;
          background: none;
        }
        .hsg-pill-open {
          background: rgba(34,197,94,0.09);
          border-color: rgba(34,197,94,0.28);
          color: #F8F6F1;
          cursor: default;
        }
        .hsg-pill-closed {
          background: rgba(239,68,68,0.10);
          border-color: rgba(239,68,68,0.32);
          color: #F8F6F1;
          cursor: pointer;
        }
        .hsg-pill-closed:hover {
          background: rgba(239,68,68,0.17);
          border-color: rgba(239,68,68,0.52);
        }
        .hsg-pill-active {
          background: rgba(239,68,68,0.22) !important;
          border-color: rgba(248,113,113,0.72) !important;
        }
        .hsg-dot {
          font-size: 0.38rem;
          line-height: 1;
          flex-shrink: 0;
        }
        .hsg-dot-open   { color: #4ADE80; }
        .hsg-dot-closed { color: #F87171; }
        .hsg-city { color: #F8F6F1; }
        .hsg-sep {
          color: rgba(248,246,241,0.38);
          margin: 0 1px;
        }
        .hsg-status {
          font-weight: 700;
          font-size: 0.56rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .hsg-status-open   { color: #4ADE80; }
        .hsg-status-closed { color: #F87171; }
        .hsg-info {
          margin-top: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          font-weight: 400;
          color: #F8F6F1;
          padding: 5px 10px;
          background: rgba(239,68,68,0.10);
          border-left: 2px solid rgba(248,113,113,0.55);
          max-width: 480px;
          line-height: 1.45;
        }
        .hsg-info-city { font-weight: 600; }
        .hsg-info-name { font-style: italic; }
        /* Severe weather advisory */
        .hsg-advisory {
          margin-top: 9px;
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem;
          font-weight: 400;
          color: rgba(201,168,76,0.78);
          line-height: 1.6;
          max-width: 520px;
        }
        .hsg-advisory-label {
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-size: 0.55rem;
          color: #C9A84C;
          margin-right: 4px;
        }
        .hsg-link {
          display: block;
          margin-top: 9px;
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #C9A84C;
          text-decoration: none;
        }
        .hsg-link:hover { text-decoration: underline; }
      `}</style>

      <div className="hsg-wrap">
        <div className="hsg-grid">
          {pills.map((pill) => (
            <button
              key={pill.id}
              type="button"
              className={`hsg-pill hsg-pill-${pill.isOpen ? "open" : "closed"}${activeId === pill.id ? " hsg-pill-active" : ""}`}
              onClick={() => handleClick(pill)}
              title={!pill.isOpen && pill.holidayName ? `${pill.name}: ${pill.holidayName}` : undefined}
            >
              <span className={`hsg-dot hsg-dot-${pill.isOpen ? "open" : "closed"}`}>●</span>
              <span className="hsg-city">{pill.name}</span>
              <span className="hsg-sep">·</span>
              <span className={`hsg-status hsg-status-${pill.isOpen ? "open" : "closed"}`}>
                {pill.isOpen ? "Open" : "Closed"}
              </span>
            </button>
          ))}
        </div>

        {activePill && (
          <p className="hsg-info">
            <span className="hsg-info-city">{activePill.name}</span>
            {" — closed today for "}
            <span className="hsg-info-name">{activePill.holidayName}</span>
          </p>
        )}

        {/* Severe weather advisory */}
        <p className="hsg-advisory">
          <span className="hsg-advisory-label">⚠ Weather:</span>
          Typhoons &amp; flooding may cause additional local office closures not reflected above — always verify locally before traveling for appointments.
        </p>

        <a href="/city-guides#2026-holidays" className="hsg-link">
          View full 2026 holiday schedule →
        </a>
      </div>
    </>
  );
}
