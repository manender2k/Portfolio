import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="h-screen flex flex-col items-center justify-center p-10"
    >
      <motion.h3
        className="text-3xl font-bold text-white mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h3>
      <p className="text-gray-300 text-lg">
        Bachelor of Technology - [Your College Name Here]
      </p>
    </section>
  );
}
