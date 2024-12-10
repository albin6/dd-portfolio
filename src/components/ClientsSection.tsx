"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const clients = [
  { name: "Qatar Armed Forces", logo: "src/assets/clients/QAF-client.jpeg" },
  {
    name: "Qatar Volleyball Federation (QVA)",
    logo: "src/assets/clients/QVA-client.jpeg",
  },
  { name: "Mannai Corporation", logo: "src/assets/clients/Mannai-client.jpeg" },
  {
    name: "National Car Company",
    logo: "src/assets/clients/National-Cars-Company.jpeg",
  },
  {
    name: "Al Bidaa Dental Center",
    logo: "src/assets/clients/Al-Bidaa-Dental-Client.png",
  },
  {
    name: "One Thousand walls WLL",
    logo: "src/assets/clients/One-Thousand-Wall-Client.jpeg",
  },
  { name: "Hotpack WLL", logo: "src/assets/clients/Hot-Pack-Client.png" },
  {
    name: "Flowtech Hydraulic Trading",
    logo: "src/assets/clients/Flow-Tech-Client.jpg",
  },
];

export function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="clients" ref={ref} className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12"
        >
          Our Clients
        </motion.h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-5xl mx-auto"
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem
                key={client.name}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center p-4"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-2"
                  />
                  <p className="text-xs sm:text-sm md:text-base text-center mt-2">
                    {client.name}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
