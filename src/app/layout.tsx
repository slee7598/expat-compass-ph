import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expat Compass PH — Your Guide to Living in the Philippines",
  description:
    "Practical, first-hand guidance on visas, housing, healthcare, banking, and daily life in the Philippines for expats and foreigners.",
  verification: {
    google: "1S7WFsRlQmD1MjV_6B-f4zn6XjQ8u-_lQULwHVKuIQ4",
  },
  openGraph: {
    title: "Expat Compass PH — Your Guide to Living in the Philippines",
    description:
      "Practical, first-hand guidance on visas, housing, healthcare, banking, and daily life in the Philippines for expats and foreigners.",
    url: "https://expatcompassph.com",
    siteName: "Expat Compass PH",
    type: "website",
    images: [
      {
        url: "https://expatcompassph.com/images/logo.png",
        width: 512,
        height: 512,
        alt: "Expat Compass PH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expat Compass PH — Your Guide to Living in the Philippines",
    description:
      "Practical, first-hand guidance on visas, housing, healthcare, banking, and daily life in the Philippines for expats and foreigners.",
  },
  alternates: {
    canonical: "https://expatcompassph.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollToTop />
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Expat Compass PH",
                url: "https://expatcompassph.com",
                description: "Practical guidance for expats living in the Philippines",
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Expat Compass PH",
                url: "https://expatcompassph.com",
                description: "Practical guidance for expats living in the Philippines",
                founder: {
                  "@type": "Person",
                  name: "Steve Lee",
                },
                sameAs: ["https://github.com/slee7598/expat-compass-ph"],
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}
