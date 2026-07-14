import { Navbar, Footer } from "@/components/layout";
import { HeroSection } from "@/components/sections";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/sections/about").then(mod => mod.AboutSection));
const SignatureBanner = dynamic(() => import("@/components/sections/signature-banner").then(mod => mod.SignatureBanner));
const ServicesSection = dynamic(() => import("@/components/sections/services").then(mod => mod.ServicesSection));
const IndustriesSection = dynamic(() => import("@/components/sections/industries").then(mod => mod.IndustriesSection));
const TechnologySection = dynamic(() => import("@/components/sections/technology").then(mod => mod.TechnologySection));
const CTASection = dynamic(() => import("@/components/sections/cta").then(mod => mod.CTASection));

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SignatureBanner />
        <ServicesSection />
        <IndustriesSection />
        <TechnologySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
