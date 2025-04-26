import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    title: "Bachelor of Technology in Computer Science and Engineering",
    institute: "University School of Information and Communication Technology, Delhi",
    duration: "2018 - 2022",
    icon: <FaGraduationCap className="text-indigo-500 w-6 h-6" />,
  },
  {
    id: 2,
    title: "Senior Secondary Education (Science)",
    institute: "Chand Ram Public School, Delhi",
    duration: "2016 - 2018",
    icon: <FaSchool className="text-blue-500 w-6 h-6" />,
  },
  {
    id: 3,
    title: "Secondary Education",
    institute: "Holy Angel School, Hisar",
    duration: "2014 - 2016",
    icon: <FaSchool className="text-green-500 w-6 h-6" />,
  },
];

export default function Education() {
  return (
    <section id="education" className="h-screen flex flex-col justify-center items-center text-center">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-indigo-400 mb-12 text-center">Education</h2>
        <div className="relative border-l-2 border-indigo-400">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6 relative"
            >
              <div className="absolute -left-[1.4rem] top-0 bg-[#1e293b] rounded-full p-2 shadow-lg">
                {item.icon}
              </div>
              <div className="bg-[#1e293b] p-5 rounded-xl shadow-md hover:shadow-indigo-500/50 transition-all duration-300">
                <h3 className="text-xl text-white font-semibold">{item.title}</h3>
                <p className="text-indigo-300">{item.institute}</p>
                <p className="text-sm text-gray-400 mt-1">{item.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
