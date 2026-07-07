import { getTodayHoliday } from "@/lib/holidays2026";

export default function HolidayBanner() {
  const holiday = getTodayHoliday();
  const isClosed = holiday !== null && holiday.type !== "special-working";

  const scheduleLink = (
    <a
      href="/city-guides#2026-holidays"
      style={{
        display: "inline-block",
        marginTop: "12px",
        fontSize: "0.78rem",
        fontWeight: 500,
        color: "#C9A84C",
        textDecoration: "none",
        letterSpacing: "0.04em",
      }}
    >
      View full 2026 holiday schedule →
    </a>
  );

  if (isClosed) {
    return (
      <div
        style={{
          marginTop: "32px",
          background: "rgba(220,38,38,0.14)",
          borderLeft: "4px solid #EF4444",
          padding: "20px 24px",
          maxWidth: "600px",
        }}
      >
        <p
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#FCA5A5",
            marginBottom: "6px",
          }}
        >
          ⚠ Closed Today
        </p>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#F8F6F1",
            marginBottom: "8px",
          }}
        >
          {holiday!.name}
        </p>
        <p
          style={{
            fontSize: "0.88rem",
            fontWeight: 300,
            lineHeight: 1.65,
            color: "#F8F6F1",
          }}
        >
          Government offices, Bureau of Immigration, and banks are closed today.
          {holiday!.type === "special" && " (Special non-working holiday)"}
        </p>
        {scheduleLink}
      </div>
    );
  }

  return (
    <div style={{ marginTop: "28px", maxWidth: "600px" }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "rgba(34,197,94,0.1)",
          borderLeft: "4px solid #22C55E",
          padding: "10px 18px",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#22C55E",
            flexShrink: 0,
            display: "inline-block",
          }}
        />
        <span
          style={{
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#F8F6F1",
          }}
        >
          {holiday?.type === "special-working"
            ? `Open Today — ${holiday.name} (special working day — offices open)`
            : "Open Today — Government offices, BI & banks operating normally"}
        </span>
      </div>
      {scheduleLink}
    </div>
  );
}
