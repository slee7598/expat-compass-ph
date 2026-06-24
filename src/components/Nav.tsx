const links = [
  { label: "Visas", href: "/visas" },
  { label: "Marriage", href: "/marriage" },
  { label: "Cost of Living", href: "/cost-of-living" },
  { label: "Housing", href: "/housing" },
];

interface NavProps {
  active?: string;
}

export default function Nav({ active }: NavProps) {
  return (
    <nav className="nav">
      <a href="/" className="nav-logo">
        Expat Compass <span>PH</span>
      </a>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={active === link.href ? "active" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
