import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaJenkins,
  FaLinux,
} from "react-icons/fa";
import {
  SiReact,
  SiRedux,
  SiTypescript,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiSwagger,
  SiGraphql,
  SiTailwindcss,
  SiVite,
  SiApachekafka,
  SiPostman,
} from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-orange-500 text-4xl mb-2" />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-blue-500 text-4xl mb-2" />,
        },
        {
          name: "ReactJS",
          icon: <FaReact className="text-cyan-400 text-4xl mb-2" />,
        },
        {
          name: "Redux",
          icon: <SiRedux className="text-purple-400 text-4xl mb-2" />,
        },
        {
          name: "Angular",
          icon: <FaAngular className="text-red-500 text-4xl mb-2" />,
        },
        {
          name: "React Native",
          icon: <SiReact className="text-cyan-200 text-4xl mb-2" />,
        },
        {
          name: "Storybook",
          icon: <FaReact className="text-pink-400 text-4xl mb-2" />,
        },
        {
          name: "Bootstrap",
          icon: <FaCss3Alt className="text-indigo-400 text-4xl mb-2" />,
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="text-sky-400 text-4xl mb-2" />,
        },
        {
          name: "Vite",
          icon: <SiVite className="text-purple-300 text-4xl mb-2" />,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500 text-4xl mb-2" />,
        },
        {
          name: "Express.js",
          icon: <FaNodeJs className="text-gray-300 text-4xl mb-2" />,
        },
        {
          name: "Spring Boot",
          icon: <SiSpringboot className="text-green-400 text-4xl mb-2" />,
        },
        {
          name: "Java",
          icon: <FaJava className="text-red-500 text-4xl mb-2" />,
        },
        {
          name: "Python",
          icon: <FaPython className="text-yellow-400 text-4xl mb-2" />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="text-pink-400 text-4xl mb-2" />,
        },
        {
          name: "WebSockets",
          icon: <SiGraphql className="text-blue-400 text-4xl mb-2" />,
        },
        {
          name: "MySQL",
          icon: <FaDatabase className="text-blue-400 text-4xl mb-2" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-indigo-400 text-4xl mb-2" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-400 text-4xl mb-2" />,
        },
      ],
    },
    {
      title: "Other / Tools",
      skills: [
        {
          name: "Docker",
          icon: <FaDocker className="text-blue-500 text-4xl mb-2" />,
        },
        {
          name: "Jenkins",
          icon: <FaJenkins className="text-red-400 text-4xl mb-2" />,
        },
        {
          name: "Kafka",
          icon: <SiApachekafka className="text-purple-400 text-4xl mb-2" />,
        },
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-400 text-4xl mb-2" />,
        },
        {
          name: "Linux",
          icon: <FaLinux className="text-gray-300 text-4xl mb-2" />,
        },
        {
          name: "Swagger",
          icon: <SiSwagger className="text-green-400 text-4xl mb-2" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-orange-400 text-4xl mb-2" />,
        },
        {
          name: "JUnit",
          icon: <FaJava className="text-green-500 text-4xl mb-2" />,
        },
      ],
    },
  ];

  const [pausedCategory, setPausedCategory] = useState(null);

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
            <h4 className="text-xl font-semibold text-indigo-300 mb-4">
              {category.title}
            </h4>
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setPausedCategory(catIdx)}
              onMouseLeave={() => setPausedCategory(null)}
            >
              <div
                className={`flex ${
                  category.skills.length > 5
                    ? "animate-marquee"
                    : "flex-wrap justify-center"
                } px-4 sm:px-8 max-w-full sm:max-w-5xl mx-auto`}
                style={{
                  animationDuration: `${category.skills.length * 2}s`,
                  animationPlayState:
                    pausedCategory === catIdx ? "paused" : "running",
                }}
              >
                {[
                  ...category.skills,
                  ...(category.skills.length > 5 ? category.skills : []),
                ].map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="group relative min-w-[120px] h-[120px] m-3 bg-gradient-to-tr from-[#1e293b] to-[#0f172a] rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/50 border border-gray-700 hover:border-indigo-400 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  >
                    {/* Glowing corners */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-400 rounded-2xl animate-border-glow" />

                    {skill.icon}
                    <span className="text-white text-sm font-medium mt-2">
                      {skill.name}
                    </span>

                    {/* Light shimmer on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </motion.div>
                ))}
              </div>

              {/* Marquee keyframes */}
              <style>{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-100%); }
                }
                @keyframes border-glow {
                  0% {
                    box-shadow: 0 0 0px rgba(99, 102, 241, 0.5);
                  }
                  50% {
                    box-shadow: 0 0 15px rgba(99, 102, 241, 0.8);
                  }
                  100% {
                    box-shadow: 0 0 0px rgba(99, 102, 241, 0.5);
                  }
                }
                .animate-marquee {
                  animation: marquee linear infinite;
                  white-space: nowrap;
                }
                .animate-border-glow {
                  animation: border-glow 3s infinite;
                }
              `}</style>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
