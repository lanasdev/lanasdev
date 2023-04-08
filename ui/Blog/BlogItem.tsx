import { Image } from "react-datocms";

import cn from "classnames";
import Link from "next/link";

const BlogItem = ({ post }) => {
  return (
    <Link
      key={post.slug}
      href={`/blog/${post.slug as string}`}
      className={cn(
        `w-full transform rounded-md bg-gradient-to-r from-[#FDE68A] to-[#FECACA] p-1 transition-all hover:scale-105`
        // `from-[${post.color1.hex}]`,
        // `to-[${post.color2.hex}]`
      )}
    >
      <div className="flex h-full w-full flex-col justify-between rounded-lg bg-white p-4 dark:bg-midnight">
        <h3 className="pb-4 font-semibold">{post.title} </h3>
        <p className="line-clamp-3">{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default BlogItem;
