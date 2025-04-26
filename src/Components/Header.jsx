import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="p-6 flex justify-between items-center sticky top-0 bg-[#0d1117] z-50 shadow-md border-b border-gray-800">
      <a
        href="#"
        className="text-3xl font-bold text-indigo-400 hover:text-indigo-300 transition"
      >
        Manender
      </a>
      <motion.nav
        className="flex space-x-6 text-gray-300 text-sm md:text-base"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {[
          { label: "About", href: "#about" },
          { label: "Experience", href: "#experience" },
          { label: "Skills", href: "#skills" },
          { label: "Education", href: "#education" },
          // { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="relative group px-2 py-1 transition-colors duration-300 hover:text-indigo-400 font-semibold"
          >
            {item.label}
            <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </motion.nav>
    </header>
  );
}
