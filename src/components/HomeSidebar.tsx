"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Visas", href: "/visas" },
  { label: "Marriage", href: "/marriage" },
  { label: "Divorce Guide", href: "/divorce-philippines" },
  { label: "Cost of Living", href: "/cost-of-living" },
  { label: "Housing", href: "/housing" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Banking", href: "/banking" },
  { label: "Transportation", href: "/transportation" },
  { label: "City Guides", href: "/city-guides" },
  { label: "Dating in the Philippines", href: "/dating-philippines" },
  { label: "US Benefits Abroad", href: "/retirement-benefits" },
  { label: "Moving to Philippines", href: "/moving-to-philippines" },
  { label: "Arrival Guide", href: "/arrival-guide" },
  { label: "Living on Income", href: "/income-abroad" },
  { label: "Steve's Expat Toolkit", href: "/steve-recommends" },
  { label: "About", href: "/about" },
];

export default function HomeSidebar({
  active,
  mobileBarSlot,
}: {
  active?: string;
  mobileBarSlot?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop: nav sidebar — logo lives in hero-banner */}
      <aside className="lsb">
        <nav className="lsb-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`lsb-link${active === link.href ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile: top bar with hamburger + logo + optional slot (HeroRate) */}
      <div className="lsb-mob-bar">
        <button
          className="lsb-mob-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
        <Link href="/" className="lsb-mob-logo-link">
          <Image
            src="/images/logo.png"
            alt="Expat Compass PH"
            width={80}
            height={80}
            className="lsb-mob-logo-img"
            priority
          />
        </Link>
        {mobileBarSlot}
      </div>

      {/* Mobile slide-in drawer */}
      <div
        className={`lsb-mob-drawer${open ? " lsb-mob-drawer--open" : ""}`}
        aria-hidden={!open}
      >
        <button
          className="lsb-mob-close"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <nav className="lsb-mob-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`lsb-mob-link${active === link.href ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <div
          className="lsb-mob-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
