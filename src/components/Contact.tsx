import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
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
              <span className="text-sm">Doha, Qatar</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+974 4017 9300</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <span className="text-sm">www.datesqatar.com</span>
            </div>
          </div>
        </Card>

        {/* KSA Card */}
        <Card className="p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-3">KSA</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Dammam, Kingdom of Saudi Arabia (KSA)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+966 55819 8819</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <span className="text-sm">www.datesqatar.com</span>
            </div>
          </div>
        </Card>

        {/* Bahrain Card */}
        <Card className="p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Bahrain</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Manama, Kingdom of Bahrain</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+973 3449 1633</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <span className="text-sm">www.datesqatar.com</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
