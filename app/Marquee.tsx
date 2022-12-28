"use client";

import { motion } from "framer-motion";

// import "./marquee.css";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [0, 1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
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
    <div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 30,
          delay: 0.2,
          whileHover: { scale: 1.2 },
          whileTap: { scale: 0.8 },
          damping: 5,
          ease: "linear",
          repeat: Infinity,
        }}
        className=" inline-block whitespace-nowrap px-5"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default Marquee;
