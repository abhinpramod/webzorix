import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="lg-px-10">
          <h2 className="text-2xl font-semibold text-white">Webzorix</h2>

          <p className="text-gray-400 mt-3 leading-relaxed">
            We build conversion-focused websites <br />
            for businesses that want<br />
            more leads, not just good design.
          </p>

          {/* Social Icons */}
          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://www.instagram.com/webzorix"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="lg-px-12">
          <h4 className="text-white font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Work</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-3">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Email: webzorix@gmail.com</li>
            <li>Phone: +91 95267 88628</li>
            <li className="hover:text-white cursor-pointer">
              WhatsApp Us →
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Webzorix Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
