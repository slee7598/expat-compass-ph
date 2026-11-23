#!/usr/bin/env node
/**
 * npm run check-dates
 * Compares each page's last-known content commit with its entry in src/lib/lastUpdated.ts.
 * Prints a warning for any page whose content commit is newer than the recorded date.
 * Ignores styling-only commit messages (fix:, style:, refactor:, chore:, revert:).
 */

import { execSync } from "child_process";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// Parse lastUpdated.ts with a simple regex (avoid ts-node dependency)
const libSrc = readFileSync(resolve(root, "src/lib/lastUpdated.ts"), "utf8");
const entries = [...libSrc.matchAll(/"(\/[^"]*)":\s*\{[^}]*iso:\s*"([0-9-]+)"/g)];

const ROUTE_TO_FILE = {
  "/":                        "src/app/page.tsx",
  "/arrival-guide":           "src/app/arrival-guide/page.tsx",
  "/banking":                 "src/app/banking/page.tsx",
  "/city-guides":             "src/app/city-guides/page.tsx",
  "/cost-of-living":          "src/app/cost-of-living/page.tsx",
  "/dating-philippines":      "src/app/dating-philippines/page.tsx",
  "/divorce-philippines":     "src/app/divorce-philippines/page.tsx",
  "/expat-toolkit":           "src/app/expat-toolkit/page.tsx",
  "/healthcare":              "src/app/healthcare/page.tsx",
  "/housing":                 "src/app/housing/page.tsx",
  "/income-abroad":           "src/app/income-abroad/page.tsx",
  "/marriage":                "src/app/marriage/page.tsx",
  "/moving-to-philippines":   "src/app/moving-to-philippines/page.tsx",
  "/red-flag-checklist":      "src/app/red-flag-checklist/page.tsx",
  "/retirement-benefits":     "src/app/retirement-benefits/page.tsx",
  "/transportation":          "src/app/transportation/page.tsx",
  "/visas":                   "src/app/visas/page.tsx",
  "/about":                   "src/app/about/page.tsx",
};

// Commit message prefixes that are styling/infra only — skip these
const SKIP_PREFIXES = /^(fix:|style:|refactor:|chore:|revert:|feat\(nav\)|feat\(footer\)|build:|ci:)/i;

function getLastContentCommitDate(file) {
  try {
    const log = execSync(
      `git log --follow --format="%ai|%s" -- "${file}"`,
      { cwd: root, encoding: "utf8" }
    ).trim();
    if (!log) return null;
    for (const line of log.split("\n")) {
      const [dateStr, ...msgParts] = line.split("|");
      const msg = msgParts.join("|").trim();
      if (!SKIP_PREFIXES.test(msg)) {
        return dateStr.trim().slice(0, 10); // YYYY-MM-DD
      }
    }
    return null;
  } catch {
    return null;
  }
}

let stale = 0;
let ok = 0;

console.log("\n=== Expat Compass PH — Date Check ===\n");
console.log(
  `${"Route".padEnd(28)} ${"Recorded".padEnd(12)} ${"Last content commit".padEnd(12)} Status`
);
console.log("─".repeat(70));

for (const [, route, recordedIso] of entries) {
  const file = ROUTE_TO_FILE[route];
  if (!file) continue;
  const commitDate = getLastContentCommitDate(file);
  if (!commitDate) {
    console.log(`${route.padEnd(28)} ${recordedIso.padEnd(12)} ${"(no commits)".padEnd(12)} —`);
    continue;
  }
  if (commitDate > recordedIso) {
    console.log(
      `${route.padEnd(28)} ${recordedIso.padEnd(12)} ${commitDate.padEnd(12)} ⚠  STALE — content newer than recorded date`
    );
    stale++;
  } else {
    console.log(`${route.padEnd(28)} ${recordedIso.padEnd(12)} ${commitDate.padEnd(12)} ✓`);
    ok++;
  }
}

console.log("─".repeat(70));
if (stale === 0) {
  console.log(`\n✓ All ${ok} pages are up to date.\n`);
} else {
  console.log(`\n⚠  ${stale} page(s) have content newer than their recorded date. Update src/lib/lastUpdated.ts.\n`);
  process.exit(1);
}
