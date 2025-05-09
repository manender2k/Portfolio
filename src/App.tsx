import React from "react";
import Skills from "./Components/Skills.jsx";
import Experience from "./Components/Experience.jsx";
import Education from "./Components/Education.jsx";
import About from "./Components/About.jsx";
import Aurora from "./Components/Aurora.jsx";
// import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Home from "./Components/Home.jsx";
import Header from "./Components/Header.jsx";

export default function App() {
  return (
    <div className="relative">
      <Aurora />
      <main className="relative z-10">
        <Header />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Education />
        {/* <Projects></Projects> */}
        <Contact />
        <footer className="px-4 py-6 text-center text-xs sm:text-sm text-violet-200">
          © {new Date().getFullYear()} Manender. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
