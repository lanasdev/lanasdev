import ProjectItem from "components/Project/ProjectItem";
import { AnimatePresence } from "framer-motion";
const ProjectList = ({ data }) => {
  const numProjects = data.allProjects.length;

  return (
    <section className="grid grid-cols-1 gap-4 pt-16 md:grid-cols-2  ">
      {data.allProjects.map((p, index) => (
        <AnimatePresence key={p.slug}>
          <ProjectItem project={p} index={index} numProjects={numProjects} />
        </AnimatePresence>
      ))}
    </section>
  );
};

export default ProjectList;
