"use client";

import { motion, useScroll, useSpring } from "motion/react";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-20 h-2 origin-[0%] transform bg-primary"
      style={{ scaleX }}
    />
  );
};

export default ProgressBar;
