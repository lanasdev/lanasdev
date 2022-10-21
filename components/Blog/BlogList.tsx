import Link from "next/link";
import BlogItem from "./BlogItem";

const BlogList = ({ posts }) => {
  return (
    <div>
      <h4 className="pt-32 text-gray-600 dark:text-gray-400">
        Learn more about creating websites
      </h4>
      <h3 className="pt-2 pb-16 text-2xl font-semibold md:text-4xl">Blog</h3>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <BlogItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
