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

// Local holidays by jurisdiction. National non-working holidays take precedence.
// Dates subject to annual local proclamation — verify with local government units.
export const LOCAL_HOLIDAYS_2026: Record<string, Holiday[]> = {
  "cebu-city": [
    { date: "2026-01-18", name: "Sinulog Sunday", type: "special" },
    { date: "2026-02-24", name: "Cebu City Charter Day", type: "regular" },
  ],
  "lapu-lapu": [
    { date: "2026-04-27", name: "Lapu-Lapu City Charter Day", type: "regular" },
  ],
  "cebu-province": [
    { date: "2026-06-21", name: "Mandaue City Charter Day", type: "regular" },
  ],
  "baguio": [
    { date: "2026-09-01", name: "Baguio City Charter Day", type: "regular" },
  ],
  "davao": [
    { date: "2026-10-16", name: "Araw ng Davao (Charter Day)", type: "regular" },
  ],
  "iloilo": [
    { date: "2026-01-25", name: "Dinagyang Sunday", type: "special" },
  ],
  "olongapo": [
    { date: "2026-06-01", name: "Olongapo City Charter Day", type: "regular" },
  ],
  "manila": [
    { date: "2026-06-24", name: "Araw ng Maynila (Manila Day)", type: "special",
      note: "Proclamation No. 1320 — City of Manila only; other cities/provinces unaffected" },
  ],
  // Dumaguete: no distinct local holiday identified for 2026; follows national calendar
};

export const JURISDICTIONS: { id: string; name: string }[] = [
  { id: "national",      name: "National" },
  { id: "cebu-city",    name: "Cebu City" },
  { id: "lapu-lapu",    name: "Lapu-Lapu" },
  { id: "cebu-province", name: "Cebu Province" },
  { id: "baguio",       name: "Baguio" },
  { id: "davao",        name: "Davao" },
  { id: "iloilo",       name: "Iloilo" },
  { id: "olongapo",     name: "Olongapo / Subic" },
  { id: "dumaguete",    name: "Dumaguete" },
  { id: "manila",       name: "Manila" },
];

// Returns the current date in Asia/Manila time (UTC+8, no DST).
// Uses the IANA timezone name so the result is unaffected by the server's
// local timezone, the visitor's device clock, or VPN routing.
// en-CA locale produces YYYY-MM-DD output that matches the holiday data format.
export function getTodayPHT(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

// Returns the active non-working holiday for a jurisdiction on dateStr, or null (open).
// National non-working holidays apply to all jurisdictions.
// special-working national days keep jurisdiction open unless it also has a local holiday.
export function getJurisdictionHoliday(jurisdictionId: string, dateStr: string): Holiday | null {
  const national = HOLIDAYS_2026.find((h) => h.date === dateStr && h.type !== "special-working");
  if (national) return national;
  const local = (LOCAL_HOLIDAYS_2026[jurisdictionId] ?? []).find((h) => h.date === dateStr);
  return local ?? null;
}

export function getTodayHoliday(): Holiday | null {
  const today = getTodayPHT();
  return HOLIDAYS_2026.find((h) => h.date === today) ?? null;
}
