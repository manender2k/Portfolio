import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/Manender_PFP.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen w-full flex items-center justify-center px-6 md:px-16 py-12 bg-transparent"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={profilePic}
            alt="Manender"
            className="rounded-2xl shadow-2xl w-72 md:w-96"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="text-gray-300 text-base md:text-lg space-y-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-indigo-400 mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <p>
            I’m a passionate and enthusiastic <span className="text-indigo-300 font-semibold">Software Engineer</span> with a deep love for learning and problem-solving.
          </p>
          <p>
            Whether it's building modern web apps or exploring new frameworks, I enjoy crafting scalable solutions that create impact.
          </p>
          <p>
            My core strength lies in <span className="text-indigo-300 font-semibold">JavaScript, Java</span> and the <span className="text-indigo-300 font-semibold">MERN/MEAN stack</span>. I love to explore full-stack development and continuously learn emerging technologies.
          </p>
          <p>
            I’m always open to exciting job opportunities and collaborative projects that challenge my skills and fuel my curiosity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
