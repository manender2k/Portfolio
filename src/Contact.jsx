import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen p-10 text-center flex flex-col justify-center"
    >
      <motion.h3
        className="text-3xl font-bold text-white mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h3>
      <motion.p
        className="text-gray-400 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Have a project in mind or just want to connect? Let's talk!
      </motion.p>
      <div className="flex justify-center space-x-6 text-2xl text-gray-300">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:youremail@example.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
