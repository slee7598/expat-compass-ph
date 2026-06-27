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
  { label: "US Benefits", href: "/retirement-benefits" },
  { label: "Banking", href: "/banking" },
  { label: "Transportation", href: "/transportation" },
  { label: "City Guides", href: "/city-guides" },
  { label: "Dating", href: "/dating-philippines" },
  { label: "Steve's Expat Toolkit", href: "/steve-recommends" },
  { label: "About", href: "/about" },
];

interface NavProps {
  active?: string;
}

export default function Nav({ active }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-brand">
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
        </div>
      </nav>

      {/* Slide-in drawer — always mounted for CSS transition */}
      <div
        className={`nav-drawer${open ? " nav-drawer--open" : ""}`}
        aria-hidden={!open}
      >
        <button
          className="nav-drawer-close"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <nav className="nav-drawer-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-dl${active === link.href ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <div
          className="nav-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
