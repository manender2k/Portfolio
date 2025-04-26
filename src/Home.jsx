import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const roles = [
  "Software Engineer",
  "MERN Stack Developer",
  "MEAN Stack Developer",
  "Java Developer",
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
      className="h-screen flex flex-col justify-center items-center text-center"
      id="home"
    >
      <motion.h2
        className="text-5xl font-extrabold text-white mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-indigo-400">Manender</span> 👋
      </motion.h2>
      <motion.p
        className="text-xl text-gray-400 h-8 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {text}
        <span className="border-r-2 border-indigo-400 animate-pulse ml-1" />
      </motion.p>
    </section>
  );
}
