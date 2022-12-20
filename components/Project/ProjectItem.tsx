/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import cn from "classnames";
import { Image } from "react-datocms";

import {
  motion as m,
  Variants,
  AnimatePresence,
  AnimatePresenceProps,
} from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  onhover: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  ontap: {
    scale: 5,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const ProjectItem = ({ project, index, numProjects }) => {
  // hover:scale-102 transform delay-75 duration-150 ease-in-out md:last:h-[300px]
  const gridclassnames =
    "h-96 md:h-[600px] w-full  transition-all group rounded-lg flex flex-row justify-between   backdrop-blur-2xl text-white dark:text-midnight";

  const numProjectsIsOdd = numProjects % 2 === 1;

  return (
    <m.div
      className={cn(gridclassnames, "h-80", {
        "md:col-span-2 md:h-[300px]":
          index === numProjects - 1 && numProjectsIsOdd,
      })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        backgroundImage: `linear-gradient(${project.direction}deg, ${project.color1.hex} 0%, ${project.color2.hex} 100%)`,
      }}
    >
      <Link
        href={`/project/${project.slug}`}
        key={project.slug}
        className="relative inset-0"
      >
        <m.div>
          <div className="flex flex-1 flex-col items-start justify-end p-8 text-white">
            <h3 className="text-2xl  font-semibold">{project.title}</h3>
            <p className="text-md hidden md:group-hover:block md:group-hover:line-clamp-2 ">
              {project.description}
            </p>
          </div>
          {/* <m.div
            initial="offscreen"
            whileInView={"onscreen"}
            whileHover={"onhover"}
            whileTap={"ontap"}
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
            className="absolute inset-0"
          >
            <Image
              data={project.image.responsiveImage}
              objectFit="cover"
              objectPosition={"50% 0%"}
              layout="responsive"
              className="h-full w-full object-cover object-top backdrop-blur-lg"
            />
          </m.div> */}
        </m.div>
      </Link>
    </m.div>
  );
};

export default ProjectItem;
