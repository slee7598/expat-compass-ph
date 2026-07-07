import { JURISDICTIONS, getJurisdictionHoliday, getTodayPHT } from "@/lib/holidays2026";
import { HeroHolidayGridClient, type HeroGridPill } from "./HeroHolidayGridClient";

// Shortened display labels for the compact 3-column grid pills
const GRID_LABELS: Record<string, string> = {
  "cebu-province": "Cebu Prov.",
  "olongapo":      "Olongapo",
};

export default function HeroHolidayGrid() {
  const today = getTodayPHT();

  // Date label computed server-side in Asia/Manila — unaffected by server or client TZ
  const dateLabel = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  const pills: HeroGridPill[] = JURISDICTIONS.map((j) => {
    const holiday = getJurisdictionHoliday(j.id, today);
    return {
      id: j.id,
      label: GRID_LABELS[j.id] ?? j.name,
      fullName: j.name,
      isOpen: holiday === null,
      holidayName: holiday?.name ?? null,
    };
  });

  return <HeroHolidayGridClient pills={pills} dateLabel={dateLabel} />;
}
