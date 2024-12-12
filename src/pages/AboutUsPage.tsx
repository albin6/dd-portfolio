import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { Building2, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AboutUsPage() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-3 sm:mb-8 md:mb-5"
        >
          About Dates Doha
        </motion.h2>
        <hr />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 mt-6">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-primary">
                    Our Story
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="sm:text-sm text-gray-600 mb-4">
                    Dates Doha Contracting WLL has built a reputation for
                    exceeding client expectations in every project we undertake.
                    Our commitment to excellence and innovation drives us to
                    deliver top-notch services across Qatar.
                  </p>
                  <p className="text-gray-600">
                    Guided by the vision of our Chairman, Yusuf Ahamed Kano, and
                    the leadership of our Managing Director, Jabir Choori Azeez,
                    we continue to set new standards in the industry.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary flex items-center">
                    <Building2 className="mr-2" /> Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-gray-800">10+ Years</p>
                  <p className="text-sm text-gray-600">of industry expertise</p>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary flex items-center">
                    <Users className="mr-2" /> Clients
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-gray-800">100+</p>
                  <p className="text-sm text-gray-600">satisfied customers</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <LazyLoadImage
              src="https://res.cloudinary.com/dkph7vdgg/image/upload/v1733922381/doha-city_c2kirz.jpg"
              alt="Dates Doha Contracting WLL Project"
              className="transition-transform duration-1000 hover:scale-105 object-cover w-full h-full"
              effect="blur" // Optional: Blur effect while loading
            />
          </motion.div>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">
                Our Specializations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We specialize in Fit-out and FF&E solutions for complete
                turn-key projects across various sectors in Qatar:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Government & Semi-Government",
                  "Corporate & Private Offices",
                  "Residential Private Palaces & Villas",
                  "Retail & High Street Retail",
                  "Restaurants & F&B",
                  "Automotive Showrooms",
                ].map((specialization, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm py-4 justify-center"
                  >
                    {specialization}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.h2>
      </div>
    </section>
  );
}
