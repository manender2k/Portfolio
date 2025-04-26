import React from "react";
import Skills from "./Components/Skills.jsx";
import Experience from "./Components/Experience.jsx";
import Education from "./Components/Education.jsx";
import About from "./Components/About.jsx";
import Aurora from "./Components/Aurora.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Home from "./Components/Home.jsx";
import Header from "./Components/Header.jsx";

export default function App() {
  return (
    <div className="relative">
      <Aurora />
      <main className="relative z-10">
        <Header></Header>
        <Home></Home>
        <About></About>
        <Experience></Experience>
        <Skills></Skills>
        <Education></Education>
        <Projects></Projects>
        <Contact></Contact>
        <footer className="p-6 text-center text-sm text-gray-600 mt-10">
          © {new Date().getFullYear()} Manender. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
