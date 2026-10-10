import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { ServicesPageContent } from "@/components/pages/services-page";

export const metadata: Metadata = {
  title: "Surveying Services",
  description:
    "End-to-end surveying and geospatial solutions — Drone/UAV, DGPS, LiDAR, Total Station, Thermal surveys, topographic mapping, GIS, and infrastructure corridor surveys across India.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServicesPageContent />
      </main>
      <Footer />
    </>
  );
}
