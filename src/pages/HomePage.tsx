import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import AboutUs from "@/components/AboutUs";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutUs />
      <ClientsSection />
    </>
  );
}
