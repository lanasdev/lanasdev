import BlogAuthor from "components/Blog/BlogAuthor";
import i18n from "lib/i18n";
import Link from "next/link";

const ProjectHeader = ({ title, excerpt, date, locale }) => {
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
      <h2 className="text-amber-500 hover:underline ">
        <Link href="/">{i18n.project.subtitle[locale]}</Link>
      </h2>
      <h1 className="mt-2 font-semibold md:text-3xl">{title}</h1>
      {excerpt && <p className="max-w-xl line-clamp-2">{excerpt}</p>}
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {formattedDate}
      </span>

      {/* {author && <BlogAuthor author={author} />} */}
    </aside>
  );
};

export default ProjectHeader;
