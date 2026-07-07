import { getTodayHoliday } from "@/lib/holidays2026";

export default function HeroHolidayStatus() {
  const holiday = getTodayHoliday();
  const isClosed = holiday !== null && holiday.type !== "special-working";

  const rowText = isClosed ? "✕  Closed Today" : "●  Open Today";
  const rowColor = isClosed ? "#FCA5A5" : "#4ADE80";

  const subText = isClosed
    ? holiday!.name
    : holiday?.type === "special-working"
    ? `${holiday.name} — offices open`
    : "Offices & banks open";

  return (
    <>
      <style>{`
        .hhol-wrap {}
        .hhol-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .hhol-line {
          display: block;
          width: 36px;
          height: 1px;
          background: rgba(201,168,76,0.4);
          flex-shrink: 0;
        }
        .hhol-status {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.1rem, 2.2vw, 1.45rem);
          font-weight: 500;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .hhol-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(248,246,241,0.78);
          margin-top: 8px;
          margin-left: 54px;
        }
        .hhol-sub-name {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: #FCA5A5;
          margin-top: 8px;
          margin-left: 54px;
          line-height: 1.4;
        }
        .hhol-link {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #C9A84C;
          text-decoration: none;
          margin-top: 6px;
          margin-left: 54px;
          transition: opacity 0.15s;
        }
        .hhol-link:hover { opacity: 0.8; text-decoration: underline; }
      `}</style>

      <div className="hhol-wrap">
        <div className="hhol-row">
          <span className="hhol-line" />
          <span className="hhol-status" style={{ color: rowColor }}>
            {rowText}
          </span>
          <span className="hhol-line" />
        </div>
        {isClosed ? (
          <p className="hhol-sub-name">{subText}</p>
        ) : (
          <p className="hhol-sub">{subText}</p>
        )}
        <a href="/city-guides#2026-holidays" className="hhol-link">
          View 2026 holiday schedule →
        </a>
      </div>
    </>
  );
}
