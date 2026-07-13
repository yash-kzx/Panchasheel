import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  AboutSection,
  SignatureBanner,
  ServicesSection,
  IndustriesSection,
  TechnologySection,
  CTASection,
} from "@/components/sections";

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
