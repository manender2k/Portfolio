import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "./assets/Manender_PFP.jpeg"; // Make sure to place a profile.jpg in assets
import Skills from "./Skills";

const roles = [
  "Software Engineer",
  "MERN Stack Developer",
  "MEAN Stack Developer",
  "Java Developer"
];

export default function App() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
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
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, charIndex, roleIndex, deleting]);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white font-sans scroll-smooth">
      <header className="p-6 flex justify-between items-center sticky top-0 bg-[#0d1117] z-50 shadow-md border-b border-gray-800">
        <a href="#" className="text-3xl font-bold text-indigo-400 hover:text-indigo-300 transition">Manender</a>
        <motion.nav
          className="flex space-x-6 text-gray-300 text-sm md:text-base"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {[
            { label: "About", href: "#about" },
            { label: "Experience", href: "#experience" },
            { label: "Skills", href: "#skills" },
            { label: "Education", href: "#education" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" }
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative group px-2 py-1 transition-colors duration-300 hover:text-indigo-400"
            >
              {item.label}
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </motion.nav>
      </header>

      <section className="h-screen flex flex-col justify-center items-center text-center" id="home">
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
          {text}<span className="border-r-2 border-indigo-400 animate-pulse ml-1" />
        </motion.p>
      </section>

      <section id="about" className="h-screen flex items-center justify-center p-10">
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
              I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.
            </p>
          </motion.div>
        </div>
      </section>

      <Skills></Skills>

      <section id="education" className="h-screen flex flex-col items-center justify-center p-10">
        <motion.h3
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h3>
        <p className="text-gray-300 text-lg">Bachelor of Technology - [Your College Name Here]</p>
      </section>

      <section id="projects" className="h-screen p-10">
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

      <section id="contact" className="h-screen p-10 text-center flex flex-col justify-center">
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
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
        </div>
      </section>

      <footer className="p-6 text-center text-sm text-gray-600 mt-10">
        © {new Date().getFullYear()} Manender. All rights reserved.
      </footer>
    </div>
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
