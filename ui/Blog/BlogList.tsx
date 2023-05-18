import Link from "next/link";
import BlogItem from "./BlogItem";
import i18n from "lib/i18n";

const BlogList = ({ data, locale = "en" }) => {
  const posts = data.allPosts;
  return (
    <div id="blog">
      <h3 className="pt-32 text-gray-600 dark:text-gray-400">
        {i18n.home.blogsubheading[locale]}
      </h3>
      <h3 className="pb-16 pt-2 text-2xl font-semibold md:text-4xl">Blog</h3>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <BlogItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
