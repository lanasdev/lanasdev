"use client";
import React from "react";

interface MarqueeSectionProps {
  text: string;
}

const MarqueeSection: React.FC<MarqueeSectionProps> = ({ text }) => {
  return (
    <div className="*:text-bold block py-24 *:animate-marquee *:text-4xl">
      <p className="">{text}</p>
      <p className="">{text}</p>
      <p className="">{text}</p>
    </div>
  );
};

export default MarqueeSection;
