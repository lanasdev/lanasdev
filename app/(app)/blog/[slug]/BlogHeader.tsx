import Link from "next/link";
import Balancer from "react-wrap-balancer";
import SectionContainer from "@/app/(app)/SectionContainer";
import type { SanityImageObject } from "@/lib/sanity";
import BlogAuthor, { type Author } from "./BlogAuthor"; // Import the 'Author' type from the appropriate module

type BlogHeaderProps = {
  title: string;
  date?: string | null;
  author?: {
    name?: string | null;
    role?: string | null;
    image?: SanityImageObject | null;
  } | null;
};

const BlogHeader = ({ title, date, author }: BlogHeaderProps) => {
  // format date to be more readable
  const formattedDate = date
    ? new Date(date)
        .toLocaleDateString("en-US", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })
        .replace(/ /g, " ")
    : null;

  const authorInfo: Author | null =
    author?.name && author.image
      ? {
          name: author.name,
          role: author.role ?? "",
          image: author.image,
        }
      : null;

  return (
    <SectionContainer className="flex flex-col space-y-4 pb-8 pt-12">
      <h1 className="text-2xl font-semibold md:text-3xl">
        <Balancer>{title}</Balancer>
      </h1>
      {formattedDate && (
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {formattedDate}
        </span>
      )}

      {authorInfo && <BlogAuthor author={authorInfo} />}
    </SectionContainer>
  );
};

export default BlogHeader;
