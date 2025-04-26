import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import techAnimation from "../assets/techAnimation.json"; // replace with your file

const roles = [
  "Software Engineer",
  "MERN Full Stack Developer",
  "MEAN Full Stack Developer",
  "Frontend Developer",
  "Springboot Developer",
];

export default function Home() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentRole = roles[roleIndex];

        if (!deleting) {
          setText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          if (charIndex === currentRole.length) {
            setDeleting(true);
          }
        } else {
          setText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex === 0) {
            setDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, charIndex, roleIndex, deleting]);

  return (
    <section
      id="home"
      className="h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-center md:text-left"
    >
      {/* Left Text Content */}
      <motion.div
        className="flex flex-col items-center md:items-start mb-10 md:mb-0 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Hello, I'm <span className="text-indigo-400">Manender</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 h-8 font-mono">
          {text}
          <span className="border-r-2 border-indigo-400 animate-pulse ml-1" />
        </p>
      </motion.div>

      {/* Right Lottie Animation */}
      <motion.div
        className="w-[300px] md:w-[400px] z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Lottie animationData={techAnimation} loop={true} />
      </motion.div>
    </section>
  );
}
