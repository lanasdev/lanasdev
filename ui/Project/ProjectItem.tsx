import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const ProjectItem = ({ project, index, numProjects }) => {
  const gridclassnames =
    "h-96 md:h-[600px] transition-all group rounded-lg flex flex-row justify-between  hover:scale-102 transform delay-75 duration-150 ease-in-out backdrop-blur-2xl text-white dark:text-midnight";

  const numProjectsIsOdd = numProjects % 2 === 1;

  return (
    <Link
      href={`/project/${project.slug}`}
      key={project.slug}
      className={clsx(gridclassnames, "h-80", {
        "md:col-span-2 md:h-[300px]":
          index === numProjects - 1 && numProjectsIsOdd,
      })}
      style={{
        backgroundImage: `linear-gradient(${project.direction}deg, ${project.color1.hex} 0%, ${project.color2.hex} 100%)`,
      }}
    >
      <div className="flex flex-1 flex-col items-start justify-end p-8 text-white">
        <h3 className="text-2xl  font-semibold">{project.title}</h3>
        <p className="text-md hidden md:group-hover:line-clamp-2 md:group-hover:block ">
          {project.description}
          {/* {project.color1.hex}{" "} {project.color2.hex} */}
        </p>
      </div>
    </Link>
  );
};

export default ProjectItem;
