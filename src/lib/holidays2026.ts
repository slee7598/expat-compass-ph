export type HolidayType = "regular" | "special" | "special-working";

export interface Holiday {
  date: string; // "YYYY-MM-DD"
  name: string;
  type: HolidayType;
  note?: string;
}

export const HOLIDAYS_2026: Holiday[] = [
  { date: "2026-01-01", name: "New Year's Day", type: "regular" },
  { date: "2026-02-17", name: "Chinese New Year", type: "special" },
  {
    date: "2026-02-25",
    name: "EDSA People Power Anniversary",
    type: "special-working",
    note: "Special working day — government offices, BI, and banks remain OPEN",
  },
  { date: "2026-04-02", name: "Maundy Thursday", type: "regular" },
  { date: "2026-04-03", name: "Good Friday", type: "regular" },
  { date: "2026-04-04", name: "Black Saturday", type: "special" },
  { date: "2026-04-09", name: "Day of Valor (Araw ng Kagitingan)", type: "regular" },
  { date: "2026-05-01", name: "Labor Day", type: "regular" },
  { date: "2026-06-12", name: "Independence Day", type: "regular" },
  { date: "2026-08-21", name: "Ninoy Aquino Day", type: "special" },
  { date: "2026-08-31", name: "National Heroes Day", type: "regular" },
  { date: "2026-11-01", name: "All Saints Day", type: "special" },
  { date: "2026-11-02", name: "All Souls Day", type: "special" },
  { date: "2026-11-30", name: "Bonifacio Day", type: "regular" },
  { date: "2026-12-08", name: "Feast of the Immaculate Conception", type: "special" },
  { date: "2026-12-24", name: "Christmas Eve", type: "special" },
  { date: "2026-12-25", name: "Christmas Day", type: "regular" },
  { date: "2026-12-30", name: "Rizal Day", type: "regular" },
  { date: "2026-12-31", name: "New Year's Eve", type: "special" },
];

// Returns the current date in Philippine Time (UTC+8)
function getTodayPHT(): string {
  const now = new Date();
  const pht = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  const yyyy = pht.getUTCFullYear();
  const mm = String(pht.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(pht.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function getTodayHoliday(): Holiday | null {
  const today = getTodayPHT();
  return HOLIDAYS_2026.find((h) => h.date === today) ?? null;
}
