import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between relative">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-3xl font-bold text-white pl-8 "
          >
            <img
              src="logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain pt-2"
            />
            Webzorix<span className="text-gray-400">.</span>
          </a>

          {/* Center Nav - Desktop */}
          <div className="hidden md:flex items-center gap-12 text-base font-bold text-white absolute left-1/2 -translate-x-1/2">
            <a href="#home" className="hover:text-gray-400 transition">
              Home
            </a>
            <a href="#services" className="hover:text-gray-400 transition">
              Services
            </a>
            <a href="#work" className="hover:text-gray-400 transition">
              Work
            </a>
            <a href="#about" className="hover:text-gray-400 transition">
              About
            </a>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block pr-10">
            <a
              href="#contact"
              className="border border-white px-6 py-2.5  rounded-xl text-white hover:bg-white hover:text-black transition"
            >
              Contact
            </a>
          </div>

          {/* Hamburger - Mobile */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className="w-6 h-[2px] bg-white rounded-full"></span>
            <span className="w-6 h-[2px] bg-white rounded-full"></span>
            <span className="w-6 h-[2px] bg-white rounded-full"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black text-white">
          <div className="flex justify-between items-center px-6 sm:px-10 h-20 border-b border-[#1F1F1F]">
            <span className="text-2xl font-bold">Menu</span>
            <button onClick={() => setOpen(false)} className="text-3xl">
              ×
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 h-[calc(100vh-80px)] text-xl px-6 sm:px-10">
            <a onClick={() => setOpen(false)} href="#home">
              Home
            </a>
            <a onClick={() => setOpen(false)} href="#services">
              Services
            </a>
            <a onClick={() => setOpen(false)} href="#work">
              Work
            </a>
            <a onClick={() => setOpen(false)} href="#about">
              About
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="border border-white px-8 py-3 rounded-xl mt-4 hover:bg-white hover:text-black transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
