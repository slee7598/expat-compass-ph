/**
 * Central last-updated date map.
 * Update the entry for any page whose content changes.
 * The sitemap, page stamps, and check-dates script all read from here.
 * Run `npm run check-dates` after changes to verify nothing is stale.
 */

export interface PageDate {
  display: string; // shown to readers, e.g. "October 2026"
  iso: string;     // ISO 8601 for sitemap / JSON-LD, e.g. "2026-10-04"
}

const LAST_UPDATED: Record<string, PageDate> = {
  "/":                        { display: "November 2026", iso: "2026-11-21" },
  "/arrival-guide":           { display: "October 2026",  iso: "2026-10-04" },
  "/banking":                 { display: "October 2026",  iso: "2026-10-04" },
  "/city-guides":             { display: "October 2026",  iso: "2026-10-04" },
  "/cost-of-living":          { display: "November 2026", iso: "2026-11-22" },
  "/dating-philippines":      { display: "November 2026", iso: "2026-11-21" },
  "/divorce-philippines":     { display: "August 2026",   iso: "2026-08-05" },
  "/expat-toolkit":           { display: "October 2026",  iso: "2026-10-04" },
  "/healthcare":              { display: "November 2026", iso: "2026-11-22" },
  "/housing":                 { display: "October 2026",  iso: "2026-10-04" },
  "/income-abroad":           { display: "October 2026",  iso: "2026-10-04" },
  "/marriage":                { display: "October 2026",  iso: "2026-10-04" },
  "/moving-to-philippines":   { display: "October 2026",  iso: "2026-10-04" },
  "/red-flag-checklist":      { display: "November 2026", iso: "2026-11-21" },
  "/retirement-benefits":     { display: "October 2026",  iso: "2026-10-04" },
  "/transportation":          { display: "October 2026",  iso: "2026-10-04" },
  "/visas":                   { display: "October 2026",  iso: "2026-10-04" },
  "/about":                   { display: "October 2026",  iso: "2026-10-04" },
};

export default LAST_UPDATED;
