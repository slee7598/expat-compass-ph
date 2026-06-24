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
  return (
    <aside className="lsb">
      <div className="lsb-head">
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
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
