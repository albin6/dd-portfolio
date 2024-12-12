import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { DialogHeader } from "./ui/dialog";
import ContactFormModal from "./ContactFormModal";
import { useState } from "react";

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="relative min-h-[50vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src="https://res.cloudinary.com/dkph7vdgg/image/upload/v1733942147/3d-house-decoration_1_etwciu.jpg"
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
            className="text-white max-w-4xl mr-auto my-4"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Redefining Excellence in Contracting & Trading
            </motion.h1>

            <motion.h1
              className="text-lg  sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-4 text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              We are a leading Contracting & Trading company specialized in
              Fit-out and FF&E solutions for complete turn-key projects.
            </motion.h1>

            <motion.h2
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Dates Doha Contracting WLL has built a reputation for exceeding
              client expectations in every project we undertake. Our commitment
              to excellence and innovation drives us to deliver top-notch
              services across Qatar.
            </motion.h2>

            <motion.div
              className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                onClick={() => setIsOpen(true)}
                size="lg"
                className="w-full text-center sm:w-auto text-base sm:text-lg"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-4" />
              </Button>
              <a
                href="#clients"
                className="w-full px-5 text-center py-2 rounded bg-white sm:w-auto text-base text-gray-950"
              >
                View Our Clients
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <div className="absolute left-0 right-0 top-20 z-50">
          <DialogContent className="p-5 rounded bg-white w-full sm:max-w-[90%] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto">
            <DialogHeader>
              <div className="mx-4 flex justify-between items-center">
                <div>
                  <DialogTitle className="text-lg font-semibold md:text-xl lg:text-2xl">
                    Contact Us
                  </DialogTitle>
                  <DialogDescription className="text-sm md:text-base lg:text-lg">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </DialogDescription>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <X className="h-6 w-6 md:h-8 md:w-8" />
                </button>
              </div>
            </DialogHeader>
            <ContactFormModal />
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
}
