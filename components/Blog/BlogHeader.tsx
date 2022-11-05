import BlogAuthor from "components/Blog/BlogAuthor";
import i18n from "lib/i18n";
import Link from "next/link";

const BlogHeader = ({ title, date, author, locale }) => {
  // format date to be more readable
  const formattedDate = new Date(date)
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    })
    .replace(/ /g, " ");

  return (
    <div className="mb-16 flex flex-col space-y-4 pb-16">
      <h2 className="text-amber-500 hover:underline ">
        <Link href="/#blog" locale={locale}>
          {i18n.blog.subtitle[locale]}
        </Link>
      </h2>
      <h1 className="text-2xl font-semibold md:text-3xl">{title}</h1>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {formattedDate}
      </span>

      {author && <BlogAuthor author={author} />}
    </div>
  );
};

export default BlogHeader;
