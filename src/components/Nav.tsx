import Link from "next/link";

const links = [
  { label: "Visas", href: "/visas" },
  { label: "Marriage", href: "/marriage" },
  { label: "Cost of Living", href: "/cost-of-living" },
  { label: "Housing", href: "/housing" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Banking", href: "/banking" },
  { label: "Transportation", href: "/transportation" },
];

interface NavProps {
  active?: string;
}

export default function Nav({ active }: NavProps) {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        Expat Compass <span>PH</span>
      </Link>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={active === link.href ? "active" : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
