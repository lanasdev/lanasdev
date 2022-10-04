import Link from "next/link";
import BlogItem from "./BlogItem";

const BlogList = ({ posts }) => {
  return (
    <div>
      <h3 className="pt-16">Learn more about creating websites</h3>
      <h2 className="pt-4 pb-16 text-2xl font-semibold md:text-4xl">Blog</h2>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
