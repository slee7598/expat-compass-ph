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

interface NavProps {
  active?: string;
}

export default function Nav({ active }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-shell">
      {/* Logo */}
      <Link href="/" className="nav-logo">
        <Image
          src="/images/logo.png"
          alt="Expat Compass PH"
          width={120}
          height={120}
          className="nav-logo-img"
          priority
        />
      </Link>

      {/* Desktop: vertical sidebar panel */}
      <aside className="nav-sidebar" aria-label="Main navigation">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-sl${active === link.href ? " active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </aside>

      {/* Mobile: hamburger */}
      <button
        className="nav-burger"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile: full-screen overlay */}
      {open && (
        <div className="nav-overlay" role="dialog" aria-modal="true">
          <button
            className="nav-ov-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav className="nav-ov-links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-ol${active === link.href ? " active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
