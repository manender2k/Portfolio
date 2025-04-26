import React from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import About from "./About";
import Aurora from "./Aurora.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import Header from "./Header.jsx";

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
