import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <Link href="/" className="footer-logo">
        Expat Compass <span>PH</span>
      </Link>
      <p className="footer-note">
        © {new Date().getFullYear()} Expat Compass PH · For informational purposes only
      </p>
    </footer>
  );
}
