"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const AnimatedMotionText = ({
  text = "Hello, I'm an animated text!",
  className = "",
}: {
  text?: string;
  className?: string;
}) => {
  const containerRef = useRef(null);

  // Get scroll progress for this element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.2"], // Starts when element is 90% off screen, ends when 20% off screen
  });

  // Split text into array of characters
  const characters = Array.from(text);

  return (
    <div ref={containerRef} className="">
      {/* Added padding to make scroll effect more visible */}
      <div
        className={cn(
          "flex flex-wrap text-center text-3xl font-semibold",
          className,
        )}
      >
        {characters.map((char, index) => {
          // Calculate delay based on character index
          const delay = index * 0.1;

          // Create opacity transform for each character based on scroll
          const opacity = useTransform(
            scrollYProgress,
            [0, 0.3, 1], // scroll progress points
            [0.5, 0.8, 1], // opacity values at each point
            { clamp: true },
          );

          if (char === " ") {
            return (
              <span key={index} className="w-2">
                &nbsp;
              </span>
            );
          }

          return (
            <motion.span
              key={index}
              style={{
                opacity,
                transition: `all ${delay}s`,
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedMotionText;
