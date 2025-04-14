import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import { PERSONAL_INFO } from "@/constants/personal";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">{PERSONAL_INFO.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">{PERSONAL_INFO.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-teal-100 rounded-full">
                <MapPin className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
