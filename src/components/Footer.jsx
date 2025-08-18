import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-light px-6 py-10 flex flex-col items-center text-center md:text-left">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-accent mb-3">
        Stay <span className="text-white font-medium">Connected</span>
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-amber-100 font-light max-w-2xl mb-6">
        Let’s make learning easier together—drop us a message today.
      </p>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923001110103"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-accent text-primary px-5 py-3 rounded hover:opacity-90 transition text-lg"
      >
        <FaWhatsapp className="text-2xl" />
        Whatsapp us at: +92 3001110103
      </a>

      {/* Divider */}
      <div className="w-full h-px bg-gray-700 my-8"></div>

      {/* Copyright */}
      <p className="text-sm md:text-base text-amber-100 font-light">
        © 2025 Syntax Scholars. Built with ❤️ for learners.
      </p>
    </footer>
  );
};

export default Footer;
