import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function ContactForm({ title = "Send us a message" }) {
  return (
    <div className="col-span-2 md:col-span-1">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <Input id="name" placeholder="John Doe" className="w-full" />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="w-full"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Your message here..."
            className="w-full min-h-[120px]"
          />
        </div>
        <Button className="w-full bg-black hover:bg-gray-800 text-white">
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </Button>
      </form>
    </div>
  );
}
