import BlogAuthor from "components/Blog/BlogAuthor";

const ProjectHeader = ({ title, excerpt, date }) => {
  // format date to be more readable
  const formattedDate = new Date(date)
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    })
    .replace(/ /g, " ");

  return (
    <aside className="mb-16 flex flex-col space-y-4">
      <h2 className="text-amber-500 ">{"Project"}</h2>
      <h1 className="text-2xl font-semibold md:text-3xl">{title}</h1>
      {excerpt && <p className="max-w-xl line-clamp-2">{excerpt}</p>}
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {formattedDate}
      </span>

      {/* {author && <BlogAuthor author={author} />} */}
    </aside>
  );
};

export default ProjectHeader;
