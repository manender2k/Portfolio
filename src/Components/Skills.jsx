import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";

export default function Skills() {
  const [paused, setPaused] = useState(false);

  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl mb-2" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl mb-2" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl mb-2" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 text-4xl mb-2" /> },
        { name: "Angular", icon: <FaAngular className="text-red-500 text-4xl mb-2" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl mb-2" /> },
        { name: "Express", icon: <FaNodeJs className="text-gray-300 text-4xl mb-2" /> },
        { name: "MongoDB", icon: <FaDatabase className="text-green-400 text-4xl mb-2" /> },
        { name: "Java", icon: <FaJava className="text-red-500 text-4xl mb-2" /> },
      ],
    },
    {
      title: "Other",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-400 text-4xl mb-2" /> },
        { name: "TypeScript", icon: <FaJs className="text-blue-400 text-4xl mb-2" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="h-screen flex flex-col justify-center items-center text-center"
    >
      <motion.div
        className="max-w-6xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl font-bold text-indigo-400 mb-10">Skills</h3>

        {categories.map((category, catIdx) => (
          <div key={catIdx} className="mb-12">
            <h4 className="text-xl font-semibold text-indigo-300 mb-4">{category.title}</h4>
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div
                className="flex"
                style={{
                  animation: `marquee ${category.skills.length * 3}s linear infinite`,
                  animationPlayState: paused ? "paused" : "running",
                }}
              >
                {[...category.skills, ...category.skills].map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="min-w-[120px] h-[130px] m-2 bg-[#1e293b] rounded-xl border border-transparent hover:border-indigo-400 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  >
                    {skill.icon}
                    <span className="text-white text-sm font-medium mt-1">{skill.name}</span>
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
          </div>
        ))}
      </motion.div>
    </section>
  );
}
