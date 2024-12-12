import "react-lazy-load-image-component/src/effects/blur.css";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <>
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
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Expertise and Experience",
                description:
                  "Delivering unparalleled quality and reliability in every project we undertake.",
              },
              {
                title: "Prestigious Clientele",
                description:
                  "Proudly serving Qatar’s most distinguished and reputable organizations with trust and commitment.",
              },
              {
                title: "Customer-Centric Approach",
                description:
                  "Your satisfaction is at the heart of everything we do, ensuring a seamless experience tailored to your needs.",
              },
              {
                title: "Innovative Solutions",
                description:
                  "Offering state-of-the-art contracting and trading services that set new benchmarks in the industry.",
              },
            ].map((item) => (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                key={item.title}
                className="flex flex-col h-full"
              >
                <Card className="flex flex-col h-full">
                  <CardContent className="flex flex-col h-full mt-6">
                    <div className="flex items-start flex-grow">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-800">{item.title}:</strong>
                        <span className="text-gray-600">
                          {" "}
                          {item.description}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.h2>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
