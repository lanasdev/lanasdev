import Link from "next/link";
import cn from "classnames";

const OtherProjects = ({ project }) => {
  return (
    <div className="flex flex-col items-stretch space-y-8 pt-8 md:flex-row md:space-x-8 md:space-y-0">
      {project.otherprojects.slice(0, 3).map((project) => (
        <Link
          key={project.slug}
          href={`/project/${project.slug}`}
          className={cn(
            `w-full transform rounded-md bg-gradient-to-r from-[#FDE68A] to-[#FECACA] p-1 transition-all hover:scale-105 md:w-1/3 md:max-w-sm`,
            `from-[${project.color1.hex}]`,
            `to-[${project.color2.hex}]`
          )}
        >
          <div className="flex h-full w-full flex-col justify-between rounded-lg bg-white p-4 dark:bg-midnight">
            <h3 className="pb-4 font-semibold">{project.title} </h3>
            <p className="line-clamp-3">{project.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OtherProjects;
