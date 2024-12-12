import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link, useLocation } from "react-router-dom";
import ContactFormModal from "./ContactFormModal";
import MapComponent from "./map/MapComponent";
import ContactForm from "./ContactForm";
import { Card } from "@/components/ui/card";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Clients", href: "#clients" },
  { name: "Services", href: "#services" },
  { name: "Contact Us", href: "#contact", isModal: true },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavItemClick = (item: {
    name: string;
    href: string;
    isModal?: boolean;
  }) => {
    if (item.isModal) {
      setIsContactModalOpen(true);
    }
  };

  useEffect(() => {
    const handleClose = () => setIsOpen(false);
    document.addEventListener("closeSheet", handleClose);
    return () => document.removeEventListener("closeSheet", handleClose);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-2xl font-bold">
              <img src="/dates-doha.png" width={"150px"} alt="" />
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={
                  location.pathname == "/about-us"
                    ? `/${item.href == "/" ? "" : item.href}`
                    : item.href
                }
                className={`text-lg font-medium transition-colors ${
                  isScrolled
                    ? "text-foreground hover:text-gray-700"
                    : "text-gray-950 hover:text-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  if (item.isModal) {
                    e.preventDefault();
                    handleNavItemClick(item);
                  }
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={isScrolled ? "text-foreground" : "text-gray-900"}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                  <SheetDescription className="text-left">
                    Navigate through our website
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`text-sm font-medium transition-colors ${
                        isScrolled
                          ? "text-foreground hover:text-gray-700"
                          : "text-gray-950 hover:text-gray-700"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        if (item.isModal) {
                          e.preventDefault();
                          handleNavItemClick(item);
                        }
                        document.dispatchEvent(new CustomEvent("closeSheet"));
                      }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 xl:grid-cols-[1fr_1.5fr_1fr] gap-11">
            <div className="hidden xl:block h-96 overflow-y-auto px-2 sm:px-2 md:px-3">
              <div className="space-y-6">
                {/* Title and Description */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600">
                    We&apos;d love to hear from you. Please fill out this form
                    and we&apos;ll get back to you as soon as possible.
                  </p>
                </div>

                {/* Location Cards Section */}
                <div className="space-y-4">
                  {/* Qatar Card */}
                  <Card className="p-4 shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">Qatar</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">
                          123 Doha Street, Doha, Qatar
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">+974 1234 5678</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">
                          qatar@foreignindustry.com
                        </span>
                      </div>
                    </div>
                  </Card>

                  {/* KSA Card */}
                  <Card className="p-4 shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">KSA</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">
                          456 Riyadh Avenue, Riyadh, KSA
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">+966 9876 5432</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">ksa@foreignindustry.com</span>
                      </div>
                    </div>
                  </Card>

                  {/* Bahrain Card */}
                  <Card className="p-4 shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">Bahrain</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">
                          789 Manama Road, Manama, Bahrain
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">+973 1122 3344</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">
                          bahrain@foreignindustry.com
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden col-span-2 md:col-span-1">
              {/* Pass coordinates for the location */}
              <MapComponent />
            </div>
            <ContactForm title="Contact Us" />
          </div>
          <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center">
            <p>&copy; 2024 ForeignIndustry. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogContent className="w-[90%] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1200px]">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-lg md:text-xl lg:text-2xl">
              Contact Us
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base md:text-sm lg:text-lg">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </DialogDescription>
          </DialogHeader>
          <ContactFormModal />
        </DialogContent>
      </Dialog>
    </div>
  );
}
