import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
} from "lucide-react";
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
import { Link } from "react-router-dom";
import ContactFormModal from "./ContactFormModal";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Clients", href: "#clients" },
  { name: "Services", href: "#services" },
  { name: "Contact Us", href: "#contact", isModal: true },
];

export function Layout({ children }: { children: React.ReactNode }) {
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
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-gray-950 hover:text-primary-foreground"
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
            <Sheet>
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
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-sm font-medium hover:text-primary transition-colors"
                      onClick={(e) => {
                        if (item.isModal) {
                          e.preventDefault();
                          handleNavItemClick(item);
                        }
                      }}
                    >
                      {item.name}
                    </Link>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="hover:underline transition-all"
                      onClick={(e) => {
                        if (item.isModal) {
                          e.preventDefault();
                          handleNavItemClick(item);
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <LinkedIn className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center">
            <p>&copy; 2024 ForeignIndustry. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogContent className="w-[90%] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1200px]">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Contact Us
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base md:text-lg lg:text-xl">
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
