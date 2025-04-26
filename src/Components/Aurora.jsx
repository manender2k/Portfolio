import React from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

export default function AnimatedBackground() {
  const particlesInit = async (main) => {
    await loadLinksPreset(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        background: {
          color: {
            value: "#0f172a", // dark background
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1, // makes it stay behind your content
        },
        particles: {
          color: {
            value: "#6366f1", // Indigo
          },
          links: {
            enable: true,
            color: "#6366f1",
            distance: 150,
            opacity: 0.7,
            width: 1,
          },
        },
      }}
    />
  );
}
