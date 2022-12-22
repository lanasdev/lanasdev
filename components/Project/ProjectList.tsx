import ProjectItem from "components/Project/ProjectItem";

const ProjectList = ({ data }) => {
  const numProjects = data.allProjects.length;

  return (
    <section className="grid gap-4 pt-16 sm:grid-cols-autofitmd ">
      {data.allProjects.map((p, index) => (
        <ProjectItem
          project={p}
          key={p.slug}
          index={index}
          numProjects={numProjects}
        />
      ))}
    </section>
  );
};

export default ProjectList;
