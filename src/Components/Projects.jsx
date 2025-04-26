import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-screen flex flex-col items-center justify-center p-10"
    >
      <motion.h3
        className="text-3xl font-bold text-white mb-6"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="FitTrack"
          description="A fitness & workout tracker built in React Native."
          link="#"
        />
        <ProjectCard
          title="CityPulse"
          description="A citizen feedback app for civic engagement."
          link="#"
        />
      </div>
    </section>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-indigo-500/50 transition duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400 mb-4">{description}</p>
      <a href={link} className="text-indigo-400 hover:underline">
        View Project
      </a>
    </motion.div>
  );
}
