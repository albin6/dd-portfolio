import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactFormModal() {
  return (
    <div className="sm:max-w-[1200px]">
      <div className="grid lg:grid-cols-2 gap-8 max-h-[80vh] overflow-y-auto p-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              We&apos;d love to hear from you. Please fill out this form and
              we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {/* Location Cards */}
          <div className="space-y-4">
            {/* Qatar Card */}
            <Card className="p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Qatar</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">123 Doha Street, Doha, Qatar</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+974 1234 5678</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">qatar@foreignindustry.com</span>
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
                  <span className="text-sm">bahrain@foreignindustry.com</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column - Form */}
        <ContactForm />
      </div>
    </div>
  );
}
