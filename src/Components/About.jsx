import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/Manender_PFP.jpeg"; // Make sure to place a profile.jpg in assets

export default function About() {
  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center p-10"
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
        <motion.img
          src={profilePic}
          alt="Manender"
          className="rounded-xl w-full max-w-xs mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="text-gray-300 text-lg"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            I am a professional and enthusiastic programmer in my daily life. I
            am a quick learner with a self-learning attitude. I love to learn
            and explore new technologies and am passionate about
            problem-solving. I love almost all the stacks of web application
            development and love to make the web more open to the world. My core
            skill is based on JavaScript and I love to do most of the things
            using JavaScript. I am available for any kind of job opportunity
            that suits my skills and interests.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
