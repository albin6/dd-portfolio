import Contact from "./Contact";
import ContactForm from "./ContactForm";

export default function ContactFormModal() {
  return (
    <div className="sm:max-w-[1200px]">
      <div className="grid lg:grid-cols-2 gap-8 max-h-[80vh] overflow-y-auto p-6">
        {/* Left Column */}
        <Contact />
        {/* Right Column - Form */}
        <ContactForm />
      </div>
    </div>
  );
}
