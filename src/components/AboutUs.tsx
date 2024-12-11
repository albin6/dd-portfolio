import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Building2, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-secondary/10"
      id="about-us"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              About Dates Doha
            </h2>
            <p className="sm:text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
              A leading contracting and trading company in Qatar, delivering
              excellence in interior contracting, MeP contracting, and trading.
            </p>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Tabs defaultValue="why-choose-us" className="mb-16">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="why-choose-us">Why Choose Us</TabsTrigger>
              <TabsTrigger value="our-specializations">
                Our Specializations
              </TabsTrigger>
            </TabsList>
            <TabsContent value="why-choose-us">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-primary">
                    Why Choose Dates Doha
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Expertise and Experience",
                        description: "Unmatched quality and reliability",
                      },
                      {
                        title: "Prestigious Clientele",
                        description:
                          "Serving Qatar's most renowned organisations",
                      },
                      {
                        title: "Customer-Centric Approach",
                        description: "Your satisfaction is our top priority",
                      },
                      {
                        title: "Innovative Solutions",
                        description:
                          "Cutting-edge contracting and trading services",
                      },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-800">
                            {item.title}:
                          </strong>
                          <span className="text-gray-600">
                            {" "}
                            {item.description}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="our-specializations">
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
                        className="text-sm py-2 justify-center"
                      >
                        {specialization}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <div className="text-center">
          <Button size="lg" className="group">
            Learn More About Us
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
