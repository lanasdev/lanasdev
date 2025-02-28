// components/WaveAnimation.tsx
"use client";

import React from "react";
import { motion } from "motion/react";

// Define the wave properties
interface Wave {
  amplitude: number; // Height of the wave
  frequency: number; // Number of wave cycles
  phase: number; // Starting offset
  speed: number; // Animation speed
}

// Function to generate the SVG path for a wave
const generateWavePath = (
  width: number,
  height: number,
  amplitude: number,
  frequency: number,
  phase: number,
): string => {
  let path = `M0 ${height / 2 + amplitude * Math.sin(phase)}`;
  const step = width / 100; // Number of points along the wave
  for (let x = step; x <= width; x += step) {
    const y =
      height / 2 +
      amplitude * Math.sin((x / width) * frequency * Math.PI * 2 + phase);
    path += ` L${x} ${y}`;
  }
  return path;
};

// optional idea
const WaveAnimation: React.FC = () => {
  const width = 2000; // SVG width
  const height = 500; // SVG height

  // Define multiple wave layers
  const waves: Wave[] = [
    { amplitude: 50, frequency: 2, phase: 0, speed: 10 },
    { amplitude: 40, frequency: 3, phase: 1, speed: 15 },
    { amplitude: 30, frequency: 4, phase: 2, speed: 20 },
  ];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 z-0 h-full w-full"
    >
      {/* Define a colorful gradient */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00bfff" />
          <stop offset="50%" stopColor="#00ffff" />
          <stop offset="100%" stopColor="#00bfff" />
        </linearGradient>
      </defs>

      {/* Render animated wave layers */}
      {waves.map((wave, index) => {
        const pathData = generateWavePath(
          width,
          height,
          wave.amplitude,
          wave.frequency,
          wave.phase,
        );
        return (
          <motion.path
            key={index}
            d={pathData}
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ x: 0 }} // Start from the left
            animate={{ x: width }} // Animate to the right
            transition={{
              repeat: Infinity,
              duration: wave.speed,
              ease: "linear",
            }}
          />
        );
      })}
    </svg>
  );
};

export default WaveAnimation;
