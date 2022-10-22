import Link from "next/link";
import i18n from "lib/i18n";

const ProjectFacts = ({ project, locale = "en" }) => {
  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-stretch md:space-y-0 md:space-x-16 md:first:ml-0 md:last:mr-0">
      {project.clientname != "" && (
        <div className="flex flex-col justify-between">
          <span className="pb-2 text-sm font-bold">
            {i18n.project.client[locale]}
          </span>
          <span className="text-sm">{project.clientname}</span>
        </div>
      )}
      {project.projecttype != "" && (
        <div className="flex flex-col justify-between">
          <span className="pb-2 text-sm font-bold">
            {i18n.project.typeofproject[locale]}
          </span>
          <span className="text-sm">{project.projecttype}</span>
        </div>
      )}
      {project.year != "" && (
        <div className="flex flex-col justify-between">
          <span className="pb-2 text-sm font-bold">
            {i18n.project.finishedinyear[locale]}
          </span>
          <span className="text-sm">{project.year}</span>
        </div>
      )}
      {project.liveurl != "" && (
        <div className="flex flex-col justify-between">
          <span className="pb-2 text-sm font-bold">
            {i18n.project.viewwebsite[locale]}
          </span>
          <Link href={project.liveurl}>
            <a className="text-sm">{project.liveurl}</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectFacts;
