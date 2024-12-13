import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import AboutUs from "@/components/AboutUs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function HomePage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.pathname]);
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
      <AboutUs />
    </>
  );
}
