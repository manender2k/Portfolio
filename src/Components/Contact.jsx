import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaTelegramPlane,
  FaDiscord,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center text-center"
    >
      <motion.div
        className="max-w-4xl w-full bg-gradient-to-br from-[#1f2937] to-[#111827] p-12 rounded-2xl shadow-2xl backdrop-blur-sm text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h3
          className="text-4xl font-bold text-indigo-400 mb-6 tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Contact Me
        </motion.h3>

        <motion.p
          className="text-gray-400 text-lg mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Let's connect! Feel free to reach out through any platform below.
          <br />
          I'm always open for projects, collaborations, or a casual chat!
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Phone */}
          <a
            href="tel:+919306233770"
            className="text-gray-300 hover:text-indigo-400 transition-transform transform hover:scale-110 duration-300 flex flex-col items-center"
          >
            <FaPhoneAlt size={30} />
            <span className="mt-2 text-sm">Phone</span>
          </a>

          {/* Email */}
          <a
            href="mailto:manender.bamel2k@gmail.com"
            className="text-gray-300 hover:text-indigo-400 transition-transform transform hover:scale-110 duration-300 flex flex-col items-center"
          >
            <FaEnvelope size={30} />
            <span className="mt-2 text-sm">Email</span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/manender-1605881a0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition-transform transform hover:scale-110 duration-300 flex flex-col items-center"
          >
            <FaLinkedin size={30} />
            <span className="mt-2 text-sm">LinkedIn</span>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/manender2k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition-transform transform hover:scale-110 duration-300 flex flex-col items-center"
          >
            <FaGithub size={30} />
            <span className="mt-2 text-sm">GitHub</span>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/manender2k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition-transform transform hover:scale-110 duration-300 flex flex-col items-center"
          >
            <FaInstagram size={30} />
            <span className="mt-2 text-sm">Instagram</span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/manendersensei"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition-transform transform hover:scale-110 duration-300 flex flex-col items-center"
          >
            <FaTelegramPlane size={30} />
            <span className="mt-2 text-sm">Telegram</span>
          </a>

          {/* Discord */}
          <a
            href="https://discordapp.com/users/mandyplay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition-transform transform hover:scale-110 duration-300 flex flex-col items-center"
          >
            <FaDiscord size={30} />
            <span className="mt-2 text-sm">Discord</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/manender.bamel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition-transform transform hover:scale-110 duration-300 flex flex-col items-center"
          >
            <FaFacebook size={30} />
            <span className="mt-2 text-sm">Facebook</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
