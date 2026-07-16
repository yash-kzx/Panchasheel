import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",//
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Panchsheel Geo Infra Solution — Geospatial & Infrastructure Surveying",
    template: "%s | Panchsheel Geo Infra Solution",
  },
  description:
    "Professional geospatial and infrastructure surveying company delivering precise survey data for highways, railways, mining, solar energy, and government projects across India.",
  keywords: [
    "geospatial surveying",
    "infrastructure surveying",
    "DGPS survey",
    "drone survey India",
    "LiDAR survey",
    "topographical survey",
    "mining survey",
    "road survey",
    "railway survey",
    "GIS mapping",
    "Bhopal",
    "Madhya Pradesh",
  ],
  openGraph: {
    title: "Panchsheel Geo Infra Solution",
    description:
      "Professional geospatial and infrastructure surveying across India.",
    type: "website",
    locale: "en_IN",
    siteName: "Panchsheel Geo Infra Solution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panchsheel Geo Infra Solution",
    description:
      "Professional geospatial and infrastructure surveying across India.",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
