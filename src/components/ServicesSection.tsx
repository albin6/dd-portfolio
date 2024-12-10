"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Globe, ClipboardList, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Industrial Contracting",
    description:
      "Expert contracting services for large-scale industrial projects.",
    icon: Building2,
    badge: "Popular",
  },
  {
    title: "Global Trading",
    description:
      "Facilitating international trade of industrial goods and materials.",
    icon: Globe,
  },
  {
    title: "Project Management",
    description:
      "Comprehensive project management for complex industrial ventures.",
    icon: ClipboardList,
  },
  {
    title: "Consulting Services",
    description: "Strategic consulting to optimize your industrial operations.",
    icon: Lightbulb,
    badge: "New",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-secondary/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs sm:text-sm">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="mt-4 text-lg sm:text-xl md:text-2xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
