import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* Call Button */}
      <a
        href="tel:+919526788628"
        className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg hover:scale-110 transition"
        aria-label="Call Us"
      >
        <Phone className="text-white w-6 h-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919526788628"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="text-white w-6 h-6" />
      </a>

    </div>
  );
};

export default FloatingActions;
