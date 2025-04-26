import React, { useRef, useEffect, useState } from "react";
import "./experience.css"; // Import the custom CSS

const experiences = [
  {
    title:
      "DSC (Service Center Management Application) - React, Springboot, PostgreSQL",
    content: (
      <ul className="list-disc list-inside mt-2 space-y-2 text-gray-300 text-left">
        <li>
          Enhanced Front-End performance with Infinite Scrolling and Redux,
          reducing load times by 30% and solving prop drilling issues.
        </li>
        <li>
          Engineered drag-and-drop mechanic assignment using React DnD-Kit,
          cutting UI interactions by 50% and error rates by 40%.
        </li>
        <li>
          Led backend migration from Java 8 EE to Spring Boot, boosting
          application performance by 30%.
        </li>
        <li>
          Architected an automated Job Card creation system using Redis,
          integrated with Salesforce/Siebel APIs, cutting manual input by 50%.
        </li>
      </ul>
    ),
  },
  {
    title: "XNet (Human Resource Management Portal) - Angular, Node, MongoDB",
    content: (
      <ul className="list-disc list-inside mt-2 space-y-2 text-gray-300 text-left">
        <li>
          Spearheaded migration from monolithic architecture to 9 microservices,
          boosting scalability and deployment efficiency.
        </li>
        <li>
          Integrated MSAL (Microsoft Authentication Library) and Keycloak for
          seamless SSO and role-based authentication, reducing unauthorized
          access by 50%.
        </li>
        <li>
          Introduced Recruitment Automation integrated with Microsoft Teams and
          Calendar APIs, automating 70% of HR recruiting workflows.
        </li>
        <li>
          Improved data security by 60% through role-based authorization and
          access control.
        </li>
      </ul>
    ),
  },
  {
    title:
      "X Monitoring (Monitoring and Reporting Application) - Angular, Node, MySQL",
    content: (
      <ul className="list-disc list-inside mt-2 space-y-2 text-gray-300 text-left">
        <li>
          Pioneered a scalable monitoring system for real-time tracking of
          services and infrastructure, optimizing usage across 500+ machines.
        </li>
        <li>
          Implemented OIDC authentication (OAuth, JWT), enhancing session
          security by 50%.
        </li>
        <li>
          Created interactive visualizations with Chart.js, converting raw data
          into actionable insights, speeding up decision-making by 70%.
        </li>
      </ul>
    ),
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-8">
        Experience & Projects
      </h2>
      <div className="max-w-3xl w-full mx-auto space-y-4">
        {experiences.map((exp, idx) => (
          <AccordionItem
            key={idx}
            idx={idx}
            activeIndex={activeIndex}
            toggle={toggle}
            title={exp.title}
            content={exp.content}
          />
        ))}
      </div>
    </section>
  );
}

function AccordionItem({ idx, activeIndex, toggle, title, content }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (activeIndex === idx && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [activeIndex, idx]);

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden transition-all">
      <button
        onClick={() => toggle(idx)}
        className={`cursor-pointer w-full text-left px-4 sm:px-6 py-4 flex justify-between items-center text-base sm:text-lg font-medium transition-all duration-300 ${
          activeIndex === idx
            ? "bg-indigo-500/10 border-b border-indigo-400 text-indigo-300"
            : "bg-gray-850 hover:bg-gray-800 text-gray-300"
        }`}
      >
        <span className="w-11/12">{title}</span>
        <span
          className={`transform transition-transform duration-300 ${
            activeIndex === idx ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          height: `${height}px`,
          transition: "height 0.5s ease",
          overflow: "hidden",
        }}
      >
        <div className="px-4 sm:px-6 py-4 text-gray-300 bg-gray-850 border-t border-gray-700 text-sm sm:text-base">
          {content}
        </div>
      </div>
    </div>
  );
}
