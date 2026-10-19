import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const CANONICAL_URL = "https://www.panchasheelgeoinfra.com";

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_URL),
  title: {
    default:
      "Panchasheel Geo Infra Solutions — Drone, DGPS & LiDAR Survey in Bhopal, India",
    template: "%s | Panchasheel Geo Infra Solutions",
  },
  description:
    "Panchasheel Geo Infra Solutions is a professional geospatial and infrastructure surveying company based in Bhopal, Madhya Pradesh. We provide Drone Survey, DGPS Survey, LiDAR Survey, Topographic Survey, Transmission Line Survey, Mining Survey, and GIS Mapping services across India.",
  keywords: [
    "drone survey Bhopal",
    "drone survey Madhya Pradesh",
    "DGPS survey Bhopal",
    "LiDAR survey Madhya Pradesh",
    "topographic survey India",
    "transmission line survey",
    "geospatial surveying company India",
    "mining survey",
    "GIS mapping",
    "infrastructure surveying Bhopal",
    "UAV survey",
    "thermal survey",
    "railway survey India",
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title:
      "Panchasheel Geo Infra Solutions — Drone, DGPS & LiDAR Survey in Bhopal, India",
    description:
      "Professional geospatial and infrastructure surveying company based in Bhopal, MP. Drone Survey, DGPS, LiDAR, Topographic, Transmission Line, Mining Survey and GIS Mapping across India.",
    url: CANONICAL_URL,
    type: "website",
    locale: "en_IN",
    siteName: "Panchasheel Geo Infra Solutions",
    images: [
      {
        url: "/images/navbar-logo.webp",
        width: 1200,
        height: 400,
        alt: "Panchasheel Geo Infra Solutions — Geospatial & Infrastructure Surveying",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Panchasheel Geo Infra Solutions — Drone, DGPS & LiDAR Survey in Bhopal",
    description:
      "Professional geospatial and infrastructure surveying company based in Bhopal, MP. Drone Survey, DGPS, LiDAR, Topographic, Transmission Line, Mining Survey and GIS Mapping across India.",
    images: ["/images/navbar-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

/* ── Organization + LocalBusiness structured data ──────────────────────────
   Only verified, confirmed data is included:
   - Business name, URL, address, phone, email (from constants.ts)
   - Service area (PAN India, stated on site)
   - Services listed (from the services section)
   No ratings, reviews, founding year, or unverified credentials.
   ──────────────────────────────────────────────────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Panchasheel Geo Infra Solutions",
  alternateName: "Panchsheel Geo Infra Solution",
  url: CANONICAL_URL,
  logo: `${CANONICAL_URL}/images/navbar-logo.webp`,
  image: `${CANONICAL_URL}/images/navbar-logo.webp`,
  description:
    "Professional geospatial and infrastructure surveying company providing Drone Survey, DGPS Survey, LiDAR Survey, Topographic Survey, Transmission Line Survey, Mining Survey, and GIS Mapping services across India.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "H.No. 80, Shop No. 02, Near Durgadham Mandir, Ashoka Garden",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    postalCode: "462023",
    addressCountry: "IN",
  },
  telephone: "+916261876968",
  email: "panchasheel.gis@gmail.com",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Surveying Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drone / UAV Survey" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "DGPS Survey" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "LiDAR Survey" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Topographic Survey" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transmission Line Survey" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mining Survey" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Road & Railway Survey" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "GIS Mapping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Thermal Survey" } },
    ],
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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

