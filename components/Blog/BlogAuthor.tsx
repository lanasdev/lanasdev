/* eslint-disable jsx-a11y/alt-text */
// import { Image } from "react-datocms";
import Image from "next/image";

const BlogAuthor = ({ author }) => {
  return (
    <div className="flex flex-row items-center gap-3 pt-6 md:gap-0 lg:gap-3">
      <Image
        // data={author.picture.responsiveImage}
        src={author.picture.responsiveImage.src}
        alt={author.name}
        width={author.picture.responsiveImage.width}
        height={author.picture.responsiveImage.height}
        placeholder="blur"
        blurDataURL={author.picture.responsiveImage.base64}
        className="dark:boder-white aspect-1 mr-2 h-12 w-12 rounded-full border-2 border-midnight"
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold">{author.name}</span>
        <span className="text-xs text-slate-500">{author.role}</span>
      </div>
    </div>
  );
};

export default BlogAuthor;
