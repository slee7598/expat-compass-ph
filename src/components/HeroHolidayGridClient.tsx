"use client";

import { useState } from "react";

export interface HeroGridPill {
  id: string;
  label: string;     // short display name for pill
  fullName: string;  // full name for info bar / tooltip
  isOpen: boolean;
  holidayName: string | null;
}

export function HeroHolidayGridClient({
  pills,
  dateLabel,
}: {
  pills: HeroGridPill[];
  dateLabel: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activePill = pills.find((p) => p.id === activeId) ?? null;

  return (
    <>
      <style>{`
        .hhg-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        /* Header row mirrors hrate-row: flanking gold lines + text */
        .hhg-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 0;
        }
        .hhg-header-line {
          display: block;
          width: 24px;
          height: 1px;
          background: rgba(201,168,76,0.4);
          flex-shrink: 0;
        }
        .hhg-date-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.9rem, 1.6vw, 1.12rem);
          font-weight: 400;
          color: #F8F6F1;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        /* "OFFICE STATUS" label below the header row — mirrors hrate-label */
        .hhg-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-top: 7px;
          margin-left: 38px; /* 24px line + 14px gap */
          margin-bottom: 14px;
        }
        /* 3×3 pill grid */
        .hhg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 5px;
          width: 100%;
        }
        .hhg-pill {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3px;
          padding: 6px 8px 7px;
          font-family: 'Inter', sans-serif;
          border: 1px solid;
          transition: background 0.14s, border-color 0.14s;
          background: none;
          text-align: left;
          width: 100%;
          min-width: 0;
          cursor: default;
        }
        .hhg-pill-open {
          background: rgba(34,197,94,0.08);
          border-color: rgba(34,197,94,0.26);
        }
        .hhg-pill-closed {
          background: rgba(239,68,68,0.10);
          border-color: rgba(239,68,68,0.32);
          cursor: pointer;
        }
        .hhg-pill-closed:hover {
          background: rgba(239,68,68,0.17);
          border-color: rgba(239,68,68,0.52);
        }
        .hhg-pill-active {
          background: rgba(239,68,68,0.22) !important;
          border-color: rgba(248,113,113,0.72) !important;
        }
        .hhg-city {
          font-size: 0.6rem;
          font-weight: 500;
          color: #F8F6F1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
          line-height: 1;
          letter-spacing: 0.01em;
        }
        .hhg-status-row {
          display: flex;
          align-items: center;
          gap: 3px;
          line-height: 1;
        }
        .hhg-dot {
          font-size: 0.36rem;
          flex-shrink: 0;
        }
        .hhg-dot-open   { color: #4ADE80; }
        .hhg-dot-closed { color: #F87171; }
        .hhg-status {
          font-size: 0.5rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .hhg-status-open   { color: #4ADE80; }
        .hhg-status-closed { color: #F87171; }
        /* Info bar when a closed pill is tapped */
        .hhg-info {
          margin-top: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.66rem;
          font-weight: 400;
          color: #F8F6F1;
          padding: 5px 10px;
          background: rgba(239,68,68,0.10);
          border-left: 2px solid rgba(248,113,113,0.55);
          line-height: 1.45;
          max-width: 100%;
        }
        .hhg-info-city { font-weight: 600; }
        .hhg-info-name { font-style: italic; }
        .hhg-link {
          display: block;
          margin-top: 10px;
          margin-left: 1px;
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #C9A84C;
          text-decoration: none;
        }
        .hhg-link:hover { text-decoration: underline; }
      `}</style>

      <div className="hhg-wrap">
        {/* Header: [line] Tuesday, July 7, 2026 [line] */}
        <div className="hhg-header-row">
          <span className="hhg-header-line" />
          <span className="hhg-date-text">{dateLabel}</span>
          <span className="hhg-header-line" />
        </div>
        {/* Sub-label: "OFFICE STATUS" — mirrors hrate-label position */}
        <p className="hhg-label">Office Status</p>

        <div className="hhg-grid">
          {pills.map((pill) => (
            <button
              key={pill.id}
              type="button"
              className={`hhg-pill hhg-pill-${pill.isOpen ? "open" : "closed"}${
                activeId === pill.id ? " hhg-pill-active" : ""
              }`}
              onClick={() => {
                if (pill.isOpen) return;
                setActiveId((prev) => (prev === pill.id ? null : pill.id));
              }}
              title={
                !pill.isOpen && pill.holidayName
                  ? `${pill.fullName}: ${pill.holidayName}`
                  : undefined
              }
            >
              <span className="hhg-city">{pill.label}</span>
              <span className="hhg-status-row">
                <span className={`hhg-dot hhg-dot-${pill.isOpen ? "open" : "closed"}`}>
                  ●
                </span>
                <span
                  className={`hhg-status hhg-status-${pill.isOpen ? "open" : "closed"}`}
                >
                  {pill.isOpen ? "Open" : "Closed"}
                </span>
              </span>
            </button>
          ))}
        </div>

        {activePill && (
          <p className="hhg-info">
            <span className="hhg-info-city">{activePill.fullName}</span>
            {" — closed today for "}
            <span className="hhg-info-name">{activePill.holidayName}</span>
          </p>
        )}

        <a href="/city-guides#2026-holidays" className="hhg-link">
          View full 2026 holiday schedule →
        </a>
      </div>
    </>
  );
}
