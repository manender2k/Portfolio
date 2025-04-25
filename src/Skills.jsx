import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAngular, FaJs, FaDatabase } from 'react-icons/fa'; // Example icons

export default function Skills() {
  const [paused, setPaused] = useState(false);

  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-4xl mb-2" /> },
    { name: "TypeScript", icon: <FaJs className="text-4xl mb-2" /> },
    { name: "React", icon: <FaReact className="text-4xl mb-2" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl mb-2" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-4xl mb-2" /> },
    { name: "Express", icon: <FaNodeJs className="text-4xl mb-2" /> },
    { name: "Angular", icon: <FaAngular className="text-4xl mb-2" /> },
    { name: "Java", icon: <FaJs className="text-4xl mb-2" /> },
  ];

  const displaySkills = [...skills, ...skills]; // Duplicate for smooth scroll

  return (
    <section
      id="skills"
      className="h-screen p-10 flex flex-col items-center justify-center bg-[#111827]"
    >
      <motion.div
        className="max-w-5xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-indigo-400 mb-6">Skills</h3>

        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex"
            style={{
              animation: `marquee ${skills.length * 3}s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {displaySkills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="min-w-[120px] h-[120px] m-2 bg-gray-800 rounded-xl flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <div className="flex justify-center items-center">
                  {skill.icon}
                </div>
                <span className="text-white text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </motion.div>
    </section>
  );
}
