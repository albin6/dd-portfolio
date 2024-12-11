import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-[50vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="https://res.cloudinary.com/dkph7vdgg/image/upload/v1733898907/banner-xyz_obylp9.jpg"
          alt="Industrial background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-4xl mr-auto"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ForeignIndustry
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your Global Partner in Industrial Solutions
          </motion.p>
          <motion.p
            className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We specialize in providing cutting-edge industrial solutions to
            businesses worldwide, ensuring efficiency and innovation in every
            project.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg"
              asChild
            >
              <Link
                to={"#contact"}
                className="inline-flex items-center justify-center"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg text-gray-950"
              variant="outline"
              asChild
            >
              <Link
                to={"#clients"}
                className="inline-flex items-center justify-center"
              >
                View Our Clients
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
