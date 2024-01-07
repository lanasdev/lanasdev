import SectionContainer from "@/app/SectionContainer";
import BlogAuthor from "./BlogAuthor";
import Link from "next/link";
import { ResponsiveImageType } from "react-datocms";
import { Author } from "./BlogAuthor"; // Import the 'Author' type from the appropriate module
import Balancer from "react-wrap-balancer";

const BlogHeader = ({
  title,
  date,
  author,
}: {
  title: string;
  date: string;
  author: Author;
}) => {
  // format date to be more readable
  const formattedDate = new Date(date)
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    })
    .replace(/ /g, " ");

  return (
    <SectionContainer className="flex flex-col space-y-4 pb-8 pt-12">
      <h1 className="text-2xl font-semibold md:text-3xl">
        <Balancer>{title}</Balancer>
      </h1>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {formattedDate}
      </span>

      {author && <BlogAuthor author={author} />}
    </SectionContainer>
  );
};

export default BlogHeader;
