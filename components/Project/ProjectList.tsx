import ProjectItem from "components/Project/ProjectItem";

const ProjectList = ({ data }) => {
    const numProjects = data.allProjects.length;

    return (
        <section className="grid grid-cols-1 gap-4 pt-16 md:grid-cols-2  ">
            {data.allProjects.map((p, index) => (
                <ProjectItem project={p} key={p.slug} index={index} numProjects={numProjects} />
            ))}
        </section>
    );
};

export default ProjectList;