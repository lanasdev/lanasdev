"use client";

import { motion } from "framer-motion";

// import "./marquee.css";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [0, "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const Marquee = ({
  text = "web design • web development • ecommerce",
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className="relative max-w-[50vw]">
      <motion.span
        initial={{ x: "-100%" }}
        animate={{ x: "0" }}
        variants={marqueeVariants}
        className="inline-block  whitespace-nowrap px-5 text-xl "
      >
        {text}
      </motion.span>
    </div>
  );
};

export default Marquee;
