import { Navbar, Footer } from "@/components/layout";
import { HeroSection } from "@/components/sections";
import dynamic from "next/dynamic";

const ByTheNumbers = dynamic(() => import("@/components/sections/by-the-numbers").then(mod => mod.ByTheNumbers));
const AboutSection = dynamic(() => import("@/components/sections/about").then(mod => mod.AboutSection));
const FounderSection = dynamic(() => import("@/components/sections/founder").then(mod => mod.FounderSection));
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
        <ByTheNumbers />
        <AboutSection />
        <FounderSection />
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
