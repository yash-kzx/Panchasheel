import type { Metadata } from "next";
import Script from "next/script";
import { Navbar, Footer } from "@/components/layout";
import { ServicesPageContent } from "@/components/pages/services-page";

const PAGE_URL = "https://www.panchasheelgeoinfra.com/services";

export const metadata: Metadata = {
  title: "Surveying Services in Bhopal & Across India",
  description:
    "Comprehensive geospatial surveying services by Panchasheel Geo Infra Solutions, Bhopal. Drone Survey, DGPS, LiDAR, Topographic Survey, Transmission Line Survey, Mining Survey, GIS Mapping and Thermal Survey for infrastructure, energy and government projects across India.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Surveying Services — Panchasheel Geo Infra Solutions, Bhopal",
    description:
      "Drone Survey, DGPS, LiDAR, Topographic Survey, Transmission Line Survey, Mining Survey, GIS Mapping and Thermal Survey for infrastructure projects across India.",
    url: PAGE_URL,
    type: "website",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Surveying Services — Panchasheel Geo Infra Solutions",
  url: PAGE_URL,
  description:
    "Geospatial and infrastructure surveying services including Drone Survey, DGPS, LiDAR, Topographic Survey, Transmission Line Survey, Mining Survey and GIS Mapping.",
  mainEntity: {
    "@type": "ItemList",
    name: "Surveying Services",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Drone / UAV Survey" },
      { "@type": "ListItem", position: 2, name: "DGPS / GNSS Survey" },
      { "@type": "ListItem", position: 3, name: "LiDAR Survey" },
      { "@type": "ListItem", position: 4, name: "Total Station Survey" },
      { "@type": "ListItem", position: 5, name: "Thermal Survey" },
      { "@type": "ListItem", position: 6, name: "Topographic Survey" },
      { "@type": "ListItem", position: 7, name: "Contour Survey" },
      { "@type": "ListItem", position: 8, name: "GIS Mapping" },
      { "@type": "ListItem", position: 9, name: "Transmission Line Survey" },
      { "@type": "ListItem", position: 10, name: "Mining Survey" },
      { "@type": "ListItem", position: 11, name: "Road & Railway Survey" },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServicesPageContent />
      </main>
      <Footer />
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
