"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    // Skip scroll-to-top when the URL has a hash — let the browser scroll to the anchor instead
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}
