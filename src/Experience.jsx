import React, { useState, useRef } from "react";
import "./experience.css"; // Import the custom CSS

const experiences = [
  {
    title: "Frontend Developer at XYZ Corp",
    content:
      "Developed responsive web apps with React and Tailwind, optimized performance, and collaborated with UX designers for improved user experience.",
  },
  {
    title: "Backend Intern at ABC Solutions",
    content:
      "Built REST APIs using Node.js and Express, integrated MongoDB, and implemented JWT-based authentication for secure access.",
  },
  {
    title: "Freelance Full Stack Projects",
    content:
      "Delivered full-stack solutions for startups, including admin dashboards, CMS tools, and e-commerce features using MERN stack.",
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h2 className="text-4xl font-bold text-indigo-400 mb-8 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border border-gray-700 rounded-lg overflow-hidden transition-all">
            <button
              onClick={() => toggle(idx)}
              className={`w-full text-left px-6 py-4 flex justify-between items-center text-lg font-medium transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-indigo-500/10 border-b border-indigo-400 text-indigo-300"
                  : "bg-gray-850 hover:bg-gray-800 text-gray-300"
              }`}
            >
              <span>{exp.title}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === idx ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`accordion-content ${activeIndex === idx ? "open" : ""}`}
            >
              <div className="px-6 py-4 text-gray-300 bg-gray-850 border-t border-gray-700">
                {exp.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
