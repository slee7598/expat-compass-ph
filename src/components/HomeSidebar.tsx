"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Visas", href: "/visas" },
  { label: "Marriage", href: "/marriage" },
  { label: "Cost of Living", href: "/cost-of-living" },
  { label: "Housing", href: "/housing" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Banking", href: "/banking" },
  { label: "Transportation", href: "/transportation" },
  { label: "City Guides", href: "/city-guides" },
  { label: "Steve Recommends", href: "/steve-recommends" },
  { label: "About", href: "/about" },
];

export default function HomeSidebar({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar — fixed on desktop, slide-in on mobile */}
      <aside className={`lsb${open ? " lsb--open" : ""}`}>
        <div className="lsb-head">
          <button
            className="lsb-burger"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <span />
            <span />
            <span />
          </button>
          <Link href="/" className="lsb-logo-link">
            <Image
              src="/images/logo.png"
              alt="Expat Compass PH"
              width={120}
              height={120}
              className="lsb-logo-img"
              priority
            />
          </Link>
        </div>
        <nav className="lsb-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`lsb-link${active === link.href ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile backdrop */}
      {open && (
        <div
          className="lsb-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile trigger — hamburger outside the sidebar */}
      <button
        className="lsb-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>
    </>
  );
}
