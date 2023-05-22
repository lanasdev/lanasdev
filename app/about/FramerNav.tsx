"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  { id: 0, slug: "world", label: "World" },
  { id: 1, slug: "ny", label: "N.Y." },
  { id: 2, slug: "business", label: "Business" },
  { id: 3, slug: "arts", label: "Arts" },
  { id: 4, slug: "science", label: "Science" },
];

// with help from: https://buildui.com/recipes/animated-tabs
export default function FramerNav() {
  // const [activeTab, setActiveTab] = useState(tabs[1]);
  const activeTab = tabs[0];

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.slug}
          // onClick={() => setActiveTab(tab)}
          className={`${
            activeTab === tab ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          // style={{
          //   WebkitTapHighlightColor: "transparent",
          // }}
        >
          {/* {activeTab === tab && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )} */}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
