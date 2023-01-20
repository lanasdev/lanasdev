"use client";

import { motion as m } from "framer-motion";
import { useState } from "react";

export default function NavCircle() {
  // default, hover, active
  //   const [navState, setNavState] = useState("default");

  return (
    <div className="relative">
      <m.div
        layout
        layoutId="NavCircle"
        initial={{ size: 1 }}
        animate={{ size: 1.2 }}
        transition={{
          duration: 0.5,
          type: "spring",
          damping: 10,
          stiffness: 100,
        }}
        className="group fixed left-0 right-0 bottom-12 mx-auto flex h-20 w-20  items-center justify-center rounded-full bg-slate-700 dark:bg-slate-300"
      >
        <m.div
          layoutId="NavCircle"
          initial={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.1,
            type: "spring",
            damping: 6,
            stiffness: 100,
          }}
          whileHover={{ scale: 1.5, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
          }}
          className="h-6 w-6 rounded-full border-4 border-slate-400 group-hover:bg-slate-400 "
        ></m.div>
      </m.div>
    </div>
  );
}
