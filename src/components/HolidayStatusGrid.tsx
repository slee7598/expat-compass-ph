import { JURISDICTIONS, getJurisdictionHoliday, getTodayPHT } from "@/lib/holidays2026";
import { HolidayPillClient, type PillData } from "./HolidayPillClient";

export default function HolidayStatusGrid() {
  const today = getTodayPHT();

  const pills: PillData[] = JURISDICTIONS.map((j) => {
    const holiday = getJurisdictionHoliday(j.id, today);
    return {
      id: j.id,
      name: j.name,
      isOpen: holiday === null,
      holidayName: holiday?.name ?? null,
    };
  });

  return <HolidayPillClient pills={pills} />;
}
