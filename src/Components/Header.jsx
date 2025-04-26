import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // for hamburger icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="px-4 py-3 sm:px-6 flex justify-between items-center sticky top-0 bg-[#0d1117] z-50 shadow-md border-b border-gray-800">
      <a
        href="#"
        className="text-2xl sm:text-3xl font-bold text-indigo-400 hover:text-indigo-300 transition"
      >
        Manender
      </a>

      {/* Desktop Menu */}
      <motion.nav
        className="hidden sm:flex space-x-4 md:space-x-6 text-gray-300 text-sm md:text-base"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {navLinks.map((item) => (
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

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-indigo-400 text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="absolute top-16 right-4 bg-[#161b22] border border-gray-700 rounded-lg shadow-lg p-4 flex flex-col space-y-4 sm:hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-indigo-400 transition-colors font-semibold"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
