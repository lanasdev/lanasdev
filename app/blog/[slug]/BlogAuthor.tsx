import { Image as DatoImage, ResponsiveImageType } from "react-datocms";
import Image from "next/image";

interface Author {
  name: string;
  role: string;
  picture: {
    responsiveImage: ResponsiveImageType;
  };
}

const BlogAuthor = ({ author }: { author: Author }) => {
  // Explicitly define the type of the 'author' parameter
  return (
    <div className="flex flex-row items-center gap-3 pt-8 md:gap-0 lg:gap-3">
      {author.picture.responsiveImage && (
        <Image
          // data={author.picture.responsiveImage}
          // @ts-ignore
          src={author.picture.responsiveImage.src}
          alt={author.name}
          width={author.picture.responsiveImage.width}
          // @ts-ignore
          height={author.picture.responsiveImage.height}
          placeholder="blur"
          // @ts-ignore
          blurDataURL={author.picture.responsiveImage.base64}
          className="dark:boder-white aspect-1 mr-2 h-12 w-12 rounded-md border-2 border-midnight object-cover"
        />
      )}
      <div className="flex flex-col">
        <span className="text-sm font-semibold">{author.name}</span>
        <span className="text-xs text-slate-500">{author.role}</span>
      </div>
    </div>
  );
};

export default BlogAuthor;
